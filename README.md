# library_service
This is a service to manage a library information about books, with CRUD operations. The environment of this project is a micro service architecture with Django as a back end and React JS with vite as a Front end with node JS and pnpm as a dependency administrator

# How run the project

This project runs in docker with docker compose:
- Docker: https://www.docker.com/
- Docker compose: https://docs.docker.com/compose/

## First time
In your terminal, or powershell run:

```
git clone https://github.com/alejandro17torrez/library_service.git
cd library_service
docker-compose up --build

```

## After the first time
In your terminal, or powershell run:

```
cd library_service
docker-compose up

```
In this way you can watch the containers logs

or

```
cd library_service
docker-compose up -d

```
In this way you can not watch the containers logs


## How down the project:

If you want to down the project you have two options:
- If you run the project with logs:


```
ctrl + c
docker-compose down
```

- If you run the project without logs:

```
docker-compose down
```

# Stack of technologies:

## Backend's Stack:
- Django with Django Rest Framework as a backend and so on. *For more information look the **requirements.txt file**

## Frontend's Stack:
- React + Vite with typescript as a frontend, and so on. *For more information look the **package.json file**

# Architecture project:

The project has this architecture:

- library_api/ **is the backend**
- library_ui/ **is the front end**

## Backend:

The backend has a Djago structure with little changes:
- **fixtures/** is the folder when are the fixtures with load initial data
- **library_api/** Django main folder
- **library/** is the folder when are the Django apps for user, books and auth features
    - **auth/** App to manage auth functions
    - **books/** App to manage books DDL and DML functions
    - **user** App to manage user DDL and DML functions
    - **utils/** Space to manage abstract classes to viewsets, models and serializers

## Frontend:
The frontend has a React + Vite application, in this case we will look the src/ and public/ file

- public/ **The site to save media data**
- src/ **is the file with the ui structure**
    - **api/** The space to fetch all endpoints of backend
    - **assets/** The space to save media files
    - **components/** The space to manage react components
    - **contexts/** The site to make react contexts
    - **definations/** This space is for the typescript magic, on it are the interfaces, endpoints, and breakpoints responsive values
    - **hooks/** The space to manage custom hooks
    - **pages/** Components that will be on react router urls
    - **utils/** Space to manage util functions to manage specific things


# Look out!

Currently the project has this issues:
- If you want to edit the code of this project on the frontend the live reload of VITE is not working inside the docker containers them you will have to install pnpm (I can be from npm with ```npm -g install pnpm```) and you will have to install all node modules inside *library_ui* folder with the command ```pnpm install```

# Default super user:

This project on the fixtures folder on backend as a fixture for create a default superuser them the credentials are:
email: admin@admin.com
password: admin

This user exists for the goal that this project can be tested without complications :)

*That's all information for now, happy coding :)*
