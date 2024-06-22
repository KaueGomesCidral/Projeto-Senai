<?php include('config.php'); ?>

<?php 

    $cep = $_POST['cep'];
    $estado = $_POST['estado'];
    $cidade = $_POST['cidade'];
    $bairro = $_POST['bairro'];
    $rua = $_POST['rua'];
    $num = $_POST['num'];
    $complemento = $_POST['complemento'];
    session_start();
    $email = $_SESSION['user']; 

    $cadastrar = '';

    if(!empty($_POST['cadastrar'])){
        $cadastrar = $_POST['cadastrar'];
    }
    
    if($cadastrar == 'Cadastrar'){
        $res_update = "UPDATE usuario SET cep_usuario='$cep',estado_usuario='$estado',cidade_usuario='$cidade',bairro_usuario='$bairro',rua_usuario='$rua',num_usuario='$num',complemento_usuario='$complemento' WHERE email_usuario='$email'";
        $resp_udpate = mysqli_query($conn,$res_update);
    }

    if ($_SESSION['login_anuncio'] == 0) {
        $_SESSION['login_anuncio'] == 1;
        header("Location: anuncio_espec.php");
        die();
    } else {
        header("Location: index.php");
        die();
    }

?>