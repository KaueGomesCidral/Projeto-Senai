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
    <link rel="stylesheet" href=".style_venda.css">
    <script src="venda.js" defer></script>
</head>

<body>

    <div class="body_venda">

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

        <div class="cont_venda">
            <div class="bloco_venda">

                <form action=".dados_venda.php" method="post" class="conteudo_venda">

                    <div class="d"><img src="img/logoClickMotorsPreto.png" width="80%"></div>

                    <div class="e"> Querendo Vender seu Carro?</div>

                    <div class="f">

                        <div class="inputV">

                            <div class="h">

                                <select name="marca" class="selectV" id="marca">

                                    <option value="n">Selecione a Marca</option>
                                    <option>Audi</option>
                                    <option>BMW</option>
                                    <option>Chevrolet</option>
                                    <option>Fiat</option>
                                    <option>Ford</option>
                                    <option>Honda</option>
                                    <option>Hyundai</option>
                                    <option>Jeep</option>
                                    <option>Mercedes-Benz</option>
                                    <option>Nissan</option>
                                    <option>Renault</option>
                                    <option>Toyota</option>

                                </select>

                            </div>

                        </div>

                        <div class="inputV">

                            <div class="h">

                                <select name="modelo" class="selectV" id="modelo">

                                    <option value="n">Selecione o Modelo</option>

                                </select>

                            </div>

                        </div>

                    </div>

                    <div class="f">

                        <div class="inputV">

                            <div class="h">

                                <input type="text" name="anoM" class="input_venda" id="anoM" minlength="4" maxlength="4"
                                    placeholder="Insira o Ano Modelo" autocomplete="off" required>

                            </div>

                        </div>

                        <div class="inputV">

                            <div class="h_anoF">

                                <select name="anoF" class="selectV2" id="anoF">

                                    <option value="n">Ano de Fabricação</option>

                                </select>

                            </div>

                        </div>

                    </div>

                    <div class="f">

                        <div class="inputV">

                            <div class="h">

                                <select name="versao" class="selectV3" id="versao">

                                    <option value="n">Selecione a Versão</option>

                                </select>

                            </div>

                        </div>

                        <div class="inputV">

                            <div class="h">

                                <select name="cor" class="selectV3" id="cor" on>

                                    <option value="n">Selecione a Cor</option>
                                    <option>Amarelo</option>
                                    <option>Azul</option>
                                    <option>Bege</option>
                                    <option>Branco</option>
                                    <option>Bronze</option>
                                    <option>Cinza</option>
                                    <option>Dourado</option>
                                    <option>Indefinida</option>
                                    <option>Laranja</option>
                                    <option>Marrom</option>
                                    <option>Prata</option>
                                    <option>Preto</option>
                                    <option>Rosa</option>
                                    <option>Roxo</option>
                                    <option>Verde</option>
                                    <option>Vermelho</option>
                                    <option>Vinho</option>

                                </select>

                            </div>

                        </div>

                    </div>

                    <div class="f">

                        <div class="inputV">

                            <div class="h">

                                <select name="combustivel" class="selectV3" id="combustivel">

                                    <option value="n">Selecione o Combustível</option>
                                    <option>Gasolina</option>
                                    <option>Álcool</option>
                                    <option>Diesel</option>
                                    <option>Gás Natural</option>
                                    <option>Gasolina e Álcool</option>
                                    <option>Gasolina e Gás Natural</option>
                                    <option>Álcool e Gás Natural</option>
                                    <option>Gasolina, Álcool e Gás Natural</option>
                                    <option>Gasolina e Elétrico</option>

                                </select>

                            </div>

                        </div>

                        <div class="inputV">

                            <div class="h">

                                <select name="cambio" class="selectV3" id="cambio">

                                    <option value="n">Selecione o Câmbio</option>
                                    <option>Automático</option>
                                    <option>Automatizado</option>
                                    <option>Automatizado DCT</option>
                                    <option>CVT</option>
                                    <option>Manual</option>
                                    <option>Semi-Automático</option>

                                </select>

                            </div>

                        </div>

                    </div>

                    <div class="botao">

                        <div class="botao_fake">Continuar</div>
                        <!-- <input type="submit" name="continuar" value="Continuar" class="botao_venda"> -->

                    </div>

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