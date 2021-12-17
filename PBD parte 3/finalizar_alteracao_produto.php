<?php
    include_once "conexao.php";
    $queryString = explode('?', $_SERVER["HTTP_REFERER"]);
    $idProduto = explode('=', $queryString[1]);
    $idProduto = intval($idProduto[1]);

    $queryString = explode('&', $_SERVER["QUERY_STRING"]);
    $dadosOrganizados;

    for($i = 0; $i < count($queryString); $i++) {
        $dadosOrganizados[$i] = explode('=', $queryString[$i]);
    }
    $nomeProduto = str_replace('+', ' ', "'".$dadosOrganizados[0][1]."'");
    $especificacoes = str_replace('+', ' ', "'".$dadosOrganizados[count($queryString)-1][1]."'");

    $query = $conexao->prepare("update produto
                                set nome = $nomeProduto, especificacao = $especificacoes, status = 'cadastro'
                                where id = $idProduto");
    $query->execute();

    for($i = 1; $i < count($queryString)-1; $i++) {
        $nomeCategoria = "'".$dadosOrganizados[$i][0]."'";

        $query = $conexao->prepare("select id from categoria 
                                    where nome = $nomeCategoria");
        $query->execute();
        $idCategoria = $query->fetch();
        $idCategoria = intval($idCategoria[0]);

        $query = $conexao->prepare("insert into produto_categoria
                                    values($idProduto, $idCategoria)");
        $query->execute();
    }
    
    header("Location: index.php");