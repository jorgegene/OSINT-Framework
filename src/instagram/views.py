from rest_framework import viewsets, mixins
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status


from src.instagram.get_posts import get_posts
from src.instagram.models import InstaPost
from src.instagram.permissions import IsUserOrReadOnly
from src.instagram.serializers import InstaSerializer



class InstaViewSet(mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    """
    Creates, Updates and Retrieves - User Accounts
    """
    queryset = InstaPost.objects.all()
    serializers = {
        'default': InstaSerializer,
    }

    def get_serializer_class(self):
        return self.serializers.get(self.action, self.serializers['default'])

    @action(detail=False, methods=['get'])
    def get_post_data(self, request):
        """"""
        try:
            #username = request.DATA['username']
            username = str(self.request.query_params.get('username'))
            posts = get_posts(username)
            posts_list = []
            for post in posts:
                posts_list.append(InstaPost(post))
            return Response(InstaSerializer(posts_list, context={'request': self.request}, many=True).data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': 'Wrong auth token' + e}, status=status.HTTP_400_BAD_REQUEST)

