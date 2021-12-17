<<?php
    include_once "conexao.php";

    $idCategoria = intval($_POST['id']);

    $query = $conexao->prepare("delete from produto_categoria where id_categoria = $idCategoria");
    $query->execute();

    $query = $conexao->prepare("delete from categoria where id = $idCategoria");
    $query->execute();
    
    header("Location: index.php");