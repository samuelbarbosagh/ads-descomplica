function criarPessoa(nome, sobrenome, a,p){
    return{
        nome,
        sobrenome,
        altura: a,
        peso: p,
        calculoImc(){
            const indice = this.peso/(this.altura **2).toFixed(1)
            if(indice <18.5){
                console.log('Abaixo do peso')
            } else if(indice >= 18.5 && indice < 24.9){
                console.log('Peso normal')
            } else if(indice >= 25 && indice < 29.9){
                console.log('Acima do peso')
            } else if(indice >= 30 && indice < 34.9){
                console.log('Obesidade grau I')
            } else if(indice >= 35 && indice < 39.9){
                console.log('Obesidade grau II')
            } else if(indice >= 40){
                console.log('Obesidade grau III')
            }
        }
      
    }
}
const p1 = criarPessoa('Samuel', 'Barbosa', 1.77, 74)
p1.calculoImc();
