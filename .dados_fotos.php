<?php include('config.php'); ?>
  
<?php

    $frontal = $_FILES['frontal'];
    $traseira = $_FILES['traseira'];
    $lat_esq = $_FILES['lat_esq'];
    $lat_dir = $_FILES['lat_dir'];
    $motor = $_FILES['motor'];
    $portamalas = $_FILES['portamalas'];
    $painel = $_FILES['painel'];
    $interior = $_FILES['interior'];
    $continuar = '';

    session_start();
    $ultimo_id_carro = $_SESSION['ultimo_id_carro'];

    if(!empty($_POST['continuar'])){
        $continuar = $_POST['continuar'];
    }

    if($frontal) {
        
    } else {
        header('Location: fotos.php');
    }

    if(isset($_FILES['frontal'])) {

        $extensao_frontal = pathinfo($_FILES['frontal']['name'], PATHINFO_EXTENSION);
        $novo_nome_frontal = 'frontal.' . $extensao_frontal;

    }

    if(isset($_FILES['traseira'])) {

        $extensao_traseira = pathinfo($_FILES['traseira']['name'], PATHINFO_EXTENSION);
        $novo_nome_traseira = 'traseira.' . $extensao_traseira;

    }

    if(isset($_FILES['lat_esq'])) {

        $extensao_lat_esq = pathinfo($_FILES['lat_esq']['name'], PATHINFO_EXTENSION);
        $novo_nome_lat_esq = 'lat_esq.' . $extensao_lat_esq;
        
    }
        
    if(isset($_FILES['lat_dir'])) {
        
        $extensao_lat_dir = pathinfo($_FILES['lat_dir']['name'], PATHINFO_EXTENSION);
        $novo_nome_lat_dir = 'lat_dir.' . $extensao_lat_dir;

    }

    if(isset($_FILES['motor'])) {

        $extensao_motor = pathinfo($_FILES['motor']['name'], PATHINFO_EXTENSION);
        $novo_nome_motor = 'motor.' . $extensao_motor;
    
    }
    
    if(isset($_FILES['portamalas'])) {
    
        $extensao_portamalas = pathinfo($_FILES['portamalas']['name'], PATHINFO_EXTENSION);
        $novo_nome_portamalas = 'portamalas.' . $extensao_portamalas;
    
    }

    if(isset($_FILES['painel'])) {
    
        $extensao_painel = pathinfo($_FILES['painel']['name'], PATHINFO_EXTENSION);
        $novo_nome_painel = 'painel.' . $extensao_painel;
    
    }
    
    if(isset($_FILES['interior'])) {
    
        $extensao_interior = pathinfo($_FILES['interior']['name'], PATHINFO_EXTENSION);
        $novo_nome_interior = 'interior.' . $extensao_interior;
    
    }

    if($continuar=='Continuar') {
        $res_inserir = "INSERT INTO fotos(id_carro,nome_frontal,nome_traseira,nome_lat_esq,nome_lat_dir,nome_motor,nome_portamalas,nome_painel,nome_interior) VALUES($ultimo_id_carro,'$novo_nome_frontal','$novo_nome_traseira','$novo_nome_lat_esq','$novo_nome_lat_dir','$novo_nome_motor','$novo_nome_portamalas','$novo_nome_painel','$novo_nome_interior')";
        $resp_inserir = mysqli_query($conn,$res_inserir);
    }
    
    if($resp_inserir) {
        $ultimo_id = mysqli_insert_id($conn);
        $diretorio = '.upload/' . $ultimo_id . '/';

        if(is_dir('.upload')) {
            mkdir($diretorio, 0755);
        } else {
            mkdir('.upload');
            mkdir($diretorio, 0755);
        }

        move_uploaded_file($_FILES['frontal']['tmp_name'], $diretorio . $novo_nome_frontal);
        move_uploaded_file($_FILES['traseira']['tmp_name'], $diretorio . $novo_nome_traseira);
        move_uploaded_file($_FILES['lat_esq']['tmp_name'], $diretorio . $novo_nome_lat_esq);
        move_uploaded_file($_FILES['lat_dir']['tmp_name'], $diretorio . $novo_nome_lat_dir);
        move_uploaded_file($_FILES['motor']['tmp_name'], $diretorio . $novo_nome_motor);
        move_uploaded_file($_FILES['portamalas']['tmp_name'], $diretorio . $novo_nome_portamalas);
        move_uploaded_file($_FILES['painel']['tmp_name'], $diretorio . $novo_nome_painel);
        move_uploaded_file($_FILES['interior']['tmp_name'], $diretorio . $novo_nome_interior);
    }

    header("Location: sim_nao.php");
    die();
        
?>