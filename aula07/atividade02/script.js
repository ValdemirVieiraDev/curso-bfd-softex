document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formNumeros");
    const tabela = document.querySelector("#tabelaResultado tbody");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        tabela.innerHTML = "";

        const linhas = form.querySelectorAll("div input");
        let listaNumeros = [];

        linhas.forEach((linha) => {
            const inputs = linha.querySelectorAll("input[name='numero']");
            let numeros = [];

            inputs.forEach(input => {
                const valor = parseFloat(input.value);
                if (!isNaN(valor)) {
                    numeros.push(valor);
                }
            });

            if (numeros.length === 5) {
                listaNumeros.push(numeros);
            }
        });

        listaNumeros.forEach(numeros => {
            let linha = document.createElement("tr");

            let verNum = document.createElement("td");
            verNum.textContent = numeros.join(", ");
            linha.appendChild(verNum);

            let resultado = document.createElement("td");
            const maior = Math.max(...numeros);
            const menor = Math.min(...numeros);
            resultado.textContent = `Maior: ${maior}, Menor: ${menor}`;
            linha.appendChild(resultado);

            tabela.appendChild(linha);
        });
    });
});