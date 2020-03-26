const LivroSchema = require('../schemas/livro');

const saveLivro = livro => {
    try {
        const livroSchema = new LivroSchema(livro);
        return livroSchema.save();
    }catch(e){
        throw e;
    }
}

const find = async filters => {
    const livrosFindReponse = await LivroSchema.find(filters);
    return livrosFindReponse;
}

const findById = async id => {
    const livro = await LivroSchema.findById(id);

    return livro;
}

const deleteById = async id => {
   await LivroSchema.findByIdAndRemove(id);
    
}

const updateById = async (_id, body) => {
    const livro = await LivroSchema.findOneAndUpdate({ _id }, body);
    return livro;
}

module.exports = {
    saveLivro,
    find,
    findById,
    deleteById,
    updateById
}