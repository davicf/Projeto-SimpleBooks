const AuthorSchema = require('../schemas/autor');

const saveAuthor = author => {
    try {
        const authorSchema = new AuthorSchema(author);
        return authorSchema.save();
    }catch(e){
        throw e;
    }
}

const find = async filters => {
    const authorsFindReponse = await AuthorSchema.find(filters);
    return authorsFindReponse;
}

const findById = async id => {
    const author = await AuthorSchema.findById(id);

    return author;
}

const deleteById = async id => {
   await AuthorSchema.findByIdAndRemove(id);
    
}

const updateById = async (_id, body) => {
    const author = await AuthorSchema.findOneAndUpdate({ _id }, body);
    return author;
}

module.exports = {
    saveAuthor,
    find,
    findById,
    deleteById,
    updateById
}