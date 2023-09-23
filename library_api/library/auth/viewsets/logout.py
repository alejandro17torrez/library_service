from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet


class LogoutViewSet(ViewSet):
    permission_classes = (IsAuthenticated,)
    http_method_names = ["get"]

    def get(self, request):
        try:
            # Delete the user's token to logout
            request.user.auth_token.delete()
            return Response(
                {"message": "Successfully logged out."}, status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
