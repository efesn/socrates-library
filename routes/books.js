const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// add a new book
router.post('/new', async (req, res) => {
  const book = new Book({
    title: req.body.title,
    isbn: req.body.isbn,
    authors: req.body.authors,
    genre: req.body.genre,
    coverImage: req.body.coverImage
  });

  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// get a single book by id
router.get('/:id', getBook, (req, res) => {
  res.json(res.book);
});

async function getBook(req, res, next) {
  let book;
  try {
    book = await Book.findById(req.params.id);
    if (book == null) {
      return res.status(404).json({ message: 'Book not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.book = book;
  next();
}

// Update a book
router.put('/:id', getBook, async (req, res) => {
  try {
    if (req.body.title != null) {
      res.book.title = req.body.title;
    }
    if (req.body.isbn != null) {
      res.book.isbn = req.body.isbn;
    }
    if (req.body.authors != null) {
      res.book.authors = req.body.authors;
    }
    if (req.body.genre != null) {
      res.book.genre = req.body.genre;
    }
    if (req.body.coverImage != null) {
      res.book.coverImage = req.body.coverImage;
    }
    const updatedBook = await res.book.save();
    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a book
router.delete('/:id', getBook, async (req, res) => {
  try {
    await Book.deleteOne({ _id: req.params.id }); // Remove the book directly from the collection
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

  
  
  
module.exports = router;
