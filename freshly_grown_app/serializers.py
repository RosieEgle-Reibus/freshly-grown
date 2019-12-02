from rest_framework import serializers

from .models import Farm, Product, Restaurant

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name', 'description', 'price', 'unit', 'total_quantity', 'order_quantity', 'product_pic_url', 'tag', 'farm')


class FarmSerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True, read_only=True)
    class Meta: 
        model = Farm
        fields = ('id', 'name', 'description', 'location', 'farm_pic_url', 'products')


class RestaurantSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Restaurant
        fields = ('id', 'name', 'description', 'location', 'rest_pic_url')