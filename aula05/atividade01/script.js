document.addEventListener("DOMContentLoaded", () => {
    // Matriz de notas dos alunos
    let notasAlunos = [
        [5, 6, 3],
        [3, 8, 5],
        [8, 7, 9]
    ];

    const tabela = document.querySelector("#tabelaNotas tbody");

    for(let i = 0; i < notasAlunos.length; i++) {
        let linha = document.createElement("tr");

        // Nome do aluno
        let celAluno = document.createElement("td");
        celAluno.textContent = `Aluno ${i + 1}`;
        linha.appendChild(celAluno);

        // Notas e soma
        let soma = 0;
        for(let j = 0; j < notasAlunos[i].length; j++) {
            let celNota = document.createElement("td");
            celNota.textContent = notasAlunos[i][j];
            linha.appendChild(celNota);
            soma += notasAlunos[i][j];
        }

        // Média
        let media = soma / notasAlunos[i].length;
        let celMedia = document.createElement("td");
        celMedia.textContent = media.toFixed(2);
        linha.appendChild(celMedia);

        tabela.appendChild(linha);
    }
});