from rest_framework import viewsets, mixins
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status


from src.twitter.get_tweets import get_tweets
from src.twitter.models import Tweet
from src.twitter.permissions import IsUserOrReadOnly
from src.twitter.serializers import TweetSerializer



class TweetViewSet(mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    """
    Creates, Updates and Retrieves - User Accounts
    """
    queryset = Tweet.objects.all()
    serializers = {
        'default': TweetSerializer,
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
            tweets = get_tweets(username)
            tweet_list = []
            for tweet in tweets:
                tweet_list.append(Tweet.create(tweet))
            return Response(TweetSerializer(tweet_list, context={'request': self.request}, many=True).data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': 'Wrong auth token' + e}, status=status.HTTP_400_BAD_REQUEST)

