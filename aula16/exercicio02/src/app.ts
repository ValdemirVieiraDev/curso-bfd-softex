class Calculadora {
    soma(a: number, b: number): number {
        return a + b;
    }

    subtracao(a: number, b: number): number {
        return a - b;
    }

    multiplicacao(a: number, b: number): number {
        return a * b;
    }

    divisao(a: number, b: number): number {
        return a / b;
    }

    resto(a: number, b: number): number {
        return a % b;
    }
}

const calculo = new Calculadora();

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnCalcular");
    const input1 = document.getElementById("num1") as HTMLInputElement | null;
    const input2 = document.getElementById("num2") as HTMLInputElement | null;

    const elSoma = document.getElementById("soma");
    const elSub = document.getElementById("subtracao");
    const elMult = document.getElementById("multiplicacao");
    const elDiv = document.getElementById("divisao");
    const elResto = document.getElementById("resto");

    if (
        btn && input1 && input2 &&
        elSoma && elSub && elMult && elDiv && elResto
    ) {
        btn.addEventListener("click", () => {
            const num1 = Number(input1.value);
            const num2 = Number(input2.value);

            if (isNaN(num1) || isNaN(num2)) {
                alert("Digite dois números válidos.");
                return;
            }

            elSoma.textContent = calculo.soma(num1, num2).toString();
            elSub.textContent = calculo.subtracao(num1, num2).toString();
            elMult.textContent = calculo.multiplicacao(num1, num2).toString();
            elDiv.textContent = num2 !== 0 ? calculo.divisao(num1, num2).toFixed(2) : "Divisão por zero";
            elResto.textContent = num2 !== 0 ? calculo.resto(num1, num2).toString() : "Não aplicável";
        });
    } else {
        console.error("Erro: Elementos do DOM não foram encontrados.");
    }
});