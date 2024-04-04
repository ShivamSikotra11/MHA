from django.shortcuts import render
from .models import per_con, user_model
from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

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
    username = data.get('name', '')
    password = data.get('password', '')
    user = user_model.find_one({'user_name': username, 'user_password': password})
    if user:
      user['_id'] = str(user['_id'])
      send_email_to_user(request,user['user_email'])
      return JsonResponse({'message': 'Successfully logged in','data':user},safe=False, status=200)
    else:
      return JsonResponse({'error': 'Invalid credentials'}, status=400)
  else:
    return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)
  
# views.py

from django.core.mail import send_mail

def send_email_to_user(request,email):
    subject = 'Welcome to our website!'
    message = 'Thank you for signing up. We hope you enjoy our services.'
    email_from = 'lifesaver102023@gmail.com'
    recipient_list = [email, ]  # Replace with the end user's email
    
    send_mail(subject, message, email_from, recipient_list)
    return HttpResponse("Mail Sent!!!")