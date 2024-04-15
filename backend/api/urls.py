from django.urls import path
from . import views

urlpatterns = [
  path('',views.index),
  path('add/',views.add_person),
  path('show/',views.get_all_person),
  path('login/',views.get_logged),
  path('mail/',views.send_email_to_user),
  path('register/',views.get_register), 
  path('add_post/',views.add_post),
  path('show_all_posts/',views.show_all_posts),
  path('cal_score/',views.score),
  path('get_user_posts/',views.show_user_posts),
  path('delete_post/',views.delete_user_post),
]