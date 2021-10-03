from rest_framework import serializers

from src.search.models import Search
from src.common.serializers import ThumbnailerJSONSerializer

class SearchSerializer(serializers.ModelSerializer):

    class Meta:
        model = Search
        fields = (
            'personal_name',
            'twitter_username',
            'insta_username',
            'facebook_username',
            'linkedin_username',
        )
        read_only_fields = ('personal_name', 'twitter_username', 'insta_username', 'facebook_username', 'linkedin_username')