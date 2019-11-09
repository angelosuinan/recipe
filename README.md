# recipe

Recipe sharing App built with Graphql and React

## Requirements

* Nodejs version >=12.0.0
* docker-compose

## Development

* Install dependencies

```
npm install
```

* Run Mongodb

```
docker-compose up -d
```

* Run development server

```
npm run dev
```

## Endpoints

`:3000/` - React app

`:8000/graphql` - Graphql Endpoint

`:3000/login` - Login Page

`:3000/register`- Register Page

`:3000/` - Home Page with search

`:3000/add` - Add your Recipe

`:3000/recipe/:id` - Recipe show view

`:3000/profile` - View logged-in user's recipes
