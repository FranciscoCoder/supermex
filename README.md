# Supermex Food #
Website with information about the products, recipes and news of the supermex foods company

## Presentation ##

Hi!!, Im Francisco Maquez and this is my final project for CodeSpace Academy.

## Getting started ##

### 1. Requirements ### 

Please check if you have everything installed, like apache2 and NPM.

### 1. Installing ### 

```
  git clone https://github.com/FranciscoCoder/supermex.git
```

## Backend ##

### How to run symfony app ###

```
composer install
````
[Or check here](https://symfony.com/doc/current/setup.html) for more information

then, you will need modify the .env file to your user and your password from MYSQL.

### Import SQL file to your DB, then run: ### 

```
symfony server:start --port=8080
````

## For install frontend you will need: ##

```
npm install
```

### then in the backend folder you will need to run : ###

```
symfony start:server --port=8080
````

### and then, in the frontend folder you will need to run: ###

```
npm start
````
### And also: ### 
```
npm run build
````
### You are ready to start! ### 

# Some endpoints from the project #

| URL | TYPE | DESCRIPTION | ROLE |
| :-------: | :------: | :------: | :-------: |
| localhost:8080/api/contact | GET | Get all message of contact form | Admin, Super Admin |
| localhost:8080/api/contact | POST | Send a contact message | Public |
| localhost:8080/api/languages | GET | Get all language in website | Public |
| localhost:8080/api/languages/activos | GET | Get all language actives in website | Public |
| localhost:8080/api/news | GET | Get all news in website | Public |
| localhost:8080/api/news/{slug} | GET | Get a news register by Slug | Public |
| localhost:8080/api/new/ | POST | Insert a new register | Super Admin, Admin, Bloguero |
| localhost:8080/api/new/{id} | POST | Update the new by Id | Super Admin, Admin, Bloguero |
| localhost:8080/api/new/{id}/delete | DELETE | Delete the new by Id | Super Admin, Admin, Bloguero |
| localhost:8080/api/recipes | GET | Get all recipes in website | Public |
| localhost:8080/api/recipes/{slug} | GET | Get a recipe register by Slug | Public |
| localhost:8080/api/recipe/ | POST | Insert a new recipe | Super Admin, Admin, Bloguero |
| localhost:8080/api/recipe/{id} | POST | Update the recipe by Id | Super Admin, Admin, Bloguero |
| localhost:8080/api/recipe/{id}/delete | DELETE | Delete the recipe by Id | Super Admin, Admin, Bloguero |
| localhost:8080/api/users | GET | Get all user in Dashboard | Super Admin |
| localhost:8080/api/users/{id} | GET | Get a user in Dashboard | Super Admin |
| localhost:8080/api/user/ | POST | Insert a new user | Super Admin |
| localhost:8080/api/user/{id} | POST | Update the user by Id | Super Admin |
| localhost:8080/api/user/{id}/delete | DELETE | Delete an user by Id | Super Admin |
| localhost:8080/api/login_check | POST | Just login with user and password and generate token | Super Admin, Admin, Bloguero |
| localhost:8080/api/verify_token | POST | Verify the user token | Super Admin, Admin, Bloguero |
| localhost:8080/api/token/refresh | ANY | Refresh token | Any |