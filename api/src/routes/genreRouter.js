const express = require('express');
const axios = require('axios');
const { Genre } = require('../db.js');
const { API_KEY } = process.env;

const genreRouter = express.Router();

genreRouter.post('/',  async (req, res) => {
  try {
    const response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    const genresList = await response.data.results.map(genre => ({'id':genre.id, 'name':genre.name}));
    const count = await Genre.count();
    if (count === 0) {
      await Genre.bulkCreate(genresList);
      console.log('Se han cargado los géneros en la tabla');
    } else {
      console.log('La tabla genres no está vacía');
    }

    res.json(genresList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

genreRouter.get('/', async (req, res) => {
  try {
    const genres = await Genre.findAll(
    );
    res.json(genres);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en genreRouter al obtener los géneros de videogames' });
  }
});


module.exports = genreRouter;
