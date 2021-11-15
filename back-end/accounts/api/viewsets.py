from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from accounts.api.serializers import UserSerializer
from accounts.models import User

class UserViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = User.objects.all()
    serializer_class = UserSerializer
    http_method_names = ['get', 'post', 'put', 'delete']