/*Criando e manipulando array (lista de objetos)

• Objetos que contem múltiplos valores e tipos armazendos em uma lista.
pode ser armazenados em variáveis e ser tratatado de forma
muito similar a qualquer outro tipo de valor
• JavaScript não possui um tipo de dados array específico.

var = [item 00, item 01, item 02, item 03]

• São construídos de colchetes, os quais contém uma lista de itens separados por vírgulas.

Ex1
var  compras = ['pão', 'leite', 'ovos', 'chocolate'];
compras;

Ex2
var sequencia = [1, 1, 2, 3, 5, 8, 13];

• Pode ter itens de vários tipos:

Ex
var aleatório['árvore', 765, [0, 1, 2]];

• Formas de criar uma Array

Ex1
var arr = new Array(elemento0, elemento1, ..., elementoN);

Ex2
var arr = Array(elemento0, elemento1, ..., elementoN);

Ex3
var arr=[elemento0, elemento1, ..., elementoN];

• Quandos esses valores sao especificados, o array é
inicializado com eles como elementos deste array.
• A propriedade do comprimento do array é definida pelo numero de argumentos.
• A sintaxe os colchetes é chamada de "array literal" ou "inicializador de array".

Criado array vazio x criando array com um unico elemento

var arr=[]; cria um array vazio.
var arr=[42]; cria um array com um único elemento (42).
var arr=Array(42); cria um array sem elementos, sendo  que o arr.length é definido como 42.

Também equivale a
var arr=[];
arr.length = 42; (array vazio com 42 posições)

REFERENCIANDO ELEMENTOS DO ARRAY
• Uso de elementos núméricos ordinais
var myArray=['Vento, 'Chuva', 'Fogo'];
• primeiro elemento é o myArray[0] 
• segundo elemento é o myArray[1]
• O índice começa com zero.

POPULANDO UM ARRAY

var emp = [];
emp[0] = 'Ana Maria';
emp[1] = 'João Cláudio';
emp[2] = 'Luis Augusto';

ou simplesmente atribuindo valores aos elementos já na declaração do array

var myArray = newArray('Olá', myVar, 3.14159);
var myArray = ['Manga', 'Maçã', 'Laranja'];

• PRÁTICA*/

var valores = [8,1,7,2,9];
console.log(valores[3]);
for (var pos =0; pos <valores.length; pos++){
    console.log("Posição "+valores[pos]);
}

for (var pos =0; pos <valores.length; pos++){
    console.log("Posição "+ pos +" Valor "+ valores[pos]);
}

var carros = [];

carros[0] = 'Volvo';
carros[1] = 'Clio';
carros[2] = 'Jeep';

var motos = [];
motos[0] = 'Honda';
motos[1] = 'Yamaha';
motos[2] = 'Suzuki';

//var celular = new Array('Samsung', 'Apple', 'Motorolla', 'Nokia');


// Exercício - Calcular a média de todos os numeros de um array
var soma = 0;
for(var pos = 0; pos < valores.length; pos++){
    soma+=valores[pos];
}
var media = soma/valores.length;
console.log(media);

// Encontrar o maior Valor em uma array

var maiorValor = valores[0];
for(var pos = 0; pos < valores.length; pos++){
    if (maiorValor>valores[pos]){
        maiorValor = valores[pos];
    }
}
console.log(maiorValor);

//correção Gemini

// ... código anterior ...

// Encontrar o maior Valor em uma array (corrigido)
var maiorValor = valores[0];
for(var pos = 0; pos < valores.length; pos++) {
    if (valores[pos] > maiorValor) {
        maiorValor = valores[pos];
    }
}
console.log(maiorValor);

//Encontrar na array o Estado com maior nome

const estados = ['Para', 'Rio de Janeiro', 'Ceará', 'Goiás'];

let maiorNome = estados[0];
for(let pos = 1; pos < estados.length; pos++){
    if (estados[pos].length > maiorNome.length){
        maiorNome = estados[pos];
    }
}
console.log(maiorNome);


/*
Métodos de arrays
• join(): junta sequencialmente os elementos de uma array usando
o caractere (ou caracteres) passado por parâmetro.
Se ele não é indicado, usa-se a vírgula como default.
*/
var arr1 = [1,2,3,4,5,6];

console.log(arr1.join('|'));

console.log(arr1.join('•'));


//Correção Gemini -  Demonstração do método join() após preencher numerosPositivos
//console.log(numerosPositivos.join(',')); // Junta os números positivos em uma string separada por vírgulas

// Exemplo de array de objetos
const pessoas = [
    { nome: 'João', idade: 30 },
    { nome: 'Maria', idade: 25 },
    { nome: 'Pedro', idade: 35 }
];



//•shift(): retorna o primeiro valor de um array e remove os demais, modificando o array original. (remove um elemento no inicio de uma matriz)

