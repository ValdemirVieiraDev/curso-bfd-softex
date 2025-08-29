document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formProdutos");
  const tabela = document.querySelector("#tabelaEstoque tbody");
  const estoqueTotalEl = document.getElementById("estoqueTotal");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    tabela.innerHTML = ""; // limpa antes de recriar

    // Montar a matriz estoqueProdutos a partir dos inputs
    const linhas = form.querySelectorAll("tbody tr");
    let estoqueProdutos = [];

    linhas.forEach((linha, i) => {
      const nome = linha.querySelector("input[name='nome']").value;
      const valorInputs = linha.querySelectorAll("input[name='valor']");
      const qtdInputs = linha.querySelectorAll("input[name='qtd']");
      let estoque = [];
      valorInputs.forEach(n => estoque.push(parseFloat(n.value)));
      qtdInputs.forEach(n => estoque.push(n.value));

      estoqueProdutos.push({ nome, estoque });
    });

    let estoqueTotal = 0;

    // ---- aqui entra a lógica do Problema ----
    for(let i = 0; i < estoqueProdutos.length; i++) {
      let linha = document.createElement("tr");

      // Nomes dos Produtos
      let celProduto = document.createElement("td");
      celProduto.textContent = estoqueProdutos[i].nome;
      linha.appendChild(celProduto);

      // Preços dos produtos
      let celValor = document.createElement("td");
      celValor.textContent = estoqueProdutos[i].estoque[0].toFixed(2);
      linha.appendChild(celValor);

      // Quantidade dos produtos
      let celQtd = document.createElement("td");
      celQtd.textContent = estoqueProdutos[i].estoque[1];
      linha.appendChild(celQtd);

      // Total por Produto
      let totalProduto = estoqueProdutos[i].estoque[0] * estoqueProdutos[i].estoque[1];
      let celTotal = document.createElement("td");
      celTotal.textContent = totalProduto.toFixed(2);
      linha.appendChild(celTotal);

      tabela.appendChild(linha);

      estoqueTotal += totalProduto;
    }

    estoqueTotalEl.textContent = estoqueTotal.toFixed(2);
  });
});