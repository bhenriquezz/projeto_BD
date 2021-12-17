<!DOCTYPE html>
<html lang="pt-br">
<head>
    
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css">
    <link rel="stylesheet" href="CSS/style.css">
    <title>Projeto BD - Início</title>

</head>
<body id="body">
    
    <div id="container">
        <div id="header-container">
            <header>
                <a href="index.php" class="a-limpo" id="logo"><h1>LOGO</h1></a>
    
                <div id="barra-de-pesquisa">
                    <input type="text" placeholder="Pesquisar Produto" class="input-limpo" id="input-busca">
                    <button onclick="buscar()"><i class="fas fa-search"></i></button>
                </div>
    
                <a href="cadastrar_produto.php" class="a-decorado">Cadastrar Produto</a>
            </header>
        </div>

        <div id="main">
            <nav id="menu-lateral">
                <h4>Categoria</h4>
                <ul class="ul-limpa" id="listaCategorias">
                    <li>
                        <a onclick="obterProdutos()" href="#" class="cursor-pointer a-limpo">Todas</a>
                    </li>
                </ul>
                <div id="cadastroCategoria">
                    <button onclick="liberarCadastroCategoria()">Cadastrar categoria</button>
                </div>
            </nav>

            <div id="lista-produtos">
            </div>
        </div>
    </div>
    
    <script src="JS/script.js"></script>
</body>
</html>