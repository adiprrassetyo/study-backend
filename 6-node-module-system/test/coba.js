// console.log("jancok");

function CetakNama(nama) {
  return `Halo, Nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
  nama: "Dodi Ferdiansah",
  umur: 20,
  cetakMhs() {
    return `Halo Nama Saya ${this.nama} dan saya ${this.umur} tahun`;
  },
};

class Orang {
  constructor() {
    console.log("Objek Orang telah dibuat !");
  }
}

// module.exports.CetakNama = CetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// module.exports = {
//   CetakNama: CetakNama,
//   PI: PI,
//   mahasiswa: mahasiswa,
//   Orang: Orang,
// };

module.exports = {
  CetakNama,
  PI,
  mahasiswa,
  Orang,
};
