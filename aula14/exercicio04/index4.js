class ContaBancaria {
    #saldo = 0

    depositar(valor) {
        return this.#saldo += valor;
    }

    sacar(valor) {
        if(this.#saldo > 0) {
            return this.#saldo -= valor;
        } else {
            return "Saldo insuficiente."
        }
    }

    verSaldo() {
        return this.#saldo;
    }
}

const conta = new ContaBancaria(0);

function depositar() {
    const valor = parseFloat(document.getElementById("valor").value);
    const resultado = conta.depositar(valor);
    mostrarResultado(resultado);
}

function sacar() {
    const valor = parseFloat(document.getElementById("valor").value);
    const resultado = conta.sacar(valor);
    mostrarResultado(resultado);
}

function verSaldo() {
    const resultado = conta.verSaldo();
    mostrarResultado(resultado);
}

function mostrarResultado(mensagem) {
    document.getElementById("resultado").textContent = mensagem;
}

/* console.log(conta.depositar(100));
console.log(conta.sacar(30));
console.log(conta.verSaldo()); */