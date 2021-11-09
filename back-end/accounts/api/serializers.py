from rest_framework import serializers
from accounts.models import User

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'url', 'name', 'role', 'role_description', 'phone', 'email', 'cpf', 'rg', 'birth_date', 'address', 'manager', 'password')