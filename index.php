<?php 
    include_once('config.php');
    session_start();

    if(isset($_SESSION['logout']) && $_SESSION['logout'] == 1) {
        session_destroy();
        header("Refresh: 0");
    }
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index</title>
    <link rel="shortcut icon" href="img/logotipo.png" type="image/x-icon">
    <link rel="stylesheet" href=".style_index.css">
    <script src="index.js" defer></script>
</head>

<body>

    <div class="body_log">

        <!-- Barra Superior da Página -->

        <div class="a">
            <div class="barra_sup">
                <a class="p" href="index.php"><img src="img/logoClickMotorsPreto.png" width="80%"></a>

                <div class="b">

                    <a class="o" href="pertence.php?pertence=nada">
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

    <!-- Conteúdo da Página -->

    <div class="e">

        <div class="esq">
            <div class="d">
                <img src="img/Barras.png" height="180%"> CLICKMOTORS
            </div>
        </div>

        <div class="dir">

            <form class="busca" method="post" action="anuncio_marca.php" id="filtrar">
                <input class="g" type="text" name="marca" placeholder="Pesquise a Marca Desejada" autocomplete="off">
                <button type="submit" form="filtrar" class="lupa"><img src="img/lupa.png" class="img_lupa" height="70%"></button>
            </form>

            <a class="u" href="pertence.php?pertence=esportivo">

                <div class="botao_index">
                    <img class="img_index" src="img/esportivos.png" width="100%">
                </div>

            </a>

            <a class="u" href="pertence.php?pertence=suv">

                <div class="botao_index">
                    <img class="img_index" src="img/suvs.png" width="100%">
                </div>

            </a>

            <a class="u" href="pertence.php?pertence=conversivel">

                <div class="botao_index">
                    <img class="img_index" src="img/conversiveis.png" width="100%">
                </div>

            </a>

            <a class="u" href="pertence.php?pertence=popular">

                <div class="botao_index">
                    <img class="img_index" src="img/populares.png" width="100%">
                </div>

            </a>

            <a class="u" href="pertence.php?pertence=caminhonete">

                <div class="botao_index">
                    <img class="img_index" src="img/caminhonetes.png" width="100%">
                </div>

            </a>

            <a class="u" href="pertence.php?pertence=antigo">

                <div class="botao_index">
                    <img class="img_index" src="img/anjtigos.png" width="100%">
                </div>

            </a>

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