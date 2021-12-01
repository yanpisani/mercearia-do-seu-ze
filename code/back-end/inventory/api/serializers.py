from rest_framework import serializers
from inventory.models import Product

class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'url','name', 'brand', 'batch', 'quantity', 'bar_code', 'cost_value', 'sale_value')