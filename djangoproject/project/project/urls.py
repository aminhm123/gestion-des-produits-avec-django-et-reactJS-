from django.urls import include

from django.contrib import admin
from django.urls import path 


urlpatterns = [
    
    path('', include('frontend.urls')),
    path('admin/', admin.site.urls),
    path('api_prod/', include('achat.urls')),
    
     
]

