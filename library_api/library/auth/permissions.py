from rest_framework.permissions import BasePermission


class UserPermission(BasePermission):
    def has_permission(self, request, view):
        if request.method == "GET":
            # Allow GET requests for all users
            return True
        elif request.user.is_authenticated and request.method in [
            "PUT",
            "POST",
            "DELETE",
        ]:
            return True
        else:
            return False
