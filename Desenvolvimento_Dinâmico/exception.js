function divide(a,b){
    if (b === 0){
        throw new Error("Divisão por zero não permitida.");
    }
    return a/b;
}
try {
    const result = divide (10,0);
    console.log('Resultado: ', result);
}catch (error){
console.log('Ocorreu um erro: ', error.message);
}


function divisao (a,b){
    if (b===0){
        throw new Error ('Divisão por zero não permitida');
    }
    return a/b;
}

try{
    const result = divisao(10,0);
    console.log ('Resultado .'+ resultado)
}catch (error){
    console.log('Ocorreu um erro: ' + error.message)
}



const numeros = [1,2,3,4,5];
try{
    const doubleNumbers = numeros.map((num) =>{
        if(typeof num !== 'number'){
            throw new Error('O array só pode ter números')
        }
        return num * 2;
    })
    console.log(doubleNumbers);
}catch(error){
    console.log('Ocorreu uma exceção: '+ error.message)
}

//exemplo mais avançado incluindo callback

function processName(nome,callback){
    if (typeof nome !== 'string'){
        callback(new Error('O nome deve ser uma string'))
        return;
    }
    if (nome.length === 0){
        callback(new Error ('O nome não pode estar vazio'))
        return;
    }
    callback(null,'Nome processado com sucesso')
}
processName ('Marcelo',(error,result)=>{
    if(error){
        console.log('Ocorreu um problema; '+ error.message)
    }else{
        console.log(result)
    }
});

//mais um exemplo onde se verifica se todos os elementos de um array possuem números positivos
//caso não tenha, deve ser  lançado uma exceção.

function checkPositive(numeros){
    if(!Array.isArray(numeros)){
        throw new Error ('O argumento deve ser um array')
    }
    const allPositive = numeros.every((num)=>num>0);
    if(!allPositive){
        throw new Error('O array deve conter apenas numeros positivos');
    }
    return true;

}
try{
    const numbers = [1,2,3,4,5,6]
    const isPositive = checkPositive(numbers)
    console.log(isPositive)
}catch (error){
    console.log ('Ocorreu um erro; ', error.message)
}



