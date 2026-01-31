const express = require('express');
const router = express.Router();
const roleMiddleware = require('../middlewares/roleMiddleware');
const borrowController = require('../controllers/borrowController');

// User meminjam buku
router.post('/', roleMiddleware('user'), borrowController.borrowBook);

// Admin melihat semua riwayat peminjaman
router.get('/', roleMiddleware('admin'), borrowController.getAllBorrowLogs);

// User melihat riwayat miliknya sendiri
router.get('/user/:userId', roleMiddleware('user'), borrowController.getUserBorrowLogs);

module.exports = router;
