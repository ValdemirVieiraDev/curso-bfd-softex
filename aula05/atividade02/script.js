document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formAlunos");
  const tabela = document.querySelector("#tabelaNotas tbody");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    tabela.innerHTML = ""; // limpa antes de recriar

    // Montar a matriz notasAlunos a partir dos inputs
    const linhas = form.querySelectorAll("tbody tr");
    let notasAlunos = [];

    linhas.forEach((linha, i) => {
      const nome = linha.querySelector("input[name='nome']").value;
      const notasInputs = linha.querySelectorAll("input[name='nota']");
      let notas = [];
      notasInputs.forEach(n => notas.push(parseFloat(n.value)));

      notasAlunos.push({ nome, notas });
    });

    // ---- aqui entra a sua lógica original ----
    for(let i = 0; i < notasAlunos.length; i++) {
      let linha = document.createElement("tr");

      // Nome do aluno
      let celAluno = document.createElement("td");
      celAluno.textContent = notasAlunos[i].nome || `Aluno ${i + 1}`;
      linha.appendChild(celAluno);

      // Notas e soma
      let soma = 0;
      for(let j = 0; j < notasAlunos[i].notas.length; j++) {
        let celNota = document.createElement("td");
        celNota.textContent = notasAlunos[i].notas[j];
        linha.appendChild(celNota);
        soma += notasAlunos[i].notas[j];
      }

      // Média
      let media = soma / notasAlunos[i].notas.length;
      let celMedia = document.createElement("td");
      celMedia.textContent = media.toFixed(2);
      linha.appendChild(celMedia);

      // Situação
      let celSituacao = document.createElement("td");
      if(media >= 7) {
          celSituacao.textContent = "Aprovado";
          celSituacao.className = "aprovado";
      } else if(media >= 5) {
          celSituacao.textContent = "Recuperação";
          celSituacao.className = "recuperacao";
      } else {
          celSituacao.textContent = "Reprovado";
          celSituacao.className = "reprovado";
      }
      linha.appendChild(celSituacao);

      tabela.appendChild(linha);
    }
  });
});