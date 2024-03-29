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


class Search(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    personal_name = models.CharField(max_length=100, blank=True, default='')
    insta_username = models.CharField(max_length=100, blank=True, default='')
    twitter_username = models.CharField(max_length=100, blank=True, default='')
    facebook_username = models.CharField(max_length=100, blank=True, default='')
    linkedin_username = models.CharField(max_length=100, blank=True, default='')
    insta_url = models.TextField()
    twitter_url = models.TextField()
    facebook_url = models.TextField()
    linkedin_url = models.TextField()

    def __str__(self):
        return self.personal_name

saved_file.connect(generate_aliases_global)
