document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formAlunos");
  const tabela = document.querySelector("#tabelaNotas tbody");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Obter os dados do formulário (1 aluno por vez)
    const nome = form.querySelector("input[name='nome']").value;
    const notasInputs = form.querySelectorAll("input[name='nota']");
    let notas = [];

    notasInputs.forEach(n => notas.push(parseFloat(n.value)));

    // Criar linha da tabela
    let linha = document.createElement("tr");

    // Nome do aluno
    let celAluno = document.createElement("td");
    celAluno.textContent = nome || `Aluno`;
    linha.appendChild(celAluno);

    // Notas e soma
    let soma = 0;
    for(let j = 0; j < notas.length; j++) {
      let celNota = document.createElement("td");
      celNota.textContent = isNaN(notas[j]) ? "-" : notas[j];
      linha.appendChild(celNota);
      soma += notas[j];
    }

    // Média
    let media = soma / notas.length;
    let celMedia = document.createElement("td");
    celMedia.textContent = isNaN(media) ? "-" : media.toFixed(2);
    linha.appendChild(celMedia);

    // Situação
    let celSituacao = document.createElement("td");
    if (media >= 7) {
      celSituacao.textContent = "Aprovado";
      celSituacao.className = "aprovado";
    } else if (media >= 5) {
      celSituacao.textContent = "Recuperação";
      celSituacao.className = "recuperacao";
    } else {
      celSituacao.textContent = "Reprovado";
      celSituacao.className = "reprovado";
    }
    linha.appendChild(celSituacao);

    // Adicionar à tabela (sem limpar a anterior)
    tabela.appendChild(linha);

    // Limpar inputs após adicionar
    form.reset();
  });
});