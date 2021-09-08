from django.contrib import admin
from django.utils.translation import gettext_lazy as _

from src.linkedin.models import LinkProfile

@admin.register(LinkProfile)
class LinkAdmin(admin.ModelAdmin):
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
