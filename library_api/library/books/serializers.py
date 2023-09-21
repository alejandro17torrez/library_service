from library.books.models import Book
from library.utils.serializers import AbstractSerializer


class BookSerializer(AbstractSerializer):
    class Meta:
        model = Book
        fields = "__all__"
