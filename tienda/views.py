from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'tienda/index.html')

def login(request):
    return render(request, 'tienda/login.html')

def tienda(request):
    return render(request, 'tienda/tienda.html')

def contacto(request):
    return render(request, 'tienda/contacto.html')

def tiendasola(request):
    return render(request, 'tienda/tiendasola.html')