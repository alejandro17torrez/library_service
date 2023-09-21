from django.core.validators import MinValueValidator
from django.db import models
from library.utils.models.abstract_model import AbstractManager, AbstractModel
from library.utils.models.soft_delete import SoftDeleteModel

# Create your models here.


class BookManager(AbstractManager):
    pass


class Book(AbstractModel, SoftDeleteModel):
    title = models.CharField(max_length=50)
    author = models.CharField(max_length=50)
    publication_year = models.IntegerField(
        validators=[MinValueValidator(400)],
    )

    objects = BookManager()

    def __str__(self):
        return f"{self.title}"

    class Meta:
        db_table = "'library.book'"
