#!/bin/bash

if [ "$DATABASE" = "postgres" ]
then
    echo "Waiting for postgres..."

    while ! nc -z "$SQL_HOST" "$SQL_PORT"; do
      sleep 0.1
    done

    echo "PostgreSQL started"
fi


# run migrations
python library_api/manage.py makemigrations
python library_api/manage.py migrate

# tests
python library_api/manage.py test

# start server
python library_api/manage.py runserver 0.0.0.0:8000

exec "$@"
