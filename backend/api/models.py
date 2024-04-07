from django.db import models
from .db_connection import db

# Create your models here.
per_con = db['Person']
user_model = db['Users_info']
posts = db['Posts']