document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnComparar");
    const numMaior = document.getElementById("maior");
    const numMenor = document.getElementById("menor");
    const numIgual = document.getElementById("iguais");

    btn.addEventListener("click", () => {
        let num1 = Number(document.getElementById("num1").value);
        let num2 = Number(document.getElementById("num2").value);
        let num3 = Number(document.getElementById("num3").value);

        if(isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            alert("Insira 3 números válidos!");
            return;
        }

        let maior = Math.max(num1, num2, num3);
        let menor = Math.min(num1, num2, num3);

        maior.innerHTML = `Maior número: <span class="negrito">${num1}</span>`;
        menor.innerHTML = `Maior número: <span class="negrito">${num2}</span>`;

        if(num1 === num2 && num2 === num3) {
            numIgual.textContent = "Todos os números são iguais!";
        } else if(num1 === num2 || num1 === num3 || num2 === num3) {
            numIgual.textContent = "Existem números iguais!";
        } else {
            numIgual.textContent = "Todos os números são diferentes!";
        }
    });
});