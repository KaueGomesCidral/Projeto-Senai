<?php include('config.php'); ?>

<?php 

    session_start();
    $id_carro = $_SESSION['id_carro_endereco'];
    $cep = $_POST['cep'];
    $estado = $_POST['estado'];
    $cidade = $_POST['cidade'];
    $bairro = $_POST['bairro'];
    $rua = $_POST['rua'];
    $num = $_POST['num'];
    $complemento = $_POST['complemento'];

    $alterar = '';

    if(!empty($_POST['alterar'])){
        $alterar = $_POST['alterar'];
    }
    
    if($alterar == 'Alterar'){
        $res_update = "UPDATE carro SET cep_carro='$cep',estado_carro='$estado',cidade_carro='$cidade',bairro_carro='$bairro',rua_carro='$rua',num_carro='$num',complemento_carro='$complemento' WHERE id_carro='$id_carro'";
        $resp_udpate = mysqli_query($conn,$res_update);

        header("Location: meus_carros.php");
        die();
    }

?>