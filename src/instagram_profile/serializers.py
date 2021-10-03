from rest_framework import serializers

from src.instagram_profile.models import InstaProfile
from src.common.serializers import ThumbnailerJSONSerializer

class InstaProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = InstaProfile
        fields = (
            'username',
            'biography',
            'followers',
            'followees',
            'profile_image',
        )
        read_only_fields = ('username', 'biography', 'followers', 'followees', 'profile_image')