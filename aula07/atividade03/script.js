document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formNumeros");
  const tabela = document.querySelector("#tabelaResultado tbody");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    tabela.innerHTML = ""; // apaga resultados anteriores

    // lê os inputs do formulário
    const inputs = Array.from(form.querySelectorAll("input[name='numero']"));
    const numeros = inputs.map(i => parseFloat(i.value))
                          .filter(v => !Number.isNaN(v));

    // cria 1 linha por número: coluna 1 = número, coluna 2 = 'Par' ou 'Ímpar'
    numeros.forEach(num => {
      const linha = document.createElement("tr");

      const tdNum = document.createElement("td");
      tdNum.textContent = num;
      linha.appendChild(tdNum);

      const tdRes = document.createElement("td");
      tdRes.textContent = (num % 2 === 0) ? "Par" : "Ímpar";
      linha.appendChild(tdRes);

      tabela.appendChild(linha);
    });
  });
});
