/* REDUCE reduz um array de valores a um unico valor a partir da iteração de cada elemento.
*/
var numeros = [1,2,3,4,5,6,7,8,9,10];

var total = 0;
for(var i = 0; i < numeros.length; i++){
    total +=numeros[i];
}
console.log(total);

//tambem pode ser feito dessa forma

var tot = numeros.reduce(function(total,numero){
    return total + numero;
},0);

console.log(total);

/* forEach
É usado para percorrer arrays, mas usa uma função de modo diferente do laço for tradicional.

•Passa uma função de Callback para cada elemento do array juntamente aos seguintes parametros:
•Valor Atual (obrigatório)- valor do elemento atual no array.
•Índice (opcional)
•Array (opcional) Objeto de array ao qual o elemento atual pertence.
   SINTAXES

   EX1
   a1.forEach(function(valor,índice,array){
    console.log(array[indice]);
});

EX2
numbers.forEach(number){
console.log(number);
});

*/


// for in


const carros = ['Corsa', 'Punta', 'Gol'];

console.log('Iteração usando forin:');

for (let indice in carros) {

  console.log('Índice:', indice, 'Valor:', carros[indice]);

}

console.log('Iteração usando forof:');

for (let carro of carros) {

  console.log('Valor: ', carro);

}

const carro = {

    modelo: 'Audi A3',
  
    marca: 'Audi',
  
    ano: 2020
  
  };
  
  for (let caracteristica in carro) {
  
    console.log(caracteristica + ': ' + carro[caracteristica]);
  
  }

  const Automóvel = [

    { modelo: 'Audi A3', marca: 'Audi', ano: 2020 },
  
    { modelo: 'Jeep Compact', marca: 'Jeep', ano: 2021 }
  
  ];
  
  for (let indice in Automóvel) {
  
    console.log('Automóvel ' + (parseInt(indice) + 1) + ':');
  
    for (let atributo in Automóvel[indice]) {
  
      console.log(atributo + ': ' + Automóvel[indice][atributo]);
  
    }
  
    console.log('-----');
  
  }

  //while e do while

  /*let resultado = '';

let e = 0;

do {

  resultado += 'Número ' + e + ', ';

  e++;

} while (e < 5);

console.log(resultado);
*/

console.log('-----');

let resultado = '';
let x='0';

do {
  resultado+='expoente ' + x + ', ';
  x++;
} while (x <= 100);
console.log(resultado);

/* No exemplo a seguir, vamos imprimir o ano de cada carro presente no array de carros.
Ao utilizar for (const carro of carros), temos acesso a cada item do array e, em seguida,
podemos acessar a propriedade desejada. Veja o código:*/ 


const veiculo=[
  {modelo:'Audi A3', marca: 'Audi', ano: 2020},
  {modelo:'Compact', marca: 'Jeep', ano: 2022},
  {modelo:'Clio', marca: 'Renaut', ano: 2023},
   
]
for (const carro of veiculo){
  console.log(carro.ano);
}

let C = 1;

do {

  console.log(C);

  C++;

} while (C <= 10);

/*
Prática

Imagine que você está desenvolvendo um programa em JavaScript para calcular 
a soma dos elementos de um array de números. Sua tarefa é escrever um código que
utilize a estrutura ‘do while’ em conjunto com o método ‘reduce’ para realizar essa soma.

O programa deve começar recebendo um array de números como entrada.
Em seguida, será necessário declarar uma variável chamada ‘sum’ e inicializá-la com o valor zero.
Essa variável será responsável por armazenar a soma acumulada dos elementos do array.

Após a inicialização da variável ‘sum’, você precisará definir um índice inicial,
que será utilizado no loop ‘do while’. O índice deve ser inicializado com zero,
indicando que a primeira iteração do loop começará pelo primeiro elemento do array.

Dentro do loop, você utilizará o método ‘reduce’ para realizar a soma acumulativa.
Esse método recebe uma função de callback que, a cada iteração, adiciona o valor do elemento atual
ao valor acumulado. A função de callback também verifica se o índice atual é menor ou igual ao
índice definido anteriormente, para garantir que apenas os elementos até o índice atual sejam somados.

Após cada iteração do loop, o índice é incrementado em uma unidade.
O loop continuará até que o índice seja igual ao comprimento total do array,
o que indica que todos os elementos foram somados.

Por fim, o programa exibirá a mensagem ‘A soma dos números é:’, seguida pelo valor final
da variável ‘sum’, que representa a soma total dos elementos do array.

Em resumo, seu código deve utilizar a estrutura ‘do while’ e o método ‘reduce’
para calcular a soma dos números em um array. Essa solução permite uma abordagem eficiente
e concisa para resolver esse problema específico.*/

//O programa deve começar recebendo um array de números como entrada.
let numbers = [1,2,3,4,5,6,7,8,9,10];

//Em seguida, será necessário declarar uma variável chamada ‘sum’ e inicializá-la com o valor zero.
//Essa variável será responsável por armazenar a soma acumulada dos elementos do array.
let sum = 0;

/*Após a inicialização da variável ‘sum’, você precisará definir um índice inicial,
que será utilizado no loop ‘do while’. O índice deve ser inicializado com zero,
indicando que a primeira iteração do loop começará pelo primeiro elemento do array.*/
let index = 0;

/*Dentro do loop, você utilizará o método ‘reduce’ para realizar a soma acumulativa.
Esse método recebe uma função de callback que, a cada iteração, adiciona o valor do elemento atual
ao valor acumulado. A função de callback também verifica se o índice atual é menor ou igual ao
índice definido anteriormente, para garantir que apenas os elementos até o índice atual sejam somados.*/
do{
sum = numbers.reduce((accumulator,currentValue,currentIndex)=>{
  if (currentValue <= index){
    return accumulator + currentValue;
  } else {
    return accumulator;
  }
},sum);

/*Após cada iteração do loop, o índice é incrementado em uma unidade.
O loop continuará até que o índice seja igual ao comprimento total do array,
o que indica que todos os elementos foram somados.*/
index++;

/*O loop continuará até que o índice seja igual ao comprimento total do array,
o que indica que todos os elementos foram somados.*/
}while (index<numbers.length);

/*Por fim, o programa exibirá a mensagem ‘A soma dos números é:’, seguida pelo valor final
da variável ‘sum’, que representa a soma total dos elementos do array.*/
console.log('A soma dos numeros é: ' + sum);

const Karro = {

  modelo: 'Audi A3',

  marca: 'Audi',

  ano: 2020

};

for (let caracteristica in Karro) {

  console.log(caracteristica + ': ' + Karro[caracteristica]);

}
const carroz = [

  { modelo: 'Audi A3', marca: 'Audi', ano: 2020 },

  { modelo: 'Jeep Compact', marca: 'Jeep', ano: 2021 }

];

for (let indice in carroz) {

  console.log('Carro ' + (parseInt(indice) + 1) + ':');

  for (let atributo in carroz[indice]) {

    console.log(atributo + ': ' + carroz[indice][atributo]);

  }

  console.log('-----');

}

