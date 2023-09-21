from library.user.models import User
from library.utils.serializers import AbstractSerializer


class UserSerializer(AbstractSerializer):
    class Meta:
        model = User
        fields = "__all__"
        read_only_fields = ["is_active"]
