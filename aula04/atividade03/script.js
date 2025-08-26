document.addEventListener("DOMContentLoaded", () => {
    const nomes = ["Breno", "Joelma", "Beatriz", "Juan", "Giny"];
    const listaNomes = document.getElementById("lista");

    for(let nome of nomes) {
        const item = document.createElement("li");
        item.textContent = nome;
        listaNomes.appendChild(item);
    }
});