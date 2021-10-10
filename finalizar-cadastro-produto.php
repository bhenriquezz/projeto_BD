<?php
    include_once 'conexao.php';

    $nomeProduto = "'".$_POST['nome']."'";
    $valorProduto = floatval($_POST['valor']);
    $quantidadeProduto = intval($_POST['quantidade']);
    $categoriaProduto = "'".$_POST['selecao-categoria']."'";
    $descricaoProduto = "'".$_POST['descricao']."'";

    var_dump($nomeProduto);
    var_dump($valorProduto);
    var_dump($quantidadeProduto);
    var_dump($categoriaProduto);
    var_dump($descricaoProduto);

    $query = $conexao->prepare("
        create table if not exists produtos (
            id int not null primary key auto_increment,
            nome varchar(100) not null,
            valor float(9, 2) not null,
            quantidade int not null,
            categoria varchar(20) not null,
            descricao text not null
        )
    ");
    $query->execute();

    $query = $conexao->prepare("
        insert into produtos (nome, valor, quantidade, categoria, descricao)
        values ($nomeProduto, $valorProduto, $quantidadeProduto, $categoriaProduto, $descricaoProduto)
    ");
    $query->execute();