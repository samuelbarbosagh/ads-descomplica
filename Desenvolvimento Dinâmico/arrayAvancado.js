// FILTER
//•filter(): recebe cada elemento do array e aplica uma instrução condicional a ele,
//se for verdadeira, o elemento é colocado no array de resultado,
//se falsa, o elemento não é colocado lá.
var numeros = [1,2,3,4,5,6,7,8,9,10];

var resultado = numeros.filter(item=> item % 2 == 0);

console.log(resultado);

//tambem pode ser feito como função

var numerosFiltrados= numeros.filter(
    function(valor){
        return valor > 5;
    }
)
console.log(numerosFiltrados);
function buscarValores(valor){
    return valor <5;
}
var numerosEncontrados = numeros.filter(buscarValores);
console.log(numerosEncontrados);

// simplificando
var r1 = numeros.filter((valor)=>{
    return valor >5;
}   );
console.log(r1);

// simplificando mais ainda

var r2=numeros.filter(valor=> valor > 5)
console.log(r2);


//filtros em array com objetos

var funcionarios = [
    {nome:'Luis', idade: 20},
    {nome:'Marcos', idade: 32},
    {nome:'Ana', idade: 54},
    {nome:'Fernando', idade: 30},
]
// filtra e retorna funcionarios com o nome com menos de 5 caracteres.

var pessoaListagem = funcionarios.filter(
    function(valor){
        return valor.nome.length <5
    }
)

console.log(pessoaListagem);

// exercício  lista de eletrodomesticos

var produtos = [
    {id:1, descrição: 'SmartPhone', categoria: 'Eletronicos'},
    {id:2, descrição: 'NoteBook', categoria: 'Eletronicos'},
    {id:3, descrição: 'AirFryer', categoria: 'Eletrodomesticos'},
    {id:4, descrição: 'Geladeira', categoria: 'Eletrodomesticos'},
    {id:5, descrição: 'Cafeteira', categoria: 'Eletrodomesticos'},
    {id:6, descrição: 'AltoFalante', categoria: 'Eletronicos'},
]
var Eletronicos = produtos.filter(
    function(valor){
        return valor.categoria === 'Eletronicos'
    }
)
console.log(Eletronicos);