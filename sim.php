<?php include('config.php'); ?>

<?php

    session_start();
    $email = $_SESSION['user'];
    $ultimo_id_carro = $_SESSION['ultimo_id_carro'];

    $res_consultar = "SELECT * FROM `usuario` WHERE `email_usuario`='$email'";
    $resp_consultar = mysqli_query($conn,$res_consultar);
    $resp_valor = mysqli_fetch_assoc($resp_consultar);
    $cep = $resp_valor['cep_usuario'];
    $estado = $resp_valor['estado_usuario'];
    $cidade = $resp_valor['cidade_usuario'];
    $bairro = $resp_valor['bairro_usuario'];
    $rua = $resp_valor['rua_usuario'];
    $num = $resp_valor['num_usuario'];
    $complemento = $resp_valor['complemento_usuario'];
    $sim = '';

    if(!empty($_POST['sim'])){
        $sim = $_POST['sim'];
    }
    
    if($sim == 'Sim'){
        $res_update = "UPDATE carro SET cep_carro='$cep',estado_carro='$estado',cidade_carro='$cidade',bairro_carro='$bairro',rua_carro='$rua',num_carro='$num',complemento_carro='$complemento' WHERE id_carro='$ultimo_id_carro'";
        $resp_udpate = mysqli_query($conn,$res_update);
    
        header("Location: confirma.php");
        die();
    }

?>