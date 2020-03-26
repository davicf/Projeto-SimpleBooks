const Livro = require('../models/livro');
const repository = require('../repository/livro');

const getLivros = async (req, res, next) => {
    const { query } = req;
    const response = await repository.find(query);
    res.send(response);
}

const createLivro = (req, res) => {
    try {
        const { titulo, ano, paginas, resumo, capa, nota } = req.body;
        const livro = new Livro(titulo, ano, paginas, resumo, capa, nota);    
        const saveLivroResponse = repository.saveLivro(livro);

        res
        .status(201)
        .send(saveLivroResponse);
    
    }catch(e) {
        res
        .status(500)
        .send({});
    }

}

const getLivroById = async (req, res) => {

    const { id } = req.params;
    const response = await repository.findById(id);

    res.send(response);
}

const deleteLivroById = (req, res) => {
    const { id } = req.params;
    repository.deleteById(id);
    res.status(204).send();
}

const updateLivroById = async (req, res) => {
    const { params: { id }, body } = req;
    const response = await repository.updateById(id, body);
    res.status(200).send(response);
}

module.exports = {
    getLivros,
    createLivro,
    getLivroById,
    deleteLivroById,
    updateLivroById
}