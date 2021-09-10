from rest_framework import serializers

from src.linkedin.models import LinkProfile
from src.common.serializers import ThumbnailerJSONSerializer

class LinkSerializer(serializers.ModelSerializer):

    class Meta:
        model = LinkProfile
        fields = (
            'name',
            'profile_link',
            'educations',
            'interests',
            'experiences',
            'about',
            'accomplishments',
            'contacts',
        )
        read_only_fields = ('name', 'profile_link', 'educations', 'interests', 'experiences', 'accomplishments', 'contacts', 'about')