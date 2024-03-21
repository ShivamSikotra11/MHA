from django.shortcuts import render
from .models import per_con
from django.http import HttpResponse

# Create your views here.
def index(request):
  return HttpResponse("<h1>Running</h1>")

def add_person(request):
  records ={
    "first_name":"Viral",
    "last_name":"Biyawala",
  }
  per_con.insert_one(records)
  return HttpResponse("New record!")

def get_all_person(request):
  persons = per_con.find()
  return HttpResponse(persons)