from django.test import TestCase

from .models import Book


class BookModelTestCase(TestCase):
    def setUp(self):
        # Create a sample book instance for testing
        self.book = Book.objects.create(
            title="Sample Book",
            author="Sample Author",
            publication_year=2020,
        )

    def test_book_title(self):
        self.assertEqual(self.book.title, "Sample Book")

    def test_book_author(self):
        self.assertEqual(self.book.author, "Sample Author")

    def test_book_publication_year(self):
        self.assertEqual(self.book.publication_year, 2020)

    def test_book_str_representation(self):
        self.assertEqual(str(self.book), "Sample Book")
