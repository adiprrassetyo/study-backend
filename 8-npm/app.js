// No ES6
// var validator = require('validator');
import validator from "validator"; //ES6
import chalk from "chalk";
import template from "chalk-template";
// const validator = require("validator");
// console.log(validator.isEmail("foo@bar.com"));
// console.log(validator.isMobilePhone("0812319212", "id-ID"));
// console.log(validator.isNumeric("0812319212"));

console.log(chalk.italic.blue.bgBlue.black("Hello world!"));
// console.log(chalk.blue("Hello world!"));
const nama = "jancok";
const pesan = template`Lorem, ipsum dolor {bgGreen.black sit amet} consectetur {bgGreen.italic.black adipisicing} elit. jancooookkkk Ipsum, veritatis. ${nama}`;

// const miles = 18;
// const calculateFeet = (miles) => miles * 5280;
// console.log(template`
// 	There are {bold 5280 feet} in a mile.
// 	In {bold ${miles} miles}, there are {green.bold ${calculateFeet(miles)} feet}.
// `);

console.log(pesan);
