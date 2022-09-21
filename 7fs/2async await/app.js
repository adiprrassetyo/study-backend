const fs = require("fs");
// console.log(fs);

// {
//   // menuliskan string ke file (synchronous)
// try {
//   fs.writeFileSync("data/file.txt", "Hello World secara synchronous!");
// } catch (error) {
//   console.log(error);
// }
// }

// {
//   // Menuliskan string ke file (asynchronous)
//   fs.writeFile("data/file.txt", "Hellow World Secara aasychronous", (e) => {
//     console.log(e);
//   });
// }

//membaca isi file (synchronous)
// const data = fs.readFileSync("data/file.txt", "utf-8");
// console.log(data);

// {
//   //membaca isi file (synchronous)
//   fs.readFile("data/file.txt", "utf-8", (e, data) => {
//     if (e) throw e;
//     console.log(data);
//   });
// }

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

// example 1 asycn await not destructing
const pertanyaan1 = () => {
  return new Promise((resolve, reject) => {
    rl.question("Masukkan Nama Anda :", (nama) => {
      resolve(nama);
    });
  });
};
const pertanyaan2 = () => {
  return new Promise((resolve, reject) => {
    rl.question("Masukkan Email Anda :", (email) => {
      resolve(email);
    });
  });
};

const main = async () => {
  const nama = await pertanyaan1();
  const email = await pertanyaan2();
  const contact = { nama, email };
  const file = fs.readFileSync("data/contact.json", "utf8");
  const contacts = JSON.parse(file);

  contacts.push(contact);

  console.log(contacts);
  fs.writeFileSync("data/contact.json", JSON.stringify(contacts, null, 2));

  console.log("Terimakasih Sudah Memasukkan data.");

  rl.close();
};

main();
