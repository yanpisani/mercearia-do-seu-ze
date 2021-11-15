from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from inventory.api.serializers import ProductSerializer
from inventory.models import Product

class ProductViewSet(viewsets.ModelViewSet):
    permission_classes= (IsAuthenticated, ) 
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    http_method_names = ['get', 'post', 'put', 'delete']