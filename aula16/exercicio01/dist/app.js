"use strict";
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        return `Olá! Meu nome é ${this.nome} e tenho ${this.idade}. Estou cursando Análise e Desenvolvimento de Sistemas e atualmente estou participando do projeto Bolsa Futuro Digital, da Softex Pernambuco.`;
    }
}

const aluno1 = new Pessoa("Valdemir Vieira", 38);

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnApresentar");
    const paragrafo = document.getElementById("mensagem");

    if (btn && paragrafo) {
        btn.addEventListener("click", () => {
            paragrafo.textContent = aluno1.apresentar();
        });
    } else {
        console.error("Elemento(s) não encontrado(s): btnApresentar ou mensagem.");
    }
});
