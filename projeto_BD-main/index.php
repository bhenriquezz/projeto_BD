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
    
                <a href="cadastrar-produto.php" class="a-decorado">Cadastrar Produto</a>
            </header>
        </div>

        <div id="main">
            <nav id="menu-lateral">
                <h4>Categoria</h4>
                <ul class="ul-limpa">
                    <li>
                        <a href="#" onclick='filtrar("todas")' class="a-limpo">Todas</a>
                    </li>
                    <li>
                        <a href="#" onclick='filtrar("pc")' class="a-limpo">PC</a>
                    </li>
                    <li>
                        <a href="#" onclick='filtrar("hardware")' class="a-limpo">Hardware</a>
                    </li>
                    <li>
                        <a href="#" onclick='filtrar("perifericos")' class="a-limpo">Periféricos</a>
                    </li>
                    <li>
                        <a href="#" onclick='filtrar("monitores")' class="a-limpo">Monitores</a>
                    </li>
                    <li>
                        <a href="#" onclick='filtrar("notebooks")' class="a-limpo">Notebooks</a>
                    </li>
                </ul>

                <hr>
                
                <div id="form-cadastro-produto">
                    <h1>CADASTRAR PRODUTO</h1>
    
                    <input type="text" name="nome" id="input-nome" placeholder="Nome do Produto" class="input-limpo" required>
    
                    <input type="text" name="valor" id="input-valor" placeholder="Valor do Produto (R$)" class="input-limpo" required>
    
                    <input type="text" name="quantidade" id="input-quantidade" placeholder="Quantidade do Produto" class="input-limpo" required>
    
                    <div>
                        <label for="selecao-categoria">Categoria: </label>
                        <select name="selecao-categoria" id="select-categoria" required>
                            <option value="seleciona">Selecione uma categoria</option>
                            <option value="pc">PC</option>
                            <option value="hardware">Hardware</option>
                            <option value="perifericos">Periféricos</option>
                            <option value="monitores">Monitores</option>
                            <option value="notebooks">Notebooks</option>
                        </select>
                    </div>
    
                    <button id="salvar" onclick="produto.criarProduto()">Cadastrar</button>
                </div>
            </nav>

            <div id="lista-produtos">
            </div>
        </div>
    </div>
    
    <script src="JS/produto.js"></script>
</body>
</html>
