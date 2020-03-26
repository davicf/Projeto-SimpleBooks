const express = require('express');
const router = express.Router();
const service = require('../services/livro');


router.get('/', service.getBooks);
router.post('/', service.createBook);
router.get('/:id', service.getBookById);
router.delete('/:id', service.deleteBookById);
router.put('/:id', service.updateBookById);


module.exports = router;