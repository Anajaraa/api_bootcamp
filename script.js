const inputUF = document.querySelector("#uf");
const btnConsulta = document.querySelector("#btn");
const listaCidades = document.querySelector("#cidades");

btnConsulta.addEventListener("click", () => {
    const uf = inputUF.value.trim().toUpperCase(); 

    if (uf.length !== 2) {
        alert("Digite uma UF válida com 2 letras!");
        return;
    }

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
        .then(response => response.json())
        .then(data => {
            listaCidades.innerHTML = "";
            data.forEach(cidade => {
                const li = document.createElement("li");
                li.textContent = cidade.nome;
                listaCidades.appendChild(li);
            });
        })
        .catch(error => {
            console.error("Erro ao buscar cidades:", error);
            alert(" Verifique a UF e tente denovo.");
        });
});
