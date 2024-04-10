from django.core.mail import send_mail
from django.shortcuts import render
from .models import per_con, user_model, posts
from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.views.decorators.http import require_POST
import asyncio
import numpy as np

# Create your views here.
def index(request):
  return HttpResponse("<h1>Running</h1>")

@csrf_exempt
def add_person(request):
  if request.method == 'POST':
    data = json.loads(request.body)
    first_name = data.get('first_name', '')
    last_name = data.get('last_name', '')
    records = {
      'first_name': first_name,
      'last_name': last_name
    }
    if first_name and last_name:
      per_con.insert_one(records)
    else:
      return JsonResponse({'error': 'Missing data'}, status=400)
  else:
    return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)

def get_all_person(request):
  persons = per_con.find()
  parsed_persons = []
  
  for person in persons:
      # Convert ObjectId to string
      person['_id'] = str(person['_id'])
      parsed_persons.append(person)
      
  return JsonResponse(parsed_persons, safe=False)

@csrf_exempt
def get_logged(request):
  if request.method == 'POST':
    # user = user_model.find()
    data = json.loads(request.body)
    user_email = data.get('email', '')
    password = data.get('password', '')
    user_check = user_model.find_one({'user_email': user_email})
    if user_check:
      user = user_model.find_one({'user_email': user_email, 'user_password': password})
      if user:
        user['_id'] = str(user['_id'])
        # send_email_to_user(request,user['user_email'])
        return JsonResponse({'message': 'Successfully logged in','data':user},safe=False, status=200)
      else:
        return JsonResponse({'error': 'Invalid credentials','message':'Incorrect'}, status=400)
    else:
      return JsonResponse({'error': 'Invalid credentials','message':'No_user'}, status=400)
  else:
    return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)
  
# views.py


def send_email_to_user(request,email):
    subject = 'Welcome to our website!'
    message = 'Thank you for signing up. We hope you enjoy our services.'
    email_from = 'lifesaver102023@gmail.com'
    recipient_list = [email, ]  # Replace with the end user's email
    
    send_mail(subject, message, email_from, recipient_list)
    return HttpResponse("Mail Sent!!!")
  
@csrf_exempt
@require_POST
def get_register(request):
    try:
        # Assuming the data is sent as JSON
        data = json.loads(request.body)
        
        # Extracting data from JSON
        name = data.get('name')
        emailid = data.get('emailid')
        city = data.get('city')
        mobileno = data.get('mobileno')
        password = data.get('password')
        
        # Here you can perform any necessary validation
        
        # Assuming you have a User model, you can create a new user
        # Assuming User model has fields: name, emailid, city, mobileno, password
        
        records = {
          'user_name': name,
          'user_password': password,
          'city': city,
          'user_email': emailid,
          'mobile_no': mobileno,
        }   
        
        if name and emailid and city and mobileno and password:
          user_model.insert_one(records)
          # new_document = {
          #       "user_email": emailid,
          #       "user_posts": []
          #   }
          # posts.insert_one(new_document)
        else:
          return JsonResponse({'error': 'Missing data'}, status=400)
        
        
        # You might want to send some response back to React indicating success
        return JsonResponse({'success': True, 'message': 'User registered successfully'})
        
    except Exception as e:
        # Handle any exceptions, and return appropriate response
        return JsonResponse({'success': False, 'error': str(e)})
      
@csrf_exempt
def add_post(request):
    if request.method == 'POST':
        # print("hi")
        data = json.loads(request.body)

        email = data.get('email')
        post = data.get('post')
        # Check if the email exists in the collection
        existing_user = posts.find_one({"user_email": email})

        if existing_user:
            # If user exists, append the post to the user's posts array
            posts.update_one({"user_email": email}, {"$push": {"user_posts": post}})
            return JsonResponse({'success':True, 'message':"Post added successfully."})
        else:
            # If user doesn't exist, create a new document with the post
            new_document = {
                "user_email": email,
                "user_posts": [post]
            }
            posts.insert_one(new_document)
            return JsonResponse({'success':True, 'message':"New Post added successfully."})
    else:
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)
  
async def fetch_posts():
    pipeline = [
        {"$unwind": "$user_posts"},
        {"$project": {
            "user_email": 1,
            "content": "$user_posts.content",
            "heading": "$user_posts.heading",
            "timestamp": "$user_posts.timestamp",
            "_id": 0  # Exclude the _id field
        }},
        {"$sort": {"timestamp": -1}}
    ]
    result = list(posts.aggregate(pipeline))
    return result

async def show_all_posts(request):
    result = await fetch_posts()
    return JsonResponse(result, safe=False)

@csrf_exempt
def score(request):
    if request.method == 'POST':
      # Define weight lists for stress, depression, and anxiety levels
      stress_weights = [0.5, 0.6, 0.7, 0.8, 0.9, 0.1, 0.11, 0.12, 0.13, 0.14]  # Adjust as needed
      depression_weights = [0.4, 0.5, 0.8, 0.9, 0.11, 0.12, 0.6, 0.7, 0.13, 0.14]  # Adjust as needed
      anxiety_weights = [0.3, 0.8, 0.9, 0.1, 0.11, 0.12, 0.4, 0.5, 0.6, 0.7]  # Adjust as needed

      data = json.loads(request.body)

      user_answers = data.get('answer')

      # Calculate Scores
      stress_score = np.mean(np.multiply(user_answers, stress_weights))
      depression_score = np.mean(np.multiply(user_answers, depression_weights))
      anxiety_score = np.mean(np.multiply(user_answers, anxiety_weights))
      
      print("Stress Score:", stress_score)
      print("Depression Score:", depression_score)
      print("Anxiety Score:", anxiety_score)

      # Return Recommendations
      return HttpResponse({'ss': stress_score,'ds':depression_score,'as':anxiety_score})
    else:
      return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)
