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
    <link rel="stylesheet" href="-teste_style_anuncio.css">
    <script src="-teste_anuncio.js" defer></script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript"></script>
    <script src="https://plentz.github.io/jquery-maskmoney/javascripts/jquery.maskMoney.min.js" type="text/javascript"></script>
    <script src="https://igorescobar.github.io/jQuery-Mask-Plugin/js/jquery.mask.min.js"></script>
        <style>
            .mySlides {
                display: none;
                width: 100%;
                
            }

            .botao {
                /* z-index: 2; */
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: 30px;
                /* background-color: rgba(0, 0, 0, .5); */
            }

            .botaodireira {
                left: auto;
                right: 30px;
            }

            .slideshow {
                /* z-index: -1; */
                position: relative;
            }
        </style>  
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

                        <div class="c">
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

                    $res_consultar = "SELECT COUNT(`id_fotos`) AS 'valor' FROM `carro` INNER JOIN `fotos` ON `carro`.`id_carro` = `fotos`.`id_carro` INNER JOIN `pertence` ON `carro`.`id_carro` = `pertence`.`id_carro` WHERE `$pertence` = 1 AND `vendido` = 0 AND id_fotos != ''";
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
                            $res_consultar = "SELECT * FROM `carro` INNER JOIN `fotos` ON `carro`.`id_carro` = `fotos`.`id_carro` INNER JOIN `pertence` ON `carro`.`id_carro` = `pertence`.`id_carro` WHERE `$pertence` = 1 AND `vendido` = 0 AND id_fotos != '' ORDER BY `id_fotos` ASC LIMIT $j,$qttd";
                            $resp_consultar = mysqli_query($conn,$res_consultar);
                            $resp_valor = mysqli_fetch_assoc($resp_consultar);

                            if($resp_valor) {
                                echo '<div class="anuncio">';
                                // echo '<a href="id_foto.php?id_foto=' . $resp_valor['id_fotos'] . '" target="_blank" rel="noopener noreferrer">';
                                echo '<div class="slideshow">
                                    <a href="id_foto.php?id_foto=' . $resp_valor['id_fotos'] . '" target="_blank" rel="noopener noreferrer"><img class="mySlides" id="img" src=".upload/' . $resp_valor['id_fotos'] . '/' . $resp_valor['nome_frontal'] . '" width="100%"></a>
                                    <a href="id_foto.php?id_foto=' . $resp_valor['id_fotos'] . '" target="_blank" rel="noopener noreferrer"><img class="mySlides" id="img" src=".upload/' . $resp_valor['id_fotos'] . '/' . $resp_valor['nome_traseira'] . '" width="100%"></a>
                                    <a href="id_foto.php?id_foto=' . $resp_valor['id_fotos'] . '" target="_blank" rel="noopener noreferrer"><img class="mySlides" id="img" src=".upload/' . $resp_valor['id_fotos'] . '/' . $resp_valor['nome_lat_dir'] . '" width="100%"></a>
                                    <a href="id_foto.php?id_foto=' . $resp_valor['id_fotos'] . '" target="_blank" rel="noopener noreferrer"><img class="mySlides" id="img" src=".upload/' . $resp_valor['id_fotos'] . '/' . $resp_valor['nome_lat_esq'] . '" width="100%"></a>
                                    <a href="id_foto.php?id_foto=' . $resp_valor['id_fotos'] . '" target="_blank" rel="noopener noreferrer"><img class="mySlides" id="img" src=".upload/' . $resp_valor['id_fotos'] . '/' . $resp_valor['nome_painel'] . '" width="100%"></a>
                                    <a href="id_foto.php?id_foto=' . $resp_valor['id_fotos'] . '" target="_blank" rel="noopener noreferrer"><img class="mySlides" id="img" src=".upload/' . $resp_valor['id_fotos'] . '/' . $resp_valor['nome_interior'] . '" width="100%"></a>
                                    <a href="id_foto.php?id_foto=' . $resp_valor['id_fotos'] . '" target="_blank" rel="noopener noreferrer"><img class="mySlides" id="img" src=".upload/' . $resp_valor['id_fotos'] . '/' . $resp_valor['nome_motor'] . '" width="100%"></a>
                                    <a href="id_foto.php?id_foto=' . $resp_valor['id_fotos'] . '" target="_blank" rel="noopener noreferrer"><img class="mySlides" id="img" src=".upload/' . $resp_valor['id_fotos'] . '/' . $resp_valor['nome_portamalas'] . '" width="100%"></a>
                                
                                    <button class="botaoesquerda botao" onclick="plusDivs(-1)">&#10094;</button>
                                    <button class="botaodireira botao" onclick="plusDivs(1)">&#10095;</button>
                                </div>';
                                // echo '</a>';
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

                    $res_consultar = "SELECT COUNT(`id_fotos`) AS 'valor' FROM `carro` INNER JOIN `fotos` ON `carro`.`id_carro` = `fotos`.`id_carro` INNER JOIN `pertence` ON `carro`.`id_carro` = `pertence`.`id_carro` WHERE `vendido` = 0";
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
                            $res_consultar = "SELECT * FROM `carro` INNER JOIN `fotos` ON `carro`.`id_carro` = `fotos`.`id_carro` INNER JOIN `pertence` ON `carro`.`id_carro` = `pertence`.`id_carro` WHERE `vendido` = 0 ORDER BY `id_fotos` ASC LIMIT $j,$qttd";
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
        
        var slideIndex = 1;
        showDivs(slideIndex);

        function plusDivs(n) {
            showDivs(slideIndex += n);
        }

        function showDivs(n) {
            console.log('aqui')
            console.log(n)
            var i;
            var x = document.getElementsByClassName("mySlides");
            if (n > x.length) {
                slideIndex = 1
            }
            if (n < 1) {
                slideIndex = x.length
            
            }
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            x[slideIndex - 1].style.display = "block";
        }

    </script>

</body>

</html>