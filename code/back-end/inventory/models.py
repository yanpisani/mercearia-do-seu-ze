from django.db import models
from django.contrib.auth.models import AbstractBaseUser

class Product(AbstractBaseUser):
    name = models.CharField(max_length=255)
    brand = models.CharField(max_length=255)
    batch = models.CharField(max_length=255)
    quantity = models.IntegerField()
    bar_code = models.IntegerField(unique=True)
    cost_value = models.FloatField()
    sale_value = models.FloatField()

    


