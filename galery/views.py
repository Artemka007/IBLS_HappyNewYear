from django.shortcuts import render, HttpResponse

from .models import Pik

def index(request):
    pictures = Pik.objects.all()
    return render(request, "index.html", {"pictures": pictures})

def upload_view(request):
    return render(request, "upload_files.html", {})

def upload(request):
    file = request.FILES.get("file")
    author = file.name.split(".")[0]
    Pik.objects.create(author=author, src=file)
    return HttpResponse({})