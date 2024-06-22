<?php 
    // https://www.youtube.com/watch?v=0fONlG-DHnw
    include_once('config.php');
    session_start();

    if(!isset($_SESSION['id_foto'])) {
        header("Location: index.php");
        die();
    }

    if(isset($_SESSION['login_anuncio'])){ 
        unset($_SESSION['login_anuncio']); 
    }
    
    $id_foto = $_SESSION['id_foto'];

    $res_consultar = "SELECT * FROM carro INNER JOIN fotos ON carro.id_carro=fotos.id_carro WHERE id_fotos=$id_foto";
    $resp_consultar = mysqli_query($conn,$res_consultar);
    $resp_valor = mysqli_fetch_assoc($resp_consultar);

    $id_carro = $resp_valor['id_carro'];
    $visitas_atuais = $resp_valor['visitas'];
    $clique_atual = $resp_valor['cliques'];
    
    if(isset($_SESSION['parametro']) && $_SESSION['parametro'] != 0) {
        $novos_cliques = $clique_atual + 1;

        $res_update = "UPDATE carro SET cliques=$novos_cliques WHERE id_carro=$id_carro";
        $resp_update = mysqli_query($conn,$res_update);
    } else {
        $novas_visitas = $visitas_atuais + 1;

        $res_update = "UPDATE carro SET visitas=$novas_visitas WHERE id_carro=$id_carro";
        $resp_update = mysqli_query($conn,$res_update);

        $_SESSION['parametro'] = $novas_visitas;
    }
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anuncio Específico</title>
    <link rel="shortcut icon" href="img/logotipo.png" type="image/x-icon">
    <link rel="stylesheet" href=".style_espec.css">
    <script src="anuncio_espec.js" defer></script>
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

        <div class="cont">

            <div class="esq">
                <img src="img/areaAnuncio.png" height="100%">
            </div>

            <div class="centro">

            <?php

                $id_foto = $_SESSION['id_foto'];
            
                $res_consultar = "SELECT * FROM `carro` INNER JOIN `fotos` ON `carro`.`id_carro` = `fotos`.`id_carro` INNER JOIN `pertence` ON `carro`.`id_carro` = `pertence`.`id_carro` WHERE `id_fotos` = $id_foto";
                $resp_consultar = mysqli_query($conn,$res_consultar);
                $resp_valor = mysqli_fetch_assoc($resp_consultar);

                if ($resp_valor) {

                    echo '<div class="marca">' . $resp_valor['marca_carro'] . ' ' . $resp_valor['modelo_carro'] . '</div>';
                    
                    echo '<div class="modelo">' . $resp_valor['versao_carro'] . '</div>';
                    
                    echo '<div class="d"> <div class="container">
                    <div class="mySlides">
                      <div class="numbertext">1 / 8</div>
                      <img src=".upload/' . $id_foto . '/' . $resp_valor['nome_frontal'] . '" style="height:300px;width:100%;">
                    </div>
                  
                    <div class="mySlides">
                      <div class="numbertext">2 / 8</div>
                      <img src=".upload/' . $id_foto . '/' . $resp_valor['nome_traseira'] . '" style="height:300px;width:100%;">
                    </div>
                  
                    <div class="mySlides">
                      <div class="numbertext">3 / 8</div>
                      <img src=".upload/' . $id_foto . '/' . $resp_valor['nome_lat_dir'] . '" style="height:300px;width:100%;">
                    </div>
                      
                    <div class="mySlides">
                      <div class="numbertext">4 / 8</div>
                      <img src=".upload/' . $id_foto . '/' . $resp_valor['nome_lat_esq'] . '" style="height:300px;width:100%;">
                    </div>
                  
                    <div class="mySlides">
                      <div class="numbertext">5 / 8</div>
                      <img src=".upload/' . $id_foto . '/' . $resp_valor['nome_painel'] . '" style="height:300px;width:100%;">
                    </div>
                      
                    <div class="mySlides">
                      <div class="numbertext">6 / 8</div>
                      <img src=".upload/' . $id_foto . '/' . $resp_valor['nome_interior'] . '" style="height:300px;width:100%;">
                    </div>
                  
                    <div class="mySlides">
                      <div class="numbertext">7 / 8</div>
                      <img src=".upload/' . $id_foto . '/' . $resp_valor['nome_motor'] . '" style="height:300px;width:100%">
                    </div>
                      
                    <div class="mySlides">
                      <div class="numbertext">8 / 8</div>
                      <img src=".upload/' . $id_foto . '/' . $resp_valor['nome_portamalas'] . '" style="height:300px;width:100%;">
                    </div>
                      
                    <a class="prev" onclick="plusSlides(-1)">❮</a>
                    <a class="next" onclick="plusSlides(1)">❯</a>
                  
                    <div class="row">
                      <div class="column_cima">
                        <img class="demo cursor" src=".upload/' . $id_foto . '/' . $resp_valor['nome_frontal'] . '" style="width:100%; height:70px; " onclick="currentSlide(1)">
                      </div>
                      <div class="column_cima">
                        <img class="demo cursor" src=".upload/' . $id_foto . '/' . $resp_valor['nome_traseira'] . '" style="width:100%; height:70px;" onclick="currentSlide(2)">
                      </div>
                      <div class="column_cima">
                        <img class="demo cursor" src=".upload/' . $id_foto . '/' . $resp_valor['nome_lat_dir'] . '" style="width:100%; height:70px;" onclick="currentSlide(3)">
                      </div>
                      <div class="column_cima" id="nao_esquerda">
                        <img class="demo cursor" src=".upload/' . $id_foto . '/' . $resp_valor['nome_lat_esq'] . '" style="width:100%; height:70px;" onclick="currentSlide(4)">
                      </div>
                      <div class="column_baixo">
                        <img class="demo cursor" src=".upload/' . $id_foto . '/' . $resp_valor['nome_painel'] . '" style="width:100%; height:70px;" onclick="currentSlide(5)">
                      </div>    
                      <div class="column_baixo">
                        <img class="demo cursor" src=".upload/' . $id_foto . '/' . $resp_valor['nome_interior'] . '" style="width:100%; height:70px;" onclick="currentSlide(6)">
                      </div>
                      <div class="column_baixo">
                        <img class="demo cursor" src=".upload/' . $id_foto . '/' . $resp_valor['nome_motor'] . '" style="width:100%; height:70px;" onclick="currentSlide(7)">
                      </div>    
                      <div class="column_baixo" id="nao_esquerda">
                        <img class="demo cursor" src=".upload/' . $id_foto . '/' . $resp_valor['nome_portamalas'] . '" style="width:100%; height:70px;" onclick="currentSlide(8)">
                      </div>
                    </div>
                  </div>';

                    $preco = $resp_valor['preco_carro'];
                    $preco = number_format($preco,0,'.','.');
                    echo '<div class="dados"> <div class="preco"> R$' . $preco . '</div>';
                    echo '<div class="info">Ano: ' . $resp_valor['anoF_carro'] . '/' . $resp_valor['anoM_carro'] . '</div>';

                    $km = $resp_valor['km_carro'];
                    $km = number_format($km,0,'.','.');
                    echo '<div class="info">Km: ' . $km . ' km</div>';

                    echo '<div class="info">Câmbio: ' . $resp_valor['cambio_carro'] . '</div>';
                    echo '<div class="info">Combustível: ' . $resp_valor['combustivel_carro'] . '</div>';
                    echo '<div class="info">Cor: ' . $resp_valor['cor_carro'] . '</div>';
                    echo '<div class="localizacao"><img src="img/loc.png"><div>' . $resp_valor['cidade_carro'] . ' - ' . $resp_valor['estado_carro'] . '</div></div>';

                    if ($resp_valor['descricao_carro'] != '') {
                        echo '<div class="descricao"><div class="e">Descrição</div>';

                        $descricao = $resp_valor['descricao_carro'];
                        $descricao = mb_strtolower($descricao,'UTF-8');
                        $descricao = ucfirst($descricao);
                        echo '<div class="f">' . $descricao . '</div> </div>';
                    }
                            
                    // echo '<div class="g"><div class="botao">Entre em Contato!</div></div></div></div>';
                    echo '<form class="g"><input type="submit" name="botao" class="botao" value="Entre em Contato!"></input></form></div></div>';

                }
            
            ?>

            </div>

            <div class="dir">
                <img src="img/areaAnuncio.png" height="100%">
            </div>

            <div class="popup-wrapper_anuncio">
                <div class="popup_anuncio">
                    <div class="cont_reg">
                        
                    </div>
                </div>
            </div>

            <div class="popup-wrapper">
                <div class="popup">
                    <h2>Informações do Vendedor</h2>
                    
                    <?php
                        $res_consultar = "SELECT * FROM `carro` INNER JOIN `usuario` ON `usuario`.`id_usuario` = `carro`.`id_usuario` INNER JOIN `fotos` ON `carro`.`id_carro` = `fotos`.`id_carro` INNER JOIN `confirma` ON `confirma`.`id_carro` = `carro`.`id_carro` WHERE `id_fotos`=$id_foto";
                        $resp_consultar = mysqli_query($conn,$res_consultar);
                        $resp_valor = mysqli_fetch_assoc($resp_consultar);
                        if($resp_valor['email'] == 1) {
                            echo '<p><b>Email: </b>' . $resp_valor['email_usuario'] . '</p>';
                        } else {
                            echo '';
                        }
                    ?>
                    
                    <?php
                        $res_consultar = "SELECT * FROM `carro` INNER JOIN `usuario` ON `usuario`.`id_usuario` = `carro`.`id_usuario` INNER JOIN `fotos` ON `carro`.`id_carro` = `fotos`.`id_carro` INNER JOIN `confirma` ON `confirma`.`id_carro` = `carro`.`id_carro` WHERE `id_fotos`=$id_foto";
                        $resp_consultar = mysqli_query($conn,$res_consultar);
                        $resp_valor = mysqli_fetch_assoc($resp_consultar);
                        if($resp_valor['tel'] == 1) {
                            echo '<p><b>Telefone: </b>' . $resp_valor['telefone_usuario'] . '</p>';
                        } else {
                            echo '';
                        }
                    ?>
                    
                    <button class="botao_popup">Fechar</button>
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

    <?php

        if(!isset($_SESSION['user'])) {
            $_SESSION['login_anuncio'] = 0;
            header('Location: login3.php');
            die();
        }

    ?>

</body>

</html>