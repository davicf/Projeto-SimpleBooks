//Chamadas dos pacotes
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Configuração da variável app para usar o 'bodyParse()'
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Definindo a ports onde será executada a api
const port = process.env.port || 8000;

//Criando uma instância das Rotas via Express
const router = express.Router();


router.get('/', function(req, res) {
    res.json({ message: 'Ok'});
});

//Definindo um padrão das rotas prefixadas '/api'
app.use('/api', router);

//Iniciando a Aplicação
app.listen(port);
console.log('Iniciando a app na porta ' + port);