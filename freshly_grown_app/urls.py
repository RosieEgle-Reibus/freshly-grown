from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('product', views.ProductView)
router.register('farm', views.FarmView)
router.register('restaurant', views.RestaurantView)

urlpatterns = [
    path('', include(router.urls))
]