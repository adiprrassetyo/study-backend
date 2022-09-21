const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}
const dataPath = "./data/contact.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf8");
}

//example 2 asycn await not destructing
const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (nama) => {
      resolve(nama);
    });
  });
};

const simpanContact = (nama, email, noHP) => {
  const contact = { nama, email, noHP };

  const file = fs.readFileSync("data/contact.json", "utf8");
  const contacts = JSON.parse(file);

  contacts.push(contact);

  console.log(contacts);
  fs.writeFileSync("data/contact.json", JSON.stringify(contacts, null, 2));

  console.log("Terimakasih Sudah Memasukkan data.");

  rl.close();
};

module.exports = { tulisPertanyaan, simpanContact };
