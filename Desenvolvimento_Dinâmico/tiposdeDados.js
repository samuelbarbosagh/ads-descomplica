let rlSync = require('readline-sync');
// imprime uma pergunta para receber o valor nome
let nome  = rlSync.question("Qual seu nome?\n");

//imprime uma saída com um cumprimento concatenado com o nome recebido
console.log("Olá, "+ nome);

// imprime o tipo do valor da variavel nome
console.log(typeof(nome));

/* Função se com a condição de que se o valor recebido
na variavel nome for string, converte todas as fontes em maiúscula*/
if(typeof(nome)== "string"){
    console.log(nome.toLocaleUpperCase());
}

/*Módulo rlsync com a atribuição question com uma pergunta onde 
a resposta será o valor para a variavel idade*/
let idade  = rlSync.question("Qual sua idade?\n");

/*imprime uma confirmação concatenando os valores das variaves nome e idade*/
console.log("Olá, seu nome é " + nome +" e sua idade é " +idade);