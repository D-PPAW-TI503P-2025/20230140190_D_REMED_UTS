const { Book, BorrowLog, User } = require('../models');

// ==========================
// USER meminjam buku
// ==========================
exports.borrowBook = async (req, res) => {
  const { bookId, latitude, longitude } = req.body;
  const userId = req.headers['x-user-id'];

  if (!bookId || !latitude || !longitude || !userId) {
    return res.status(400).json({
      message: 'bookId, latitude, longitude, and userId are required'
    });
  }

  try {
    const book = await Book.findByPk(bookId);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    if (book.stock <= 0) {
      return res.status(400).json({ message: 'Book out of stock' });
    }

    // kurangi stok
    book.stock -= 1;
    await book.save();

    const borrowLog = await BorrowLog.create({
      userId,
      bookId,
      latitude,
      longitude,
    });

    res.status(201).json({
      message: 'Book borrowed successfully',
      borrowLog,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ==========================
// ADMIN: semua riwayat + nama user
// ==========================
exports.getAllBorrowLogs = async (req, res) => {
  try {
    const logs = await BorrowLog.findAll({
      include: [
        {
          model: Book,
          as: 'Book',
          attributes: ['id', 'title']
        },
        {
          model: User,
          as: 'User',
          attributes: ['id', 'username']
        }
      ],
      order: [['createdAt', 'DESC']]
    });

    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ==========================
// USER: riwayat milik sendiri
// ==========================
exports.getUserBorrowLogs = async (req, res) => {
  const userId = req.params.userId;

  try {
    const logs = await BorrowLog.findAll({
      where: { userId },
      include: [
        {
          model: Book,
          as: 'Book',
          attributes: ['id', 'title']
        }
      ],
      order: [['createdAt', 'DESC']]
    });

    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
