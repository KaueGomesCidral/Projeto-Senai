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
    <title>Imagens</title>
    <link rel="shortcut icon" href="img/logotipo.png" type="image/x-icon">
    <link rel="stylesheet" href=".style_fotos.css">
    <script src="fotos.js" defer></script>
</head>

<body>

    <div class="body_fotos">

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

        <div class="cont_fotos">
            <div class="bloco_fotos">

                <form action=".dados_fotos.php" method="post" class="conteudo_fotos" enctype="multipart/form-data">

                    <div class="h">

                        <div class="d"><img src="img/logoClickMotorsPreto.png" width="80%"></div>

                        <div class="e">Insira as Fotos do Veículo!</div>

                    </div>

                    <div class="i">*Permitidos Arquivos .png, .jpg e .jpeg com até 3MB de Tamanho</div>

                    <div class="f">

                        <div class="inserir">

                            <div class="g">
                                <div class="botao_inserir">

                                    <label class="esq_botao" id="esq_frontal" for="frontal">
                                        
                                        Foto Frontal
                                        <div class="nome_arq" id="arq_frontal"></div>

                                    </label> 
                                    <label class="dir_botao" id="dir_frontal" for="frontal">Inserir</label> 

                                </div>

                                <input type="file" name="frontal" id="frontal">

                            </div>

                        </div>

                        <div class="inserir">

                            <div class="g">
                                <div class="botao_inserir">

                                    <label class="esq_botao" id="esq_traseira" for="traseira">
                                        
                                        Foto Traseira
                                        <div class="nome_arq" id="arq_traseira"></div>

                                    </label> 
                                    <label class="dir_botao" id="dir_traseira" for="traseira">Inserir</label> 

                                </div>

                                <input type="file" name="traseira" id="traseira">

                            </div>
                        
                        </div>
                
                    </div>

                    <div class="f">

                        <div class="inserir">
                    
                            <div class="g">
                                <div class="botao_inserir">
                    
                                    <label class="esq_botao" id="esq_lat_esq" for="lat_esq">
                                        
                                        Lateral Esq.
                                        <div class="nome_arq" id="arq_lat_esq"></div>
                    
                                    </label> 
                                    <label class="dir_botao" id="dir_lat_esq" for="lat_esq">Inserir</label> 
                    
                                </div>
                    
                                <input type="file" name="lat_esq" id="lat_esq">
                    
                            </div>
                    
                        </div>

                        <div class="inserir">

                            <div class="g">
                                <div class="botao_inserir">
                    
                                    <label class="esq_botao" id="esq_lat_dir" for="lat_dir">
                                        
                                        Lateral Dir.
                                        <div class="nome_arq" id="arq_lat_dir"></div>
                    
                                    </label> 
                                    <label class="dir_botao" id="dir_lat_dir" for="lat_dir">Inserir</label> 
                    
                                </div>
                    
                                <input type="file" name="lat_dir" id="lat_dir">
                    
                            </div>
                        
                        </div>
                    
                    </div>

                    <div class="f">

                        <div class="inserir">
                    
                            <div class="g">
                                <div class="botao_inserir">
                    
                                    <label class="esq_botao" id="esq_motor" for="motor">
                                        
                                        Foto Motor
                                        <div class="nome_arq" id="arq_motor"></div>
                    
                                    </label> 
                                    <label class="dir_botao" id="dir_motor" for="motor">Inserir</label> 
                    
                                </div>
                    
                                <input type="file" name="motor" id="motor">
                    
                            </div>
                    
                        </div>
                    
                        <div class="inserir">
                    
                            <div class="g">
                                <div class="botao_inserir">
                    
                                    <label class="esq_botao" id="esq_portamalas" for="portamalas">
                                        
                                        Porta-Malas
                                        <div class="nome_arq" id="arq_portamalas"></div>
                    
                                    </label> 
                                    <label class="dir_botao" id="dir_portamalas" for="portamalas">Inserir</label> 
                    
                                </div>
                    
                                <input type="file" name="portamalas" id="portamalas">
                    
                            </div>
                        
                        </div>
                    
                    </div>

                    <div class="f">

                        <div class="inserir">
                    
                            <div class="g">
                                <div class="botao_inserir">
                    
                                    <label class="esq_botao" id="esq_painel" for="painel">
                                        
                                        Foto Painel
                                        <div class="nome_arq" id="arq_painel"></div>
                    
                                    </label> 
                                    <label class="dir_botao" id="dir_painel" for="painel">Inserir</label> 
                    
                                </div>
                    
                                <input type="file" name="painel" id="painel">
                    
                            </div>
                    
                        </div>
                    
                        <div class="inserir">
                    
                            <div class="g">
                                <div class="botao_inserir">
                    
                                    <label class="esq_botao" id="esq_interior" for="interior">
                                        
                                        Foto Interior
                                        <div class="nome_arq" id="arq_interior"></div>
                    
                                    </label> 
                                    <label class="dir_botao" id="dir_interior" for="interior">Inserir</label> 
                    
                                </div>
                    
                                <input type="file" name="interior" id="interior">
                    
                            </div>
                        
                        </div>
                    
                    </div>

                    <div class="botao">

                        <div class="botao_fake">Continuar</div>
                        <!-- <input type="submit" value="Continuar" class="botao_venda"> -->

                    </div>

                    <!-- <input type="submit" name="cadastrar" value="Cadastrar" class="botao_fotos"> -->

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