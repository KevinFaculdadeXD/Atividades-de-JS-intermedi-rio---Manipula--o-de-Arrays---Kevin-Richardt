const input = document.getElementById("input")
const add_final = document.querySelector("#add-final")
const lista_telinhaUwU = document.querySelector("#lista_telinhaUwU")

let lista_nomes = ["Forza", "Horizon", "Six"]

function renderizarEmQuatroKa() {

    lista_telinhaUwU.innerHTML = ""

    for (let nome of lista_nomes) {
        let item = document.createElement("li")
        item.innerText = nome
        lista_telinhaUwU.appendChild(item)
    }
}

add_final.addEventListener("click", () => {

    let valor_input = input.value

    if (valor_input.trim() !== "") {
        lista_nomes.push(valor_input)

        console.log(lista_nomes)

        renderizarEmQuatroKa()

        input.value = ""
    }
})

document.addEventListener("DOMContentLoaded", () => {
    renderizarEmQuatroKa()
})