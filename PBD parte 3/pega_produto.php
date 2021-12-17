<?php
    include_once "conexao.php";

    $id = $_POST['id'];

    $query = $conexao->prepare("select * from produto 
                                left join produto_categoria on (produto.id = produto_categoria.id_produto)
                                left join categoria on (produto_categoria.id_categoria = categoria.id)
                                where produto_categoria.id_produto = $id");
    $query->execute();
    $retorno = $query->fetchAll();

    if($retorno == []) {
        $query = $conexao->prepare("select * from produto 
                                    where id = $id");
        $query->execute();
        $retorno = $query->fetchAll();
    }
    echo json_encode($retorno);