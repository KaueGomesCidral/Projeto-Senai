<?php

    $logout = $_GET['logout'];
    session_start();
    $_SESSION['logout'] = $logout;

    header('Location: index.php');
    die();

?>