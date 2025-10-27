

const entryText = document.querySelector('.text__entry')

const btnAdd = document.querySelector('.buttonAdd')


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