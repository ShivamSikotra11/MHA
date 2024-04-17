from django.core.mail import send_mail
from django.shortcuts import render
from .models import per_con, user_model, posts
from django.http import HttpResponse, JsonResponse
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
            user = user_model.find_one(
                {'user_email': user_email, 'user_password': password})
            if user:
                user['_id'] = str(user['_id'])
                # send_email_to_user(request,user['user_email'])
                return JsonResponse({'message': 'Successfully logged in', 'data': user}, safe=False, status=200)
            else:
                return JsonResponse({'error': 'Invalid credentials', 'message': 'Incorrect'}, status=400)
        else:
            return JsonResponse({'error': 'Invalid credentials', 'message': 'No_user'}, status=400)
    else:
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)


@csrf_exempt
def get_profile(request):
    if request.method == 'POST':
        # user = user_model.find()
        data = json.loads(request.body)
        user_email = data.get('email', '')
        password = data.get('password', '')
        user_check = user_model.find_one({'user_email': user_email})
        if user_check:
            user = user_model.find_one(
                {'user_email': user_email, 'user_password': password})
            if user:
                user['_id'] = str(user['_id'])
                # send_email_to_user(request,user['user_email'])
                return JsonResponse({'message': 'Successfully logged in', 'data': user}, safe=False, status=200)
            else:
                return JsonResponse({'error': 'Invalid credentials', 'message': 'Incorrect'}, status=400)
        else:
            return JsonResponse({'error': 'Invalid credentials', 'message': 'No_user'}, status=400)
    else:
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)

# @csrf_exempt
# def get_name(request):
#   if request.method == 'POST':
#     data = json.loads(request.body)
#     user_email = data.get('email')
#     password = data.get('password')
#     user_check = user_model.find_one({'user_email': user_email})
#     print(user_email)
#     if user_check:
#       user = user_model.find_one({'user_email': user_email, 'user_password': password})
#       if user:
#         user['_id'] = str(user['_id'])
#         print(user["user_name"])
#         return JsonResponse({'message': 'Successfully logged in','data':user["user_name"]},safe=False, status=200)
#       else:
#         # print(1)
#         return JsonResponse({'error': 'Invalid credentials','message':'Incorrect'}, status=400)
#     else:
#       # print(2)
#       return JsonResponse({'error': 'Invalid credentials','message':'No_user'}, status=400)
#   else:
#     return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)


@csrf_exempt
def get_name(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        user_email = data.get('email')
        password = data.get('password')
        user_check = user_model.find_one({'user_email': user_email})
        print(user_email)
        if user_check:
            user = user_model.find_one(
                {'user_email': user_email, 'user_password': password})
            if user:
                user['_id'] = str(user['_id'])
                print(user["user_name"])
                return JsonResponse({'message': 'Successfully logged in', 'data': {
                    'name': user["user_name"],
                    # Get the city from the user object, default to empty string if not found
                    'city': user.get("city", "")
                }}, safe=False, status=200)
            else:
                # print(1)
                return JsonResponse({'error': 'Invalid credentials', 'message': 'Incorrect'}, status=400)
        else:
            # print(2)
            return JsonResponse({'error': 'Invalid credentials', 'message': 'No_user'}, status=400)
    else:
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)


@csrf_exempt
def update_profile(request):
    if request.method == 'POST':
        data = json.loads(request.body)

        name = data.get('user_name')
        emailid = data.get('user_email')
        city = data.get('city')
        mobileno = data.get('mobile_no')
        password = data.get('user_password')
        dob = data.get('dob')
        gender = data.get('gender')
        address = data.get('address')

        records = {
            'user_name': name,
            'city': city,
            'mobile_no': mobileno,
            'dob': dob,
            'gender': gender,
            'address': address
        }

        user_check = user_model.find_one({'user_email': emailid})
        if user_check:
            user = user_model.find_one(
                {'user_email': emailid, 'user_password': password})
            if user:
                user['_id'] = str(user['_id'])
                user_model.update_one(
                    {'user_email': emailid, 'user_password': password}, {'$set': records})
                return JsonResponse({'message': 'updated', 'data': user}, safe=False, status=200)
            else:
                print(1)
                return JsonResponse({'error': 'Invalid credentials', 'message': 'Incorrect'}, status=400)
        else:
            print(2)
            return JsonResponse({'error': 'Invalid credentials', 'message': 'No_user'}, status=400)
    else:
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)


