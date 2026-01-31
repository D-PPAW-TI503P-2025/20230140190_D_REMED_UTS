const express = require('express');
const cors = require('cors');

const bookRoutes = require('./routes/bookRoutes');
const borrowRoutes = require('./routes/borrowRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// middleware global
app.use(cors());
app.use(express.json());

// routes API
app.use('/api/books', bookRoutes);
app.use('/api/borrow', borrowRoutes);
app.use('/api/auth', authRoutes);

// test endpoint
app.get('/', (req, res) => {
    res.json({ message: 'Library API is running' });
});

module.exports = app;
