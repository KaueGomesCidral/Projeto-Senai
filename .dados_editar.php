<?php include('config.php'); ?>

<?php 

    $km = $_POST['km'];
    if($km == '') {
        $km = '0 km';
    }
    $km = str_replace('.', '', $km);
    $km = str_replace(' km', '', $km);
    $preco = $_POST['preco'];
    $preco = str_replace('R$ ', '', $preco);
    $preco = str_replace('.','', $preco);
    $preco = str_replace(',', '.', $preco);
    session_start();
    $id_carro = $_SESSION['id_carro'];

    $confirmar = '';

    if(!empty($_POST['confirmar'])){
        $confirmar = $_POST['confirmar'];
    }
    
    if($confirmar == 'Confirmar'){
        $res_update = "UPDATE carro SET km_carro=$km,preco_carro=$preco WHERE id_carro=$id_carro";
        $resp_update = mysqli_query($conn,$res_update);
    }

    if($resp_update) {
        header("Location: meus_carros.php");
        die();
    } else {
        header("Location: index.php");
        die();
    }
    

?>