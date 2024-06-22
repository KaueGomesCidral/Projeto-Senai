<?php

    $id_foto = $_GET['id_foto'];
    session_start();
    $_SESSION['id_foto'] = $id_foto;

    if(isset($_SESSION['parametro'])){ 
        unset($_SESSION['parametro']); 
    }

    if (isset($id_foto)) {
        if (isset($_SESSION['user'])) {
            header('Location: anuncio_espec.php');
            die();
        } else {
            header('Location: login3.php');
            die();
        }
    } else {
        header('Location: index.php');
        die();
    }

?>