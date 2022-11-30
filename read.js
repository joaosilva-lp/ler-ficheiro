var fs = require("fs");

var data = fs.readFileSync('file.txt');
console.log("Encontrei o seguinte texto no ficheiro: " + data.toString());

console.log("Leitura concluída!");
