const yargs = require("yargs");
const { simpanContact, listContact } = require("./contacs");
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
      simpanContact(argv.nama, argv.email, argv.noHP);
    },
  })
  .demandCommand();

// menampilkan daftar semua nama & no hp contact
yargs.command({
  command: "list",
  describe: "Menampilkan semua nama & no HP contact",
  handler() {
    listContact();
  },
});
yargs.parse();
