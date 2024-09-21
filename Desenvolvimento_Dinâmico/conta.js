//Praticando uso de classe, conta bancária, com HTML.
class ContaCliente{
    constructor(numeroConta,saldo,debito,credito){
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.debito = debito;
        this.credito = credito;
    }

    //Calcular saldo atual
    calcularSaldoAtual(){
    return this.saldo - this.debito +this.credito
    }
    //Verificar saldo atual
    
    verificarSaldo(){
        const saldoAtual = this.calcularSaldoAtual()
        if(saldoAtual >=0){
            alert("Saldo negativo R$ " + saldoAtual)
        }else{
            alert("Saldo positivo R$ " + saldoAtual)
        }
    }
}

// criar prompts de nova verificação de saldo

let numeroConta = prompt ('Digite o número da conta do cliente')
let saldo = parseFloat(prompt ('Digite o saldo do cliente'))
let debito = parseFloat(prompt ('Digite o debito do cliente'))
let credito = parseFloat(prompt ('Digite o credito do cliente'))

// Criar instancia da classe contaCliente e chama o método verificarSaldo().

let conta = new ContaCliente(numeroConta,saldo,debito, credito)
conta.verificarSaldo();

