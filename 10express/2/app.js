const express = require("express");
const app = express();
const port = 3000;
const expressLayouts = require("express-ejs-layouts");

//gunakan ejs
app.set("view engine", "ejs");
app.use(expressLayouts);

app.get("/", (req, res) => {
  const mahasiswa = [
    {
      nama: "Adi Prasetyo",
      email: "adi@gmail.com",
    },
    {
      nama: "cipto",
      email: "cipto@gmail.com",
    },
    {
      nama: "dadang",
      email: "dadang@gmail.com",
    },
  ];

  // res.sendFile("./index.html", { root: __dirname });
  res.render("index", {
    nama: "Adi Prasetyo",
    layout: "layouts/main-layouts",
    title: "Halaman Home",
    mahasiswa,
  });
});

app.get("/about", (req, res) => {
  // res.sendFile("./about.html", { root: __dirname });
  res.render("about", {
    layout: "layouts/main-layouts",
    title: "Halaman HAbout",
  });
});

app.get("/contact", (req, res) => {
  // res.sendFile("./contact.html", { root: __dirname });
  res.render("contact", {
    layout: "layouts/main-layouts",
    title: "Halaman Contact",
  });
});

app.get("/product/:id/", (req, res) => {
  res.send(
    `Product ID :  ${req.params.id} <br> Category ID : ${req.params.id}`
  );
});
// app.get("/product/:id/category/:query", (req, res) => {
//   res.send(
//     `Product ID :  ${req.params.id} <br> Category Name : ${req.query.category}`
//     // http://localhost:3000/product/50?category=shoes
//   );
// });

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
