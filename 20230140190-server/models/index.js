const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// model
const Book = require('./Book');
const BorrowLog = require('./BorrowLog');
const User = require('./user')(sequelize, DataTypes);

// =====================
// Relasi Book ↔ BorrowLog
// =====================
Book.hasMany(BorrowLog, {
  foreignKey: 'bookId',
  as: 'BorrowLogs'
});
BorrowLog.belongsTo(Book, {
  foreignKey: 'bookId',
  as: 'Book'
});

// =====================
// Relasi User ↔ BorrowLog  <<< WAJIB ADA
// =====================
User.hasMany(BorrowLog, {
  foreignKey: 'userId',
  as: 'BorrowLogs'
});
BorrowLog.belongsTo(User, {
  foreignKey: 'userId',
  as: 'User'
});

// export semua model
module.exports = {
  sequelize,
  Book,
  BorrowLog,
  User
};
