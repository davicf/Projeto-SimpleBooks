const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AutorSchema = new Schema({
    nome: String,
    dataDeNascimeno: Date,
    biografia: String
});

module.exports = mongoose.model('Autor', AutorSchema);