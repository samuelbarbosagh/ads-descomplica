// Forma de Criar Objetos
const pessoa = {
    nome: 'lucas',
    sobrenome: 'silva'

}
console.log(pessoa['sobrenome'])

// 2 - forma de Criar Objetos

const funcionario = new Object();
funcionario.nome = 'Karen'
funcionario.sobrenome='Joana'

console.log(funcionario.nome)

// 3 forma de Criar Objetos

function criarPessoa(nome, sobrenome,i){
    return{nome,
        sobrenome,
        idade:i,
    nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
    }}
}

const pessoa1 = criarPessoa('Artur','Silva',34)
const pessoa2 = criarPessoa('João','Silva',45)

console.log(pessoa1.nomeCompleto())
console.log(pessoa2)