from rest_framework.routers import SimpleRouter

from src.linkedin.views import LinkViewSet

linkedin_router = SimpleRouter()

linkedin_router.register(r'linkedin', LinkViewSet)
