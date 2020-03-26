const express = require('express');
const router = express.Router();
const service = require('../services/autor')


router.get('/', service.getAuthors);
router.post('/', service.createAuthor);
router.get('/:id', service.getAuthorById);
router.delete('/:id', service.deleteAuthorById);
router.put('/:id', service.updateAuthorById);


module.exports = router;