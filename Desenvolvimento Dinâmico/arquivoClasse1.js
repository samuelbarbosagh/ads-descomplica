// Conceito de Heranças em classes
class DispositivoEletronico{
    constructor (nome){
    this.nome = nome;
    this.ligado = false;
    }
//método
    ligar(){
        if(this.ligado){
            console.log('Já está ligado.')
            return;
        }
        this.ligado = true;
    }
}

//cria uma nova classe herdando atributos e metodos da classe DispositivoEletronico com a instrução extends

class SmartPhone extends DispositivoEletronico {
    constructor (nome, cor, modelo){
// A função do parâmetro super é 
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
    }
}
var s1 = new SmartPhone('Samsung','Preto','A71');
console.log(s1);
s1.ligar();
s1.ligar();
