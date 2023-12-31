import uuid

from django.core.exceptions import ObjectDoesNotExist
from django.db import models
from django.http import Http404
from library.utils.models.soft_delete import SoftDeleteManager


class AbstractManager(SoftDeleteManager):
    def get_object_by_public_id(self, public_id: str):
        try:
            return self.get(public_id=public_id)
        except (ObjectDoesNotExist, ValueError, TypeError):
            return Http404


class AbstractModel(models.Model):
    public_id = models.UUIDField(
        db_index=True, unique=True, default=uuid.uuid4, editable=False
    )
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    objects = AbstractManager()

    class Meta:
        abstract = True
