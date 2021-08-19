from rest_framework.routers import SimpleRouter

from src.twitter.views import TweetViewSet

twitter_router = SimpleRouter()

twitter_router.register(r'tweets', TweetViewSet)
