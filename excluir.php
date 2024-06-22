<?php include('config.php'); ?>
  
<?php

    $id_carro = $_GET['id_carro'];

    if ($id_carro) {
        
        $res_deletar1 = "DELETE FROM confirma WHERE id_carro=$id_carro";
        $resp_deletar1 = mysqli_query($conn,$res_deletar1);
        
        $res_deletar2 = "DELETE FROM fotos WHERE id_carro=$id_carro";
        $resp_deletar2 = mysqli_query($conn,$res_deletar2);
        
        $res_deletar3 = "DELETE FROM pertence WHERE id_carro=$id_carro";
        $resp_deletar3 = mysqli_query($conn,$res_deletar3);
        
        $res_deletar4 = "DELETE FROM carro WHERE id_carro=$id_carro";
        $resp_deletar4 = mysqli_query($conn,$res_deletar4);

        if($resp_deletar1 && $resp_deletar2 && $resp_deletar3 && $resp_deletar4) {
            header('Location: meus_carros.php');
            die();
        }

    } else {
        header('Location: index.php');
        die();
    }

?>