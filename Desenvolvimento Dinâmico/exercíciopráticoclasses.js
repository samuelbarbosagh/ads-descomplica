/*Imagine que você está desenvolvendo um sistema para uma empresa que possui diferentes tipos de funcionários, como gerentes e desenvolvedores. Seu objetivo é implementar o código em JavaScript que modele essa situação utilizando classes e herança.*/
//Você precisa criar as classes Funcionario, Gerente e Desenvolvedor.
class Funcionario{
    constructor(nome,idade,cargo){
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
    }
    /// A classe Funcionario deve ter os métodos seApresentar() e trabalhar().

    seApresentar(){
        console.log('Olá, sou o ' + this.nome + ', tenho ' + this.idade + '.')
    
    }
    trabalhar(){
        console.log('Eu estou trabalhando como ' + this.cargo + '.')
    }
}

//A classe Gerente deve herdar da classe Funcionario e ter um atributo adicional departamento, além do método gerenciar().

class Gerente extends Funcionario{
    constructor(nome,idade,cargo, departamento){
        super(nome,idade,cargo);
        this.departamento = departamento;
    }
    gerenciar(){
        console.log('Gerencio o departento de ' + this.departamento +'.')
    }   
}
    

//Desenvolvedor deve herdar da classe Funcionario e ter um atributo adicional linguagem, além do método programar().

class Desenvolvedor extends Funcionario{
    constructor(nome,idade,cargo, linguagem){
        super(nome,idade,cargo);
        this.linguagem = linguagem;
    }
    programar(){
        console.log('Estou programando em ' + this.linguagem +'.');
    }
    
}
//Depois de implementar as classes, crie instâncias de um gerente e de um desenvolvedor, definindo valores para seus atributos.

let gerente = new Gerente( 'Maurício', 35, 'Gerente', 'Logística');
let desenvolvedor = new Desenvolvedor ('Cláudio',24,'Desenvolvedor','Java');

//Em seguida, chame os métodos apropriados para cada um dos funcionários, exibindo as saídas corretas no console.


gerente.seApresentar();
gerente.trabalhar();
gerente.gerenciar();
desenvolvedor.seApresentar();
desenvolvedor.trabalhar();  
desenvolvedor.programar();