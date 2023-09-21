from library.auth.permissions import UserPermission
from library.books.models import Book
from library.books.serializers import BookSerializer
from library.utils.viewsets import AbstractViewSet
from rest_framework import status
from rest_framework.response import Response


class BookViewSet(AbstractViewSet):
    http_method_names = ("post", "get", "put", "delete")
    permission_classes = (UserPermission,)
    serializer_class = BookSerializer

    def get_queryset(self):
        return Book.objects.all()

    def get_object(self):
        book = Book.objects.get_object_by_public_id(self.kwargs["pk"])
        self.check_object_permissions(self.request, book)
        return book

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=self.request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
