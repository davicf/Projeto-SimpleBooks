const BookSchema = require('../schemas/livro');

const saveBook = book => {
    try {
        const bookSchema = new BookSchema(book);
        return bookSchema.save();
    }catch(e){
        throw e;
    }
}

const find = async filters => {
    const booksFindReponse = await BookSchema.find(filters);
    return booksFindReponse;
}

const findById = async id => {
    const book = await BookSchema.findById(id);

    return book;
}

const deleteById = async id => {
   await BookSchema.findByIdAndRemove(id);
    
}

const updateById = async (_id, body) => {
    const book = await BookSchema.findOneAndUpdate({ _id }, body);
    return book;
}

module.exports = {
    saveBook,
    find,
    findById,
    deleteById,
    updateById
}