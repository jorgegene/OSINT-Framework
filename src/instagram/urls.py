from rest_framework.routers import SimpleRouter

from src.instagram.views import InstaViewSet

instagram_router = SimpleRouter()

instagram_router.register(r'insta_posts', InstaViewSet)
