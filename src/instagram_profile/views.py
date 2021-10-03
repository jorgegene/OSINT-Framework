from rest_framework import viewsets, mixins
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status


from src.instagram_profile.get_insta_profile import get_insta_profile
from src.instagram_profile.models import InstaProfile
from src.instagram_profile.permissions import IsUserOrReadOnly
from src.instagram_profile.serializers import InstaProfileSerializer



class InstaProfileViewSet(mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    """
    Creates, Updates and Retrieves - User Accounts
    """
    queryset = InstaProfile.objects.all()
    serializers = {
        'default': InstaProfileSerializer,
    }

    def get_serializer_class(self):
        return self.serializers.get(self.action, self.serializers['default'])

    @action(detail=False, methods=['get'])
    def get_insta_profile(self, request):
        """"""
        try:
            #username = request.DATA['username']
            username = str(self.request.query_params.get('username'))
            profile = get_insta_profile(username)
            return Response(InstaProfileSerializer(profile, context={'request': self.request}).data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': 'Wrong auth token' + e}, status=status.HTTP_400_BAD_REQUEST)

