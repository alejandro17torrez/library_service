from django.contrib.auth import get_user_model
from django.test import TestCase

# Create your tests here.


USER = get_user_model()


class UserModelTestCase(TestCase):
    def setUp(self):
        self.user = USER.objects.create_user(
            username="testuser",
            first_name="Test",
            last_name="User",
            email="test@example.com",
            password="testpassword",
        )

    def test_user_creation(self):
        self.assertEqual(USER.objects.count(), 1)
        saved_user = USER.objects.get(username="testuser")
        self.assertEqual(saved_user.first_name, "Test")
        self.assertEqual(saved_user.last_name, "User")
        self.assertEqual(saved_user.email, "test@example.com")
        self.assertTrue(saved_user.check_password("testpassword"))

    def test_str_user_name_representation(self):
        self.assertEqual(self.user.name, "Test User")

    def test_if_user_is_not_superuser(self):
        self.assertFalse(self.user.is_superuser)
        self.assertFalse(self.user.is_staff)
