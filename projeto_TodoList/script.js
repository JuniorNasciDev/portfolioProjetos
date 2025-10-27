
let c = 0


const listaHistorico = localStorage.getItem('lista');
const lista = JSON.parse(listaHistorico)
console.log(listaHistorico)
let contaTff = 0;

const entryText = document.querySelector('.text__entry');
const btnAdd = document.querySelector('.buttonAdd');
const listaHtml = document.querySelector(".lista__tarefas");
const iconeCheck = document.querySelector(".item__icone");


RenderizaLista()

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
         id: c,
         stats: false
        }
    )
    entryText.value = ''
    btnAdd.disabled = true
    document.querySelector('.text__att').style.display = 'none';
    RenderizaLista()
}

function excluiTarefa(){
    const i = lista.findIndex(t => `btn${t.id}` === event.target.id)
    if( i !== -1) lista.splice(i, 1);
    if(contaTff > 0 && `stats${event.target.id}` == true){
        contaTff--
    }
    RenderizaLista()
}

function StatusTf(){
    const btn = document.querySelector(`#${event.target.id}`)

    const txtItem = document.querySelector(`#p${event.target.id}`)
    
    for(tarefa in lista){
        if(`stats${lista[tarefa].id}` == event.target.id && lista[tarefa].stats == false){
           console.log('trocou para feito')
           btn.classList.remove('Nfeito')
           btn.classList.add('feito')
           lista[tarefa].stats = true
           contaTff++
        
      
        }else if(`stats${lista[tarefa].id}` == event.target.id && lista[tarefa].stats == true){
            console.log('trocou para Desfeito')
             btn.classList.remove('feito')
           btn.classList.add('Nfeito')
           lista[tarefa].stats = false
           contaTff--
        }
    }
    RenderizaLista()
    
}

function editaTarefa(){
    console.log(event.target)
    for(tarefa in lista){
        if(`p${lista[tarefa].id}` == event.target.id){
            console.log(lista[tarefa].text)
            lista[tarefa].text = prompt("digite a sua nova tarefa!!");
        }
    }
    RenderizaLista()
}


function RenderizaLista(){
    listaHtml.innerHTML = ''
    if(lista && lista.length > 0 ){
        for (tarefa in lista){
        let stats;
        if(lista[tarefa].stats == true){
            stats = 'feito'
        }else{
            stats = 'Nfeito'
        }
        listaHtml.innerHTML += 
        `
   <li class="lista__tarefas__item" id="item${lista[tarefa].id}">
        <div class="item__icone ${stats}" id="stats${lista[tarefa].id}" onClick="StatusTf()">
        </div>
        <p class="item__texto" id="p${lista[tarefa].id}" onclick="editaTarefa()">${lista[tarefa].text}</p>
        <button class="item__excluir" onClick="excluiTarefa()" id="btn${lista[tarefa].id}" >deletar</button>
    </li>
    `
    }
    }


    contaTff = 0
    for(tarefa in lista){
        if(lista[tarefa].stats == true){
            contaTff++
        }
    }
    document.querySelector('.conta_Tff').innerText = contaTff

    localStorage.setItem(`lista`,`${JSON.stringify(lista)}`)
}
