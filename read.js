var fs = require("fs");

// Synchronous read
var data = fs.readFileSync('file.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");
