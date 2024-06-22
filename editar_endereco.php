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
    <title>Cadastro</title>
    <link rel="shortcut icon" href="img/logotipo.png" type="image/x-icon">
    <link rel="stylesheet" href=".style_endereco.css">
    <script src="editar_endereco.js" defer></script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript"></script>
    <script src="https://igorescobar.github.io/jQuery-Mask-Plugin/js/jquery.mask.min.js"></script>
</head>

<body>

    <div class="body_end">

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

        <div class="cont_end">
            <div class="bloco_end">

                <form action=".dados_editar_endereco.php" method="post" class="conteudo_end">

                    <div class="d"><img src="img/logoClickMotorsPreto.png" width="80%"></div>

                    <div class="e">Falta Pouco!</div>

                    <div class="inputE">

                        <div class="h">
                            <input type="text" name="cep" class="input_end" id="cep" minlength="9" maxlength="9" autocomplete="off" required>
                            <div class="f"><img src="img/cep.png" class="img_input3" width="70%"></div>
                        </div>

                        <div class="h">
                            <input type="text" name="estado" class="input_end2" id="estado" placeholder="Sigla" maxlength="2" minlength="2" autocomplete="off" required>
                            <div class="f"><img src="img/estado.png" class="img_input3" width="70%"></div>
                        </div>

                    </div>

                    <div class="inputE2">

                        <div class="h">
                            <input type="text" name="cidade" class="input_end3" id="cidade" maxlength="30" autocomplete="off" required>
                            <div class="f"><img src="img/cidade.png" class="img_input4" width="70%"></div>
                        </div>

                        <div class="h">
                            <input type="text" name="bairro" class="input_end3" id="bairro" maxlength="30" autocomplete="off" required>
                            <div class="f"><img src="img/bairro.png" class="img_input4" width="70%"></div>
                        </div>

                    </div>

                    <div class="inputE">

                        <div class="h">
                            <input type="text" name="rua" class="input_end" id="rua" maxlength="50" autocomplete="off" required>
                            <div class="f"><img src="img/rua.png" class="img_input3" width="70%"></div>
                        </div>

                        <div class="h">
                            <input type="text" name="num" class="input_end2" id="num" maxlength="10" autocomplete="off" required>
                            <div class="f"><img src="img/num.png" class="img_input3" width="70%"></div>
                        </div>

                    </div>

                    <div class="inputE3">

                        <input type="text" name="complemento" class="input_end4" id="complemento" maxlength="20" autocomplete="off">
                        <div class="f"><img src="img/complemento.png" class="img_input5" width="70%"></div>

                    </div>

                    <div class="botao">
                        <div class="botao_fake">Alterar</div>
                        <!-- <input type="submit" name="alterar" value="Alterar" class="botao_end"> -->
                    </div>
                    
                </form>

            </div>
        </div>

    </div>

    <script>

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