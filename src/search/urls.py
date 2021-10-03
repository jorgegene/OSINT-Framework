from rest_framework.routers import SimpleRouter

from src.search.views import SearchViewSet

search_router = SimpleRouter()

search_router.register(r'searches', SearchViewSet)
