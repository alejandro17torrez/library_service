#!/bin/bash

if [ "$DATABASE" = "postgres" ]
then
    echo "Waiting for postgres..."

    while ! nc -z "$SQL_HOST" "$SQL_PORT"; do
      sleep 0.1
    done

    echo "PostgreSQL started"
fi

cd library_api

# run migrations
python manage.py makemigrations
python manage.py migrate

# fixtures
python manage.py loaddata fixtures/fixture_superuser.json
python manage.py loaddata fixtures/fixture_books.json

# tests
python manage.py test

# start server
python manage.py runserver 0.0.0.0:8000

exec "$@"