def send_email_to_user(request, email):
    subject = 'Welcome to our website!'
    message = 'Thank you for signing up. We hope you enjoy our services.'
    email_from = 'lifesaver102023@gmail.com'
    recipient_list = [email, ]

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
            posts.update_one({"user_email": email}, {
                             "$push": {"user_posts": post}})
            return JsonResponse({'success': True, 'message': "Post added successfully."})
        else:
            # If user doesn't exist, create a new document with the post
            new_document = {
                "user_email": email,
                "user_posts": [post]
            }
            posts.insert_one(new_document)
            return JsonResponse({'success': True, 'message': "New Post added successfully."})
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
def show_user_posts(request):
    data = json.loads(request.body)
    email = data.get('email')
    result = posts.find_one({"user_email": email})['user_posts']
    print(result)
    return JsonResponse(result, safe=False)


@csrf_exempt
@require_POST
def delete_user_post(request):
    data = json.loads(request.body)
    email = data.get('email')
    timestamp = data.get('timestamp')

    result = posts.update_one(
        {"user_email": email},
        {"$pull": {"user_posts": {"timestamp": timestamp}}}
    )

    # Check if the deletion was successful
    if result.modified_count == 1:
        response = {"message": "success"}
    else:
        response = {"message": "failed"}

    return JsonResponse(response, safe=False)


@csrf_exempt
def score(request):
    if request.method == 'POST':
        # Define weight lists for stress, depression, and anxiety levels
        stress_weights = [0.9, 0.8, 0.7, 0.85, 0.6, 0.75, 0.5,
                          0.4, 0.3, 0.65]  # Adjusted based on our discussion
        # Adjusted based on our discussion
        depression_weights = [0.7, 0.4, 0.6, 0.6, 0.3, 0.8, 0.7, 0.2, 0.4, 0.8]
        anxiety_weights = [0.6, 0.3, 0.5, 0.5, 0.4, 0.6, 0.6,
                           0.8, 0.6, 0.7]  # Adjusted based on our discussion

        # Define bins range for stress, depression, and anxiety
        stress_bins = [0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.0]
        depression_bins = [0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.0]
        anxiety_bins = [0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.0]

        data = json.loads(request.body)

        user_answers = data.get('answer')

        # Calculate Scores
        stress_score = np.mean(np.multiply(user_answers, stress_weights))
        depression_score = np.mean(np.multiply(
            user_answers, depression_weights))
        anxiety_score = np.mean(np.multiply(user_answers, anxiety_weights))

        # Select best yoga poses based on scores
        def select_poses(score, bins):
            for i in range(len(bins) - 1):
                if bins[i] >= score > bins[i + 1]:
                    return i
            return len(bins) - 1

        stress_pose_index = select_poses(stress_score, stress_bins)
        depression_pose_index = select_poses(depression_score, depression_bins)
        anxiety_pose_index = select_poses(anxiety_score, anxiety_bins)

        # Define lists of yoga poses
        yoga_poses = {
            'stress': ['Legs-Up-The-Wall Pose (Viparita Karani)',
                       'Downward-Facing Dog (Adho Mukha Svanasana)',
                       'Reclining Bound Angle Pose (Supta Baddha Konasana)',
                       'Child\'s Pose (Balasana)',
                       'Cat-Cow Stretch (Marjaryasana-Bitilasana)',
                       'Seated Forward Bend (Paschimottanasana)',
                       'Extended Puppy Pose (Uttana Shishosana)',
                       'Corpse Pose (Savasana)'],

            'depression': ['Bridge Pose (Setu Bandhasana)',
                           'Cobra Pose (Bhujangasana)',
                           'Hero Pose (Virasana)',
                           'Camel Pose (Ustrasana)',
                           'Lotus Pose (Padmasana)',
                           'Pigeon Pose (Eka Pada Rajakapotasana)',
                           'Mountain Pose (Tadasana)'],

            'anxiety': [
                'Eagle Pose (Garudasana)',
                'Child\'s Pose (Balasana)',
                'Extended Puppy Pose (Uttana Shishosana)',
                'Legs-Up-The-Wall Pose (Viparita Karani)',
                'Downward-Facing Dog (Adho Mukha Svanasana)',
                'Cat-Cow Stretch (Marjaryasana-Bitilasana)',
                'Seated Forward Bend (Paschimottanasana)'
            ]
        }

        # Get recommended yoga poses for each category
        stress_poses = yoga_poses['stress'][stress_pose_index]
        depression_poses = yoga_poses['depression'][depression_pose_index]
        anxiety_poses = yoga_poses['anxiety'][anxiety_pose_index]
        # print(stress_score,)
        # Return Recommendations
        return JsonResponse({'success': True, 'message': "Yoga poses selected successfully.",
                             'data': {'stress_poses': stress_poses, 'depression_poses': depression_poses,
                                      'anxiety_poses': anxiety_poses, 'stress_score': stress_score, 'depression_score': depression_score, 'anxiety_score': anxiety_score}})
    else:
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)
