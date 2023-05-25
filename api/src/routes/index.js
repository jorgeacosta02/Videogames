const { Router } = require('express');
const videoRouter = require('./videogameRouter');
const genreRouter = require('./genreRouter');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames', videoRouter);
router.use('/genres', genreRouter);

module.exports = router;
