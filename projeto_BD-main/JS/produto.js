class Produto{
    constructor(){
        this.id = 1
        this.listaProdutos = []
    }

    criarProduto(){
        let produto = this.lerDados()
        this.adicionarProduto(produto)
        console.log(this.listaProdutos)
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

    imagem.src = 'https://th.bing.com/th/id/OIP.FYamOFJ0sIWaXMSmUezf1wHaD4?pid=ImgDet&rs=1'

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

