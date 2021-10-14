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

const bd = [
    {
        id: 1,
        nome: "Pc gamer i3",
        categoria: "pc",
        quantidade: "120",
        valorMVendas: "3",
    },
    {
        id: 2,
        nome: "Cooler",
        categoria: "hardware",
        quantidade: "300",
        valorMVendas: "50",
    },
    {
        id: 3,
        nome: "Mouse Pad",
        categoria: "perifericos",
        quantidade: "340",
        valorMVendas: "67",
    },
    {
        id: 4,
        nome: "Pc Gamer Intel core i7",
        categoria: "pc",
        quantidade: "150",
        valorMVendas: "20",
    },
    {
        id: 5,
        nome: "Mouse Gamer",
        categoria: "perifericos",
        quantidade: "300",
        valorMVendas: "30",
    },
    {
        id: 6,
        nome: "Monitor 144hz 27",
        categoria: "monitores",
        quantidade: "125",
        valorMVendas: "19",
    },
    {
        id: 7,
        nome: "Teclado RGB",
        categoria: "perifericos",
        quantidade: "180",
        valorMVendas: "60",
    },
    {
        id: 8,
        nome: "Pc Gamer Intel core i5",
        categoria: "pc",
        quantidade: "250",
        valorMVendas: "40",
    },
    {
        id: 9,
        nome: "Cabo HDMI",
        categoria: "perifericos",
        quantidade: "180",
        valorMVendas: "60",
    },
    {
        id: 10,
        nome: "Notebook intel core i5",
        categoria: "notebooks",
        quantidade: "180",
        valorMVendas: "20",
    },
]

window.onload = () => {
    if(window.location.href == 'http://127.0.0.1:5500/index.html') {
        bd.forEach(e => {
            criarCard(e.id, e.nome, e.categoria, 'home')
        })
    } else if(window.location.href == 'http://127.0.0.1:5500/detalhes.html') {
        var id = localStorage.getItem('id')
        let detalheID = document.getElementById('detalhe-id')
        let detalheNome = document.getElementById('detalhe-nome')
        let detalheValor = document.getElementById('detalhe-valor')
        let detalheCategoria = document.getElementById('detalhe-categoria')
        let detalheQuantidade = document.getElementById('detalhe-quantidade')
        let imagem = document.getElementById('detalhe-imagem')

        bd.forEach(e => {
            if(parseFloat(id) !== e.id) {
                criarCard(e.id, e.nome, e.categoria, 'detalhes')
            }
        })

        switch(bd[id-1].categoria) {
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

        detalheID.innerText = 'ID: ' + bd[id-1].id
        detalheNome.innerText = bd[id-1].nome
        detalheValor.innerText = 'R$' + (parseFloat(bd[id-1].valorMVendas).toFixed(2)).toString().replace('.', ',')
        detalheCategoria.innerText = 'Categoria: ' + bd[id-1].categoria
        detalheQuantidade.innerText = 'Quantidade disponível: ' + bd[id-1].quantidade
    }
}

function buscar() {
    let busca = document.getElementById('input-busca').value 
    var lista = document.getElementById('lista-produtos')
    lista.innerHTML = ''
    
    bd.forEach((produto) => {
        if(produto.nome.toLowerCase().includes(busca.toLowerCase())) {
            criarCard(produto.id, produto.nome, produto.categoria, 'home')
        }
    })
}

function filtrar(filtro) {
    var lista = document.getElementById('lista-produtos')
    lista.innerHTML = ''

    if(filtro == 'todas') {
        bd.forEach((produto) => {
            criarCard(produto.id, produto.nome, produto.categoria, 'home')
        })
    } else {
        bd.forEach((produto) => {
            if(produto.categoria == filtro) {
                criarCard(produto.id, produto.nome, produto.categoria, 'home')
            }
        })
    }
}

function criarCard(id, nome, categoria, local) {
    var lista
    if(local == 'home') {
        lista = document.getElementById('lista-produtos')
    } else if(local == 'detalhes') {
        lista = document.getElementById('sugestoes')
    }
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

    card.id = id
    
    dados.appendChild(idProduto)
    dados.appendChild(nomeProduto)
    dados.appendChild(categoriaProduto)
    card.appendChild(imagem)
    card.appendChild(dados)
    lista.appendChild(card)

    card.addEventListener('click', () => {
        localStorage.setItem('id', id)
        window.location.href = 'detalhes.html'
    })
}