const name = "Joe";
const height = 74;
const message = `${name} is ${height} inches tall`;

module.exports = {name, height, message};
console.log(message);
const { name, height, message } = require("../index.js");

const name = "Joe";
const height = 74;
const name = "Susan";
const height = 35;
const message = `${name} is ${height} inches tall`;

module.exports = {name, height, message};