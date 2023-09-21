FROM python:3.11-slim-buster

RUN mkdir -p /app


WORKDIR /app

# set enviroment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt-get update && \
    apt-get install -y postgresql-client && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# update pip
RUN pip install --upgrade pip

COPY ./init.sh /init
RUN sed -i 's/\r$//g' /init
RUN chmod +x /init

COPY ../../ /app

# install all dependencies from requirement.txt
RUN pip install --no-cache-dir -r requirements.txt


ENTRYPOINT ["/init"]
