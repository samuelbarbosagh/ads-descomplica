class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        return 'Olá, sou o ' + this.nome + ', tenho ' + this.idade + ' e sou um ' + this.cargo + ' .';

    }
    trabalhar() {
        return this.nome + ' Está trabalhando.';
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }
    gerenciar() {
        return 'O gerente ' + this.nome + ' é encarregado do departamento da ' + this.departamento + '.';
    }
}


class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }
    programar() {
        return this.nome + ' está programando em ' + this.linguagem + '.';
    }

}

function criarFuncionario() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const cargo = document.getElementById('cargo').value;
    const departamento = document.getElementById('departamento').value;
    const linguagem = document.getElementById('linguagem').value;
    const resultado = document.getElementById('resultado');
    try {
        if (!nome || !idade || !cargo) throw new Error("Todos os campos precisam ser preenchidos.");
        let funcionario;
        if (cargo === "gerente") {
            if (!departamento) throw new Error("informe o departamento do gerente.");
            funcionario = new Gerente(nome, idade, cargo, departamento);
            resultado.innerHTML = funcionario.seApresentar() + ' ' + funcionario.gerenciar();
        } else if (cargo === "desenvolvedor") {
            if (!linguagem) throw new Error("Informe a linguagem de programação para o desenvolvedor.");
            funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
            resultado.innerHTML = funcionario.seApresentar() + ' ' + funcionario.programar();
        } else {
            throw new Error("Cargo inválido.");
        }
    } catch (error) {
        resultado.innerHTML = error.message
    }
    if (cargo === "gerente") {
        if (!departamento) throw new Error("Informe o departamento do gerente.");
        funcionario = new Gerente(nome, idade, cargo, departamento);
        resultado.innerHTML = funcionario.seApresentar() + ' ' + funcionario.gerenciar();
    } else if (cargo === "desenvolvedor") {
        if (!linguagem) throw new Error("Informe a linguagem de programação para o desenvolvedor.");
        funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
        resultado.innerHTML = funcionario.seApresentar() + ' ' + funcionario.programar();
    }
    if (cargo === "gerente") {
        if (!departamento) throw new Error("Informe o departamento do gerente.");
        funcionario = new Gerente(nome, idade, cargo, departamento);
        resultado.innerHTML = funcionario.seApresentar() + ' ' + funcionario.gerenciar();
    } else if (cargo === "desenvolvedor") {
        if (!linguagem) throw new Error("Informe a linguagem de programação para o desenvolvedor.");
        funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
        resultado.innerHTML = funcionario.seApresentar() + ' ' + funcionario.programar();
    }


}