<?php
    $id = $_POST['id']
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css">
    <link rel="stylesheet" href="CSS/style.css">
    <title>Detalhes</title>
</head>
<body>
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

        <div id="detalhes">
            <div><img src="IMG/Hardware.jpg" alt="Imagem do Produto" class="img-detalhe"></div>
            <div id="dados">
                <p id="detalhe-id">id</p>
                <h3 id="detalhe-nome">nome</h3>
                <p id="detalhe-valor">valor</p>
                <p id="detalhe-categoria">categoria</p>
                <p id="detalhe-quantidade">quantidade</p>
            </div>
        </div>
    </div>

</body>
</html>