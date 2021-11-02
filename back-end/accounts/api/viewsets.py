from rest_framework import viewsets
from accounts.api.serializers import UserSerializer
from accounts.models import User

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    http_method_names = ['get', 'post', 'put', 'delete']