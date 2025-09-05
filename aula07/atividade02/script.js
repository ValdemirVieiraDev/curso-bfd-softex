document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formNumeros");
  const tabela = document.querySelector("#tabelaResultado tbody");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    tabela.innerHTML = ""; // apaga resultados anteriores

    // lê os 5 inputs do formulário
    const inputs = Array.from(form.querySelectorAll("input[name='numero']"));
    const numeros = inputs.map(i => parseFloat(i.value))
                          .filter(v => !Number.isNaN(v));

    // calcula maior e menor
    const maior = Math.max(...numeros);
    const menor = Math.min(...numeros);

    // cria 1 linha por número: coluna 1 = número, coluna 2 = 'Maior' ou 'Menor' (ou ambos)
    numeros.forEach(num => {
      const linha = document.createElement("tr");

      const tdNum = document.createElement("td");
      tdNum.textContent = num;
      linha.appendChild(tdNum);

      const tdRes = document.createElement("td");
      let texto = "";
      if (num === maior) texto = "Maior";
      if (num === menor) texto = texto ? (texto + " / Menor") : "Menor";
      tdRes.textContent = texto;
      linha.appendChild(tdRes);

      tabela.appendChild(linha);
    });
  });
});
