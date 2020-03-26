const Book = require('../models/livro');
const repository = require('../repository/livro');

const getBooks = async (req, res, next) => {
    const { query } = req;
    const response = await repository.find(query);
    res.send(response);
}

const createBook = (req, res) => {
    try {
        const { titulo, ano, paginas, resumo, capa, nota, autor_id } = req.body;
        const book = new Book(titulo, ano, paginas, resumo, capa, nota, autor_id);    
        const saveBookResponse = repository.saveBook(book);

        res
        .status(201)
        .send(saveBookResponse);
    
    }catch(e) {
        res
        .status(500)
        .send({});
    }

}

const getBookById = async (req, res) => {

    const { id } = req.params;
    const response = await repository.findById(id);

    res.send(response);
}

const getBooksByAuthorId = async (req, res) => {
    const { id } = req.params;
    const response = await repository.find({ autor_id: id });

    res.send(response);
}

const deleteBookById = (req, res) => {
    const { id } = req.params;
    repository.deleteById(id);
    res
    .status(204)
    .send();
}

const updateBookById = async (req, res) => {
    const { params: { id }, body } = req;
    const response = await repository.updateById(id, body);
    res
    .status(200)
    .send(response);
}

module.exports = {
    getBooks,
    createBook,
    getBookById,
    getBooksByAuthorId,
    deleteBookById,
    updateBookById
}