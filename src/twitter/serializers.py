from rest_framework import serializers

from src.twitter.models import Tweet
from src.common.serializers import ThumbnailerJSONSerializer

class TweetSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tweet
        fields = (
            'tweet_data',
            'username',
            'profile_name',
            'link',
            'datetime',
            'tweet_image',
            'likes',
            'retweets',
            'replies',
        )
        read_only_fields = ('username', 'tweet_data', 'profile_name', 'datetime', 'link', 'tweet_video', 'tweet_image', 'likes', 'retweets', 'replies')