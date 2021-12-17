window.onload = () => {
    if(window.location == 'http://localhost/PBD/index.php' || window.location == 'http://localhost/PBD/index.php#') {
        obterProdutos()
        obterCategorias()
    } else {
        categoriasParaSelecao()
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

function criarCard(id, nome, especificacao, status) {
    var lista = document.getElementById('lista-produtos')
    
    let cardContainer = document.createElement('div')
    let card = document.createElement('div')
    let dados = document.createElement('div')
    let idProduto = document.createElement('p')
    let nomeProduto = document.createElement('p')
    let especificacaoProduto = document.createElement('p')
    let statusProduto = document.createElement('p')
    let btnAlterar = document.createElement('button')
    let btnExcluir = document.createElement('button')
    let botoes = document.createElement('div')

    cardContainer.className = 'cardContainer'
    card.className = 'card'
    botoes.id = 'botoesCardContainer'

    idProduto.innerText = 'Id: ' + id
    nomeProduto.innerText = 'Nome: ' + nome
    especificacaoProduto.innerText = 'Especificações: ' + especificacao
    statusProduto.innerText = 'Status: ' + status
    btnAlterar.innerText = 'Alterar'
    btnExcluir.innerText = 'Excluir'
    
    cardContainer.id = id

    btnAlterar.addEventListener('click', () => {
        window.location.href = "http://localhost/PBD/alterar_produto.php?id=" + cardContainer.id
    })

    btnExcluir.addEventListener('click', () => {
        confirmacao = window.confirm("Deseja realmente excluir este produto?")
        
        if(confirmacao) {
            var ajax = new XMLHttpRequest()

            ajax.open('POST', './excluir_produto.php', true)
            ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

            ajax.send("id=" + cardContainer.id)
            ajax.onreadystatechange = () => {
                if(ajax.readyState == 4 && ajax.status == 200) {
                    window.location = "http://localhost/PBD/index.php"
                    window.alert("Produto excluido com sucesso.")
                }
            }
        }
    })

    dados.appendChild(idProduto)
    dados.appendChild(nomeProduto)
    dados.appendChild(especificacaoProduto)
    dados.appendChild(statusProduto)
    card.appendChild(dados)
    botoes.appendChild(btnAlterar)
    botoes.appendChild(btnExcluir)
    cardContainer.appendChild(card)
    cardContainer.appendChild(botoes)
    lista.appendChild(cardContainer)
}

function adicionarCategoria() {
    let div = document.getElementById('selects-categoria')
    let select = document.createElement('select')
    
    for(let i=0; i < 5; i++) {
        let opcao = document.createElement('option')
        opcao.value = 'categoria' + (i + 1)
        opcao.innerText = 'categoria' + (i + 1)
        select.appendChild(opcao)
    }

    div.appendChild(select)
}

function obterProdutos() {
    var ajax = new XMLHttpRequest()

    ajax.open('POST', './pega_dados.php', true)
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

    ajax.send()
    ajax.onreadystatechange = () => {
        if(ajax.readyState == 4 && ajax.status == 200) {
            produtos = JSON.parse(ajax.response)
            listarProdutos(produtos)
        }
    }
}

function listarProdutos(produtos) {
    let lista = document.getElementById('lista-produtos')
    lista.innerHTML = ''
    produtos.forEach(e => {
        criarCard(e.id, e.nome, e.especificacao, e.status)
    })
}

function liberarCadastroCategoria() {
    let div = document.getElementById('cadastroCategoria')
    let input = document.createElement('input')
    let btnCadastrar = document.createElement('button')
    let btnCancelar = document.createElement('button')
    let btnCadastrarCategoria = document.createElement('button')

    input.placeholder = 'Nome da categoria'
    input.id = 'inputNovaCategoria'
    btnCadastrar.innerText = 'Cadastrar'
    btnCancelar.innerText = 'Cancelar'
    btnCadastrarCategoria.innerText = 'Cadastrar categoria'

    btnCadastrar.addEventListener('click', () => {
        finalizarCadastroCategoria()
        div.innerHTML = ''  
        div.appendChild(btnCadastrarCategoria)
        window.location = "http://localhost/PBD/index.php"
    })

    btnCancelar.addEventListener('click', () => {
        div.innerHTML = ''  
        div.appendChild(btnCadastrarCategoria)
    })

    btnCadastrarCategoria.addEventListener('click', () => {
        liberarCadastroCategoria()
    })

    div.innerHTML = ''
    div.appendChild(input)
    div.appendChild(btnCadastrar)
    div.appendChild(btnCancelar)
}

function finalizarCadastroCategoria() {
    let nomeCategoria = document.getElementById('inputNovaCategoria').value
    
    var ajax = new XMLHttpRequest()

    ajax.open('POST', './finalizar_cadastro_categoria.php', true)
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    
    ajax.send("nomeCategoria=" + nomeCategoria)
    ajax.onreadystatechange = () => {
        if(ajax.readyState == 4 && ajax.status == 200) {
            console.log('Categoria cadastrada')
        }
    }
}

function obterCategorias() {
    var ajax = new XMLHttpRequest()

    ajax.open('POST', './pega_categorias.php', true)
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

    ajax.send()
    ajax.onreadystatechange = () => {
        if(ajax.readyState == 4 && ajax.status == 200) {
            categorias = JSON.parse(ajax.response)
            listarCategorias(categorias)
        }
    }
}

function listarCategorias(categorias) {
    let lista = document.getElementById('listaCategorias')

    categorias.forEach(e => {
        let item = document.createElement('li')
        let categoria = document.createElement('a')
        let botoes = document.createElement('div')
        let btnExcluir = document.createElement('button')
        let btnAlterar = document.createElement('button')

        item.id = e.id

        btnExcluir.addEventListener('click', () => {
            confirmacao = window.confirm("Deseja realmente excluir esta categoria?")
        
            if(confirmacao) {
                var ajax = new XMLHttpRequest()

                ajax.open('POST', './excluir_categoria.php', true)
                ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

                ajax.send("id=" + item.id)
                ajax.onreadystatechange = () => {
                    if(ajax.readyState == 4 && ajax.status == 200) {
                        window.location = "http://localhost/PBD/index.php"
                        window.alert("categoria excluida com sucesso.")
                    }
                }
            }
        })

        btnAlterar.addEventListener('click', () => {
            let novoNome = window.prompt("Digite o novo nome para a categoria " + "'" + categoria.innerText + "'")
            let confirmacao = window.confirm("Deseja realmente alterar o nome da categoria " + "'" + categoria.innerText + "'" + " para " + "'" + novoNome + "'")

            if(confirmacao) {
                var ajax = new XMLHttpRequest()

                ajax.open('POST', './finalizar_alteracao_categoria.php', true)
                ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

                ajax.send("id=" + item.id + "&nome=" + novoNome)
                ajax.onreadystatechange = () => {
                    if(ajax.readyState == 4 && ajax.status == 200) {
                        window.location = "http://localhost/PBD/index.php"
                        window.alert("Categoria alterada com sucesso.")
                    }
                }
            }
        })

        categoria.addEventListener('click', () => {
            listarComfiltro(e.nome)
        })

        btnExcluir.innerHTML = 'X'
        btnExcluir.className = 'btnExcluir'
        btnAlterar.innerHTML = 'Editar'
        btnAlterar.className = 'btnAlterar'
        categoria.innerText = e.nome 
        categoria.className = 'cursor-pointer'

        botoes.appendChild(btnAlterar)
        botoes.appendChild(btnExcluir)
        item.appendChild(categoria)
        item.appendChild(botoes)
        lista.appendChild(item)
    })
}

function listarComfiltro(filtro) {
    let lista = document.getElementById('lista-produtos')
    lista.innerHTML = ''

    var ajax = new XMLHttpRequest()

    ajax.open('POST', './busca_filtrada.php', true)
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

    ajax.send('categoria=' + filtro)
    ajax.onreadystatechange = () => {
        if(ajax.readyState == 4 && ajax.status == 200) {
            produtos = JSON.parse(ajax.response)
            listarProdutosFiltrados(produtos)
        }
    }
}

function listarProdutosFiltrados(produtos) {
    produtos.forEach(e => {
        criarCard(e[0], e[1], e[2], e[3])
    })
}

function categoriasParaSelecao() {
    var ajax = new XMLHttpRequest()

    ajax.open('POST', './pega_categorias.php', true)
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

    ajax.send()
    ajax.onreadystatechange = () => {
        if(ajax.readyState == 4 && ajax.status == 200) {
            categorias = JSON.parse(ajax.response)
            adicionarCategoriasSelecao(categorias)
        }
    }
}

function adicionarCategoriasSelecao(categorias) {
    let div = document.getElementById('selectsCategoria')

    categorias.forEach(e => {
        let categoria = document.createElement('div')
        let check = document.createElement('input')
        let nomeCategoria = document.createElement('label')

        categoria.className = 'inline-display'
        check.type = 'checkbox'
        check.name = e.nome
        check.className = 'checkbox cursor-pointer'
        nomeCategoria.innerText = e.nome

        categoria.appendChild(check)
        categoria.appendChild(nomeCategoria)
        div.appendChild(categoria)
    })
}