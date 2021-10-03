from django.contrib import admin
from django.utils.translation import gettext_lazy as _

from src.twitter_profile.models import TwitterProfile

@admin.register(TwitterProfile)
class TwitterProfileAdmin(admin.ModelAdmin):
    fieldsets = ((None, {
        'fields': ('username', 'followers')
    }), (_('Personal info'), {
        'fields': (
            'followees',
            'biography',
            'profile_image',
        )
    }))
