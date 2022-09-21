const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");

const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}
const dataPath = "./data/contact.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf8");
}

const loadContact = () => {
  const file = fs.readFileSync("data/contact.json", "utf8");
  const contacts = JSON.parse(file);
  return contacts;
};

const simpanContact = (nama, email, noHP) => {
  const contact = { nama, email, noHP };

  const contacts = loadContact();
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

const listContact = () => {
  const contacts = loadContact();
  console.log(chalk.cyan.inverse.bold("Ini Daftar Kontak :"));
  contacts.forEach((contact, i) => {
    console.log(`${i + 1}.${contact.nama} - ${contact.noHP}`);
  });
};

const detailContact = (nama) => {
  const contacts = loadContact();

  const contact = contacts.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );

  if (!contact) {
    console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan`));
    return false;
  }

  console.log(chalk.cyan.inverse.bold(contact.nama));
  console.log(contact.noHP);
  if (contact.email) {
    console.log(contact.email);
  }
};

const deleteContact = (nama) => {
  const contacts = loadContact();
  const newContacts = contacts.filter(
    (contact) => contact.nama.toLowerCase() !== nama.toLowerCase()
  );

  if (contacts.length === newContacts.length) {
    console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan`));
    return false;
  }

  fs.writeFileSync("data/contact.json", JSON.stringify(newContacts));

  console.log(
    chalk.green.inverse.bold(`data contact ${nama} berhasil dihapus`)
  );
};

module.exports = { simpanContact, listContact, detailContact, deleteContact };
