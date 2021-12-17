<?php
    include_once "conexao.php";
    $idCategoria = $_POST['id'];
    $nomeCategoria = "'".$_POST['nome']."'";

    $query = $conexao->prepare("update categoria
                                set nome = $nomeCategoria
                                where id = $idCategoria");
    $query->execute();
    
    //header("Location: index.php");