var país = "Brasil";

if (país !== "Brasil"){
    console.log("Você é estrangeiro");
}else{
    console.log("Você é brasileiro");
}

var idade = 22;

if (idade <16){
    console.log("Você não vota");
}else if(idade<18){
    console.log("O voto é opcional");
}else{
    console.log("O voto é obrigatório");
}

// Combinando condições com operadores logicos && (e) e || (ou);


if(idade >65 || idade<16){
console.log("O voto é opcional");
}

// minha aplicação

var idade = 13;
if(idade >65 || idade<16){
console.log("O voto é opcional");
}else{
    console.log("O voto é obrigatório");
}

//INSTRUÇÕES SWITCH

//• SUBSTITUI O IF ELSE E PERMITE ESCREVER CÓDIGOS MAIS ELEGANTES 

//SINTAXE  
/*SWITCH(EXPRESSÃO){
CASE 1: INSTRUÇÃO A SER EXECUTADA
BREAK
CASE 2: INSTRUÇÃO A SER EXECUTADA
BREAK
...
CASE N: INSTRUÇÃO A SER EXECUTADA
BREAK
DEFAUT:  INSTRUÇÃO A SER EXECUTADA CASO NENHUM CASE SEJA EXECUTADO
}
                SINTAXE EXPLICADA PELO GEMINI 

                switch (expressão) {
    case valor1:
        Código a ser executado se a expressão for igual a valor1
        break;
    case valor2:
        Código a ser executado se a expressão for igual a valor2
        break;   

    ... outros casos
    default:
        Código a ser executado se nenhum dos casos anteriores   
 for verdadeiro
}
*/

//PRÁTICA

var diaSemana = 2;

switch(diaSemana){
case 0:
    console.log('Hoje é domingo');
break;
case 1:
    console.log('Hoje é segunda-feira');
break;
case 2:
    console.log('Hoje é terça-feira');
break;
default:
    console.log('Esse dia da semana não existe');
}

/*

            ATIVIDADE PRÁTICA

            Escreva um código em que, após o cliente solicitar a escolha da bebida, 
            a opção ‘switch’ deve avaliar a opção selecionada e atribuir o valor correspondente à variável
             ‘valor’. Caso o cliente escolha uma opção inválida, uma mensagem informativa é exibida, 
             indicando que a escolha deve ser feita entre café, leite ou chá. 
             Por fim, se uma opção válida for selecionada, exibimos uma mensagem personalizada 
             informando o nome da bebida escolhida e o valor a ser pago, 
             formatado com duas casas decimais.

*/

var valor = "";

switch ('café'){

    case 'café':
            valor = '2,00';
        console.log('Café  valor R$ '+ valor);
         break;
    case 'leite':
            valor = '1,50';
        console.log('Leite valor R$ '+ valor);
        break;
    case 'chá':
            valor = '1,00';
        console.log('Chá valor R$ '+ valor);
         break;
    default:
    console.log('A escolha deve ser feita entre café, leite ou chá.');
}