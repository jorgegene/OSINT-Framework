from django.contrib import admin
from django.utils.translation import gettext_lazy as _

from src.search.models import Search

@admin.register(Search)
class SearchAdmin(admin.ModelAdmin):
    fieldsets = ((None, {
        'fields': ('personal_name', 'twitter_username')
    }), (_('Personal info'), {
        'fields': (
            'insta_username',
            'facebook_username',
            'linkedin_username',
        )
    }))
