const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    nome: String,
    dataDeNascimeno: Date,
    biografia: String
});

module.exports = mongoose.model('Autor', AuthorSchema);