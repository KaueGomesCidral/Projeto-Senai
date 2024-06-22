<?php 
    include_once('config.php');
    session_start();
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Relatórios</title>
    <link rel="shortcut icon" href="img/logotipo.png" type="image/x-icon">
    <link rel="stylesheet" href=".style_relatorios.css">
    <script src="relatorios.js" defer></script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript"></script>
    <script src="https://plentz.github.io/jquery-maskmoney/javascripts/jquery.maskMoney.min.js" type="text/javascript"></script>    
    <script src="https://igorescobar.github.io/jQuery-Mask-Plugin/js/jquery.mask.min.js"></script>
</head>

<body>

    <div class="body_espec">

        <!-- Barra Superior da Página -->

        <div class="a">
            <div class="barra_sup">
                <a class="p" href="index.php"><img src="img/logoClickMotorsPreto.png" width="80%"></a>

                <div class="b">

                    <a class="o" href="anuncio.php"><div class="txt_barra">Compra</div></a>

                    <?php
                            if(isset($_SESSION['user'])) {
                                echo '<a class="o" href="venda.php">';
                            } else {
                                echo '<a class="o" href="login1.php">';
                            }
                        ?>

                    <div id="venda" class="txt_barra">Venda</div>

                    <?php
                            if(isset($_SESSION['user'])) {
                                echo '</a>';
                            } else {
                                echo '</a>';
                            }
                        ?>

                    <?php
                            if(isset($_SESSION['user'])) {
                                echo '';
                            } else {
                                echo '<a class="o" href="login1.php">';
                            }
                        ?>

                    <div class="txt_barra">

                        <?php
                            if(isset($_SESSION['user'])) {
                                echo '<div class="div_popup-menu">';
                            } else {
                                echo '<div class="c">';
                            }
                        ?>
                            <img src="img/Login.png" width="30%">

                            <?php
                                    if(isset($_SESSION['user'])) {
                                        $email = $_SESSION['user'];
                                        $res_consultar = "SELECT nome_usuario FROM usuario WHERE email_usuario='$email'";
                                        $resp_consultar = mysqli_query($conn,$res_consultar);
                                        $resp_valor = mysqli_fetch_assoc($resp_consultar);
                                        $nome = $resp_valor['nome_usuario'];
                                        $partes = explode(" ",$nome);
                                        $nome = $partes[0];
                                        echo $nome;
                                    } else {
                                        echo 'Login';
                                    }
                                ?>

                        </div>
                    </div>
                    <?php
                            if(isset($_SESSION['user'])) {
                                echo '';
                            } else {
                                echo '</a>';
                            }
                        ?>
                </div>
            </div>
        </div>

        <div class="conteudo">

            <div class="cabecalho"><div class="txt_cabecalho">Relatórios</div></div>

            <hr>

            <div class="d">
                <div class="e">
                    <div class="cont_circulo">
                        <div class="circulo">
                            <?php
                            
                                $res_consultar = "SELECT COUNT(*) AS `total` FROM `carro` INNER JOIN `fotos` ON `carro`.`id_carro`=`fotos`.`id_carro` WHERE `id_fotos`!=''";
                                $resp_consultar = mysqli_query($conn,$res_consultar);
                                $resp_valor = mysqli_fetch_assoc($resp_consultar);

                                echo $resp_valor['total'];
                            
                            ?>
                        </div>
                        Veículos Anunciados
                    </div>
                    <div class="cont_circulo">
                        <div class="circulo">
                            <?php
                                
                                $res_consultar = "SELECT COUNT(*) AS `total` FROM `carro` WHERE `vendido` = 1";
                                $resp_consultar = mysqli_query($conn,$res_consultar);
                                $resp_valor = mysqli_fetch_assoc($resp_consultar);

                                echo $resp_valor['total'];
                            
                            ?>
                        </div>
                        Veículos Vendidos
                    </div>
                    <div class="cont_circulo">
                        <div class="circulo">
                            <?php
                                
                                $res_consultar = "SELECT SUM(`visitas`) AS `total` FROM `carro`";
                                $resp_consultar = mysqli_query($conn,$res_consultar);
                                $resp_valor = mysqli_fetch_assoc($resp_consultar);

                                $visitas = $resp_valor['total'];
                                echo $visitas;
                            
                            ?>
                        </div>
                        Número de Visitas
                    </div>
                </div>
                <div class="e">
                    <div class="cont_circulo">
                        <div class="circulo">
                            <?php
                                
                                $res_consultar = "SELECT SUM(`cliques`) AS `total` FROM `carro`";
                                $resp_consultar = mysqli_query($conn,$res_consultar);
                                $resp_valor = mysqli_fetch_assoc($resp_consultar);

                                $cliques = $resp_valor['total'];
                                $cliques = $cliques + ($visitas * 2);
                                echo $cliques;
                            
                            ?>
                        </div>
                        Anúncios Gerados
                    </div>
                    <div class="cont_valor">
                        <div class="valor">R$ 
                            <?php
                                
                                $res_consultar = "SELECT SUM(`preco_carro`) AS `total` FROM `carro` WHERE `vendido` = 1";
                                $resp_consultar = mysqli_query($conn,$res_consultar);
                                $resp_valor = mysqli_fetch_assoc($resp_consultar);

                                $preco = $resp_valor['total'];
                                $preco = number_format($preco,2,",",".");
                                echo $preco;
                            ?>
                        </div>
                        Valor das Movimentações
                    </div>
                </div>
            </div>
            
        </div>

    </div>

    <?php

        if(isset($_SESSION['user'])) {
            echo '<div class="popup-wrapper-menu">
                <div class="popup-menu">
                    <a href="meus_carros.php" class="h-menu"><div class="meus_carros-menu">
                        Meus Carros
                    </div></a>';
                        $email = $_SESSION['user'];
                        if($email == 'spezia548@gmail.com') {
                            echo '<a href="relatorios.php" class="h-menu"><div class="relatorios-menu">Ver Relatórios</div></a>';
                        } else {
                            echo '<a href="endereco1.php" class="h-menu"><div class="endereco-menu">Mudar Endereço</div></a>';
                        }
                    echo '<a href="sair.php?logout=1" class="h-menu"><div class="sair-menu">
                        Sair
                    </div></a>
                </div>
            </div>';
        }

    ?>

</body>

</html>