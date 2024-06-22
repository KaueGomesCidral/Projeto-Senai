<?php

    $id_carro = $_GET['id_carro'];
    session_start();
    $_SESSION['id_carro'] = $id_carro;

    if ($id_carro) {
        header('Location: editar.php');
        die();
    } else {
        header('Location: index.php');
        die();
    }

?>