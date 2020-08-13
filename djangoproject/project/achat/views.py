from django.shortcuts import render
from rest_framework import generics
from .serializers import PanierSerializer , ProduitSerializer
from .models import Panier , Produit
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt



class ProduitView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ProduitSerializer
    queryset = Produit.objects.all()


class ProduitListView(generics.ListCreateAPIView):

    queryset = Produit.objects.all()
    serializer_class= ProduitSerializer

class PanierView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = PanierSerializer
    queryset = Panier.objects.all()

class PanierListView(generics.ListCreateAPIView):
    queryset = Panier.objects.all()
    serializer_class= PanierSerializer