document.addEventListener("DOMContentLoaded", () => {
    const saida = document.getElementById("saida");
    const btnS = document.getElementById("btnSomar");
    const btnL = document.getElementById("btnLimpar");

    btnS.addEventListener("click", () => {
        const vetor = [];
        for (let i = 1; i <= 5; i++) {
            vetor.push(Number(document.getElementById('n' + i).value));
        }

        let soma = 0;
        for (let j = 0; j < vetor.length; j++) {
            soma += vetor[j];
        }


        saida.textContent = `Vetor: [${vetor.join(', ')}] — Soma: ${soma}`;
    });

    btnL.addEventListener('click', () => {
        for (let i = 1; i <= 5; i++) document.getElementById('n' + i).value = '';
        saida.textContent = 'Resultado aqui';
    });
});