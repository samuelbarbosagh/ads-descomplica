/*Array.map() Itera sobre os elementos do array,
modificando-os usando uma função de callback, esta é executada em cada um dos elementos.

• sintaxe  Array.map(function(elemento,indice,array){}, this);

• function() é a função de callback chamada para cada elemento do array.
• O método map() sempre passa o elemento atual, o indice do elemento atual e
todo o objeto do array para ela.
• O argumento THIS será usado dentro da função de calback. Por padrão, esse valor é UNDEFINED.
Por Exemplo, Aqui está a forma de mudar o valor de tihs para o numero 80:*/
let arr =[2,3,5,7];
arr.map(function(elemento, índice, array){
    console.log(this)// 80
},80);

let arr2 = [3,4,5,6];
for(let i = 0 ; i < arr2.length; i++){
arr2[i] = arr2[i]*3
}
console.log(arr2);// [9,12,15,18];

let arr3 = [3,4,5,6];

let modifierArr = arr3.map(function(element){
    return element * 3;
})
console.log(modifierArr); //[9,12,15,18]

var numero = [1,2,3,4,5,6,7,8,9,10];

var  num = numero.map(function(valor){
    return valor *2;
})
// iterar sobre uma lista de funcionarios e retorna o nome
console.log(num);
var funcionarios = [
    {nome: 'Alvaro', idade: 34},
    {nome: 'Bruno', idade: 47},
    {nome: 'Carolina', idade: 23},
    {nome: 'Denis', idade: 26},
    {nome: 'Evandro', idade: 19},
]
nomes = funcionarios.map(pessoa => pessoa.nome);
console.log(nomes);