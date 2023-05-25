const { DataTypes } = require('sequelize');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: () => uuidv4(),
      primaryKey: true,
  },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        is: /^[a-zA-Z0-9\s]+$/i,
      }
    },

    description:{
      type: DataTypes.STRING,
      allowNull: false,
    },

    platforms:{
      type: DataTypes.STRING,
      allowNull: false,
    },

    image:{
      type: DataTypes.STRING,
      allowNull:false
    },
   
    releaseDate:{
      type: DataTypes.STRING,
      allowNull:false
    },
  
    rating:{
      type: DataTypes.FLOAT,
      allowNull:false
    },
    genreIds:{
      type: DataTypes.ARRAY(DataTypes.STRING), 
    }
  },
    {
      timestamps:false,
    }  
  );
};

const basename = path.basename(__filename);
console.log(basename);

// ID (deben ser distintos a los que vienen de la API). *
// Nombre. *
// Descripción. *
// Plataformas. *
// Imagen. *
// Fecha de lanzamiento. *
// Rating. *

// Name. *
// Description. *
// platforms. *
// Image. *
// Release date. *
// Classification. *