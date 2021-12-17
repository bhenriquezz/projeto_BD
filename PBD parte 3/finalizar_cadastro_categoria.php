<<?php
    include_once "conexao.php";

    $nomeCategoria = "'".$_POST['nomeCategoria']."'";

    $query = $conexao->prepare("insert into categoria(nome)
                                values($nomeCategoria)");
    $query->execute();
    
    header("Location: index.php");