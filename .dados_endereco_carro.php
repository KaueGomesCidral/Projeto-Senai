<?php include('config.php'); ?>

<?php 

    session_start();
    $email = $_SESSION['user'];
    $ultimo_id_carro = $_SESSION['ultimo_id_carro'];
    $cep = $_POST['cep'];
    $estado = $_POST['estado'];
    $cidade = $_POST['cidade'];
    $bairro = $_POST['bairro'];
    $rua = $_POST['rua'];
    $num = $_POST['num'];
    $complemento = $_POST['complemento'];

    $continuar = '';

    if(!empty($_POST['continuar'])){
        $continuar = $_POST['continuar'];
    }
    
    if($continuar == 'Continuar'){
        $res_update = "UPDATE carro SET cep_carro='$cep',estado_carro='$estado',cidade_carro='$cidade',bairro_carro='$bairro',rua_carro='$rua',num_carro='$num',complemento_carro='$complemento' WHERE id_carro='$ultimo_id_carro'";
        $resp_udpate = mysqli_query($conn,$res_update);

        header("Location: confirma.php");
        die();
    }

?>