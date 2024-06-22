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
    $descricao = $_POST['descricao'];
    session_start();
    $_SESSION['km'] = $km;
    $_SESSION['preco'] = $preco;
    $_SESSION['descricao'] = $descricao;

    $ultimo_id_carro = $_SESSION['ultimo_id_carro'];
    $id = $_SESSION['id_usuario'];

    $continuar = '';

    if(!empty($_POST['continuar'])){
        $continuar = $_POST['continuar'];
    }
    
    if($continuar == 'Continuar'){
        $res_update = "UPDATE carro SET km_carro=$km,preco_carro=$preco,descricao_carro='$descricao' WHERE id_carro=$ultimo_id_carro";
        $resp_update = mysqli_query($conn,$res_update);
    }

    header("Location: fotos.php");
    die();

?>