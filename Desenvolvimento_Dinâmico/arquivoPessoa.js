// conceitos sobre classes

//Definindo uma classe
class Pessoa{
    constructor(nome,sobrenome){
    this.nome= nome;
    this.sobrenome= sobrenome;
    }
//criação de um método da classe
    falar(){
        console.log('Olá' +' '+ this.nome);
    }
//criar método getter 

    get nomeCompleto(){
        console.log('Olá ' + this.nome + ' ' + this.sobrenome);
    }    

}
//criando uma classe
p1= new Pessoa('Fábio','Silva');

//usando o método da classe
p1.falar();

//usando método getter
p1.nomeCompleto;