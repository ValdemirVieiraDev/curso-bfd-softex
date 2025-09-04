function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    return b === 0 ? "Divisão por zero" : a / b;
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnCalcular");
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");

    const som = document.getElementById("soma");    
    const sub = document.getElementById("subtracao");    
    const mult = document.getElementById("multiplicacao");    
    const div = document.getElementById("divisao");    

    btn.addEventListener("click", () => {
        const numA = Number(num1.value);
        const numB = Number(num2.value);

        som.textContent = soma(numA, numB);
        sub.textContent = subtracao(numA, numB);
        mult.textContent = multiplicacao(numA, numB);
        div.textContent = divisao(numA, numB);
    });
});