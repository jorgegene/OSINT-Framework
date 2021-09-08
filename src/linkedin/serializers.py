from rest_framework import serializers

from src.linkedin.models import LinkProfile
from src.common.serializers import ThumbnailerJSONSerializer

class LinkSerializer(serializers.ModelSerializer):

    class Meta:
        model = LinkProfile
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