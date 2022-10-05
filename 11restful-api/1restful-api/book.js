const books = require("./fixtures/books.json");

class Book {
  static records = books;

  constructor(params) {
    this.id = this._generateId();
    this.title = params.title;
    this.coverImage = params.coverImage;
    this.synopsis = params.synopsis;
    this.publisher = params.publisher;
    this.author = params.author;
    this.price = params.price;
  }

  _generateId() {
    const lastRecordId =
      this.constructor.records[this.constructor.records - 1]?.id || 0;
    return lastRecordId + 1;
  }

  update(params) {
    const idx = this.constructor.records.findIndex((i) => i.id === this.id);

    params.title && (this.title = params.title);
    params.coverImage && (this.coverImage = params.coverImage);
    params.synopsis && (this.synopsis = params.synopsis);
    params.publisher && (this.publisher = params.publisher);
    params.author && (this.author = params.author);
    params.price && (this.price = params.price);

    this.constructor.records[idx] = this;

    return this;
  }

  delete() {
    this.constructor.records = this.constructor.records.filter(
      (i) => i.id !== this.id
    );
  }

  static create(params) {
    const book = new this(params);

    this.records.push(book);

    return book;
  }

  static find(id) {
    const book = this.records.find((i) => i.id === Number(id));
    if (!book) return null;

    return book;
  }

  static list() {
    return this.records;
  }
}

module.exports = Book;
