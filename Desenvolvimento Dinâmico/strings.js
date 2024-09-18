var nome = 'josé Samuel Barbosa';
var x = nome.length;
console.log(x);

resultado = x > 15 ? 'Obrigado' : 'Por favor preencha seu nome completo';

console.log(resultado);

var res = nome.toLocaleUpperCase();
console.log(res);

var jogo = 'Barcelona vs Real melhor time';
var posicao = jogo.indexOf('Real');
console.log(posicao);

var fatia = jogo.slice(13,);
console.log(fatia);

// Mais métodos de String

var val = jogo.includes('Real');
console.log(val);

var str1 = 'hello';
var str2 = ' world';

var str3 = str1.concat(str2);
console.log(str3);
var frase = '            Olá você está aprendendo JavaScript       ';
console.log(frase.trim());


var num = '1,2,3,4,5,6';
var arr = num.replace(',','|');
console.log(arr);
var arr2 = num.split(',');
console.log(arr2[0]);

//Prática

var s = 'Javascript e Python';

var pos1 = s.indexOf('Python');

var novaString = s.substring(13,19);
console.log(novaString);

var frase2 = 'Olá mundo'

if (frase2.startsWith('Olá')){
    let sub = frase2.substring(4);
    let novaString  = sub.replace('mundo', 'pessoal');
    let novaStringMaiuscula = novaString.toLocaleUpperCase();
    console.log(novaStringMaiuscula);
} 

//Exercício

var url = 'http://minhaempresa.com.br/filme?nome=poder&atores=Lucas,Guilherme';

 const parametros = url.split('?');
 console.log(parametros);
 const parametros1 = url.split('?')[1];
 console.log(parametros1);
 const valores = parametros1.split('&');
 console.log(valores);


 for (let i = 0; i<valores.length; i++){
    if (valores[i].startsWith('atores=')){
        valores[i] = 'atores=' + valores[i].substring(7).toUpperCase()
    }
 }
 console.log(valores);
 