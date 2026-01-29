const express = require('express');
const router = express.Router();
const roleMiddleware = require('../middlewares/roleMiddleware');
const borrowController = require('../controllers/borrowController');

router.post('/', roleMiddleware('user'), borrowController.borrowBook);

module.exports = router;
