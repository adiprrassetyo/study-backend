const Book = require("./book");

function handleCreateBook(req, res) {
  const book = Book.create(req.body);

  res.status(201).json(book);
}

function handleListBooks(req, res) {
  const books = Book.list();

  res.status(200).json(books);
}

function handleGetBook(req, res) {
  const book = req.book;

  res.status(200).json(book);
}

function handleUpdateBook(req, res) {
  const book = req.book;

  book.update(req.body);

  res.status(200).json(book);
}

function handleDeleteBook(req, res) {
  const book = req.book;

  book.delete();

  res.status(204).end();
}

module.exports = {
  handleCreateBook,
  handleListBooks,
  handleGetBook,
  handleUpdateBook,
  handleDeleteBook,
};
