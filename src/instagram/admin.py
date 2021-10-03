from django.contrib import admin
from django.utils.translation import gettext_lazy as _

from src.instagram.models import InstaPost

@admin.register(InstaPost)
class InstaAdmin(admin.ModelAdmin):
    fieldsets = ((None, {
        'fields': ('username',)
    }), (_('Personal info'), {
        'fields': (
            'post_data',
            'post_image',
            'datetime',
            'likes',
        )
    }))
