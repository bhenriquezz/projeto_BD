<?php
    include_once "conexao.php";

    $query = $conexao->prepare("select * from produto");
    $query->execute();
    $retorno = $query->fetchAll();
    
    echo json_encode($retorno);