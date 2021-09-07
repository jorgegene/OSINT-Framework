import uuid
from django.db import models
from django.dispatch import receiver
from django.contrib.auth.models import AbstractUser
from rest_framework_simplejwt.tokens import RefreshToken
from easy_thumbnails.fields import ThumbnailerImageField
from django.urls import reverse
from django_rest_passwordreset.signals import reset_password_token_created
from easy_thumbnails.signals import saved_file
from easy_thumbnails.signal_handlers import generate_aliases_global

from src.common.helpers import build_absolute_uri
from src.notifications.services import notify, ACTIVITY_USER_RESETS_PASS


class FacePost(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    tweet_data = models.CharField(max_length=300, blank=True, default='')
    username = models.CharField(max_length=100, blank=True, default='')
    profile_name = models.CharField(max_length=100, blank=True, default='')
    link = models.TextField()
    datetime = models.DateTimeField(auto_now_add=False)
    tweet_image = models.CharField(max_length=200, blank=True, default='')

    def __init__(self,tweet):
        self.tweet_data=tweet['tweet_data']
        self.username=tweet['username']
        self.profile_name=tweet['profile_name']
        self.link=tweet['link'] 
        self.datetime=tweet['datetime']
        if "tweet_image" in tweet:
            self.tweet_image=tweet['tweet_image']

    def __str__(self):
        return self.tweet_data

saved_file.connect(generate_aliases_global)
