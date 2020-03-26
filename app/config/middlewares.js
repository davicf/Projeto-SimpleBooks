const bodyParser = require('body-parser');
const authorRouter = require('../routes/autor');

const setMiddlewares = app => {
    app.use(bodyParser.urlencoded({ extended: true}));
    app.use(bodyParser.json());
}

const setRoutes = app => {
    app.use('/api/autores', authorRouter);
}

const startMiddlewares = app => {
    setMiddlewares(app)
    setRoutes(app)
}

module.exports = startMiddlewares;