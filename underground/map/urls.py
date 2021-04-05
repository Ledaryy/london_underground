from django.urls import path

from . import views

urlpatterns = [
  # other patterns here
  path('', views.index, name="index" )
]