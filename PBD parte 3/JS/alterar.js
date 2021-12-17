window.onload = () => {
    categoriasParaSelecao()
    setTimeout(() => {
        pegarProduto()
    }, 10);
}

pegarProduto()
function pegarProduto() {
    var url = window.location.href
    var partes = url.split('?')
    var id = partes[1]

    var ajax = new XMLHttpRequest()

    ajax.open('POST', './pega_produto.php', true)
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

    ajax.send(id)
    ajax.onreadystatechange = () => {
        if(ajax.readyState == 4 && ajax.status == 200) {
            produto = JSON.parse(ajax.response)
            preencherFormulario(produto)
            console.log(produto)
        }
    }
}

function preencherFormulario(produto) {
    let checkboxes = Array.from(document.getElementsByClassName('checkbox'))
    let inputNome = document.getElementById('inputAlterarNomeProduto')
    let textEspecificacao = document.getElementById('textAlterarEspecificacao')

    inputNome.value = produto[0][1]
    textEspecificacao.value = produto[0][2]

    for(let i = 0; i < produto.length; i++) {
        for(let j = 0; j < checkboxes.length; j++) {
            if(produto[i][7] == checkboxes[j].name) {
                checkboxes[j].checked = true
                checkboxes[j].disabled = true
            }
        }
    }
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
        check.className = 'checkbox'
        nomeCategoria.innerText = e.nome

        categoria.appendChild(check)
        categoria.appendChild(nomeCategoria)
        div.appendChild(categoria)
    })
}