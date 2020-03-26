const express = require('express');
const router = express.Router();
const service = require('../services/livro');


router.get('/', service.getLivros);
router.post('/', service.createLivro);
router.get('/:id', service.getLivroById);
router.delete('/:id', service.deleteLivroById);
router.put('/:id', service.updateLivroById);


module.exports = router;