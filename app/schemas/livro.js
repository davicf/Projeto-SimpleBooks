const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LivroSchema = new Schema({
    titulo: String,
    ano: Number,
    paginas: Number,
    resumo: String,
    capa: String,
    nota: Number,
    autor_id: {
        type: String,
        index: true,
    }
    
});

module.exports = mongoose.model('Livro', LivroSchema);