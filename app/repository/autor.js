const AutorSchema = require('../schemas/autor');

const saveAuthor = autor => {
    try {
        const autorSchema = new AutorSchema(autor);
        return autorSchema.save();
    }catch(e){
        throw e;
    }
}

const find = async filters => {
    const authorsFindReponse = await AutorSchema.find(filters);
    return authorsFindReponse;
}

const findById = async id => {
    const author = await AutorSchema.findById(id);

    return author;
}

const deleteById = async id => {
   await AutorSchema.findByIdAndRemove(id);
    
}

const updateById = async (_id, body) => {
    const author = await AutorSchema.findOneAndUpdate({ _id }, body);
    return author;
}

module.exports = {
    saveAuthor,
    find,
    findById,
    deleteById,
    updateById
}