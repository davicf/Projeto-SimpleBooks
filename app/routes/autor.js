const express = require('express');
const router = express.Router();
const service = require('../services/autor')
const livroService = require('../services/livro')


router.get('/', service.getAuthors);
router.post('/', service.createAuthor);
router.get('/:id', service.getAuthorById);
router.delete('/:id', service.deleteAuthorById);
router.put('/:id', service.updateAuthorById);
router.get('/:id/livros', livroService.getLivrosByAutorId);


module.exports = router;