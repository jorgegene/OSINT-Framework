from rest_framework import serializers

from src.facebook.models import FaceProfile
from src.common.serializers import ThumbnailerJSONSerializer

class FaceSerializer(serializers.ModelSerializer):

    class Meta:
        model = FaceProfile
        fields = (
            'name',
            'username',
            'profile_picture',
            'basic_info',
            'contact_info',
            'category',
            'life_events',
            'places_lived',
            'education',
            'family_members',
            'favourite_quotes',
        )
        read_only_fields = ('username', 'name', 'profile_picture', 'basic_info', 'contact_info', 'category', 'life_events', 'favourite_quotes', 'places_lived', 'education', 'family_members')