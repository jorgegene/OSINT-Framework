from django.contrib import admin
from django.utils.translation import gettext_lazy as _

from src.twitter.models import Tweet

@admin.register(Tweet)
class TweetAdmin(admin.ModelAdmin):
    fieldsets = ((None, {
        'fields': ('username', 'profile_name')
    }), (_('Personal info'), {
        'fields': (
            'tweet_data',
            'link',
            'datetime',
            'likes',
            'retweets',
            'replies',
        )
    }))
