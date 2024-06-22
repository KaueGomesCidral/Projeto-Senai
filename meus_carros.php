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
    <title>Meus Carros</title>
    <link rel="shortcut icon" href="img/logotipo.png" type="image/x-icon">
    <link rel="stylesheet" href=".style_meuscarros.css">
    <script src="meus_carros.js" defer></script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript"></script>
    <script src="https://plentz.github.io/jquery-maskmoney/javascripts/jquery.maskMoney.min.js" type="text/javascript">
    </script>
    <script src="https://igorescobar.github.io/jQuery-Mask-Plugin/js/jquery.mask.min.js"></script>
</head>

<body>

    <div class="body_espec">

        <!-- Barra Superior da Página -->

        <div class="a">
            <div class="barra_sup">
                <a class="p" href="index.php"><img src="img/logoClickMotorsPreto.png" width="80%"></a>

                <div class="b">

                    <a class="o" href="anuncio.php">
                        <div class="txt_barra">Compra</div>
                    </a>

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

        <!-- <div class="l"> -->
        <div class="cabecalho">
            <div class="txt_cabecalho">Meus Carros</div>
            <div class="d">
                <div class="vendidos">Vendidos</div>
                <div class="anunciados">Anunciados</div>
            </div>
        </div>

        <hr>

        <div class="k">

            <?php
                
                $email = $_SESSION['user'];
                $res_consultar = "SELECT COUNT(*) AS 'valor' FROM `carro` INNER JOIN `fotos` ON `carro`.`id_carro` = `fotos`.`id_carro` INNER JOIN `pertence` ON `carro`.`id_carro` = `pertence`.`id_carro` INNER JOIN `usuario` ON `carro`.`id_usuario` = `usuario`.`id_usuario` INNER JOIN `confirma` ON `carro`.`id_carro` = `confirma`.`id_carro` WHERE `email_usuario` = '$email' AND `vendido` = 0 AND `maior18` = 1";
                $resp_consultar = mysqli_query($conn,$res_consultar);
                $resp_valor = mysqli_fetch_assoc($resp_consultar);
                $qttd = $resp_valor['valor'];

                $i = 0;
                for($i==0; $i<$qttd; $i++) {
                    $res_consultar = "SELECT * FROM `carro` INNER JOIN `fotos` ON `carro`.`id_carro` = `fotos`.`id_carro` INNER JOIN `pertence` ON `carro`.`id_carro` = `pertence`.`id_carro` INNER JOIN `usuario` ON `carro`.`id_usuario` = `usuario`.`id_usuario` INNER JOIN `confirma` ON `carro`.`id_carro` = `confirma`.`id_carro` WHERE `email_usuario` = '$email' AND `vendido` = 0 AND `maior18` = 1 ORDER BY `id_fotos` ASC LIMIT $i,$qttd";
                    $resp_consultar = mysqli_query($conn,$res_consultar);
                    $resp_valor = mysqli_fetch_assoc($resp_consultar);

                    $bg_img = "'.upload/" . $resp_valor['id_fotos'] . "/frontal.jpg'";
                    echo '
                        <div class="principal">
                            <div class="img" style="background-image:url(' . $bg_img . '); background-position: center; background-repeat: no-repeat; background-size: cover;"><a class="f" href="id_foto.php?id_foto=' . $resp_valor['id_fotos'] . '" target="_blank" rel="noopener noreferrer"><img class="e" src="img/verAnuncio.png" width="40%"></a></div>
                            <div class="dados">
                                <div class="i">
                                <div class="g">
                                    <div class="modelo">' . $resp_valor['marca_carro'] . ' ' . $resp_valor['modelo_carro'] . '</div>';
                                    $preco = $resp_valor['preco_carro'];
                                    $preco = number_format($preco,2,",",".");
                                    echo '<div class="valor">R$ ' . $preco . '</div>
                                </div>
                                <div class="versao">' . $resp_valor['versao_carro'] . '</div>
                                <div class="local">' . $resp_valor['cidade_carro'] . ' - ' . $resp_valor['estado_carro'] . '<a href="cam_editar_endereco.php?id=' . $resp_valor['id_carro'] . '"><img src="img/editar2.png"></a></div>
                                </div>
                                <div class="h">
                                    <form action="cam_editar.php?id_carro=' . $resp_valor['id_carro'] . '" method="post" class="form_botao">
                                        <input type="submit" name="excluir" value="Editar Valor e Km" class="botao_popup"></input>
                                    </form>
                                    <form action="excluir.php?id_carro=' . $resp_valor['id_carro'] . '" method="post" class="form_botao">
                                        <input type="submit" name="excluir" value="Excluir Anúncio" class="botao_excluir"></input>
                                    </form>
                                    <form action="vendido.php?id_carro=' . $resp_valor['id_carro'] . '" method="post" class="form_botao">
                                        <input type="submit" name="vendido" class="botao_vendido" value="Confirmar Venda"></input>
                                    </form>
                                </div>
                            </div>
                        </div>
                    ';
                }

                if($qttd == 0) {
                    echo '<div class="q">
                        <img src="img/nenhum_carro.jpg">
                        Nenhum Carro Cadastrado
                    </div>';
                }

            ?>

            <div class="m"></div>

        </div>

        <div class="n">

            <?php
                
                    $email = $_SESSION['user'];
                    $res_consultar = "SELECT COUNT(*) AS 'valor' FROM `carro` INNER JOIN `fotos` ON `carro`.`id_carro` = `fotos`.`id_carro` INNER JOIN `pertence` ON `carro`.`id_carro` = `pertence`.`id_carro` INNER JOIN `usuario` ON `carro`.`id_usuario` = `usuario`.`id_usuario` INNER JOIN `confirma` ON `carro`.`id_carro` = `confirma`.`id_carro` WHERE `email_usuario` = '$email' AND `vendido` = 1 AND `maior18` = 1";
                    $resp_consultar = mysqli_query($conn,$res_consultar);
                    $resp_valor = mysqli_fetch_assoc($resp_consultar);
                    $qttd = $resp_valor['valor'];

                    $i = 0;
                    for($i==0; $i<$qttd; $i++) {
                        $res_consultar = "SELECT * FROM `carro` INNER JOIN `fotos` ON `carro`.`id_carro` = `fotos`.`id_carro` INNER JOIN `pertence` ON `carro`.`id_carro` = `pertence`.`id_carro` INNER JOIN `usuario` ON `carro`.`id_usuario` = `usuario`.`id_usuario` INNER JOIN `confirma` ON `carro`.`id_carro` = `confirma`.`id_carro` WHERE `email_usuario` = '$email' AND `vendido` = 1 AND `maior18` = 1 ORDER BY `id_fotos` ASC LIMIT $i,$qttd";
                        $resp_consultar = mysqli_query($conn,$res_consultar);
                        $resp_valor = mysqli_fetch_assoc($resp_consultar);

                        $bg_img = "'.upload/" . $resp_valor['id_fotos'] . "/frontal.jpg'";
                        echo '
                            <div class="principal_vendido">
                                <div class="img" style="background-image:url(' . $bg_img . '); background-position: center; background-repeat: no-repeat; background-size: cover;"></div>
                                <div class="dados">
                                    <div class="i">
                                    <div class="g">
                                        <div class="modelo">' . $resp_valor['marca_carro'] . ' ' . $resp_valor['modelo_carro'] . '</div>';
                                        $preco = $resp_valor['preco_carro'];
                                        $preco = number_format($preco,2,",",".");
                                        echo '<div class="valor">R$ ' . $preco . '</div>
                                    </div>
                                    <div class="versao">' . $resp_valor['versao_carro'] . '</div>
                                    <div class="local">' . $resp_valor['cidade_carro'] . ' - ' . $resp_valor['estado_carro'] . '</div>
                                    </div>
                                </div>
                            </div>
                        ';
                    }

                    if($qttd == 0) {
                        echo '<div class="q">
                            <img src="img/nenhum_carro.jpg">
                            Nenhum Carro Vendido
                        </div>';
                    }

                ?>

            <div class="m"></div>

        </div>

    </div>

    </div>

    <script>
    jQuery(function() {
        jQuery("#preco").maskMoney({
            prefix: 'R$ ',
            thousands: '.',
            decimal: ','
        })
    });
    </script>

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