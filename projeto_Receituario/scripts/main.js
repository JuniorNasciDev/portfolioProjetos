


const pesqui = document.querySelector('.home__search')
const listaP = document.querySelector('.lista_cards')
const card = document.querySelector('.card')


listaP.style.display = 'block';




pesqui.addEventListener('input', ()=>{
    
})

async function load() {
    const res = await fetch('Bd.json')
    const data = await res.json()
    console.log(data[0].img)
    for(item in data){
        listaP.innerHTML += 
        `
        <li class="card">
        <img src="${data[item].img}" alt="">
        <p class="card__titulo">${data[item].titulo}</p>
        <p class="card_descript">${data[item].descricao}</p>
        <a class="btn_receita_card" href="./pages/receita.html?id=${data[item].id}"  onclick="escolha()"> bora Cozinhar</a>
    </li>
        `
    }
}

load()
