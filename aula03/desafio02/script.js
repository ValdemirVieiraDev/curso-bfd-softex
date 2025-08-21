document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnVerificar");
    const resultado = document.getElementById("situacao");

    btn.addEventListener("click", () => {
        let login = document.getElementById("login").checked;
        let senha = document.getElementById("senha").checked;

        if(login && senha) {
            resultado.textContent = "Acesso Liberado!";
            resultado.className = "liberado"
        } else {
            resultado.textContent = "Acesso Negado!";
            resultado.className = "negado"
        }
    });
});