from django.db import models

class User(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True)
    rg = models.CharField(max_length=255, null=True) 
    cpf = models.CharField(max_length=255) 
    address = models.CharField(max_length=255)
    wage = models.FloatField(default=0)
    birth_date = models.DateField()
    phone = models.CharField(max_length=255)
    role = models.CharField(max_length=255, null=True)
    role_description = models.TextField(null=True, blank=True)
    manager = models.BooleanField(default=False)
    password = models.CharField(null=True, max_length=255)

    