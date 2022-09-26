const express = require("express");
const app = express();

// Ambil port dari environment variable
// Dengan nilai default 8000
const PORT = process.env.PORT || 8000;

// Bilang ke express kalo kita mau
// pake EJS sebagai view engine
app.set('view engine', 'ejs')

// GET /?name=Fikri
app.get("/", (req, res) => {
  res.render('index', {
    name: req.query.name || 'Guest'
  })
})

app.listen(PORT, () => {
  console.log(`Server nyala di http://localhost:${PORT}`);
})
