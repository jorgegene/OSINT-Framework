from django.contrib import admin
from django.utils.translation import gettext_lazy as _

from src.instagram_profile.models import InstaProfile

@admin.register(InstaProfile)
class InstaProfileAdmin(admin.ModelAdmin):
    fieldsets = ((None, {
        'fields': ('username',)
    }), (_('Personal info'), {
        'fields': (
            'followers',
            'followees',
            'biography',
            'profile_image',
        )
    }))
