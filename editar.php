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
    <title>Venda</title>
    <link rel="shortcut icon" href="img/logotipo.png" type="image/x-icon">
    <link rel="stylesheet" href=".style_adicional.css">
    <script src="editar.js" defer></script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript"></script>
    <script src="https://plentz.github.io/jquery-maskmoney/javascripts/jquery.maskMoney.min.js" type="text/javascript"></script>    
    <script src="https://igorescobar.github.io/jQuery-Mask-Plugin/js/jquery.mask.min.js"></script>
</head>

<body>

    <div class="body_adicional">

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

        <!-- Conteúdo da Página -->

        <div class="cont_adicional">
            <div class="bloco_adicional">

                <form action=".dados_editar.php" method="post" class="conteudo_adicional">

                    <div class="d"><img src="img/logoClickMotorsPreto.png" width="80%"></div>

                    <div class="e">Insira os Novos Valores!</div>

                    <div class="inputVA">

                        <div class="h">

                            Quilometragem:

                            <input type="text" name="km" class="input_km" id="km" maxlength="12" placeholder="0 km" autocomplete="off">

                        </div>

                    </div>

                    <div class="inputVA">

                        <div class="h">

                            Valor:

                            <input type="text" name="preco" class="input_preco" id="preco" placeholder="R$ 0,00" maxlength="15" autocomplete="off" required>

                        </div>

                    </div>

                    <div class="botao">

                        <div class="botao_fake">Confirmar</div>
                        <!-- <input type="submit" value="Confirmar" class="botao_venda"> -->

                    </div>

                </form>

            </div>
        </div>

    </div>
    <script>

        jQuery(function() {
            
            jQuery("#preco").maskMoney({
            prefix:'R$ ', 
            thousands:'.', 
            decimal:','
        })

        });

        $('#km').mask('#.##0.000 km', {reverse: true});


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