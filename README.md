# Poke-api

Simple api that sends informartion on pokemon types and images

Original dataset and images downloaded from [Kaggle](https://www.kaggle.com/vishalsubbiah/pokemon-images-and-types?select=images)

## Usage

To get the image of a certain pokemon you should create a GET request to route /images/{POKEMON_NAME}

- Example

```
fetch("http://123.567.8.9:3001/images/abra")
```

To get a JSON response with pokémon types and image create a GET request to route /api/{POKEMON_NAME}

- Example

```
fetch("http://123.567.8.9:3001/api/mew")
```
