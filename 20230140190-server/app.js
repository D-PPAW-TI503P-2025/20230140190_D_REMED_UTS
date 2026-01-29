const express = require('express');

const bookRoutes = require('./routes/bookRoutes');
const borrowRoutes = require('./routes/borrowRoutes');

const app = express();

// Middleware global
app.use(express.json());

// Routes
app.use('/api/books', bookRoutes);
app.use('/api/borrow', borrowRoutes);

// Test endpoint
app.get('/', (req, res) => {
    res.json({ message: 'Library API is running' });
});

module.exports = app;
