"""predictions URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from predict_model import views as predict_model

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', predict_model.landing),
    url(r'^make_predictions_api', predict_model.make_predictions_api, name='make_predictions_api'),
    url(r'^all_tweets', predict_model.all_tweets, name='all_tweets'),
    url(r'^change_status', predict_model.change_status, name='change_status'),
    
]
