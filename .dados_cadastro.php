<?php include('config.php'); ?>

<?php 

    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];
    $senha = $_POST['senha'];

    session_start();
    $_SESSION['e'] = $email;

    $continuar = '';

    if(!empty($_POST['continuar'])){
        $continuar = $_POST['continuar'];
    }
    
    if($continuar == 'Continuar'){
        $res_consultar = "SELECT email_usuario FROM usuario WHERE email_usuario='$email'";
        $resp_consultar = mysqli_query($conn,$res_consultar);
        $email_verificar = mysqli_fetch_assoc($resp_consultar);
    
        $res_consultar = "SELECT cep_usuario FROM usuario WHERE email_usuario='$email'";
        $resp_consultar = mysqli_query($conn,$res_consultar);
        $cep_verificar = mysqli_fetch_assoc($resp_consultar);
        
        session_start();

        if($email == $email_verificar['email_usuario'] && $cep_verificar['cep_usuario'] == '') {
            $res_update = "UPDATE usuario SET nome_usuario='$nome',telefone_usuario='$tel',senha_usuario='$senha' WHERE email_usuario='$email'";
            $resp_update = mysqli_query($conn,$res_update);
            $_SESSION['user'] = $email;
            header("Location: endereco1.php");
            die();
        } else if ($email == $email_verificar['email_usuario'] && $cep_verificar['cep_usuario'] != '') {
            header("Location: jatemcad.php");
            die();
        } else {
            $res_inserir = "INSERT INTO usuario(nome_usuario,email_usuario,telefone_usuario,senha_usuario) VALUES('$nome','$email','$tel','$senha')";
            $resp_inserir = mysqli_query($conn,$res_inserir);
            $_SESSION['user'] = $email;
            header("Location: endereco1.php");
            die();
        }
            
    }

?>