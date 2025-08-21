document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("numero");
    const btn = document.getElementById("btnTabuada");
    const lista = document.getElementById("resultado");

    function gerarTabuada() {
        const valor = Number(input.value);
        lista.innerHTML = '';

        for(let i; i <= 10; i++) {
            const li = document.createElement('li');
            li.textContent = `${valor} x ${i} = ${valor * i}`;
            lista.appendChild(li);
        }
    }

    btn.addEventListener("click", gerarTabuada);
});