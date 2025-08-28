document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnCalcular");

    btn.addEventListener("click", () => {
        const nota1 = Number(document.getElementById("nota1").value);
        const nota2 = Number(document.getElementById("nota2").value);
        const nota3 = Number(document.getElementById("nota3").value);

        if(
            isNaN(nota1) || isNaN(nota2) || isNaN(nota3) ||
            nota1 < 0 || nota1 > 10 ||
            nota2 < 0 || nota2 > 10 ||
            nota3 < 0 || nota3 > 10
        ) {
            alert("Insira números válidos!");
            return;
        }

        const media = (nota1 + nota2 + nota3) / 3;
        document.getElementById("media").textContent = media.toFixed(2);

        const situacaoAl = document.getElementById("situacao");

        if(media >= 7) {
            situacaoAl.textContent = "Aluno aprovado!";
            situacaoAl.className = "aprovado";
        } else if(media >= 5) {
            situacaoAl.textContent = "Aluno em recuperação";
            situacaoAl.className = "recuperacao";
        } else {
            situacaoAl.textContent = "Aluno reprovado";
            situacaoAl.className = "reprovado";
        }
    });
});