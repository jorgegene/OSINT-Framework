from rest_framework import viewsets, mixins
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status


from src.search.search_usernames import get_usernames
from src.search.models import Search
from src.search.permissions import IsUserOrReadOnly
from src.search.serializers import SearchSerializer



class SearchViewSet(mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    """
    Creates, Updates and Retrieves - User Accounts
    """
    queryset = Search.objects.all()
    serializers = {
        'default': SearchSerializer,
    }

    def get_serializer_class(self):
        return self.serializers.get(self.action, self.serializers['default'])

    @action(detail=False, methods=['get'])
    def get_usernames(self, request):
        """"""
        try:
            #username = request.DATA['username']
            username = str(self.request.query_params.get('username'))
            print (username)
            searched = get_usernames(username)
            return Response(SearchSerializer(searched, context={'request': self.request}).data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': 'Wrong auth token' + e}, status=status.HTTP_400_BAD_REQUEST)

