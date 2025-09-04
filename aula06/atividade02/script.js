function dobrar(num) {
    return num * 2;
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnDobrar");
    const inputNum = document.getElementById("numero");
    const dobroP = document.getElementById("dobro");

    btn.addEventListener("click", () => {
        const numero = Number(inputNum.value);
        dobroP.textContent = `O dobro de ${numero} é ${dobrar(numero)}`;
    });
});