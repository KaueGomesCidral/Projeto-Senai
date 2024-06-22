<?php include('config.php'); ?>
  
<?php

    $id_carro = $_GET['id_carro'];

    if ($id_carro) {
        
        $res_update = "UPDATE carro SET vendido=1 WHERE id_carro=$id_carro";
        $resp_update = mysqli_query($conn,$res_update);

        if($resp_update) {
            header('Location: meus_carros.php');
            die();
        }

    } else {
        header('Location: index.php');
        die();
    }

?>