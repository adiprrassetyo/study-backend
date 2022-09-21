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

// example 2
rl.question("Masukkan Nama Anda :", (nama) => {
  rl.question("Masukkan Nomor Hp Anda :", (nomor) => {
    // console.log(`Terima Kasih ${nama} sudah menginputkan nomor anda ${nomor}`);
    const contact = { nama, nomor };
    const file = fs.readFileSync("data/contact.json", "utf8");
    const contacts = JSON.parse(file);

    contacts.push(contact);

    console.log(contacts);
    fs.writeFileSync("data/contact.json", JSON.stringify(contacts, null, 2));

    console.log("Terimakasih Sudah Memasukkan data.");

    rl.close();
  });
});
