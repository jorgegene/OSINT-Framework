from rest_framework.routers import SimpleRouter

from src.facebook.views import FaceViewSet

facebook_router = SimpleRouter()

facebook_router.register(r'facebook', FaceViewSet)
