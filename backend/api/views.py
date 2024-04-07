from django.core.mail import send_mail
from django.shortcuts import render
from .models import per_con, user_model
from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.views.decorators.http import require_POST

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
    user = user_model.find_one({'user_email': user_email, 'user_password': password})
    if user:
      user['_id'] = str(user['_id'])
      # send_email_to_user(request,user['user_email'])
      return JsonResponse({'message': 'Successfully logged in','data':user},safe=False, status=200)
    else:
      return JsonResponse({'error': 'Invalid credentials','message':'incorrect'}, status=400)
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
        else:
          return JsonResponse({'error': 'Missing data'}, status=400)
        
        
        # You might want to send some response back to React indicating success
        return JsonResponse({'success': True, 'message': 'User registered successfully'})
        
    except Exception as e:
        # Handle any exceptions, and return appropriate response
        return JsonResponse({'success': False, 'error': str(e)})