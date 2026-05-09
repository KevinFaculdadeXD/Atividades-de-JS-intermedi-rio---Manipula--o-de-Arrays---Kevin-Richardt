const input = document.getElementById("input")
const add_final = document.querySelector("#add-fina l")

function renderizarEmQuatroKa(){

    document.addEventListener("DOMContentLoaded", () => {
        renderizarEmQuatroKa()
    })

add_final.addEventListener("click", () => {
    let valor_input = input.value

    lista_tela.innerHTML = 

    lista_nomes.push(valor_input)
    console.log(lista_nomes)
    renderizarEmQuatroKa()
})
}
let lista_nomes = ["Forza", "Horizon", "Six"]

function renderizarEmQuatroKa(){
    let lista_telinhaUwU = document.querySelector("#lista_telinhaUwU")

    let item = document.createElement('li')
    
    for(let nome of lista_nomes) {
        let item = document.createElement('li')
        lista_telinhaUwU.appendChild(item)
        item.innerText = nome
    }
}


document.addEventListener('DOMContentLoaded', () => {
    renderizarEmQuatroKa()
})