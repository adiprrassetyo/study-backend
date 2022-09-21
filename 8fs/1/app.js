const yargs = require("yargs");
const contacts = require("./contacs");
// console.log(process.argv);
// console.log(yargs);
yargs
  .command({
    command: "add",
    describe: "Menambahkan contact baru",
    builder: {
      nama: {
        describe: "Nama Lengkap",
        demandOption: "true",
        type: "string",
      },
      email: {
        describe: "Email",
        demandOption: "false",
        type: "string",
      },
      noHP: {
        describe: "No Hp",
        demandOption: "true",
        type: "string",
      },
    },
    handler(argv) {
      contacts.simpanContact(argv.nama, argv.email, argv.noHP);
    },
  })
  .demandCommand();

// menampilkan daftar semua nama & no hp contact
yargs.command({
  command: "list",
  describe: "Menampilkan semua nama & no HP contact",
  handler() {
    contacts.listContact();
  },
});

// menampilkan Detail sebuah contact
yargs.command({
  command: "detail",
  describe: "Menampilkan detail contactt berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: "true",
      type: "string",
    },
  },
  handler(argv) {
    contacts.detailContact(argv.nama);
  },
});

// Menghapus contact berdasarkan nama
yargs.command({
  command: "delete",
  describe: "Menghapus sebuah contactt berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: "true",
      type: "string",
    },
  },
  handler(argv) {
    contacts.deleteContact(argv.nama);
  },
});
yargs.parse();
