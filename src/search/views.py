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
            Search.objects.create(personal_name=searched['personal_name'],
                twitter_username= searched['twitter_username'],
                insta_username=searched['insta_username'],
                facebook_username=['facebook_username'],
                linkedin_username=searched['linkedin_username'],
                twitter_url=searched['twitter_url'],
                facebook_url=searched['facebook_url'],
                insta_url=searched['insta_url'],
                linkedin_url=searched['linkedin_url'])
            return Response(SearchSerializer(searched, context={'request': self.request}).data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': 'Wrong auth token' + e}, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['get'])
    def get_serach_list(self, request):
        """"""
        try:
            query_set = Search.objects.all()
            queries = {"searches": query_set}
            print (query_set)
            return Response(SearchSerializer(query_set, context={'request': self.request}, many=True).data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': 'Wrong auth token' + e}, status=status.HTTP_400_BAD_REQUEST)


