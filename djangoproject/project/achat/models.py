from django.db import models
from django.db.models.signals import post_save


class Panier(models.Model):
    total = models.FloatField(default=0.0)

class Produit(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    price = models.FloatField(default=0.0)
    description = models.CharField(max_length=200)
    quantity = models.SmallIntegerField(default=0)
    produits = models.ForeignKey(Panier ,related_name='produits' , on_delete = models.CASCADE)


    def __str__(self):
        return self.name




    

    

    
