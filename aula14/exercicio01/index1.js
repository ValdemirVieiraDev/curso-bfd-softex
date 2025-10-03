class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        return `Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

// Criando um objeto
const aluno1 = new Pessoa("Ana", 20);
console.log(aluno1.apresentar());