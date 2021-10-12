class Produto{
    constructor(){
        this.id = 1
        this.listaProdutos = []
    }

    criarProduto(){
        let produto = this.lerDados()
        this.adicionarProduto(produto)
    }

    lerDados(){
        let produto = {}
        produto.id = this.id
        produto.nome = document.getElementById('input-nome').value
        produto.categoria = document.getElementById('select-categoria').value
        return produto
    }

    adicionarProduto(produto){
        this.listaProdutos.push(produto)
        this.id++
    }
}

var produto = new Produto()

//Criação de card do Produto

var bnt = document.getElementById('salvar')
var cont = 0
bnt.addEventListener('click', e => {
    e.preventDefault
    criarCard(produto.listaProdutos[cont].id, produto.listaProdutos[cont].nome, produto.listaProdutos[cont].categoria)
    cont++
})

var lista = document.getElementById('lista-produtos')
function criarCard(id, nome, categoria) {
    let card = document.createElement('div')
    let imagem = document.createElement('img')
    let dados = document.createElement('div')
    let idProduto = document.createElement('p')
    let nomeProduto = document.createElement('p')
    let categoriaProduto = document.createElement('p')

    card.className = 'card'

    switch(categoria) {
        case 'pc':
            imagem.src = './IMG/PC.jpg'
            break

        case 'hardware':
            imagem.src = './IMG/Hardware.jpg'
            break

        case 'perifericos':
            imagem.src = './IMG/Perifericos.jpg'
            break

        case 'monitores':
            imagem.src = './IMG/Monitores.jpg'
            break

        case 'notebooks':
            imagem.src = './IMG/Notebooks.jpg'
            break

        default:
            imagem.alt = 'Imagem do Produto'
            break
    }

    idProduto.innerText = 'Id: ' + id
    nomeProduto.innerText = 'Nome: ' + nome
    categoriaProduto.innerText = 'Categoria: ' + categoria

    dados.appendChild(idProduto)
    dados.appendChild(nomeProduto)
    dados.appendChild(categoriaProduto)
    card.appendChild(imagem)
    card.appendChild(dados)
    lista.appendChild(card)
}

function filtrar(filtro) {
    lista.innerHTML = ''

    if(filtro == 'todas') {
        produto.listaProdutos.forEach((produto) => {
            criarCard(produto.id, produto.nome, produto.categoria)
        })
    } else {
        produto.listaProdutos.forEach((produto) => {
            if(produto.categoria == filtro) {
                criarCard(produto.id, produto.nome, produto.categoria)
            }
        })
    }
}

function buscar() {
    let busca = document.getElementById('input-busca').value 
    lista.innerHTML = ''
    
    produto.listaProdutos.forEach((produto) => {
        if(produto.nome.toLowerCase().includes(busca.toLowerCase())) {
            criarCard(produto.id, produto.nome, produto.categoria)
        }
    })
}