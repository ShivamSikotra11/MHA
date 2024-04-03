from django.shortcuts import render
from .models import per_con
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