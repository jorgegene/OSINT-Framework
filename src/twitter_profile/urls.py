from rest_framework.routers import SimpleRouter

from src.twitter_profile.views import TwitterProfileViewSet

twitter_profile_router = SimpleRouter()

twitter_profile_router.register(r'twitter_profile', TwitterProfileViewSet)
