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
    <title>Confirmação</title>
    <link rel="shortcut icon" href="img/logotipo.png" type="image/x-icon">
    <link rel="stylesheet" href=".style_confirma.css">
    <script src="confirma.js" defer></script>
</head>

<body>

    <div class="body_confirma">

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

        <div class="cont_confirma">
            <div class="bloco_confirma">

                <form action=".dados_confirma.php" method="post" class="conteudo_confirma" enctype="multipart/form-data">

                    <div class="f">

                        <div class="d"><img src="img/logoClickMotorsPreto.png" width="80%"></div>

                        <div class="e">Última Etapa!</div>

                    </div>

                    <div class="i">*É Preciso Compartilhar pelo menos um dos Dados e ser Maior de Idade</div>

                    <div class="g">

                        <div class="h">

                            <input type="checkbox" name="maior18" id="maior18" value="maior18"> <label for="maior18">Tenho 18 Anos ou Mais</label>

                        </div>

                    </div>

                    <div class="g">

                        <div class="h">
                            
                            <input type="checkbox" name="tel" id="tel" value="tel"> <label for="tel">Aceito Compartilhar meu Telefone</label>

                        </div>

                    </div>

                    <div class="g">

                        <div class="h">

                            <input type="checkbox" name="email" id="email" value="email"> <label for="email">Aceito Compartilhar meu Email</label>

                        </div>

                    </div>

                    <div class="botao">

                        <div class="botao_fake">Finalizar</div>
                        <!-- <input type="submit" name="finalizar" value="Finalizar" class="botao_venda"> -->

                    </div>

                    <!-- <input type="submit" name="finalizar" value="Finalizar" class="botao_confirma"> -->

                </form>

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