

const params = new URLSearchParams(location.search);

const id = params.get('id');

const titulo = document.querySelector('.header-title')
const tags = document.querySelector('.list-tags')
const img = document.querySelector('.receita-img')
const desc = document.querySelector('.descricao')
const ingre = document.querySelector('.ingrediente')
const preparo = document.querySelector('.preparo')

async function load() {
    const res = await fetch('../Bd.json');
    const data = await res.json();
    console.log(data)

    for(prato in data){
        if(data[prato].id == id){
            console.log('é o mesmo')
            //titulo do produto
            titulo.textContent = data[prato].titulo
            //tags do produto
            if(data[prato].tags.length > 0){
                for(tag in data[prato].tags){
                    tags.innerHTML += `<li class="list-tags-item">${data[prato].tags[tag]}</li>`
                }
            }
            //img do produto
            img.src = `.${data[prato].img}`
            //descrição do produto
            desc.textContent = `${data[prato].descricao}`
            //lista de ingredientes
            if(data[prato].ingredientes.length > 0){
                for(ingred in data[prato].ingredientes){
                    ingre.innerHTML += 
                    `
                    <li class="list-ingred-item">${data[prato].ingredientes[ingred]}</li>
                    `
                }
            }

            if(data[prato].preparo.length > 0){
                for(passo in data[prato].preparo){
                    preparo.innerHTML += `
                    <li class="list-ingred-item">${data[prato].preparo[passo]
                    }</li>`
                }
            }
        }
    }
    
}



load();