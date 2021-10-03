from rest_framework import serializers

from src.instagram.models import InstaPost
from src.common.serializers import ThumbnailerJSONSerializer

class InstaSerializer(serializers.ModelSerializer):

    class Meta:
        model = InstaPost
        fields = (
            'post_data',
            'username',
            'datetime',
            'post_image',
            'likes',
        )
        read_only_fields = ('username', 'post_data', 'datetime', 'post_image', 'likes')