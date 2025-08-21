document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnComparar");
    const numMaior = document.getElementById("maior");
    const numMenor = document.getElementById("menor");
    const numIgual = document.getElementById("igual");

    btn.addEventListener("click", () => {
        let num1 = Number(document.getElementById("num1").value);
        let num2 = Number(document.getElementById("num2").value);

        if(isNaN(num1) || isNaN(num2)) {
            alert("Insira números válidos!");
            return;
        }

        if(num1 > num2) {
            numMaior.innerHTML = `Maior número: <span class="negrito">${num1}</span>`;
            numMenor.textContent = `Menor número: ${num2}`;
            numIgual.textContent = "";
        } else if(num2 > num1) {
            numMaior.innerHTML = `Maior número: <span class="negrito">${num2}</span>`;
            numMenor.textContent = `Menor número: ${num1}`;
            numIgual.textContent = "";
        } else {
            numMaior.textContent = "";
            numMenor.textContent = "";
            numIgual.textContent = "Os dois números são iguais!";
        }
    });
});