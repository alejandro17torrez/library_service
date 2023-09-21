from library.user.models import User
from library.user.serializers import UserSerializer
from rest_framework import serializers


class RegisterSerializer(UserSerializer):
    """
    Registration serializer for request and user creation.
    """

    password = serializers.CharField(
        max_length=128, min_length=8, write_only=True, required=True
    )

    class Meta:
        model = User
        fields = "__all__"

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
