const express = require("express");
const app = express();

// Ambil port dari environment variable
// Dengan nilai default 8000
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/api/v1/login", (req, res) => {
  res.send("Masoook!");
});

app.use((req, res) => {
  res.send("Mau kemana bos?");
});

app.listen(PORT, () => {
  console.log(`Express nyala di http://localhost:${PORT}`);
});
