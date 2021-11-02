from rest_framework import serializers
from accounts.models import User

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'url', 'name', 'permission_level', 'role', 'role_description', 'phone', 'email', 'cpf', 'birth_date', 'address')