from django.db import models

# Create your models here.
class Tipo(models.Model):
    nombre = models.CharField(max_length=700)

    def _str_(self):
        return self.nombre

class Producto(models.Model):
    artista = models.CharField(max_length=50)
    arte    = models.CharField(max_length=10)
    precio = models.IntegerField()   
    Genero = models.ForeignKey(Tipo, on_delete=models.PROTECT)

    def _str_(self):
        return self.arte