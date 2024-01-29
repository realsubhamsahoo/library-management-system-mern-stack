// models.js
const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // Add other author details as needed
});

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true },
  genre: { type: String },
  // Add other book details as needed
});

const borrowerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNo: { type: String, required: true},
  email: { type: String, required: true},
  // Add other borrower details as needed
});

const transactionSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  borrower: { type: mongoose.Schema.Types.ObjectId, ref: 'Borrower', required: true },
  checkoutDate: { type: Date, required: true },
  returnDate: { type: Date },
});

const Author = mongoose.model('Author', authorSchema);
const Book = mongoose.model('Book', bookSchema);
const Borrower = mongoose.model('Borrower', borrowerSchema);
const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = { Author, Book, Borrower, Transaction };
