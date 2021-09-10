from rest_framework import viewsets, mixins
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status


from src.linkedin.get_linkedin import get_linkedin_profile
from src.linkedin.models import LinkProfile
from src.linkedin.permissions import IsUserOrReadOnly
from src.linkedin.serializers import LinkSerializer



class LinkViewSet(mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    """
    Creates, Updates and Retrieves - User Accounts
    """
    queryset = LinkProfile.objects.all()
    serializers = {
        'default': LinkSerializer,
    }

    def get_serializer_class(self):
        return self.serializers.get(self.action, self.serializers['default'])

    @action(detail=False, methods=['get'])
    def get_linkedin_profile_data(self, request):
        """"""
        try:
            #username = request.DATA['username']
            username = str(self.request.query_params.get('username'))
            print (username)
            profile = get_linkedin_profile(username)
            face_profile = LinkProfile(profile)
            return Response(LinkSerializer(face_profile, context={'request': self.request}).data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': 'Wrong auth token' + e}, status=status.HTTP_400_BAD_REQUEST)

