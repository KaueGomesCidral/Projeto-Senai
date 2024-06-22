<?php

    $id_carro = $_GET['id'];
    session_start();
    $_SESSION['id_carro_endereco'] = $id_carro;

    if ($id_carro) {
        header('Location: editar_endereco.php');
        die();
    } else {
        header('Location: index.php');
        die();
    }

?>