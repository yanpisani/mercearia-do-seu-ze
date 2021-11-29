from rest_framework import routers
from accounts.api.viewsets import UserViewSet
from inventory.api.viewsets import ProductViewSet
from sales.api.viewsets import SaleViewSet

router = routers.DefaultRouter()

router.register('users', UserViewSet, basename='user')
router.register('product', ProductViewSet, basename='product')
router.register('sales', SaleViewSet, basename='sale')