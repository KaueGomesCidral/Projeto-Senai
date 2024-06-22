<?php

    $pertence = $_GET['pertence'];
    session_start();
    $_SESSION['pertence'] = $pertence;

    if ($pertence) {
        header('Location: anuncio.php');
        die();
    } else {
        header('Location: index.php');
        die();
    }

?>