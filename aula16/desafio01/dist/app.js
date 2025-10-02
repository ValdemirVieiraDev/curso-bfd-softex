"use strict";
class Tarefa {
    constructor(descricao) {
        this.descricao = descricao;
    }
}

class ListaDeTarefas {
    constructor() {
        this.listaPendentes = document.getElementById("listaPendentes");
        this.listaConcluidas = document.getElementById("listaConcluidas");
        this.input = document.getElementById("tarefaInput");
        this.botaoAdicionar = document.getElementById("btnAdicionar");

        this.botaoAdicionar.addEventListener("click", () => this.adicionarTarefa());
    }

    criarElementoTarefa(tarefa) {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const span = document.createElement("span");
        span.textContent = tarefa.descricao;

        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                this.moverParaConcluidas(li, span.textContent || "");
            }
        });

        li.appendChild(checkbox);
        li.appendChild(span);

        return li;
    }

    moverParaConcluidas(li, descricao) {
        // Remove da lista de pendentes
        if (this.listaPendentes.contains(li)) {
            this.listaPendentes.removeChild(li);
        }

        const liConcluida = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = descricao;

        // Botão para excluir permanentemente
        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.classList.add("excluir");
        btnExcluir.addEventListener("click", () => {
            this.listaConcluidas.removeChild(liConcluida);
        });

        liConcluida.appendChild(span);
        liConcluida.appendChild(btnExcluir);

        this.listaConcluidas.appendChild(liConcluida);
    }

    adicionarTarefa() {
        const texto = this.input.value.trim();
        if (texto === "") {
            alert("Digite uma tarefa antes de adicionar!");
            return;
        }

        const novaTarefa = new Tarefa(texto);
        const li = this.criarElementoTarefa(novaTarefa);
        this.listaPendentes.appendChild(li);

        this.input.value = "";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new ListaDeTarefas();
});
