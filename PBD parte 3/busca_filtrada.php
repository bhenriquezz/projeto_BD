<?php
    include_once "conexao.php";

    $categoria = "'".$_POST['categoria']."'";

    $query = $conexao->prepare("select * from produto 
                                left join produto_categoria on (produto.id = produto_categoria.id_produto)
                                left join categoria on (produto_categoria.id_categoria = categoria.id)
                                where categoria.nome = $categoria");
    $query->execute();
    $retorno = $query->fetchAll();
    
    echo json_encode($retorno);