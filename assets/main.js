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