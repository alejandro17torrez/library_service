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

- Django with Django Rest Framework as a backend *For more information look the **requirements.txt file**
- React + Vite with typescript as a frontend *For more information look the **package.json file**

# Look out!

Currently the project has this issues:
- If you want to edit the code of this project on the frontend the live reload of VITE is not working inside the docker containers them you will have to install pnpm (I can be from npm with ```npm -g install pnpm```) and you will have to install all node modules inside *library_ui* folder with the command ```pnpm install```

*That's all information for now, happy coding :)*
