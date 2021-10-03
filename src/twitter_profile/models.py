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


class TwitterProfile(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    username = models.CharField(max_length=100, blank=True, default='')
    followers = models.IntegerField()
    followees = models.IntegerField()
    biography = models.TextField()
    profile_image = models.TextField()

    def __init__(self,twitter_profile):
        self.username=twitter_profile['username']
        self.followers=twitter_profile['followers']
        self.followees=twitter_profile['followees']
        self.biography=twitter_profile['bio']
        self.profile_image=twitter_profile['profile_image']

    def __str__(self):
        return self.username

saved_file.connect(generate_aliases_global)
