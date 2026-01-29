const { Book, BorrowLog } = require('../models');

exports.borrowBook = async (req, res) => {
  const { bookId, latitude, longitude } = req.body;
  const userId = req.headers['x-user-id'];

  if (!bookId || !latitude || !longitude || !userId) {
    return res.status(400).json({ message: 'bookId, latitude, longitude, and userId are required' });
  }

  try {
    const book = await Book.findByPk(bookId);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    if (book.stock <= 0) {
      return res.status(400).json({ message: 'Book out of stock' });
    }

    // Kurangi stok
    book.stock -= 1;
    await book.save();

    // Catat peminjaman + lokasi
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
