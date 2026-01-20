# tileflow_app/urls.py
from django.urls import path
from . import views

urlpatterns = [
    # Login/Logout URLs
    
    path('', views.registration,name='register'),
    path('Verify/',views.verify,name='Verify'),
    path('/Reg.html/',views.register,name="Reg"),
    # path('Register.html/', views.registration, name='register'),
    # Dashboard URL (index.html)
  # Root URL shows dashboard
    
    # Optional: If you want dashboard at specific URL
    # path('dashboard/', views.index_view, name='dashboard'),
]