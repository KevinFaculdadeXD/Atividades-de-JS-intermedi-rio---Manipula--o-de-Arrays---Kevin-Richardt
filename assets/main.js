const input = document.getElementById("input")
const add_final = document.querySelector("#add-final")
const remove_final = document.querySelector("#remove-final")
const remove_first = document.querySelector("#remove-first")
const add_start = document.querySelector("#add-start")
const lista_telinhaUwU = document.querySelector("#lista_telinhaUwU")
const btn_filtrarNomesGrandesDaDesgraca = document.querySelector("#filtrarNomesGrandesDaDesgraca")
const btn_maiusculoFicarComRaivaGrr  = document.querySelector("#maiusculoFicarComRaivaGrr")

let lista_nomes = ["Forza", "Horizon", "Six"]
// atividade 1
function renderizarEmQuatroKa() {

    lista_telinhaUwU.innerHTML = ""

    for (let nome of lista_nomes) {
        let item = document.createElement("li")
        item.innerText = nome
        lista_telinhaUwU.appendChild(item)
    }
}
//atividade 3

function nomesGrandesDemaisSlk() {

    let contador = 0

    lista_nomes.forEach(nome => {
        if (nome.length > 5) {
            contador++
        }
    })
    console.log("Quantidade de palavras com mais de 5 letras:", contador)
}
nomesGrandesDemaisSlk()
// atividade 4
function mostrarMaiusculos() {

    lista_nomes.forEach(function(nome) {
        console.log(nome.toUpperCase())
    })

}
mostrarMaiusculos()
// atividade 5
btn_filtrarNomesGrandesDaDesgraca.addEventListener("click", () => {
    lista_telinhaUwU.innerHTML = ""
    let nomesFiltrados = lista_nomes.filter(nome => nome.toUpperCase())
    nomesFiltrados.forEach(nome => {
        let item = document.createElement("li")
        item.innerText = nome
        lista_telinhaUwU.appendChild(item)
    });

    document.addEventListener("DOMContentLoaded", () => {
    renderizarEmQuatroKa()
})
// atividade 2

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