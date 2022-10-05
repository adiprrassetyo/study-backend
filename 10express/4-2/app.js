const express = require("express");
const app = express();
const port = 3000;
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const {
  loadContact,
  findContact,
  addContact,
  cekDuplikat,
} = require("./utils/contacts");
const { body, validationResult, check } = require("express-validator");

//gunakan ejs
app.set("view engine", "ejs");
// Third-Party Middleware
app.use(expressLayouts);

// Build-in Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// konfigurasi
app.use(cookieParser("scret"));
app.use(
  session({
    cookie: { maxAge: 6000 },
    scret: "scret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

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

  res.render("index", {
    nama: "Adi Prasetyo",
    layout: "layouts/main-layouts",
    title: "Halaman Home",
    mahasiswa,
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layouts/main-layouts",
    title: "Halaman HAbout",
  });
});
// halaman contact
app.get("/contact", (req, res) => {
  const contacts = loadContact();
  res.render("contact", {
    layout: "layouts/main-layouts",
    title: "Halaman Contact",
    contacts,
    msg: req.flash("msg"),
  });
});
// halaman form tambah data
app.get("/contact/add", (req, res) => {
  res.render("add-contact", {
    layout: "layouts/main-layouts",
    title: "Form Tambah Data Contact",
  });
});

// procces data contact
app.post(
  "/contact",
  [
    body("nama").custom((value) => {
      const duplikat = cekDuplikat(value);
      if (duplikat) {
        throw new Error("Nama contact sudah ada");
      }
      return true;
    }),
    check("email", "Email tidak valid!").isEmail(),
    check("noHP", "NoHP tidak valid!").isMobilePhone("id-ID"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // return res.status(400).json({errors:errors.array()})
      res.render("add-contact", {
        title: "Form Tambah Data Contact",
        layout: "layouts/main-layouts",
        errors: errors.array(),
      });
    } else {
      addContact(req.body);
      // kirimkan flash message
      req.flash("msg", "Data Contact berhasil ditambahkan!");
      res.redirect("/contact");
    }
  }
);

// halaman detail contact
app.get("/contact/:nama", (req, res) => {
  const contact = findContact(req.params.nama);
  res.render("detail", {
    layout: "layouts/main-layouts",
    title: "Halaman Detail Contact",
    contact,
  });
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
