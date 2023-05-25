const express = require('express');
const cors = require('cors');
const { Videogame, Genre } = require('../db.js')
const { Op } = require('sequelize');


const videoRouter = express.Router();

  console.log('por entrar a videoRouter');

  videoRouter.get('/', async (req, res) => {
    console.log('iniciando videogameRouter');
    try {
      const { name } = req.query;
      let videogames;
      if (name) {
        videogames = await Videogame.findAll({
          where: {
            name: {
              [Op.iLike]: `%${name}%`
            }
          },
          include: [
            {
              model: Genre,
              attributes: ['name'],
            },
          ],
        });
      } else {
        videogames = await Videogame.findAll({
          include: [
            {
              model: Genre,
              attributes: ['name'],
            },
          ],
        });
      }

      res.status(200).json(videogames);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
});
  
videoRouter.get('/:idVideogame',cors(),async(req,res)=>{
    console.log('idVideogame funciona en videoRouter');
    try{
      const {idVideogame} = req.params;
      console.log('idVideogame.length en videorouter', idVideogame.length);
      console.log('idVideogame en videoRouter', idVideogame);
      // if(idName.length===36){
        const videogame = await Videogame.findByPk(idVideogame, {
          include: [
            {
              model: Genre,
              through: 'VideoGameGenre'
            }],
        });
        console.log(' videogame.dataValues en videoRouter',videogame);
        res.status(200).json(videogame);
    }catch(err){
        res.status(400).json({error: err.message});
    };
});

videoRouter.post('/', cors(), async (req, res) => {
  console.log('entrando a post')
  try {
    const {name,description,platforms,image,releaseDate,rating} = req.body;
    console.log('description en post',description);
    if(name.length <= 3){
      throw new Error ('El nombre debe tener más de 3 letras.')
    };
    if(rating > 5){
      throw new Error ('El rating no puede ser mayor a 5.')
    };
    // console.log('name en post',name);
    const newVideogame = await Videogame.create({name,description,platforms,image,releaseDate,rating});
    // console.log('newVideogame en post', newVideogame);
    const genreIds = req.body.genreIds;
    // console.log('genreIds antes del Promise.all', genreIds)
    await Promise.all(
      genreIds.map(async genreId => {
        const genre = await Genre.findByPk(genreId);
        if (genre) {
          await newVideogame.addGenre(genre);
        }
      })
    );

    res.status(201).json(newVideogame);
  } catch (error) {
    console.error('error en videoRouter', error);
    res.status(400).json({ message: error.message });
  }
});

module.exports = videoRouter;


videoRouter.post('/', cors(), async (req, res) => {
  console.log('entrando a post');
  try {
    const { name, description, platforms, image, releaseDate, rating } = req.body;
    console.log('description en post', description);
    if (name.length <= 3) {
      throw new Error('El nombre debe tener más de 3 letras.');
    }
    // Resto del código
  } catch (error) {
    console.error('error en videoRouter', error);
    res.status(400).json({ message: error.message });
  }
});
