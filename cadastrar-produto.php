<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css">
    <link rel="stylesheet" href="cadastrar-produto.css">
    <title>Projeto BD - Cadastrar Produto</title>
</head>
<body>
    <div id="container">
        <div id="header-container">
            <header>
                <a href="index.php" class="a-limpo" id="logo"><h1>LOGO</h1></a>
    
                <div id="barra-de-pesquisa">
                    <input type="text" placeholder="Pesquisar Produto" class="input-limpo">
                    <button><i class="fas fa-search"></i></button>
                </div>
    
                <a href="cadastrar-produto.php" class="a-decorado">Cadastrar Produto</a>
            </header>
        </div>

        <div id="main">
            <form action="finalizar-cadastro-produto.php" method="post" id="form-cadastro-produto">
                <h1>DADOS DO PRODUTO</h1>

                <input type="text" name="nome" placeholder="Nome do Produto" class="input-limpo">

                <input type="text" name="valor" placeholder="Valor do Produto (R$)" class="input-limpo">

                <input type="text" name="quantidade" placeholder="Quantidade do Produto" class="input-limpo">

                <div>
                    <label for="selecao-categoria">Categoria: </label>
                    <select name="selecao-categoria">
                        <option value="seleciona">Selecione uma categoria</option>
                        <option value="pc">PC</option>
                        <option value="hardware">Hardware</option>
                        <option value="perifericos">Periféricos</option>
                        <option value="monitores">Monitores</option>
                        <option value="notebooks">Notebooks</option>
                    </select>
                </div>

                <textarea name="descricao" cols="30" rows="10" placeholder="Descrição do Produto" class="textarea-limpo"></textarea>

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
</body>
</html>