<?php include('config.php'); ?>
  
<?php

    $email = $_POST['email'];
    $senha = $_POST['senha'];
    $entrar = '';

    if(!empty($_POST['entrar'])){
        $entrar = $_POST['entrar'];
    }

    if($entrar == 'Entrar'){
        $res_entrar = "SELECT senha_usuario FROM usuario WHERE email_usuario='$email'";
        $resp_consultar = mysqli_query($conn,$res_entrar);
        $resp_valor = mysqli_fetch_assoc($resp_consultar);
        if ($resp_valor['senha_usuario'] == $senha) {
            session_start();
            $_SESSION['user'] = $email;
            if ($_SESSION['login_anuncio'] == 0) {
                $_SESSION['login_anuncio'] == 1;
                header("Location: anuncio_espec.php");
                die();
            } else {
                header("Location: index.php");
                die();
            }
        } else {
            header("Location: login4.php");
            die();
        }
    }

?>