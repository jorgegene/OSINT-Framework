from rest_framework import serializers

from src.facebook.models import FacePost
from src.common.serializers import ThumbnailerJSONSerializer

class FaceSerializer(serializers.ModelSerializer):

    class Meta:
        model = FacePost
        fields = (
            'tweet_data',
            'username',
            'profile_name',
            'link',
            'datetime',
            'tweet_image',
        )
        read_only_fields = ('username', 'tweet_data', 'profile_name', 'datetime', 'link', 'tweet_video', 'tweet_image')