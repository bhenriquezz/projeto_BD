<?php
    $dsn = 'mysql:host=localhost;dbname=loja';
    $usuario = 'root';
    $senha = '';

    try {
        $conexao = new PDO($dsn, $usuario, $senha);
    } catch(PDOException $e) {
        echo 'Erro: '.$e->getCode().' Mensagem: '.$e->getMessage();
        //registrar erro
    }