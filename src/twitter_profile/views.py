from rest_framework import viewsets, mixins
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status


from src.twitter_profile.get_twitter_profile import get_twitter_profile
from src.twitter_profile.models import TwitterProfile
from src.twitter_profile.permissions import IsUserOrReadOnly
from src.twitter_profile.serializers import TwitterProfileSerializer



class TwitterProfileViewSet(mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    """
    Creates, Updates and Retrieves - User Accounts
    """
    queryset = TwitterProfile.objects.all()
    serializers = {
        'default': TwitterProfileSerializer,
    }

    def get_serializer_class(self):
        return self.serializers.get(self.action, self.serializers['default'])

    @action(detail=False, methods=['get'])
    def get_twitter_profile(self, request):
        """"""
        try:
            #username = request.DATA['username']
            username = str(self.request.query_params.get('username'))
            print (username)
            twitter_profile = get_twitter_profile(username)
            return Response(TwitterProfileSerializer(twitter_profile, context={'request': self.request}).data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': 'Wrong auth token' + e}, status=status.HTTP_400_BAD_REQUEST)

