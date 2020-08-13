from django.contrib import admin

# Register your models here.

from .models import Produit , Panier
admin.site.register(Produit)
admin.site.register(Panier) 