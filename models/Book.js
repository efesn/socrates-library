const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  isbn: { type: String, required: true },
  authors: [{ type: String }],
  genre: { type: String },
  coverImage: { type: String }
});

module.exports = mongoose.model('Book', bookSchema);