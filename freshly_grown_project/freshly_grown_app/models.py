from django.db import models


class Farm(models.Model):
    name = models.CharField(max_length=100, default='n/a')
    description = models.CharField(max_length=255, default='n/a')
    location = models.CharField(max_length=100, default='n/a')
    farm_pic_url = models.CharField(max_length=255, default='n/a')

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=100, default='n/a')
    description = models.CharField(max_length=255, default='n/a')
    price = models.IntegerField(default=0)
    unit = models.CharField(max_length=20, default='lbs')
    total_quantity = models.CharField(max_length=20, default='0')
    order_quantity = models.IntegerField(max_length=20,default=0)
    product_pic_url = models.CharField(max_length=255, default='n/a')
    tag = models.CharField(max_length=30, default='n/a')
    farm = models.ForeignKey(Farm, on_delete=models.CASCADE, related_name= 'products')

    def __str__(self):
        return self.name


class Restaurant(models.Model):
    name = models.CharField(max_length=100, default='n/a')
    description = models.CharField(max_length=255, default='n/a')
    location = models.CharField(max_length=100, default='n/a')
    rest_pic_url = models.CharField(max_length=255, default='n/a')

    def __str__(self):
        return self.name

