from rest_framework import viewsets
from inventory.api.serializers import ProductSerializer
from inventory.models import Product

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    http_method_names = ['get', 'post', 'put', 'delete']