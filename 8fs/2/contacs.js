const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");

// membuat folder data jika belum ada
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}
// membuat file contacts.json jika belum ada
const dataPath = "./data/contact.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf8");
}

const simpanContact = (nama, email, noHP) => {
  const contact = { nama, email, noHP };

  const file = fs.readFileSync("data/contact.json", "utf8");
  const contacts = JSON.parse(file);

  //cekk duplikat nama
  const duplikat = contacts.find((contact) => contact.nama === nama);
  if (duplikat) {
    console.log(
      chalk.red.inverse.bold("Contact sudah terdaftar, gunakan nama lain!")
    );
    return false;
  }

  //cek email
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.red.inverse.bold("Email Tidak valid!"));
      return false;
    }
  }

  //cek noHP
  if (!validator.isMobilePhone(noHP, "id-ID")) {
    console.log(chalk.red.inverse.bold("No HP tidak valid !"));
    return false;
  }

  // push ke contact
  contacts.push(contact);

  // writefile
  fs.writeFileSync("data/contact.json", JSON.stringify(contacts, null, 2));

  console.log(chalk.green.inverse.bold("Terimakasih Sudah Memasukkan data."));
};

const listContact = () => {};

module.exports = { simpanContact, listContact };
