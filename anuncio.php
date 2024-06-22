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
    <title>Anuncio</title>
    <link rel="shortcut icon" href="img/logotipo.png" type="image/x-icon">
    <link rel="stylesheet" href=".style_anuncio.css">
    <script src="anuncio.js" defer></script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript"></script>
    <script src="https://plentz.github.io/jquery-maskmoney/javascripts/jquery.maskMoney.min.js" type="text/javascript"></script>
    <script src="https://igorescobar.github.io/jQuery-Mask-Plugin/js/jquery.mask.min.js"></script>  
</head>

<body>

    <div class="body_cad">

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

        <!--começar/terminar filtro-->
        <div class="filtro">
            <form class="menu" action="filtros.php" method="post">

                <div class="e">
    
                    Localização
    
                    <div class="h">
                        <input type="text" name="cep" class="input_carros" id="cep" minlength="9" maxlength="9" autocomplete="off" placeholder="Digite seu CEP">
                    </div>
    
                </div>
    
                <hr class="hr_menu">
    
                <div class="e">Filtros</div>
    
                <hr class="hr_menu">
    
                <div class="filtros">
    
                    <div class="dados">
                        Ano
    
                        <div class="f">
    
                            <input type="text" class="input_dados" name="deAno" id="deAno" minlength="4" maxlength="4" autocomplete="off" placeholder="De">
    
                            <input type="text" class="input_dados" name="ateAno" id="ateAno" minlength="4" maxlength="4" autocomplete="off" placeholder="Até">
    
                        </div>
                    </div>
    
                </div>
    
                <hr class="hr_menu">
    
                <div class="filtros">
    
                    <div class="dados">
                        Preço
    
                        <div class="f">
    
                            <input type="text" class="input_dados" name="dePreco" id="dePreco" maxlength="9" autocomplete="off" placeholder="De">
    
                            <input type="text" class="input_dados" name="atePreco" id="atePreco" maxlength="9" autocomplete="off" placeholder="Até">
    
                        </div>
                    </div>
    
                </div>
    
                <hr class="hr_menu">
    
                <div class="filtros">
    
                    <div class="dados">
                        Quilometragem
    
                        <div class="f">
    
                            <input type="text" class="input_dados" name="deKm" id="deKm" maxlength="12" autocomplete="off" placeholder="De">
    
                            <input type="text" class="input_dados" name="ateKm" id="ateKm" maxlength="12" autocomplete="off" placeholder="Até">
    
                        </div>
                    </div>
    
                </div>
                
                <hr class="hr_menu">

                <div class="botoes">
    
                    <input type="button" name="limpar" value="Limpar" class="filtrar" id="limpar">
        
                    <input type="submit" name="filtrar" value="Filtrar" class="filtrar">

                </div>
    
            </form>
        </div>

        <div>

            <?php
                $pertence = 'nada';

                if($_SESSION['pertence']) {
                    $pertence = $_SESSION['pertence'];
                }
            ?>

            <div class="esportivo">
                <?php echo '<img src="img/' . $pertence . '1.png" class="z" width="100%">'; ?>
            </div>

            <?php
                    
                if($pertence != 'nada') {

                    $res_consultar = "SELECT COUNT(`id_fotos`) AS 'valor' FROM `carro` INNER JOIN `fotos` ON `carro`.`id_carro` = `fotos`.`id_carro` INNER JOIN `pertence` ON `carro`.`id_carro` = `pertence`.`id_carro` INNER JOIN `usuario` ON `carro`.`id_usuario` = `usuario`.`id_usuario` INNER JOIN `confirma` ON `carro`.`id_carro` = `confirma`.`id_carro` WHERE `$pertence` = 1 AND `vendido` = 0 AND `maior18` = 1";
                    $resp_consultar = mysqli_query($conn,$res_consultar);
                    $resp_valor = mysqli_fetch_assoc($resp_consultar);
                    $qttd = $resp_valor['valor'];

                    if ($qttd % 4 != 0) {
                        $valor = $qttd / 4 + 1;
                        $valor = floor($valor);
                        $linhas = $valor;
                    } else {
                        $valor = $qttd / 4;
                        $valor = floor($valor);
                        $linhas = $valor;
                    }

                    $i = 0;
                    for($i==0; $i<$linhas; $i++) {
                        echo '<div class="principal">';

                        $j = $i*4;
                        for($j==$i*4; $j<($i+1)*4; $j++) {
                            $res_consultar = "SELECT * FROM `carro` INNER JOIN `fotos` ON `carro`.`id_carro` = `fotos`.`id_carro` INNER JOIN `pertence` ON `carro`.`id_carro` = `pertence`.`id_carro` INNER JOIN `usuario` ON `carro`.`id_usuario` = `usuario`.`id_usuario` INNER JOIN `confirma` ON `carro`.`id_carro` = `confirma`.`id_carro` WHERE `$pertence` = 1 AND `vendido` = 0 AND `maior18` = 1 ORDER BY `id_fotos` ASC LIMIT $j,$qttd";
                            $resp_consultar = mysqli_query($conn,$res_consultar);
                            $resp_valor = mysqli_fetch_assoc($resp_consultar);

                            if($resp_valor) {
                                echo '<div class="anuncio">';
                                echo '<a href="id_foto.php?id_foto=' . $resp_valor['id_fotos'] . '" target="_blank" rel="noopener noreferrer">';
                                echo '<img src=".upload/' . $resp_valor['id_fotos'] . '/frontal.jpg" class="img" width="100%">';
                                echo '</a>';
                                echo '<div class="texto">';
                                echo '<h4 class="fonte">' . $resp_valor['marca_carro'] . ' ' . $resp_valor['modelo_carro'] . '</h4>';
                                echo '<h6 class="fonte">' . $resp_valor['versao_carro'] . '</h6>';
                                $preco = $resp_valor['preco_carro'];
                                $preco = number_format($preco,2,",","."); 
                                echo '<h3 class="fonte">R$ ' . $preco . '</h3>';
                                echo '<h6 class="fonte">' . $resp_valor['anoF_carro'] . '/' . $resp_valor['anoM_carro'] . '</h6>';
                                $km = $resp_valor['km_carro'];
                                $km = number_format($km,0,".",".");
                                echo '<h6 class="fonte">' . $km . ' km</h6>';
                                echo '</div>';
                                echo '</div>';
                            }
                        }

                        echo '</div>';
                    }

                } else {

                    $res_consultar = "SELECT COUNT(*) AS 'valor' FROM `carro` INNER JOIN `fotos` ON `carro`.`id_carro` = `fotos`.`id_carro` INNER JOIN `pertence` ON `carro`.`id_carro` = `pertence`.`id_carro` INNER JOIN `usuario` ON `carro`.`id_usuario` = `usuario`.`id_usuario` INNER JOIN `confirma` ON `carro`.`id_carro` = `confirma`.`id_carro` WHERE `vendido` = 0 AND `maior18` = 1";
                    $resp_consultar = mysqli_query($conn,$res_consultar);
                    $resp_valor = mysqli_fetch_assoc($resp_consultar);
                    $qttd = $resp_valor['valor'];

                    if ($qttd % 4 != 0) {
                        $valor = $qttd / 4 + 1;
                        $valor = floor($valor);
                        $linhas = $valor;
                    } else {
                        $valor = $qttd / 4;
                        $valor = floor($valor);
                        $linhas = $valor;
                    }

                    $i = 0;
                    for($i==0; $i<$linhas; $i++) {
                        echo '<div class="principal">';

                        $j = $i*4;
                        for($j==$i*4; $j<($i+1)*4; $j++) {
                            $res_consultar = "SELECT * FROM `carro` INNER JOIN `fotos` ON `carro`.`id_carro` = `fotos`.`id_carro` INNER JOIN `pertence` ON `carro`.`id_carro` = `pertence`.`id_carro` INNER JOIN `usuario` ON `carro`.`id_usuario` = `usuario`.`id_usuario` INNER JOIN `confirma` ON `carro`.`id_carro` = `confirma`.`id_carro` WHERE `vendido` = 0 AND `maior18` = 1 ORDER BY `id_fotos` ASC LIMIT $j,$qttd";
                            $resp_consultar = mysqli_query($conn,$res_consultar);
                            $resp_valor = mysqli_fetch_assoc($resp_consultar);

                            if($resp_valor) {
                                echo '<div class="anuncio">';
                                echo '<a href="id_foto.php?id_foto=' . $resp_valor['id_fotos'] . '" target="_blank" rel="noopener noreferrer">';
                                echo '<img src=".upload/' . $resp_valor['id_fotos'] . '/' . $resp_valor['nome_frontal'] . '" class="img" width="100%">';
                                echo '</a>';
                                echo '<div class="texto">';
                                echo '<h4 class="fonte">' . $resp_valor['marca_carro'] . ' ' . $resp_valor['modelo_carro'] . '</h4>';
                                echo '<h6 class="fonte">' . $resp_valor['versao_carro'] . '</h6>';
                                $preco = $resp_valor['preco_carro'];
                                $preco = number_format($preco,2,",","."); 
                                echo '<h3 class="fonte">R$ ' . $preco . '</h3>';
                                echo '<h6 class="fonte">' . $resp_valor['anoF_carro'] . '/' . $resp_valor['anoM_carro'] . '</h6>';
                                $km = $resp_valor['km_carro'];
                                $km = number_format($km,0,".",".");
                                echo '<h6 class="fonte">' . $km . ' km</h6>';
                                echo '</div>';
                                echo '</div>';
                                // echo '</a>';
                            }
                        }

                        echo '</div>';
                    }

                }
            
            ?>

        </div>

    </div>

    <script>

        $('#dePreco').mask('R$ #.##0.000', {reverse: true});
        $('#atePreco').mask('R$ #.##0.000', {reverse: true});

        $('#deKm').mask('#.##0.000 km', {reverse: true});
        $('#ateKm').mask('#.##0.000 km', {reverse: true});

        $('#cep').mask('00000-000');

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