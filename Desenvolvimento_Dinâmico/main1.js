let rlSync = require('readline-sync');
let nome  = rlSync.question("Qual seu nome?\n");
console.log("Olá, "+ nome);
console.log(typeof(nome));
let idade  = rlSync.question("Qual sua idade?\n");

console.log("Olá, seu nome é" + nome +"e sua idade é " +idade);