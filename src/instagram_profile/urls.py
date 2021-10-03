from rest_framework.routers import SimpleRouter

from src.instagram_profile.views import InstaProfileViewSet

instagram_profile_router = SimpleRouter()

instagram_profile_router.register(r'insta_profile', InstaProfileViewSet)
