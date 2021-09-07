from rest_framework import viewsets, mixins
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status


from src.facebook.get_facebook_posts import get_facebook_posts
from src.facebook.models import FacePost
from src.facebook.permissions import IsUserOrReadOnly
from src.facebook.serializers import FaceSerializer



class FaceViewSet(mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    """
    Creates, Updates and Retrieves - User Accounts
    """
    queryset = FacePost.objects.all()
    serializers = {
        'default': FaceSerializer,
    }

    def get_serializer_class(self):
        return self.serializers.get(self.action, self.serializers['default'])

    @action(detail=False, methods=['get'])
    def get_tweet_data(self, request):
        """"""
        try:
            #username = request.DATA['username']
            username = str(self.request.query_params.get('username'))
            print (username)
            posts = get_posts(username)
            posts_list = []
            for post in posts:
                posts_list.append(FacePost(post))
            return Response(FaceSerializer(posts_list, context={'request': self.request}, many=True).data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': 'Wrong auth token' + e}, status=status.HTTP_400_BAD_REQUEST)

