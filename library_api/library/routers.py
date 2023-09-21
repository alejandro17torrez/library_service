from library.auth.viewsets import LoginViewSet, RefreshViewSet, RegisterViewSet
from library.user.viewsets import UserViewSet
from rest_framework import routers

router = routers.SimpleRouter()

router.register(r"user", UserViewSet, basename="user")
router.register(r"auth/register", RegisterViewSet, basename="auth-register")
router.register(r"auth/login", LoginViewSet, basename="auth-login")
router.register(r"auth/refresh", RefreshViewSet, basename="auth-refresh")


urlpatterns = [
    *router.urls,
]
