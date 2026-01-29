const { Book } = require('../models');

// GET all books
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET book by ID
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json(book);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// CREATE book (admin)
exports.createBook = async (req, res) => {
    const { title, author, stock } = req.body;

    if (!title || !author) {
        return res.status(400).json({ message: 'Title and author are required' });
    }

    try {
        const book = await Book.create({ title, author, stock });
        res.status(201).json(book);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// UPDATE book (admin)
exports.updateBook = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        await book.update(req.body);
        res.json(book);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// DELETE book (admin)
exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        await book.destroy();
        res.json({ message: 'Book deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
