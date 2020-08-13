from rest_framework import serializers
from .models import Produit , Panier

class ProduitSerializer(serializers.ModelSerializer):
	class Meta:
		model = Produit 
		fields ='__all__'

class PanierSerializer(serializers.ModelSerializer):
	produits = ProduitSerializer(many=True)
	class Meta:
		model = Panier 
		fields = ('id' , 'total' , 'produits') 