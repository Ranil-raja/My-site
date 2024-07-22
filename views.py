from django.shortcuts import render
from . models import *
# Create your views here.
def index(request):
    category=Category.objects.filter(status=0)
    images=Content.objects.all()
    return render(request,"ranil/index.html", {"category":category,"images":images})