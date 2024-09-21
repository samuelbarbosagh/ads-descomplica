//existem 4 tipos de funções

//1. Função Declarativa (Regular): É declarada com a palavra-chave 'function' e não precisa de chamar antes de ser usada.

function soma(a, b) {
  return a + b;
}
  console.log(soma(2, 3)); // Output: 5
  console.log(soma(4, 5)); // Output: 9
  console.log(soma(6, 7)); // Output: 13

  function calcula(numero){
  return numero * 2;
  }
  console.log(calcula(2)); // Output: 4

 // a sintaxe da função declarativa é:
  
  function nomeFuncao(parametro1, parametro2) {
    // corpo da função entre chaves
  }

  // Função Expressiva: É declarada com uma função anônima, que não precisa de nome e não precisa de chamar antes de ser usada.


var subtracao = function(a, b) {
  return a - b;

  // Funções anônimas podem ser atribuídas a variáveis
  var multiplicacao = function(c, d) {
    return c * d;
  };
  console.log(multiplicacao(2, 3)); // Output: 6
};
  console.log(subtracao(5, 3)); // Output: 2
  console.log(subtracao(7, 5)); // Output: 2

 // a sintaxe da Função anônima é
  
  var calcula = function(numero){
    return numero * 2
  };
  var x = calcula(4) // x retorna o valor 8


  // Função Arrow: É uma forma de escrever funções anônimas usando a sintaxe mais curta.

  var divisao = (a, b) => {
    return a / b;
  };
  console.log(divisao(10, 2)); // Output: 5
  console.log(divisao(15, 3)); // Output: 5
  
// Função de Função: É uma função que retorna uma função como resultado.

const mensagem = (nome) => {
console.log("Olá, " + nome + " !");
};
mensagem("Marcelo");

  // Função de Ordem Superior: É uma função que recebe outra função como argumento ou retorna uma função como resultado.
function calcular(a, b, funcao) {
    return funcao(a, b);
    // Funções de Ordem Superior podem ser atribuídas a variáveis
    var potencia = (c, d) => {
        return Math.pow(c, d);
    };
    console.log(potencia(2, 3)); // Output: 8
}