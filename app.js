// app.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
const { Author, Book, Borrower, Transaction } = require('./models');

// MongoDB connection
mongoose.connect('mongodb://localhost/library');

app.use(bodyParser.json());
// API endpoints go here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Create author
app.post('/api/authors', async (req, res) => {
    try {
      const author = await Author.create(req.body);
      res.json(author);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Get all authors
  app.get('/api/authors', async (req, res) => {
    try {
      const authors = await Author.find();
      res.json(authors);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Create book
app.post('/api/books', async (req, res) => {
    try {
      const book = await Book.create(req.body);
      res.json(book);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Get all books
  app.get('/api/books', async (req, res) => {
    try {
      const books = await Book.find().populate('author');
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Update book
  app.put('/api/books/:id', async (req, res) => {
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(book);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Delete book
  app.delete('/api/books/:id', async (req, res) => {
    try {
      await Book.findByIdAndDelete(req.params.id);
      res.json({ message: 'Book deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Create borrower
app.post('/api/borrowers', async (req, res) => {
    try {
      const borrower = await Borrower.create(req.body);
      res.json(borrower);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Get all borrowers
  app.get('/api/borrowers', async (req, res) => {
    try {
      const borrowers = await Borrower.find();
      res.json(borrowers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Update borrower
  app.put('/api/borrowers/:id', async (req, res) => {
    try {
      const borrower = await Borrower.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(borrower);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Delete borrower
  app.delete('/api/borrowers/:id', async (req, res) => {
    try {
      await Borrower.findByIdAndDelete(req.params.id);
      res.json({ message: 'Borrower deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
// Check out a book
app.post('/api/transactions/check-out', async (req, res) => {
    try {
      const transaction = await Transaction.create({
        book: req.body.bookId,
        borrower: req.body.borrowerId,
        checkoutDate: new Date(),
      });
      res.json(transaction);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Return a book
  app.post('/api/transactions/return', async (req, res) => {
    try {
      const transaction = await Transaction.findOne({ book: req.body.bookId, returnDate: null });
      if (!transaction) {
        return res.status(404).json({ error: 'Book not checked out or already returned.' });
      }
      transaction.returnDate = new Date();
      await transaction.save();
      res.json(transaction);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
// Search for books by title, author, or genre
app.get('/api/books/search', async (req, res) => {
    try {
      const query = req.query.q;
      const books = await Book.find({
        $or: [
          { title: { $regex: new RegExp(query, 'i') } },
          { genre: { $regex: new RegExp(query, 'i') } },
        ],
      }).populate('author');
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // User authentication middleware
  const authenticateUser = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ error: 'Unauthorized' });
  
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) return res.status(403).json({ error: 'Forbidden' });
      req.user = user;
      next();
    });
  };
  