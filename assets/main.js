const input = document.getElementById("input")
const add_final = document.querySelector("#add-final")
const remove_final = document.querySelector("#remove-final")
const remove_first = document.querySelector("#remove-first")
const add_start = document.querySelector("#add-start")
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

    // evita adicionar vazio
    if (valor_input.trim() !== "") {
        lista_nomes.push(valor_input)

        console.log(lista_nomes)

        renderizarEmQuatroKa()

        input.value = ""
    }
})

remove_final.addEventListener("click", () => {

    let valor_input = input.value
        lista_nomes.pop(valor_input)
        renderizarEmQuatroKa()
    })

remove_first.addEventListener("click", () => {

    let valor_input = input.value
        lista_nomes.shift(valor_input)
        renderizarEmQuatroKa()
    })

add_start.addEventListener("click", () => {

    let valor_input = input.value

    // evita adicionar vazio
    if (valor_input.trim() !== "") {
        lista_nomes.unshift(valor_input)

        console.log(lista_nomes)

        renderizarEmQuatroKa()

        input.value = ""
    }
})
document.addEventListener("DOMContentLoaded", () => {
    renderizarEmQuatroKa()
})