

const pesqui = document.querySelector('.home__search')
const listaP = document.querySelector('.lista_cards')
const card = document.querySelector('.card')



function pesquisa(string,lista){
    const sugestao = []
    for(item in lista){
        if(lista[item].titulo.toLowerCase().startsWith(string)){
            sugestao.push(lista[item])
        }else{
            for(tag in lista[item].tags){
                if(lista[item].tags[tag].toLowerCase().startsWith(string)){
                    sugestao.push(lista[item])
                }
            }
        }
    }

    return sugestao
}

async function load() {
    const res = await fetch('Bd.json')
    const data = await res.json()
    pesqui.addEventListener('input', ()=>{
        
        if(pesqui.value != ''){
            listaP.style.display = 'flex'
            const pesquisado = pesquisa(pesqui.value, data)
        if(pesquisado.length > 0){
            listaP.innerHTML = ''
            for(item in pesquisado){
        listaP.innerHTML += 
        `
        <li class="card">
        <img src="${pesquisado[item].img}" alt="">
        <p class="card__titulo">${pesquisado[item].titulo}</p>
        <p class="card_descript">${pesquisado[item].descricao}</p>
        <a class="btn_receita_card" href="./pages/receita.html?id=${pesquisado[item].id}"  onclick="escolha()"> bora Cozinhar</a>
    </li>
        `
    }
        }else{
            listaP.innerHTML = ''
        }
        }else{
            listaP.innerHTML = ''
            listaP.style.display = 'none'
        }
})
    
}

load()
