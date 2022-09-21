// const fs = require("fs"); //core module
// const CetakNama = require("./coba"); //locel module
// const moment = require("moment"); //third party module // npm module / node_modules
// console.log(CetakNama("hehehe"));
// console.log("wasu");

const coba = require("./coba");
// console.log(coba);
console.log(
  coba.CetakNama("danu"),
  coba.PI,
  coba.mahasiswa.cetakMhs(),
  new coba.Orang()
);
