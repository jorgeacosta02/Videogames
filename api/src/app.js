const express = require('express');
const cookieParser = require('cookie-parser');// tiene que ver con idengificar al client
const bodyParser = require('body-parser');// par extraer la info de la body o url
const morgan = require('morgan');// muestra lo que hace el servidor
const routes = require('./routes/index.js');
const cors = require('cors');


require('./db.js');

const server = express();// se instancia el servidor.

server.name = 'API';

server.use(cors());

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));//'dev' se coloca para que muestre solo algunos datos.
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes);// Establece que cuando en la url haya / utilice las routes.

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
