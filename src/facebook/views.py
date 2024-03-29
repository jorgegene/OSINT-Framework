from rest_framework import viewsets, mixins
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status


from src.facebook.get_facebook import get_facebook_profile
from src.facebook.models import FaceProfile
from src.facebook.permissions import IsUserOrReadOnly
from src.facebook.serializers import FaceSerializer



class FaceViewSet(mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    """
    Creates, Updates and Retrieves - User Accounts
    """
    queryset = FaceProfile.objects.all()
    serializers = {
        'default': FaceSerializer,
    }

    def get_serializer_class(self):
        return self.serializers.get(self.action, self.serializers['default'])

    @action(detail=False, methods=['get'])
    def get_face_profile_data(self, request):
        """"""
        try:
            #username = request.DATA['username']
            username = str(self.request.query_params.get('username'))
            print (username)
            profile = get_facebook_profile(username)
            face_profile = FaceProfile(profile)
            return Response(FaceSerializer(face_profile, context={'request': self.request}).data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': 'Wrong auth token' + e}, status=status.HTTP_400_BAD_REQUEST)

