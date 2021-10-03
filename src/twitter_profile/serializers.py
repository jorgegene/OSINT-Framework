from rest_framework import serializers

from src.twitter_profile.models import TwitterProfile
from src.common.serializers import ThumbnailerJSONSerializer

class TwitterProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = TwitterProfile
        fields = (
            'username',
            'followers',
            'followees',
            'biography',
            'profile_image',
        )
        read_only_fields = ('username', 'followers', 'followees', 'biography', 'profile_image')