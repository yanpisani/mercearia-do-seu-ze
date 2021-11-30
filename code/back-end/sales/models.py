from django.db import models
from django.contrib.auth.models import AbstractBaseUser

class Sale(AbstractBaseUser):
    products = models.TextField()
    cost_total = models.FloatField()
    timestamp = models.DateTimeField(auto_now_add=True)
    


