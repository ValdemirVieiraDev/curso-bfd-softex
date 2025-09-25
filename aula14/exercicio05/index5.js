/* class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    descricao() {
        return `Funcionário ${this.nome}, salário: ${this.salario}`;
    }
}

class Gerente extends Funcionario {
    constructor(departamento) {
        this.departamento = departamento;
    }

    descricao() {
        return `Funcionário ${this.nome}, departamento: ${this.departamento}, salário: ${this.salario}`;
    }
}

const funcionario1 = new Funcionario("Breno", 3000);
console.log(funcionario1.descricao());

const gerente1 = new Gerente("Logística");
console.log(gerente1.descricao()); */


class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    descricao() {
        return `Funcionário ${this.nome}, salário: ${this.salario}`;
    }
}

class Gerente extends Funcionario {
    constructor(nome, salario, departamento) {
        super(nome, salario); // chama o construtor da classe pai
        this.departamento = departamento;
    }

    descricao() {
        return `Funcionário ${this.nome}, departamento: ${this.departamento}, salário: ${this.salario}`;
    }
}

// Criando um funcionário
const funcionario1 = new Funcionario("Carlos", 3000);
console.log(funcionario1.descricao());

// Criando um gerente
const gerente1 = new Gerente("Ana", 6000, "Logística");
console.log(gerente1.descricao());
