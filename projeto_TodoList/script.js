
let c = 0

const lista = []



const entryText = document.querySelector('.text__entry')
const btnAdd = document.querySelector('.buttonAdd')
const listaHtml = document.querySelector(".lista__tarefas")


// aqui eu verifico se o campo de entrada o input esta com algum valor caso não esteja bloqueia o botão de adicionar e conta os caracteres tbm
entryText.addEventListener('input', ()=>{
    if((entryText.value).length > 0){
        btnAdd.disabled = false
    }else{
        btnAdd.disabled = true
    }

    if((entryText.value).length == 50){
        console.log("maximo carcteres atingidos")
        document.querySelector('.text__att').style.display = 'block';
    }else{
        document.querySelector('.text__att').style.display = 'none';
    }

})


function addTarefa(){
    console.log('adicionou')
    c++
    lista.push(
        {text: entryText.value,
         id: c 
        }
    )
    entryText.value = ''
    btnAdd.disabled = true
    RenderizaLista()
}

function excluiTarefa(){
    const i = lista.findIndex(t => `btn${t.id}` === event.target.id)
    if( i !== -1) lista.splice(i, 1);
    RenderizaLista()
}


function RenderizaLista(){
    console.log(lista)
    listaHtml.innerHTML = ''
    for (tarefa in lista){
        listaHtml.innerHTML += 
        `
    <li class="lista__tarefas__item" id="item${lista[tarefa].id}">
        <div class="item__icone">x</div>
        <p class="item__texto">${lista[tarefa].text}</p>
        <button class="item__excluir" onClick="excluiTarefa()" id="btn${lista[tarefa].id}" >deletar</button>
    </li>
    `
    }
}