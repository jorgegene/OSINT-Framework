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


class InstaPost(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    post_data = models.CharField(max_length=300, blank=True, default='')
    username = models.CharField(max_length=100, blank=True, default='')
    datetime = models.DateTimeField(auto_now_add=False)
    post_image = models.TextField()
    likes = models.IntegerField()

    def __init__(self,insta_post):
        self.post_data=insta_post['caption']
        self.username=insta_post['username']
        self.datetime=insta_post['datetime']
        self.post_image=insta_post['post_image']
        self.likes=insta_post['likes']

    def __str__(self):
        return self.post_data

saved_file.connect(generate_aliases_global)
