<?php include('config.php'); ?>
  
<?php

    $maior18 = 0;
    $tel = 0;
    $email = 0;
    if(!empty($_POST['maior18'])){
        $maior18 = 1;
    }
    if(!empty($_POST['tel'])){
        $tel = 1;
    }
    if(!empty($_POST['email'])){
        $email = 1;
    }
    $finalizar = '';

    session_start();
    $id = $_SESSION['id_usuario'];
    $ultimo_id_carro = $_SESSION['ultimo_id_carro'];

    // session_start();
    // $ultimo_id_carro = $_SESSION['ultimo_id_carro'];

    if(!empty($_POST['finalizar'])){
        $finalizar = $_POST['finalizar'];
    }

    echo $maior18;
    echo $tel;
    echo $email;
    echo $id;
    echo $ultimo_id_carro;

    if($finalizar == 'Finalizar'){
        $res_inserir = "INSERT INTO confirma(maior18,tel,email,id_usuario,id_carro) VALUES($maior18,$tel,$email,$id,$ultimo_id_carro)";
        $resp_inserir = mysqli_query($conn,$res_inserir);
    } else {
        header("Location: confirma.php");
        die();
    }

    header("Location: index.php");
    die();
        
?>