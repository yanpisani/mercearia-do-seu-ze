from django.db import models
from django.contrib.auth.models import AbstractBaseUser

class User(AbstractBaseUser):
    name = models.CharField(max_length=255)
    permission_level = models.PositiveSmallIntegerField(default=0)
    role = models.CharField(max_length=255, null=True, blank=True)
    role_description = models.TextField(null=True, blank=True)
    phone = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True)
    cpf = models.CharField(max_length=255) 
    birth_date = models.DateField()
    address = models.CharField(max_length=255)

    