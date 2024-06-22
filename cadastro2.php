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
    <link rel="stylesheet" href=".style_cadastro.css">
    <script src="cadastro.js" defer></script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript"></script>
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

        <!-- Conteúdo da Página -->

        <div class="cont_cad">
            <div class="bloco_cad">

                <form action=".dados_cadastro.php" method="post" class="conteudo_cad">

                    <div class="d"><img src="img/logoClickMotorsPreto.png" width="80%"></div>

                    <div class="e">Faça seu Cadastro!</div>
                    
                    <div class="inputC">
                        <input type="text" name="nome" class="input_cad" id="nome" maxlength="150" autocomplete="off" required>
                        <div class="f"><img src="img/nome.png" class="img_input" width="70%"></div>
                    </div>

                    <div class="inputC">
                        <input type="email" name="email" class="input_cad" id="email" autocomplete="off" required>
                        <div class="f"><img src="img/email.png" class="img_input" width="70%"></div>
                    </div>

                    <div class="inputC">
                        <input type="tel" name="tel" class="input_cad" id="tel" minlength="16" maxlength="16" autocomplete="off" required>
                        <div class="f"><img src="img/tel.png" class="img_input2" width="70%"></div>
                    </div>

                    <div class="inputC">
                        <input type="password" name="senha" class="input_cad" id="senha" minlength="8" maxlength="16" autocomplete="off" required>
                        <div class="f"><img src="img/senha.png" class="img_input" width="70%"></div>
                        <div class="g"><input type="button" class="ver_ocultar" onmousedown="ver()" onmouseup="ocultar()"></div>
                    </div>

                    <div class="botao">
                        <div class="botao_fake">Continuar</div>
                        <!-- <input type="submit" name="continuar" value="Continuar" class="botao_cad"> -->
                    </div>

                    <div class="i">Email já Cadastrado!</div>

                </form>

            </div>
        </div>

    </div>

    <script>

        $('#tel').mask('(00) 0 0000-0000');

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