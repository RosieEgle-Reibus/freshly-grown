from django.contrib import admin

from .models import Farm, Product, Restaurant

admin.site.register([Farm, Product, Restaurant])
