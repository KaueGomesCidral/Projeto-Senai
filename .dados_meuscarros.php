<?php include('config.php'); ?>

<?php 

    $preco = $_POST['preco'];
    $preco = str_replace('R$ ', '', $preco);
    $preco = str_replace('.','', $preco);
    $preco = str_replace(',', '.', $preco);
    $id_carro = $_GET['id_carro'];
    session_start();
    $email = $_SESSION['user']; 

    $enviar = '';

    if(!empty($_POST['enviar'])){
        $enviar = $_POST['enviar'];
    }

    echo $id_carro;
    
    // if($enviar == 'Enviar'){
    //     $res_update = "UPDATE carro SET preco_carro=$preco WHERE id_carro=$id_carro";
    //     $resp_update = mysqli_query($conn,$res_update);
    // }

?>