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

// rl.question("Masukkan Nama Anda :", (nama) => {
//   rl.question("Masukkan Nomor Hp Anda :", (nomor) => {
//     console.log(`Terima Kasih ${nama} sudah menginputkan nomor anda ${nomor}`);
//   });
//   rl.close;
// });

const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}
const dataPath = "./data/contact.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf8");
}

//example 2
// rl.question("Masukkan Nama Anda :", (nama) => {
//   rl.question("Masukkan Nomor Hp Anda :", (nomor) => {
//     // console.log(`Terima Kasih ${nama} sudah menginputkan nomor anda ${nomor}`);
//     const contact = { nama, nomor };
//     const file = fs.readFileSync("data/contact.json", "utf8");
//     const contacts = JSON.parse(file);

//     contacts.push(contact);

//     console.log(contacts);
//     fs.writeFileSync("data/contact.json", JSON.stringify(contacts, null, 2));

//     console.log("Terimakasih Sudah Memasukkan data.");

//     rl.close();
//   });
// });

//example 1 asycn await not destructing
// const pertanyaan1 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question("Masukkan Nama Anda :", (nama) => {
//       resolve(nama);
//     });
//   });
// };
// const pertanyaan2 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question("Masukkan Email Anda :", (email) => {
//       resolve(email);
//     });
//   });
// };

//example 2 asycn await not destructing
const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (nama) => {
      resolve(nama);
    });
  });
};

const main = async () => {
  const nama = await tulisPertanyaan("Masukkan Nama Anda :");
  const email = await tulisPertanyaan("Masukkan Email Anda :");
  const noHP = await tulisPertanyaan("Masukkan No Hp anda : ");

  const contact = { nama, email, noHP };

  const file = fs.readFileSync("data/contact.json", "utf8");
  const contacts = JSON.parse(file);

  contacts.push(contact);

  console.log(contacts);
  fs.writeFileSync("data/contact.json", JSON.stringify(contacts, null, 2));

  console.log("Terimakasih Sudah Memasukkan data.");

  rl.close();
};

main();
