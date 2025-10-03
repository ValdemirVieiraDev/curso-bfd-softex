class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    detalhes() {
        return `Carro: ${this.marca} ${this.modelo} ${this.ano}`;
    }
}

// Criando um objeto
const carro1 = new Carro("Honda", "City", 2025);
console.log(carro1.detalhes());

const carro2 = new Carro("Volkswagem", "Virtus", 2025);
console.log(carro2.detalhes());

const container = document.getElementById("carros-container");

[carro1, carro2].forEach(carro => {
    const div = document.createElement("div");
    div.className = "carro";
    div.textContent = carro.detalhes();
    container.appendChild(div);
});

//[carro1, carro2].forEach(carro => {
//    const div = document.getElementById("carros-container");
//    div.textContent = carro.detalhes();
//});