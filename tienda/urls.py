from django.urls import path
from . import views
urlpatterns = [
    path('', views.index, name='index'),
    path('login.html', views.login, name='login'),
    path('tienda.html', views.tienda, name='tienda'),
    path('contacto.html', views.contacto, name='contacto'),
    path('tiendasola.html', views.tiendasola, name='tiendasola'),    
]