const fs = require("fs");

const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}
const dataPath = "./data/contact.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf8");
}
// ambil semua data contact.json
const loadContact = () => {
  const file = fs.readFileSync("data/contact.json", "utf8");
  const contacts = JSON.parse(file);
  return contacts;
};

const findContact = (nama) => {
  const contacts = loadContact();

  const contact = contacts.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );
  return contact;
};
// Menuliskan / menimpa file contacts.json dengan data yang baru
const saveContacts = (contacts) => {
  fs.writeFileSync("data/contact.json", JSON.stringify(contacts));
};

// Menambahkan data contact baru
const addContact = (contact) => {
  const contacts = loadContact();
  contacts.push(contact);
  saveContacts(contacts);
};

const cekDuplikat = (nama) => {
  const contacts = loadContact();
  return contacts.find((contact) => contact.nama === nama);
};

// Delete Contact
const deleteContact = (nama) => {
  const contacts = loadContact();
  const filteredContacts = contacts.filter((contact) => contact.nama !== nama);
  saveContacts(filteredContacts);
};

const updateContacts = (contactBaru) => {
  const contacts = loadContact();
  // Hilangkan contact lama yang namanya sama dengan oldNama
  const filteredContacts = contacts.filter(
    (contact) => contact.nama !== contactBaru.oldNama
  );
  delete contactBaru.oldNama;
  filteredContacts.push(contactBaru);
  saveContacts(filteredContacts);
  //   saya punya cara lain pak untuk update contact, jadi begini:
  // 1. Cari index kontak yang akan kita ganti, dengan cara ini:
  // const index = contacts.findIndex(c => c.name === name) // name ini berisi nama lama

  // 2. Lalu kita ganti aja value index object kontak lama kita dengan yang baru:
  // contacs[index] = updatedContact // updatedContact berisi object baru kita, tanpa ada old name

  // 3. Kemudian tinggal kita save aja array object nya:
  // saveContacts(contacts)

  // 4. Selesai, jadi jika setelah di update tidak akan berada di urutan akhir array
};

module.exports = {
  loadContact,
  findContact,
  addContact,
  cekDuplikat,
  deleteContact,
  updateContacts,
};
