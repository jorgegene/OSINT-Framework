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


class LinkProfile(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    name = models.CharField(max_length=300, blank=True, default='')
    username = models.CharField(max_length=100, blank=True, default='')
    category = models.CharField(max_length=100, blank=True, default='')
    profile_picture = models.TextField()
    basic_info = models.TextField()
    contact_info = models.TextField()
    places_lived = models.CharField(max_length=300, blank=True, default='')
    education = models.CharField(max_length=300, blank=True, default='')
    family_members = models.CharField(max_length=300, blank=True, default='')
    life_events = models.CharField(max_length=300, blank=True, default='')
    favourite_quotes = models.CharField(max_length=300, blank=True, default='')

    def __init__(self,face):
        self.name=face['name']
        self.username=face['username']
        self.profile_picture=face['profile_picture'] 
        self.basic_info=face['basic_info']
        self.contact_info=face['contact_info']
        if 'category' in face:
            self.category=face['category']
        if 'places_lived' in face:
            self.places_lived=face['places_lived']
        if 'education' in face:
            self.education=face['education']
        if 'family_members' in face:
            self.family_members=face['family_members']
        if 'life_events' in face:
            self.life_events=face['life_events']
        if 'favourite_quotes' in face:
            self.favourite_quotes=face['favourite_quotes']


    def __str__(self):
        return self.username

saved_file.connect(generate_aliases_global)
