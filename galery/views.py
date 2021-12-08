from django.shortcuts import render, HttpResponse

from .models import Pik

def index(request):
    pictures = Pik.objects.all()
    return render(request, "index.html", {"pictures": pictures})

def upload_view(request):
    if not request.user.is_superuser:
        return HttpResponse({"error": "Forbidden (403)"})
    return render(request, "upload_files.html", {})

def upload(request):
    if not request.user.is_superuser:
        return HttpResponse("У вас нет доступа к этой странице. Возможно, Вы не админ.")
    file = request.FILES.get("file")
    author = file.name.split(".")[0]
    Pik.objects.create(author=author, src=file)
    return HttpResponse({})