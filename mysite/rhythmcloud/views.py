from django.shortcuts import render
import json

from django.http import HttpResponse
from .models import User

def get(_bytes):
    return json.loads(_bytes.decode('utf-8'))

def index(request):
    return HttpResponse("Hello, world. You're at the rhythmcloud index.")

def user_detail(request):
    print(get(request.body))
    return HttpResponse(f"You're looking at {User.objects.get(id=2).__str__()}")

def insert_user(request):
    body = get(request.body)
    username = body['username']
    password = body['password']
    new_user = User.objects.create(username=username, password=password)
    return HttpResponse(f"User {User.objects.get(username=username).__str__()} created")
