
const corpo = document.querySelector('body')

const text = document.querySelector('.titulo-hexa')

const not = document.querySelector('.notification')




function gerarCor(){
    const lista = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

    let rgb = "#"
    for(let c = 0; c < 6; c++){
        let s = Math.floor(Math.random() * lista.length)
       
        rgb += `${lista[s]}`
    }

    text.innerText = rgb
    corpo.style.background = `${rgb}`
    return rgb
}


function copiar(){
    console.log(text.innerText)
    navigator.clipboard.writeText(`${text.innerText}`)
    feedback()
}

function feedback(){
    not.style.opacity = '1'
    setTimeout(()=>{
        not.style.opacity = '0'
    },500)
    

        
}