let retirado = arr1.shift();

console.log(retirado);
console.log(arr1);

//•unshift(): adiciona um elemento no inicio de um array, modificando o array original.

//•sort(): ordena os elementos de um Array.

//•reverse(): inverte a ordem dos elementos. O primeiro de torna o último e o último se torna o primeiro.
console.log('Array invertido '+valores.reverse());

//•slice(): retorna os elementos selecionados de um array.

//•Length(): indica o numero de elementos em um array.

/*• push(valor0, valor1, valor2, ...): adiciona um ou mais elementos (valor0, valor1, valor2, etc.)
ao final de um array, retornando o seu novo tamanho.*/

arr1.push(7);
console.log(arr1);

//• pop(valor0, valor1, valor2, ...): retorna o último elemento de um array e remove os demais, modificam o array original.
//segundo ao exercício sobre isso, é utilizado para remover um elemento do final de uma matriz.

arr1.pop();
console.log(arr1);
//•indexOf(): retorna a posição do elemento de um Array.
console.log('Posição do número 3: ' + arr1.indexOf(3));

// Além dos mencionados, outros métodos são muito úteis para manipular arrays de forma concisa e funcional.

//• map()
// Usando o método map para criar um novo array com apenas os nomes
const nomes = pessoas.map(pessoa => pessoa.nome);
console.log(nomes);

//• filter()
//• reduce()


//Praticando uso de Arrays

//criar uma array com numeros positivos e negativos

var ar = [-5,10,15,20,-3,89]

// criar um array só com numero positivos

var numerosPositivos = []
for (var pos = 0; pos<ar.length; pos++){
if (ar[pos]>0)
    numerosPositivos.push(ar[pos]);
} 
console.log(numerosPositivos);

// Métodos de Arrays

//Avançando com Arrays
//Splice(): altera o array, adicionando ou removendo elementos dele.

//Array.splice(indice, número de elementos);
let Array = [1,2,3, 'hello world', 4.12,true];
//Array.splice(2); //todos os elementos a partir do indice 2 serão removidos.

Array.splice(2,1); 
console.log(Array);

var arr2=[1,2,3,4,5,6,7];

arr2.splice(2,3)
console.log(arr2);
var nome = ['maria', 'joao', 'lucas', 'pedro'];
var novos = nome.splice(1,2, 'Luis','ronaldo');
console.log(nome);
var pais = ['Brasil', 'Argentina', 'Colombia']
pais.unshift('Uruguai');
console.log(pais);

//EXERCICIO - CRIAR UM ARRAY COM 5 NOMES
var nomes2 = ['GUILHERME', 'MANUEL', 'SAMUEL', 'DAVI', 'JOÃO'];
console.log(nomes2);

// ACRECENTAR O NOME DA MONICA
nomes2.unshift('monica');
console.log(nomes2);
//RETIRE O ULTIMO ELEMENTO DO ARRAY
nomes2.pop();
console.log(nomes2);
//ENCONTRE A POSIÇÃO DO SAMUEL
nomes2.indexOf('SAMUEL');
console.log('POSIÇÃO DE '+ nomes2[3] + ' é '+ nomes2.indexOf('SAMUEL'));
// TROCAR O MANUEL POR EMMANUEL
nomes2.splice(2,1, 'emmanuel');
console.log(nomes2);

// MANIPULANDO MAIS ARRAYS

//• SLICE(): Copia uma parte de uma array e retorna como um novo array. Não modifica o original.
// sintaxe Array.slice(de,para) de > corta a partir do indice informado: Até>  Corta o array até o indice informado.
let array =[1,2,3, 'hello world', 4.12, true];
let newArray = array.slice(0,3);
console.log(array);
console.log(newArray);

//• CONCAT(): junta duas partes e retorna como uma nova. Serve para strings e arrays, para todos tipo de dados.

let titulo = 'Dr. ';
let nome3 = 'César Algusto';
let nome_completo = titulo.concat(nome3);
console.log(nome_completo);

let array1=[1,2,3];
let array2=[4,5,6];
let array3= array1.concat(array2);
console.log(array3);

var pessoa = ['eduardo', 'joana', 'wallace', 'rosana'];
var pessoas1 = pessoa.slice(1,3);
console.log(pessoa);
console.log(pessoas1);

//var empresa = pessoa.concat(gerente);
//console.log(empresa);

// dividir 12 meses em trimestres
var arrayMeses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

let trim1 = arrayMeses.slice(0,3);
console.log(trim1);
let trim2 = arrayMeses.slice(3,6);
console.log(trim2);
let trim3 = arrayMeses.slice(6,9);
console.log(trim3);
let trim4 = arrayMeses.slice(9,12);
console.log(trim4);
console.log(arrayMeses);

