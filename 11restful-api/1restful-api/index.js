const express = require("express");
const handler = require("./handler");
const middleware = require("./middleware");

const port = process.env.PORT || 8000;
const app = express();

// Pasang JSON Parser middleware
app.use(express.json());

// Router

// Create
app.post("/books", handler.handleCreateBook);
// Get Data List
app.get("/books", handler.handleListBooks);
// Get Data Id
app.get("/books/:id", middleware.setBook, handler.handleGetBook);
// Update
app.put("/books/:id", middleware.setBook, handler.handleUpdateBook);
// Delete
app.delete("/books/:id", middleware.setBook, handler.handleDeleteBook);

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
