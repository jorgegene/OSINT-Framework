from django.contrib import admin
from django.utils.translation import gettext_lazy as _

from src.facebook.models import FaceProfile

@admin.register(FaceProfile)
class FaceAdmin(admin.ModelAdmin):
    fieldsets = ((None, {
        'fields': ('username', 'name')
    }), (_('Personal info'), {
        'fields': (
            'basic_info',
            'contact_info',
            'category',
            'profile_picture',
            'family_members',
            'education',
            'places_lived',
            'life_events',
            'favourite_quotes',

        )
    }))
