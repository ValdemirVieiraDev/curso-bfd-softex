class Tarefa {
  constructor(public descricao: string) {}
}

class ListaDeTarefas {
  private listaPendentes: HTMLUListElement;
  private listaConcluidas: HTMLUListElement;
  private input: HTMLInputElement;
  private botaoAdicionar: HTMLButtonElement;

  constructor() {
    this.listaPendentes = document.getElementById("listaPendentes") as HTMLUListElement;
    this.listaConcluidas = document.getElementById("listaConcluidas") as HTMLUListElement;
    this.input = document.getElementById("tarefaInput") as HTMLInputElement;
    this.botaoAdicionar = document.getElementById("btnAdicionar") as HTMLButtonElement;

    this.botaoAdicionar.addEventListener("click", () => this.adicionarTarefa());
  }

  private criarElementoTarefa(tarefa: Tarefa): HTMLLIElement {
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

  private moverParaConcluidas(li: HTMLLIElement, descricao: string): void {
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

  private adicionarTarefa(): void {
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
