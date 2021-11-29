from rest_framework import viewsets
from sales.api.serializers import SaleSerializer
from sales.models import Sale

class SaleViewSet(viewsets.ModelViewSet):
    queryset = Sale.objects.all()
    serializer_class = SaleSerializer
    http_method_names = ['get', 'post', 'put', 'delete']