function saudacao(nome) {
    return `Olá, ${nome}! Bem-vindo(a)!`;
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnSaudacao");
    const saudacaoP = document.getElementById("saudacao");
    const inputNome = document.getElementById("nome");

    btn.addEventListener("click", () => {
        const nome = inputNome.value.trim();
        const alvo = nome || "Visitante";
        saudacaoP.textContent = saudacao(alvo);
    });
});