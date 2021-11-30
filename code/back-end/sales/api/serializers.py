from rest_framework import serializers
from sales.models import Sale

class SaleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Sale
        fields = ('id', 'url', 'products', 'cost_total', 'timestamp')