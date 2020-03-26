const bodyParser = require('body-parser');
const authorRouter = require('../routes/autor');
const livroRouter = require('../routes/livro');

const setMiddlewares = app => {
    app.use(bodyParser.urlencoded({ extended: true}));
    app.use(bodyParser.json());
}

const setRoutes = app => {
    app.use('/api/autores', authorRouter),
    app.use('/api/livros', livroRouter);
}

const startMiddlewares = app => {
    setMiddlewares(app)
    setRoutes(app)
}

module.exports = startMiddlewares;