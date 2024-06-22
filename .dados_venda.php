<?php include('config.php'); ?>

<?php 

    $marca = $_POST['marca'];
    $modelo = $_POST['modelo'];
    $anoM = $_POST['anoM'];
    $anoF = $_POST['anoF'];
    $versao = $_POST['versao'];
    $cor = $_POST['cor'];
    $combustivel = $_POST['combustivel'];
    $cambio = $_POST['cambio'];
    $anoAtual = date('Y');
    session_start();
    $email = $_SESSION['user'];

    $continuar = '';

    if(!empty($_POST['continuar'])){
        $continuar = $_POST['continuar'];
    }

    $res_entrar = "SELECT id_usuario FROM usuario WHERE email_usuario='$email'";
    $resp_consultar = mysqli_query($conn,$res_entrar);
    $resp_valor = mysqli_fetch_assoc($resp_consultar);
    $id = $resp_valor['id_usuario'];
    $_SESSION['id_usuario'] = $id;

    if ($modelo == 'A3' || $modelo == 'A5' || $modelo == 'TT' || $modelo == 'R8' || $modelo == '330i' || $modelo == 'Z4' || $versao == '3.0 I6 TWINTURBO GASOLINA COMPETITION TRACK STEPTRONIC' || $versao == '4.0 SEDAN V8 32V GASOLINA 4P AUTOMATIZADO' || $modelo == 'i8' || $modelo == 'Camaro' || $versao == '3.0 MPFI GLS V6 24V GASOLINA 4P AUTOMÁTICO' || $versao == '3.3 MPFI GLS SEDAN V6 24V GASOLINA 4P AUTOMÁTICO' || $modelo == 'Fusion' || $modelo == 'Mustang' || $modelo == 'Civic' || $versao == '2.0 VTEC TURBO GASOLINA TOURING 10AT' || $versao == '2.4 EX 16V GASOLINA 4P AUTOMÁTICO' || $versao == '3.5 EX V6 24V GASOLINA 4P AUTOMÁTICO' || $modelo == 'CLA 45' || $modelo == 'AMG GT' || $modelo == 'C 180' || $modelo == 'SLK 200') {
        $esportivo = 1;
    } else {
        $esportivo = 0;
    }

    if ($versao == '2.0 TFSI ROADSTER 211CV GASOLINA 2P S-TRONIC' || $versao == '2.0 TFSI ROADSTER AMBITION 16V GASOLINA 2P S-TRONIC' || $versao == '5.2 FSI QUATTRO SPYDER V10 40V GASOLINA 2P S TRONIC' || $versao == '5.2 FSI QUATTRO V10 40V GASOLINA 2P R-TRONIC' || $modelo == 'Z4' || $versao == '6.2 V8 GASOLINA SS CONVERSÍVEL AUTOMÁTICO' || $versao == '4.0 V8 TURBO GASOLINA C ROADSTER 7G-DCT' || $modelo == 'SLK 200') {
        $conversivel = 1;
    } else {
        $conversivel = 0;
    }

    if ($modelo == 'Q5' || $modelo == 'X4' || $modelo == 'Tracker' || $modelo == 'Pulse' || $modelo == 'HR-V' || $modelo == 'CR-V' || $modelo == 'Creta' || $modelo == 'Tucson' || $modelo == 'Compass' || $modelo == 'Grand Cherokee' || $modelo == 'Commander' || $modelo == 'Wrangler' || $modelo == 'GLA 200' || $modelo == 'Kicks' || $modelo == 'Captur' || $modelo == 'Duster' || $modelo == 'Corolla Cross' || $modelo == 'SW4') {
        $suv = 1;
    } else {
        $suv = 0;
    }

    if ($anoM <= $anoAtual - 20 || $versao == '3.0 (USA) 6 CILINDROS 24V GASOLINA 2P MANUAL' || $versao == '3.2 I6 GASOLINA MANUAL' || $modelo == 'Chevette' || $versao == '2.3 EX-R 16V GASOLINA 4P AUTOMÁTICO' || $versao == '3.0 V6 GDI GASOLINA AUTOMÁTICO') {
        $antigo = 1;
    } else {
        $antigo = 0;
    }

    if ($modelo == 'S10' || $modelo == 'Toro' || $modelo == 'Ranger' || $modelo == 'Frontier' || $modelo == 'Oroch' || $modelo == 'Hilux' || $modelo == 'SW4') {
        $caminhonete = 1;
    } else {
        $caminhonete = 0;
    }

    if ($modelo == 'Cruze' || $modelo == 'Palio' || $modelo == 'Uno' || $modelo == 'Fiorino' || $modelo == 'Fiesta' || $modelo == 'Ka' || $modelo == 'Fit' || $modelo == 'ix35' || $modelo == 'HB20' || $modelo == 'Renegade' || $modelo == 'March' || $modelo == 'Versa' || $modelo == 'Sentra' || $modelo == 'Sandero' || $modelo == 'Fluense' || $modelo == 'Corolla' || $modelo == 'Etios') {
        $popular = 1;
    } else {
        $popular = 0;
    }
    
    // echo 'Esportivo: ' . $esportivo . '<br>';
    // echo 'Conversivel: ' . $conversivel . '<br>';
    // echo 'Suv: ' . $suv . '<br>';
    // echo 'Antigo: ' . $antigo . '<br>';
    // echo 'Caminhonete: ' . $caminhonete . '<br>';
    // echo 'Popular: ' . $popular . '<br>';
    
    if($continuar == 'Continuar'){
        $res_inserir = "INSERT INTO carro(marca_carro,modelo_carro,anoM_carro,anoF_carro,versao_carro,cor_carro,combustivel_carro,cambio_carro,id_usuario) VALUES('$marca','$modelo','$anoM','$anoF','$versao','$cor','$combustivel','$cambio','$id')";
        $resp_inserir = mysqli_query($conn,$res_inserir);
    }

    $ultimo_id = mysqli_insert_id($conn);
    // echo $ultimo_id;
    $_SESSION['ultimo_id_carro'] = $ultimo_id;

    if ($ultimo_id) {
        $res_inserir = "INSERT INTO pertence(id_carro,esportivo,suv,conversivel,popular,caminhonete,antigo) VALUES($ultimo_id,$esportivo,$suv,$conversivel,$popular,$caminhonete,$antigo)";
        $resp_inserir = mysqli_query($conn,$res_inserir);
    }

    if($resp_inserir) {
        header("Location: venda_adicional.php");
        die();
    }

?>