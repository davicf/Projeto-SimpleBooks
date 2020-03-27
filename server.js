//Chamadas dos pacotes
const express = require('express');
const app = express();
const startMiddlewares = require('./app/config/middlewares');
const connectDb = require('./app/config/db');
const cors = require('cors');

app.use(cors());
//Definindo a ports onde será executada a api
const port = process.env.port || 8000;

//Conectando com o mongo
connectDb();

//Inicializando os middlewares e rotas
startMiddlewares(app);

//Iniciando a Aplicação
app.listen(port);
console.log('Iniciando a app na porta ' + port);