from django.urls import path
from .views import ProduitView, PanierView , ProduitListView , PanierListView

urlpatterns = [
    path('produits',ProduitListView.as_view()),
    path('produit/<pk>',ProduitView.as_view()),
    path('panier',PanierListView.as_view()),
    path('panier/<pk>',PanierView.as_view()),
    
]

