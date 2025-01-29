const inputUF = document.querySelector("#uf");
const btnConsulta = document.querySelector("#btn");
const listaCidades = document.querySelector("#cidades");

btnConsulta.addEventListener("click", () => {
    const uf = inputUF.value.trim().toUpperCase(); // Obtém o valor e converte para maiúsculas

    if (uf.length !== 2) {
        alert("Digite uma UF válida com 2 letras!");
        return;
    }

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
        .then(response => response.json())
        .then(data => {
            listaCidades.innerHTML = ""; // Limpa a lista antes de adicionar novas cidades
            data.forEach(cidade => {
                const li = document.createElement("li");
                li.textContent = cidade.nome;
                listaCidades.appendChild(li);
            });
        })
        .catch(error => {
            console.error("Erro ao buscar cidades:", error);
            alert("Erro ao buscar cidades. Verifique a UF e tente novamente.");
        });
});
