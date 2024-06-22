<?php

    session_start();

    if(isset($_POST['cep'])) {
        $cep = $_POST['cep'];
        $deAno = $_POST['deAno'];
        $ateAno = $_POST['ateAno'];
        $dePreco = $_POST['dePreco'];
        $atePreco = $_POST['atePreco'];
        $deKm = $_POST['deKm'];
        $ateKm = $_POST['ateKm'];

        $_SESSION['cep'] = $cep;
        $_SESSION['deAno'] = $deAno;
        $_SESSION['ateAno'] = $ateAno;
        $_SESSION['dePreco'] = $dePreco;
        $_SESSION['atePreco'] = $atePreco;
        $_SESSION['deKm'] = $deKm;
        $_SESSION['ateKm'] = $ateKm;
    }

    header('Location: anuncio_filtro.php');
    die();
    
?>