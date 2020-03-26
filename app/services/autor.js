const Author = require('../models/autor');
const repository = require('../repository/autor');

const getAuthors = async (req, res, next) => {
    const { query } = req;
    const response = await repository.find(query);
    res.send(response);
}

const createAuthor = (req, res) => {
    try {
        const { nome, dataDeNascimento, biografia } = req.body;
        const author = new Author(nome, dataDeNascimento, biografia);    
        const saveAuthorResponse = repository.saveAuthor(author);

        res
        .status(201)
        .send(saveAuthorResponse);
    
    }catch(e) {
        res
        .status(500)
        .send({});
    }

}

const getAuthorById = async (req, res) => {

    const { id } = req.params;
    const response = await repository.findById(id);

    res.send(response);
}

const deleteAuthorById = (req, res) => {
    const { id } = req.params;
    repository.deleteById(id);
    res
    .status(204)
    .send();
}

const updateAuthorById = async (req, res) => {
    const { params: { id }, body } = req;
    const response = await repository.updateById(id, body);
    res
    .status(200)
    .send(response);
}

module.exports = {
    getAuthors,
    createAuthor,
    getAuthorById,
    deleteAuthorById,
    updateAuthorById
}