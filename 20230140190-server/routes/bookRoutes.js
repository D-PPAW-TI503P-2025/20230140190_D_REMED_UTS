const express = require('express');
const router = express.Router();
const roleMiddleware = require('../middlewares/roleMiddleware');
const bookController = require('../controllers/bookController');

// Public
router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);

// Admin
router.post('/', roleMiddleware('admin'), bookController.createBook);
router.put('/:id', roleMiddleware('admin'), bookController.updateBook);
router.delete('/:id', roleMiddleware('admin'), bookController.deleteBook);

module.exports = router;
