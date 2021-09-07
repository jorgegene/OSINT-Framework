from rest_framework.routers import SimpleRouter

from src.twitter.views import TweetViewSet

facebook_router = SimpleRouter()

facebook_router.register(r'facebook', FaceViewSet)
