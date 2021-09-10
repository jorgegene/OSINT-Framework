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
    profile_link = models.CharField(max_length=100, blank=True, default='')
    about = models.TextField()
    experiences = models.TextField()
    educations = models.TextField()
    accomplishments = models.TextField()
    interests = models.TextField()
    contacts = models.TextField()

    def __init__(self,linkedin_profile):
        self.name=linkedin_profile['name']
        self.profile_link=linkedin_profile['profile_link']
        if 'about' in linkedin_profile:
            self.about=linkedin_profile['about']
        if 'experiences' in linkedin_profile:
            self.experiences=linkedin_profile['experiences']
        if 'interests' in linkedin_profile:
            self.interests=linkedin_profile['interests']
        if 'educations' in linkedin_profile:
            self.educations=linkedin_profile['educations']
        if 'accomplishments' in linkedin_profile:
            self.accomplishments=linkedin_profile['accomplishments']
        if 'contacts' in linkedin_profile:
            self.contacts=linkedin_profile['contacts']


    def __str__(self):
        return self.username

saved_file.connect(generate_aliases_global)
