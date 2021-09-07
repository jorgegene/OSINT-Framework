from django.contrib import admin
from django.utils.translation import gettext_lazy as _

from src.facebook.models import FacePost

@admin.register(FacePost)
class FaceAdmin(admin.ModelAdmin):
    fieldsets = ((None, {
        'fields': ('username', 'profile_name')
    }), (_('Personal info'), {
        'fields': (
            'tweet_data',
            'link',
            'datetime',
        )
    }))
