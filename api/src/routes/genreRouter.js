const express = require('express');
const axios = require('axios');
const { Genre } = require('../db.js');
const { API_KEY } = process.env;

const genreRouter = express.Router();

// console.log('por entrar a genreRouter');
genreRouter.post('/',  async (req, res) => {
  // console.log('iniciando genreRouter.post');
  try {
    const response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    // const data = await response.json();
    // console.log('data en genreRouter',response.data);
    const genresList = await response.data.results.map(genre => ({'id':genre.id, 'name':genre.name}));
    // console.log('genresList en genreRouter', genresList);
    // Verificar si la tabla types está vacía
    const count = await Genre.count();
    if (count === 0) {
      // Si la tabla está vacía, cargar los tipos
      await Genre.bulkCreate(genresList);
      // console.log('Se han cargado los géneros en la tabla');
    } else {
      // console.log('La tabla genres no está vacía');
    }

    res.json(genresList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en typeRouter.post al obtener los tipos de pokemon' });
  }
});

genreRouter.get('/', async (req, res) => {
  try {
    const genres = await Genre.findAll(
    );
    // console.log('genres en genreRouter', genres);
    res.json(genres);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en genreRouter al obtener los géneros de videogames' });
  }
});


module.exports = genreRouter;
