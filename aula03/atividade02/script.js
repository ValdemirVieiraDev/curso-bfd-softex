document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnVerificar");
    const resultado = document.getElementById("resultado");

    btn.addEventListener("click", () => {
        let idade = Number(document.getElementById("idade").value);
        let temCNH = Number(document.getElementById("cnh").checked);

        if(idade >= 18 && temCNH) {
            resultado.textContent = "Pode dirigir!";
            resultado.className = "verde";
        } else {
            resultado.textContent = "Não pode dirigir!";
            resultado.className = "vermelho";
        }

    })
})