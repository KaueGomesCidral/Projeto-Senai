const form = document.querySelector('.conteudo_venda')
const marca = document.querySelector('#marca')
const modelo = document.querySelector('#modelo')
const anoM = document.querySelector('#anoM')
const anoF = document.querySelector('#anoF')
const versao = document.querySelector('#versao')
const cor = document.querySelector('#cor')
const combustivel = document.querySelector('#combustivel')
const cambio = document.querySelector('#cambio')
const botao = document.querySelector('.botao')
const trocar = document.querySelector('.trocar')
const dataAtual = new Date()
const anoAtual = dataAtual.getFullYear()
anoM.setAttribute('max', anoAtual + 1)
const meus_carros_menu = document.querySelector('.meus_carros-menu')
const relatorios_menu = document.querySelector('.relatorios-menu')
const endereco_menu = document.querySelector('.endereco-menu')
const sair_menu = document.querySelector('.sair-menu')
const div_popup_menu = document.querySelector('.div_popup-menu')
const popup_menu = document.querySelector('.popup-wrapper-menu')

if(popup_menu != null) {
    div_popup_menu.addEventListener('click', () => {
        popup_menu.style.visibility = 'visible'
    })

    if(relatorios_menu != null) {
        document.addEventListener('mousedown', (e) => {
            if(meus_carros_menu.contains(e.target) || relatorios_menu.contains(e.target) || sair_menu.contains(e.target)) {
        
            } else {
                popup_menu.style.visibility = 'hidden'
            }
        })
    } else {
        document.addEventListener('mousedown', (e) => {
            if(meus_carros_menu.contains(e.target) || endereco_menu.contains(e.target) || sair_menu.contains(e.target)) {
        
            } else {
                popup_menu.style.visibility = 'hidden'
            }
        })
    }

    if(relatorios_menu != null) {
        relatorios_menu.addEventListener('mouseenter', () => {
            relatorios_menu.style.borderTop = '1px solid gray'
            relatorios_menu.style.backgroundColor = '#FF3C00'
            relatorios_menu.style.color = 'white'
        })
        
        relatorios_menu.addEventListener('mouseleave', () => {
            meus_carros_menu.style.borderBottom = '1px solid gray'
            relatorios_menu.style.backgroundColor = 'white'
            relatorios_menu.style.color = '#FF3C00'
        })
    }

    if(endereco_menu != null) {
        endereco_menu.addEventListener('mouseenter', () => {
            endereco_menu.style.borderTop = '1px solid gray'
            endereco_menu.style.backgroundColor = '#FF3C00'
            endereco_menu.style.color = 'white'
        })
        
        endereco_menu.addEventListener('mouseleave', () => {
            endereco_menu.style.borderBottom = '1px solid gray'
            endereco_menu.style.backgroundColor = 'white'
            endereco_menu.style.color = '#FF3C00'
        })
    }

    meus_carros_menu.addEventListener('mouseenter', () => {
        meus_carros_menu.style.backgroundColor = '#FF3C00'
        meus_carros_menu.style.color = 'white'
    })

    meus_carros_menu.addEventListener('mouseleave', () => {
        meus_carros_menu.style.backgroundColor = 'white'
        meus_carros_menu.style.color = '#FF3C00'
    })

    sair_menu.addEventListener('mouseenter', () => {
        sair_menu.style.borderTop = '1px solid gray'
        sair_menu.style.backgroundColor = '#d90101'
        sair_menu.style.color = 'white'
    })

    sair_menu.addEventListener('mouseleave', () => {
        sair_menu.style.backgroundColor = 'white'
        sair_menu.style.color = '#d90101'
        sair_menu.style.borderBottom = '1px solid black'
    })
}

form.addEventListener('load', () => {
    window.location.reload()
})

anoM.addEventListener('keypress', function(e){
    const keyCode = (e.keyCode ? e.keyCode : e.wich)

    if (keyCode < 48 || keyCode > 57){
        e.preventDefault()
    }
})

anoM.addEventListener('keyup', function(){
    let anoMvalue = Number(anoM.value)
    let anoMtext = String(anoM.value)
    console.log(anoMvalue)
    console.log(anoMtext.length)
    if (anoMtext.length == 4) {
        if(anoMvalue >= 1891 && anoMvalue <= anoAtual + 1) {
            anoF.innerHTML = `<select name="anoF" class="selectV2" id="anoF"><option class="n">Ano de Fabricação</option><option>${anoMvalue - 1}</option> <option>${anoMvalue}</option></select>`
        } else {
            anoF.innerHTML = '<select name="anoF" class="selectV2" id="anoF"><option class="n">Insira um Ano Modelo Válido</option></select>'
        }    
    } else {
        anoF.innerHTML = '<select name="anoF" class="selectV2" id="anoF"><option class="n">Ano de Fabricação</option></select>'
    }

    botao.innerHTML = '<div class="botao_fake">Continuar</div>'
})

marca.addEventListener('change', function(){
    console.log(marca.value)
    botao.innerHTML = '<div class="botao_fake">Continuar</div>'

    if (versao.value != 'n') {
        versao.style.fontSize = '15px'
    } else {
        versao.style.fontSize = '17px'
    }

    let valor = marca.value 
    console.log(valor)

    switch (valor) {
        case 'Audi':
            versao.innerHTML = ''
            versao.innerHTML = '<option value="n">Selecione a Versão</option>'
            versao.style.fontSize = '17px'
            modelo.innerHTML = ''
            modelo.innerHTML += '<option value="n">Selecione o Modelo</option>'
            modelo.innerHTML += '<option>A3</option>'
            modelo.innerHTML += '<option>A5</option>'
            modelo.innerHTML += '<option>TT</option>'
            modelo.innerHTML += '<option>Q5</option>'
            modelo.innerHTML += '<option>R8</option>'
        break
        case 'BMW':
            versao.innerHTML = ''
            versao.innerHTML = '<option value="n">Selecione a Versão</option>'
            versao.style.fontSize = '17px'
            modelo.innerHTML = ''
            modelo.innerHTML += '<option value="n">Selecione o Modelo</option>'
            modelo.innerHTML += '<option>330i</option>'
            modelo.innerHTML += '<option>X4</option>'
            modelo.innerHTML += '<option>Z4</option>'
            modelo.innerHTML += '<option>M3</option>'
            modelo.innerHTML += '<option>i8</option>'
        break
        case 'Chevrolet':
            versao.innerHTML = ''
            versao.innerHTML = '<option value="n">Selecione a Versão</option>'
            versao.style.fontSize = '17px'
            modelo.innerHTML = ''
            modelo.innerHTML += '<option value="n">Selecione o Modelo</option>'
            modelo.innerHTML += '<option>Camaro</option>'
            modelo.innerHTML += '<option>Cruze</option>'
            modelo.innerHTML += '<option>S10</option>'
            modelo.innerHTML += '<option>Tracker</option>'
            modelo.innerHTML += '<option>Chevette</option>'
        break
        case 'Fiat':
            versao.innerHTML = ''
            versao.innerHTML = '<option value="n">Selecione a Versão</option>'
            versao.style.fontSize = '17px'
            modelo.innerHTML = ''
            modelo.innerHTML += '<option value="n">Selecione o Modelo</option>'
            modelo.innerHTML += '<option>Palio</option>'
            modelo.innerHTML += '<option>Pulse</option>'
            modelo.innerHTML += '<option>Toro</option>'
            modelo.innerHTML += '<option>Uno</option>'
            modelo.innerHTML += '<option>Fiorino</option>'
        break
        case 'Ford':
            versao.innerHTML = ''
            versao.innerHTML = '<option value="n">Selecione a Versão</option>'
            versao.style.fontSize = '17px'
            modelo.innerHTML = ''
            modelo.innerHTML += '<option value="n">Selecione o Modelo</option>'
            modelo.innerHTML += '<option>Fiesta</option>'
            modelo.innerHTML += '<option>Ka</option>'
            modelo.innerHTML += '<option>Fusion</option>'
            modelo.innerHTML += '<option>Ranger</option>'
            modelo.innerHTML += '<option>Mustang</option>'
        break
        case 'Honda':
            versao.innerHTML = ''
            versao.innerHTML = '<option value="n">Selecione a Versão</option>'
            versao.style.fontSize = '17px'
            modelo.innerHTML = ''
            modelo.innerHTML += '<option value="n">Selecione o Modelo</option>'
            modelo.innerHTML += '<option>Civic</option>'
            modelo.innerHTML += '<option>HR-V</option>'
            modelo.innerHTML += '<option>Fit</option>'
            modelo.innerHTML += '<option>Accord</option>'
            modelo.innerHTML += '<option>CR-V</option>'
        break
        case 'Hyundai':
            versao.innerHTML = ''
            versao.innerHTML = '<option value="n">Selecione a Versão</option>'
            versao.style.fontSize = '17px'
            modelo.innerHTML = ''
            modelo.innerHTML += '<option value="n">Selecione o Modelo</option>'
            modelo.innerHTML += '<option>Azera</option>'
            modelo.innerHTML += '<option>ix35</option>'
            modelo.innerHTML += '<option>Creta</option>'
            modelo.innerHTML += '<option>HB20</option>'
            modelo.innerHTML += '<option>Tucson</option>'
        break
        case 'Jeep':
            versao.innerHTML = ''
            versao.innerHTML = '<option value="n">Selecione a Versão</option>'
            versao.style.fontSize = '17px'
            modelo.innerHTML = ''
            modelo.innerHTML += '<option value="n">Selecione o Modelo</option>'
            modelo.innerHTML += '<option>Renegade</option>'
            modelo.innerHTML += '<option>Compass</option>'
            modelo.innerHTML += '<option>Grand Cherokee</option>'
            modelo.innerHTML += '<option>Commander</option>'
            modelo.innerHTML += '<option>Wrangler</option>'
        break
        case 'Mercedes-Benz':
            versao.innerHTML = ''
            versao.innerHTML = '<option value="n">Selecione a Versão</option>'
            versao.style.fontSize = '17px'
            modelo.innerHTML = ''
            modelo.innerHTML += '<option value="n">Selecione o Modelo</option>'
            modelo.innerHTML += '<option>CLA 45</option>'
            modelo.innerHTML += '<option>AMG GT</option>'
            modelo.innerHTML += '<option>C 180</option>'
            modelo.innerHTML += '<option>GLA 200</option>'
            modelo.innerHTML += '<option>SLK 200</option>'
        break
        case 'Nissan':
            versao.innerHTML = ''
            versao.innerHTML = '<option value="n">Selecione a Versão</option>'
            versao.style.fontSize = '17px'
            modelo.innerHTML = ''
            modelo.innerHTML += '<option value="n">Selecione o Modelo</option>'
            modelo.innerHTML += '<option>March</option>'
            modelo.innerHTML += '<option>Kicks</option>'
            modelo.innerHTML += '<option>Frontier</option>'
            modelo.innerHTML += '<option>Versa</option>'
            modelo.innerHTML += '<option>Sentra</option>'
        break
        case 'Renault':
            versao.innerHTML = ''
            versao.innerHTML = '<option value="n">Selecione a Versão</option>'
            versao.style.fontSize = '17px'
            modelo.innerHTML = ''
            modelo.innerHTML += '<option value="n">Selecione o Modelo</option>'
            modelo.innerHTML += '<option>Captur</option>'
            modelo.innerHTML += '<option>Duster</option>'
            modelo.innerHTML += '<option>Sandero</option>'
            modelo.innerHTML += '<option>Oroch</option>'
            modelo.innerHTML += '<option>Fluense</option>'
        break
        case 'Toyota':
            versao.innerHTML = ''
            versao.innerHTML = '<option value="n">Selecione a Versão</option>'
            versao.style.fontSize = '17px'
            modelo.innerHTML = ''
            modelo.innerHTML += '<option value="n">Selecione o Modelo</option>'
            modelo.innerHTML += '<option>Hilux</option>'
            modelo.innerHTML += '<option>SW4</option>'
            modelo.innerHTML += '<option>Corolla</option>'
            modelo.innerHTML += '<option>Corolla Cross</option>'
            modelo.innerHTML += '<option>Etios</option>'
        break
        case 'n':
            modelo.innerHTML = '<option value="n">Selecione o Modelo</option>'
            versao.innerHTML = ''
            versao.innerHTML = '<option value="n">Selecione a Versão</option>'
            versao.style.fontSize = '17px'
        break
    }
})

modelo.addEventListener('change', function(){
    console.log(modelo.value)
    botao.innerHTML = '<div class="botao_fake">Continuar</div>'

    let valor_marca = marca.value
    let valor_modelo = modelo.value

    console.log(valor_marca)
    console.log(valor_modelo)

    switch (valor_marca) {
        case 'Audi':

            switch (valor_modelo) {
                case 'A3':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="1.4 TFSI SEDAN AMBIENTE 16V FLEX 4P TIPTRONIC" title="1.4 TFSI SEDAN AMBIENTE 16V FLEX 4P TIPTRONIC">1.4 TFSI SEDAN AMBIENTE...</option>'
                    versao.innerHTML += '<option value="2.0 TFSI SEDAN AMBITION 16V GASOLINA 4P S-TRONIC" title="2.0 TFSI SEDAN AMBITION 16V GASOLINA 4P S-TRONIC">2.0 TFSI SEDAN AMBITION...</option>'
                    versao.innerHTML += '<option value="1.8 TFSI SPORTBACK AMBITION 16V GASOLINA 4P" title="1.8 TFSI SPORTBACK AMBITION 16V GASOLINA 4P">1.8 TFSI SPORTBACK...</option>'
                    versao.innerHTML += '<option value="1.6 SPORTBACK 8V GASOLINA 4P" title="1.6 SPORTBACK 8V GASOLINA 4P">1.6 SPORTBACK 8V...</option>'
                    versao.style.fontSize = '17px'

                break
                case 'A5':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="2.0 TFSI GASOLINA SPORTBACK S-LINE S TRONIC" title="2.0 TFSI GASOLINA SPORTBACK S-LINE S TRONIC">2.0 TFSI GASOLINA...</option>'
                    versao.innerHTML += '<option value="1.8 TFSI SPORTBACK AMBIENTE 16V GASOLINA 4P MULTITRONIC" title="1.8 TFSI SPORTBACK AMBIENTE 16V GASOLINA 4P MULTITRONIC">1.8 TFSI SPORTBACK ...</option>'
                    versao.innerHTML += '<option value="2.0 TFSI GASOLINA SPORTBACK PERFORMANCE S TRONIC" title="2.0 TFSI GASOLINA SPORTBACK PERFORMANCE S TRONIC">2.0 TFSI GASOLINA...</option>'
                    versao.innerHTML += '<option value="3.2 FSI COUPÉ V6 24V GASOLINA 2P MULTITRONIC" title="3.2 FSI COUPÉ V6 24V GASOLINA 2P MULTITRONIC">3.2 FSI COUPÉ V6...</option>'
                    versao.style.fontSize = '17px'

                break
                case 'TT':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="1.8 20V TURBO GASOLINA 2P MANUAL" title="1.8 20V TURBO GASOLINA 2P MANUAL">1.8 20V TURBO GASOLINA...</option>'
                    versao.innerHTML += '<option value="2.0 TFSI COUPÉ 16V 211CV GASOLINA 2P S-TRONIC" title="2.0 TFSI COUPÉ 16V 211CV GASOLINA 2P S-TRONIC">2.0 TFSI COUPÉ 16V...</option>'
                    versao.innerHTML += '<option value="2.0 TFSI ROADSTER 211CV GASOLINA 2P S-TRONIC" title="2.0 TFSI ROADSTER 211CV GASOLINA 2P S-TRONIC">2.0 TFSI ROADSTER...</option>'
                    versao.innerHTML += '<option value="2.0 TFSI ROADSTER AMBITION 16V GASOLINA 2P S-TRONIC" title="2.0 TFSI ROADSTER AMBITION 16V GASOLINA 2P S-TRONIC">2.0 TFSI ROADSTER...</option>'
                    versao.style.fontSize = '17px'

                break
                case 'Q5':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="2.0 TFSI GASOLINA AMBIENTE S TRONIC" title="2.0 TFSI GASOLINA AMBIENTE S TRONIC">2.0 TFSI GASOLINA AMBIENTE...</option>'
                    versao.innerHTML += '<option value="2.0 TFSI GASOLINA PRESTIGE PLUS S TRONIC" title="2.0 TFSI GASOLINA PRESTIGE PLUS S TRONIC">2.0 TFSI GASOLINA PRESTIGE...</option>'
                    versao.innerHTML += '<option value="3.0 TFSI AMBITION V6 24V GASOLINA 4P" title="3.0 TFSI AMBITION V6 24V GASOLINA 4P">3.0 TFSI AMBITION V6 24V ...</option>'
                    versao.innerHTML += '<option value="2.0 TFSI GASOLINA PRESTIGE S TRONIC" title="2.0 TFSI GASOLINA PRESTIGE S TRONIC">2.0 TFSI GASOLINA PRESTIGE...</option>'
                    versao.style.fontSize = '17px'

                break
                case 'R8':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="4.2 FSI QUATTRO V8 32V GASOLINA 2P R-TRONIC" title="4.2 FSI QUATTRO V8 32V GASOLINA 2P R-TRONIC">4.2 FSI QUATTRO V8 32V...</option>'
                    versao.innerHTML += '<option value="5.2 V10 FSI GASOLINA COUPÉ QUATTRO S TRONIC" title="5.2 V10 FSI GASOLINA COUPÉ QUATTRO S TRONIC">5.2 V10 FSI GASOLINA COUPÉ...</option>'
                    versao.innerHTML += '<option value="5.2 FSI QUATTRO SPYDER V10 40V GASOLINA 2P S TRONIC" title="5.2 FSI QUATTRO SPYDER V10 40V GASOLINA 2P S TRONIC">5.2 FSI QUATTRO SPYDER...</option>'
                    versao.innerHTML += '<option value="5.2 FSI QUATTRO V10 40V GASOLINA 2P R-TRONIC" title="5.2 FSI QUATTRO V10 40V GASOLINA 2P R-TRONIC">5.2 FSI QUATTRO V10 40V...</option>'
                    versao.style.fontSize = '17px'

                break
                case 'n':
                    versao.innerHTML = '<option value="n">Selecione a Versão</option>'
                    versao.style.fontSize = '17px'
                break
            }
        break
        case 'BMW':
            
            switch (valor_modelo) {
                case '330i':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="2.0 16V TURBO GASOLINA M SPORT AUTOMÁTICO" title="2.0 16V TURBO GASOLINA M SPORT AUTOMÁTICO">2.0 16V TURBO GASOLINA M...</option>'
                    versao.innerHTML += '<option value="2.0 16V TURBO GASOLINA SPORT AUTOMÁTICO" title="2.0 16V TURBO GASOLINA SPORT AUTOMÁTICO">2.0 16V TURBO GASOLINA...</option>'
                    versao.innerHTML += '<option value="3.0 MOTORSPORT SEDAN 24V GASOLINA 4P AUTOMÁTICO" title="3.0 MOTORSPORT SEDAN 24V GASOLINA 4P AUTOMÁTICO">3.0 MOTORSPORT SEDAN 24V...</option>'
                    versao.innerHTML += '<option value="3.0 TOP SEDAN 24V GASOLINa 4P AUTOMÁTICO" title="3.0 TOP SEDAN 24V GASOLINa 4P AUTOMÁTICO">3.0 TOP SEDAN 24V GASOLIN...</option>'
                    versao.style.fontSize = '17px'

                break
                case 'X4':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="2.0 16V GASOLINA XDRIVE30I M SPORT STEPTRONI" title="2.0 16V GASOLINA XDRIVE30I M SPORT STEPTRONI">2.0 16V GASOLINA XDRIVE30I...</option>'
                    versao.innerHTML += '<option value="3.0 M SPORT 35I 4X4 24V TURBO GASOLINA 4P AUTOMÁTICO" title="3.0 M SPORT 35I 4X4 24V TURBO GASOLINA 4P AUTOMÁTICO">3.0 M SPORT 35I 4X4 24V...</option>'
                    versao.innerHTML += '<option value="3.0 TWINPOWER GASOLINA M COMPETITION STEPTRONIC" title="3.0 TWINPOWER GASOLINA M COMPETITION STEPTRONIC">3.0 TWINPOWER GASOLINA...</option>'
                    versao.innerHTML += '<option value="3.0 TWINPOWER GASOLINA M40I STEPTRONIC" title="3.0 TWINPOWER GASOLINA M40I STEPTRONIC">3.0 TWINPOWER GASOLINA...</option>'
                    versao.style.fontSize = '17px'

                break
                case 'Z4':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="2.0 16V TURBO GASOLINA SDRIVE20I AUTOMÁTICO" title="2.0 16V TURBO GASOLINA SDRIVE20I AUTOMÁTICO">2.0 16V TURBO GASOLINA...</option>'
                    versao.innerHTML += '<option value="2.5 I6 GASOLINA SDRIVE23I AUTOMÁTICO" title="2.5 I6 GASOLINA SDRIVE23I AUTOMÁTICO">2.5 I6 GASOLINA SDRIVE23I...</option>'
                    versao.innerHTML += '<option value="3.0 I6 TURBO GASOLINA SDRIVE35I DCT" title="3.0 I6 TURBO GASOLINA SDRIVE35I DCT">3.0 I6 TURBO GASOLINA...</option>'
                    versao.innerHTML += '<option value="3.2 M ROADSTER 24V GASOLINA 2P MANUAL" title="3.2 M ROADSTER 24V GASOLINA 2P MANUAL">3.2 M ROADSTER 24V...</option>'
                    versao.style.fontSize = '17px'

                break
                case 'M3':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="3.0 (USA) 6 CILINDROS 24V GASOLINA 2P MANUAL" title="3.0 (USA) 6 CILINDROS 24V GASOLINA 2P MANUAL">3.0 (USA) 6 CILINDROS...</option>'
                    versao.innerHTML += '<option value="3.0 I6 TWINTURBO GASOLINA COMPETITION TRACK STEPTRONIC" title="3.0 I6 TWINTURBO GASOLINA COMPETITION TRACK STEPTRONIC">3.0 I6 TWINTURBO GASOLINA...</option>'
                    versao.innerHTML += '<option value="3.2 I6 GASOLINA MANUAL" title="3.2 I6 GASOLINA MANUAL">3.2 I6 GASOLINA MANUAL</option>'
                    versao.innerHTML += '<option value="4.0 SEDAN V8 32V GASOLINA 4P AUTOMATIZADO" title="4.0 SEDAN V8 32V GASOLINA 4P AUTOMATIZADO">4.0 SEDAN V8 32V GASOLINA...</option>'
                    versao.style.fontSize = '17px'

                break
                case 'i8':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="1.5 12V HYBRID" title="1.5 12V HYBRID">1.5 12V HYBRID</option>'
                    versao.innerHTML += '<option value="1.5 12V HYBRID COUPÉ" title="1.5 12V HYBRID COUPÉ">1.5 12V HYBRID COUPÉ</option>'
                    versao.innerHTML += '<option value="1.5 12V HYBRID ROADSTER" title="1.5 12V HYBRID ROADSTER">1.5 12V HYBRID ROADSTER</option>'
                    versao.style.fontSize = '17px'

                break
                case 'n':
                    versao.innerHTML = '<option value="n">Selecione a Versão</option>'
                    versao.style.fontSize = '17px'
                break
            }
        break
        case 'Chevrolet':
            
            switch (valor_modelo) {
                case 'Camaro':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="6.2 SS COUPÉ V8 GASOLINA 2P AUTOMÁTICO" title="6.2 SS COUPÉ V8 GASOLINA 2P AUTOMÁTICO">6.2 SS COUPÉ V8 GASOLINA...</option>'
                    versao.innerHTML += '<option value="6.2 V8 GASOLINA SS CONVERSÍVEL AUTOMÁTICO" title="6.2 V8 GASOLINA SS CONVERSÍVEL AUTOMÁTICO">6.2 V8 GASOLINA SS CONVER...</option>'
                    versao.innerHTML += '<option value="6.2 V8 LSA GASOLINA ZL1 AUTOMÁTICO" title="6.2 V8 LSA GASOLINA ZL1 AUTOMÁTICO">6.2 V8 LSA GASOLINA ZL1...</option>'
                    versao.innerHTML += '<option value="TYPE LT V8 2P AUTOMÁTICO" title="TYPE LT V8 2P AUTOMÁTICO">TYPE LT V8 2P AUTOMÁTICO</option>'
                    versao.style.fontSize = '17px'

                break
                case 'Cruze':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="1.4 TURBO LTZ 16V FLEX 4P AUTOMÁTICO" title="1.4 TURBO LTZ 16V FLEX 4P AUTOMÁTICO">1.4 TURBO LTZ 16V FLEX 4P...</option>'
                    versao.innerHTML += '<option value="1.8 LT 16V FLEX 4P AUTOMÁTICO" title="1.8 LT 16V FLEX 4P AUTOMÁTICO">1.8 LT 16V FLEX 4P AUTOMÁ...</option>'
                    versao.innerHTML += '<option value="1.8 LT 16V FLEX 4P MANUAL" title="1.8 LT 16V FLEX 4P MANUAL">1.8 LT 16V FLEX 4P MANUAL</option>'
                    versao.innerHTML += '<option value="1.4 TURBO SPORT6 LT 16V FLEX 4P AUTOMÁTICO" title="1.4 TURBO SPORT6 LT 16V FLEX 4P AUTOMÁTICO">1.4 TURBO SPORT6 LT 16V...</option>'
                    versao.style.fontSize = '17px'

                break
                case 'S10':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="2.2 MPFI DLX 4X2 CS 8V GASOLINA 2P MANUAL" title="2.2 MPFI DLX 4X2 CS 8V GASOLINA 2P MANUAL">2.2 MPFI DLX 4X2 CS 8V...</option>'
                    versao.innerHTML += '<option value="4.3 SFI DLX 4X2 CS V6 12V GASOLINA 2P MANUAL" title="4.3 SFI DLX 4X2 CS V6 12V GASOLINA 2P MANUAL">4.3 SFI DLX 4X2 CS V6...</option>'
                    versao.innerHTML += '<option value="2.5 STD 4X4 CS 8V TURBO DIESEL 2P MANUAL" title="2.5 STD 4X4 CS 8V TURBO DIESEL 2P MANUAL">2.5 STD 4X4 CS 8V TURBO...</option>'
                    versao.innerHTML += '<option value="2.8 16V TURBO DIESEL HIGH COUNTRY CD 4X4 AUTOMÁTICO" title="2.8 16V TURBO DIESEL HIGH COUNTRY CD 4X4 AUTOMÁTICO">2.8 16V TURBO DIESEL HIGH...</option>'
                    versao.style.fontSize = '17px'

                break
                case 'Tracker':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="2.5 STD 4X4 CS 8V TURBO DIESEL 2P MANUAL" title="2.5 STD 4X4 CS 8V TURBO DIESEL 2P MANUAL">2.5 STD 4X4 CS 8V TURBO...</option>'
                    versao.innerHTML += '<option value="1.2 TURBO FLEX PREMIER AUTOMÁTICO" title="1.2 TURBO FLEX PREMIER AUTOMÁTICO">1.2 TURBO FLEX PREMIER...</option>'
                    versao.innerHTML += '<option value="1.4 16V TURBO FLEX PREMIER AUTOMÁTICO" title="1.4 16V TURBO FLEX PREMIER AUTOMÁTICO">1.4 16V TURBO FLEX...</option>'
                    versao.innerHTML += '<option value="2.0 4X4 8V TURBO INTERCOOLER DIESEL 4P MANUAL" title="2.0 4X4 8V TURBO INTERCOOLER DIESEL 4P MANUAL">2.0 4X4 8V TURBO...</option>'
                    versao.style.fontSize = '17px'

                break
                case 'Chevette':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="1.0 JUNIOR 8V GASOLINA 2P MANUAL" title="1.0 JUNIOR 8V GASOLINA 2P MANUAL">1.0 JUNIOR 8V GASOLINA...</option>'
                    versao.innerHTML += '<option value="1.4 SL 8V GASOLINA 2P MANUAL" title="1.4 SL 8V GASOLINA 2P MANUAL">1.4 SL 8V GASOLINA 2P...</option>'
                    versao.innerHTML += '<option value="1.6 SE 8V GASOLINA 2P MANUAL" title="1.6 SE 8V GASOLINA 2P MANUAL">1.6 SE 8V GASOLINA 2P...</option>'
                    versao.innerHTML += '<option value="1.6 SL/E 8V GASOLINA 2P MANUAL" title="1.6 SL/E 8V GASOLINA 2P MANUAL">1.6 SL/E 8V GASOLINA 2P...</option>'
                    versao.style.fontSize = '17px'

                break
                case 'n':
                    versao.innerHTML = '<option value="n">Selecione a Versão</option>'
                    versao.style.fontSize = '17px'
                break
            }

        break
        case 'Fiat':

            switch (valor_modelo) {
                case 'Palio':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="1.6 MPI SPORTING 16V FLEX 4P MANUAL" title="1.6 MPI SPORTING 16V FLEX 4P MANUAL">1.6 MPI SPORTING 16V FLEX...</option>'
                    versao.innerHTML += '<option value="1.0 MPI FIRE 8V FLEX 4P MANUAL" title="1.0 MPI FIRE 8V FLEX 4P MANUAL">1.0 MPI FIRE 8V FLEX 4P...</option>'
                    versao.innerHTML += '<option value="1.4 MPI ATTRACTIVE WEEKEND 8V FLEX 4P MANUAL" title="1.4 MPI ATTRACTIVE WEEKEND 8V FLEX 4P MANUAL">1.4 MPI ATTRACTIVE WEEKEN...</option>'
                    versao.innerHTML += '<option value="1.0 MPI FIRE 8V GASOLINA 2P MANUAL" title="1.0 MPI FIRE 8V GASOLINA 2P MANUAL">1.0 MPI FIRE 8V GASOLINA...</option>'
                    versao.style.fontSize = '17px'

                break
                case 'Pulse':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="1.0 TURBO 200 FLEX AUDACE CVT" title="1.0 TURBO 200 FLEX AUDACE CVT">1.0 TURBO 200 FLEX AUDACE...</option>'
                    versao.innerHTML += '<option value="1.0 TURBO 200 FLEX DRIVE CVT" title="1.0 TURBO 200 FLEX DRIVE CVT">1.0 TURBO 200 FLEX DRIVE...</option>'
                    versao.innerHTML += '<option value="1.0 TURBO 200 FLEX IMPETUS CVT" title="1.0 TURBO 200 FLEX IMPETUS CVT">1.0 TURBO 200 FLEX IMPETUS...</option>'
                    versao.innerHTML += '<option value="1.3 FLEX DRIVE MANUAL" title="1.3 FLEX DRIVE MANUAL">1.3 FLEX DRIVE MANUAL</option>'
                    versao.style.fontSize = '17px'

                break
                case 'Toro':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="1.3 TURBO 270 FLEX ENDURANCE AT6" title="1.3 TURBO 270 FLEX ENDURANCE AT6">1.3 TURBO 270 FLEX...</option>'
                    versao.innerHTML += '<option value="1.8 16V EVO FLEX ENDURANCE MANUAL" title="1.8 16V EVO FLEX ENDURANCE MANUAL">1.8 16V EVO FLEX...</option>'
                    versao.innerHTML += '<option value="2.0 16V TURBO DIESEL VOLCANO 4WD AT9" title="2.0 16V TURBO DIESEL VOLCANO 4WD AT9">2.0 16V TURBO DIESEL...</option>'
                    versao.innerHTML += '<option value="2.4 16V MULTIAIR FLEX VOLCANO AT9" title="2.4 16V MULTIAIR FLEX VOLCANO AT9">2.4 16V MULTIAIR...</option>'
                    versao.style.fontSize = '17px'

                break
                case 'Uno':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="1.0 EVO VIVACE 8V FLEX 4P MANUAL" title="1.0 EVO VIVACE 8V FLEX 4P MANUAL">1.0 EVO VIVACE 8V FLEX...</option>'
                    versao.innerHTML += '<option value="1.0 EVO ATTRACTIVE 8V FLEX 4P MANUAL" title="1.0 EVO ATTRACTIVE 8V FLEX 4P MANUAL">1.0 EVO ATTRACTIVE 8V FLEX ...</option>'
                    versao.innerHTML += '<option value="1.4 SPORTING 8V FLEX 4P MANUAL" title="1.4 SPORTING 8V FLEX 4P MANUAL">1.4 SPORTING 8V FLEX...</option>'
                    versao.innerHTML += '<option value="1.0 MPI MILLE FIRE ECONOMY 8V FLEX 2P MANUAL" title="1.0 MPI MILLE FIRE ECONOMY 8V FLEX 2P MANUAL">1.0 MPI MILLE FIRE...</option>'
                    versao.style.fontSize = '17px'

                break
                case 'Fiorino':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="1.3 MPI FURGÃO 8V FLEX 2P MANUAL" title="1.3 MPI FURGÃO 8V FLEX 2P MANUAL">1.3 MPI FURGÃO 8V FLEX...</option>'
                    versao.innerHTML += '<option value="1.4 MPI FURGÃO HARD WORKING 8V FLEX 2P MANUAL" title="1.4 MPI FURGÃO HARD WORKING 8V FLEX 2P MANUAL">1.4 MPI FURGÃO HARD...</option>'
                    versao.innerHTML += '<option value="1.4 MPI FURGÃO ENDURANCE 8V FLEX 2P MANUAL" title="1.4 MPI FURGÃO ENDURANCE 8V FLEX 2P MANUAL">1.4 MPI FURGÃO ENDURANCE...</option>'
                    versao.innerHTML += '<option value="1.5 FIRE FURGÃO 8V GASOLINA 2P MANUAL" title="1.5 FIRE FURGÃO 8V GASOLINA 2P MANUAL">1.5 FIRE FURGÃO 8V...</option>'
                    versao.style.fontSize = '17px'

                break
                case 'n':
                    versao.innerHTML = '<option value="n">Selecione a Versão</option>'
                    versao.style.fontSize = '17px'
                break
            }
        break
        case 'Ford':
            
            switch (valor_modelo) {
                case 'Fiesta':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="1.6 TI-VCT FLEX TITANIUM PLUS POWERSHIFT" title="1.6 TI-VCT FLEX TITANIUM PLUS POWERSHIFT">1.6 TI-VCT FLEX TITANIUM...</option>'
                    versao.innerHTML += '<option value="1.6 TITANIUM HATCH 16V FLEX 4P POWERSHIFT" title="1.6 TITANIUM HATCH 16V FLEX 4P POWERSHIFT">1.6 TITANIUM HATCH 16V...</option>'
                    versao.innerHTML += '<option value="1.6 SE SEDAN 16V FLEX 4P POWERSHIFT" title="1.6 SE SEDAN 16V FLEX 4P POWERSHIFT">1.6 SE SEDAN 16V FLEX...</option>'
                    versao.innerHTML += '<option value="1.6 ROCAM HATCH 8V FLEX 4P MANUAL" title="1.6 ROCAM HATCH 8V FLEX 4P MANUAL">1.6 ROCAM HATCH 8V FLEX...</option>'
                    versao.style.fontSize = '17px'

                break
                case 'Ka':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="1.5 TI-VCT FLEX SE AUTOMÁTICO" title="1.5 TI-VCT FLEX SE AUTOMÁTICO">1.5 TI-VCT FLEX SE...</option>'
                    versao.innerHTML += '<option value="1.0 TI-VCT FLEX SE MANUAL" title="1.0 TI-VCT FLEX SE MANUAL">1.0 TI-VCT FLEX SE MANUAL</option>'
                    versao.innerHTML += '<option value="1.5 SIGMA FLEX SE MANUAL" title="1.5 SIGMA FLEX SE MANUAL">1.5 SIGMA FLEX SE MANUAL</option>'
                    versao.innerHTML += '<option value="1.6 MPI TECNO 8V FLEX 2P MANUAL" title="1.6 MPI TECNO 8V FLEX 2P MANUAL">1.6 MPI TECNO 8V FLEX 2P...</option>'
                    versao.style.fontSize = '17px'

                break
                case 'Fusion':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="2.0 TITANIUM 16V HÍBRIDO 4P AUTOMÁTICO" title="2.0 TITANIUM 16V HÍBRIDO 4P AUTOMÁTICO">2.0 TITANIUM 16V HÍBRIDO...</option>'
                    versao.innerHTML += '<option value="2.3 SEL 16V GASOLINA 4P AUTOMÁTICO" title="2.3 SEL 16V GASOLINA 4P AUTOMÁTICO">2.3 SEL 16V GASOLINA...</option>'
                    versao.innerHTML += '<option value="2.5 SE 16V FLEX 4P AUTOMÁTICO" title="2.5 SE 16V FLEX 4P AUTOMÁTICO">2.5 SE 16V FLEX 4P...</option>'
                    versao.innerHTML += '<option value="3.0 SEL FWD V6 24V GASOLINA 4P AUTOMÁTICO" title="3.0 SEL FWD V6 24V GASOLINA 4P AUTOMÁTICO">3.0 SEL FWD V6 24V...</option>'
                    versao.style.fontSize = '17px'

                break
                case 'Ranger':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="3.2 LIMITED 4X4 CD 20V DIESEL 4P AUTOMÁTICO" title="3.2 LIMITED 4X4 CD 20V DIESEL 4P AUTOMÁTICO">3.2 LIMITED 4X4 CD 20V DI...</option>'
                    versao.innerHTML += '<option value="2.2 XLS 4X4 CD 16V DIESEL 4P AUTOMÁTICO" title="2.2 XLS 4X4 CD 16V DIESEL 4P AUTOMÁTICO">2.2 XLS 4X4 CD 16V DIESEL...</option>'
                    versao.innerHTML += '<option value="2.2 XLS 4X2 CD 16V DIESEL 4P AUTOMÁTICO" title="2.2 XLS 4X2 CD 16V DIESEL 4P AUTOMÁTICO">2.2 XLS 4X2 CD 16V DIESEL...</option>'
                    versao.innerHTML += '<option value="3.0 XLT 4X4 CD 16V TURBO ELETRONIC DIESEL 4P MANUAL" title="3.0 XLT 4X4 CD 16V TURBO ELETRONIC DIESEL 4P MANUAL">3.0 XLT 4X4 CD 16V TURBO...</option>'
                    versao.style.fontSize = '17px'

                break
                case 'Mustang':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="3.7 V6 GASOLINA AUTOMÁTICO" title="3.7 V6 GASOLINA AUTOMÁTICO">3.7 V6 GASOLINA AUTOMÁTICO</option>'
                    versao.innerHTML += '<option value="5.0 V8 TI-VCT GASOLINA GT PREMIUM SELECTSHIFT" title="5.0 V8 TI-VCT GASOLINA GT PREMIUM SELECTSHIFT">5.0 V8 TI-VCT GASOLINA GT...</option>'
                    versao.innerHTML += '<option value="5.0 V8 TI-VCT GASOLINA MACH 1 SELECTSHIFT" title="5.0 V8 TI-VCT GASOLINA MACH 1 SELECTSHIFT">5.0 V8 TI-VCT GASOLINA MA...</option>'
                    versao.style.fontSize = '17px'

                break
                case 'n':
                    versao.innerHTML = '<option value="n">Selecione a Versão</option>'
                    versao.style.fontSize = '17px'
                break
            }
        break
        case 'Honda':

            switch (valor_modelo) {
                case 'Civic':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="1.5 16V TURBO GASOLINA SI COUPÉ 2P MANUAL" title="1.5 16V TURBO GASOLINA SI COUPÉ 2P MANUAL">1.5 16V TURBO GASOLINA...</option>'
                    versao.innerHTML += '<option value="1.6 LX 16V GASOLINA 4P AUTOMÁTICO" title="1.6 LX 16V GASOLINA 4P AUTOMÁTICO">1.6 LX 16V GASOLINA 4P...</option>'
                    versao.innerHTML += '<option value="2.0 EXR 16V FLEX 4P AUTOMÁTICO" title="2.0 EXR 16V FLEX 4P AUTOMÁTICO">2.0 EXR 16V FLEX 4P...</option>'
                    versao.innerHTML += '<option value="2.4 SI 16V GASOLINA 2P MANUAL" title="2.4 SI 16V GASOLINA 2P MANUAL">2.4 SI 16V GASOLINA 2P...</option>'
                    versao.style.fontSize = '17px'

                break  
                case 'HR-V':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="1.5 DI I-VTEC TURBO FLEX ADVANCE CVT" title="1.5 DI I-VTEC TURBO FLEX ADVANCE CVT">1.5 DI I-VTEC TURBO FLEX...</option>'
                    versao.innerHTML += '<option value="1.5 DI I-VTEC TURBO FLEX TOURING CVT" title="1.5 DI I-VTEC TURBO FLEX TOURING CVT">1.5 DI I-VTEC TURBO FLEX...</option>'
                    versao.innerHTML += '<option value="1.8 16V FLEX EXL 4P AUTOMÁTICO" title="1.8 16V FLEX EXL 4P AUTOMÁTICO">1.8 16V FLEX EXL 4P...</option>'
                    versao.innerHTML += '<option value="1.8 16V FLEX TOURING 4P AUTOMÁTICO" title="1.8 16V FLEX TOURING 4P AUTOMÁTICO">1.8 16V FLEX TOURING...</option>'
                    versao.style.fontSize = '17px'
                    
                break    
                case 'Fit':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="1.5 EX 16V FLEX 4P AUTOMÁTICO" title="1.5 EX 16V FLEX 4P AUTOMÁTICO">1.5 EX 16V FLEX 4P...</option>'
                    versao.innerHTML += '<option value="1.4 LX 16V FLEX 4P AUTOMÁTICO" title="1.4 LX 16V FLEX 4P AUTOMÁTICO">1.4 LX 16V FLEX 4P...</option>'
                    versao.innerHTML += '<option value="1.5 TWIST 16V FLEX 4P MANUAL" title="1.5 TWIST 16V FLEX 4P MANUAL">1.5 TWIST 16V FLEX 4P...</option>'
                    versao.innerHTML += '<option value="1.5 EXL 16V FLEX 4P AUTOMÁTICO" title="1.5 EXL 16V FLEX 4P AUTOMÁTICO">1.5 EXL 16V FLEX 4P...</option>'
                    versao.style.fontSize = '17px'
                    
                break    
                case 'Accord':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="2.0 VTEC TURBO GASOLINA TOURING 10AT" title="2.0 VTEC TURBO GASOLINA TOURING 10AT">2.0 VTEC TURBO GASOLINA...</option>'
                    versao.innerHTML += '<option value="2.4 EX 16V GASOLINA 4P AUTOMÁTICO" title="2.4 EX 16V GASOLINA 4P AUTOMÁTICO">2.4 EX 16V GASOLINA 4P...</option>'
                    versao.innerHTML += '<option value="2.3 EX-R 16V GASOLINA 4P AUTOMÁTICO" title="2.3 EX-R 16V GASOLINA 4P AUTOMÁTICO">2.3 EX-R 16V GASOLINA 4P...</option>'
                    versao.innerHTML += '<option value="3.5 EX V6 24V GASOLINA 4P AUTOMÁTICO" title="3.5 EX V6 24V GASOLINA 4P AUTOMÁTICO">3.5 EX V6 24V GASOLINA...</option>'
                    versao.style.fontSize = '17px'
                    
                break    
                case 'CR-V':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="1.5 16V VTC TURBO GASOLINA TOURING AWD CVT" title="1.5 16V VTC TURBO GASOLINA TOURING AWD CVT">1.5 16V VTC TURBO GASOLI...</option>'
                    versao.innerHTML += '<option value="2.0 EXL 4X2 16V GASOLINA 4P AUTOMÁTICO" title="2.0 EXL 4X2 16V GASOLINA 4P AUTOMÁTICO">2.0 EXL 4X2 16V GASOLINA...</option>'
                    versao.innerHTML += '<option value="2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO" title="2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO">2.0 EXL 4X4 16V GASOLINA...</option>'
                    versao.innerHTML += '<option value="2.0 LX 4X2 16V GASOLINA 4P MANUAL" title="2.0 LX 4X2 16V GASOLINA 4P MANUAL">2.0 LX 4X2 16V GASOLINA...</option>'
                    versao.style.fontSize = '17px'
                    
                break    
                case 'n':
                    versao.innerHTML = '<option value="n">Selecione a Versão</option>'
                    versao.style.fontSize = '17px'
                break
            }
        break
        case 'Hyundai':

            switch (valor_modelo) {
                case 'Azera':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="3.0 MPFI GLS V6 24V GASOLINA 4P AUTOMÁTICO" title="3.0 MPFI GLS V6 24V GASOLINA 4P AUTOMÁTICO">3.0 MPFI GLS V6 24V...</option>'
                    versao.innerHTML += '<option value="3.3 MPFI GLS SEDAN V6 24V GASOLINA 4P AUTOMÁTICO" title="3.3 MPFI GLS SEDAN V6 24V GASOLINA 4P AUTOMÁTICO">3.3 MPFI GLS SEDAN V6...</option>'
                    versao.innerHTML += '<option value="3.0 V6 GDI GASOLINA AUTOMÁTICO" title="3.0 V6 GDI GASOLINA AUTOMÁTICO">3.0 V6 GDI GASOLINA...</option>'
                    versao.style.fontSize = '17px'
                    
                break  
                case 'ix35':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="2.0 MPFI GLS 16V FLEX 4P AUTOMÁTICO" title="2.0 MPFI GLS 16V FLEX 4P AUTOMÁTICO">2.0 MPFI GLS 16V FLEX 4P...</option>'
                    versao.innerHTML += '<option value="2.0 MPI 4X2 16V FLEX 4P AUTOMÁTICO" title="2.0 MPI 4X2 16V FLEX 4P AUTOMÁTICO">2.0 MPI 4X2 16V FLEX 4P...</option>'
                    versao.innerHTML += '<option value="2.0 16V FLEX 4P AUTOMÁTICO" title="2.0 16V FLEX 4P AUTOMÁTICO">2.0 16V FLEX 4P AUTOMÁTICO</option>'
                    versao.innerHTML += '<option value="2.0 MPFI GLS 4X4 16V GASOLINA 4P AUTOMÁTICO" title="2.0 MPFI GLS 4X4 16V GASOLINA 4P AUTOMÁTICO">2.0 MPFI GLS 4X4 16V...</option>'
                    versao.style.fontSize = '17px'
                    
                break    
                case 'Creta':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="1.6 16V FLEX ATTITUDE MANUAL" title="1.6 16V FLEX ATTITUDE MANUAL">1.6 16V FLEX ATTITUDE...</option>'
                    versao.innerHTML += '<option value="1.6 16V FLEX ATTITUDE AUTOMÁTICO" title="1.6 16V FLEX ATTITUDE AUTOMÁTICO">1.6 16V FLEX ATTITUDE...</option>'
                    versao.innerHTML += '<option value="1.6 16V FLEX SMART AUTOMÁTICO" title="1.6 16V FLEX SMART AUTOMÁTICO">1.6 16V FLEX SMART...</option>'
                    versao.innerHTML += '<option value="2.0 16V FLEX PRESTIGE AUTOMÁTICO" title="2.0 16V FLEX PRESTIGE AUTOMÁTICO">2.0 16V FLEX PRESTIGE...</option>'
                    versao.style.fontSize = '17px'
                    
                break    
                case 'HB20':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="1.0 12V FLEX COMFORT MANUAL" title="1.0 12V FLEX COMFORT MANUAL">1.0 12V FLEX COMFORT...</option>'
                    versao.innerHTML += '<option value="1.6 COPA DO MUNDO FIFA 16V FLEX 4P AUTOMÁTICO" title="1.6 COPA DO MUNDO FIFA 16V FLEX 4P AUTOMÁTICO">1.6 COPA DO MUNDO FIFA 16V...</option>'
                    versao.innerHTML += '<option value="1.6 PREMIUM 16V FLEX 4P MANUAL" title="1.6 PREMIUM 16V FLEX 4P MANUAL">1.6 PREMIUM 16V FLEX 4P...</option>'
                    versao.innerHTML += '<option value="1.6 SPICY 16V FLEX 4P MANUAL" title="1.6 SPICY 16V FLEX 4P MANUAL">1.6 SPICY 16V FLEX 4P...</option>'
                    versao.style.fontSize = '17px'
                    
                break    
                case 'Tucson':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="1.6 16V T-GDI GASOLINA GLS ECOSHIFT" title="1.6 16V T-GDI GASOLINA GLS ECOSHIFT">1.6 16V T-GDI GASOLINA...</option>'
                    versao.innerHTML += '<option value="2.0 MPFI GL 16V 2WD GASOLINA 4P AUTOMÁTICO" title="2.0 MPFI GL 16V 2WD GASOLINA 4P AUTOMÁTICO">2.0 MPFI GL 16V 2WD GASO...</option>'
                    versao.innerHTML += '<option value="2.7 MPFI GLS 24V 180CV 4WD GASOLINA 4P AUTOMÁTICO" title="2.7 MPFI GLS 24V 180CV 4WD GASOLINA 4P AUTOMÁTICO">2.7 MPFI GLS 24V 180CV 4WD...</option>'
                    versao.style.fontSize = '17px'
                    
                break
                case 'n':
                    versao.innerHTML = '<option value="n">Selecione a Versão</option>'
                    versao.style.fontSize = '17px'
                break
            }
        break
        case 'Jeep':

            switch (valor_modelo) {
                case 'Renegade':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="2.0 16V TURBO DIESEL LONGITUDE 4P 4X4 AUTOMÁTICO" title="2.0 16V TURBO DIESEL LONGITUDE 4P 4X4 AUTOMÁTICO">2.0 16V TURBO DIESEL...</option>'
                    versao.innerHTML += '<option value="1.8 16V FLEX SPORT 4P AUTOMÁTICO" title="1.8 16V FLEX SPORT 4P AUTOMÁTICO">1.8 16V FLEX SPORT 4P...</option>'
                    versao.innerHTML += '<option value="1.8 16V FLEX LONGITUDE 4P AUTOMÁTICO" title="1.8 16V FLEX LONGITUDE 4P AUTOMÁTICO">1.8 16V FLEX LONGITUDE 4P...</option>'
                    versao.innerHTML += '<option value="1.8 16V FLEX 4P MANUAL" title="1.8 16V FLEX 4P MANUAL">1.8 16V FLEX 4P MANUAL</option>'
                    versao.style.fontSize = '17px'
                    
                break  
                case 'Compass':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="2.0 16V FLEX LIMITED AUTOMÁTICO" title="2.0 16V FLEX LIMITED AUTOMÁTICO">2.0 16V FLEX LIMITED...</option>'
                    versao.innerHTML += '<option value="2.0 16V DIESEL LONGITUDE 4X4 AUTOMÁTICO" title="2.0 16V DIESEL LONGITUDE 4X4 AUTOMÁTICO">2.0 16V DIESEL LONGITUDE...</option>'
                    versao.innerHTML += '<option value="2.0 16V FLEX LONGITUDE AUTOMÁTICO" title="2.0 16V FLEX LONGITUDE AUTOMÁTICO">2.0 16V FLEX LONGITUDE...</option>'
                    versao.innerHTML += '<option value="1.3 T270 TURBO FLEX SPORT AT6" title="1.3 T270 TURBO FLEX SPORT AT6">1.3 T270 TURBO FLEX...</option>'
                    versao.style.fontSize = '17px'
                    
                break    
                case 'Grand Cherokee':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="3.6 LIMITED 4X4 V6 24V GASOLINA 4P AUTOMATICO" title="3.6 LIMITED 4X4 V6 24V GASOLINA 4P AUTOMATICO">3.6 LIMITED 4X4 V6 24V...</option>'
                    versao.innerHTML += '<option value="3.0 LIMITED 4X4 V6 24V TURBO DIESEL 4P AUTOMÁTICO" title="3.0 LIMITED 4X4 V6 24V TURBO DIESEL 4P AUTOMÁTICO">3.0 LIMITED 4X4 V6 24V...</option>'
                    versao.innerHTML += '<option value="3.6 LAREDO 4X4 V6 24V GASOLINA 4P AUTOMÁTICO" title="3.6 LAREDO 4X4 V6 24V GASOLINA 4P AUTOMÁTICO">3.6 LAREDO 4X4 V6 24V...</option>'
                    versao.innerHTML += '<option value="6.1 SRT8 4X4 V8 16V GASOLINA 4P AUTOMÁTICO" title="6.1 SRT8 4X4 V8 16V GASOLINA 4P AUTOMÁTICO">6.1 SRT8 4X4 V8 16V...</option>'
                    versao.style.fontSize = '17px'
                    
                break    
                case 'Commander':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="1.3 T270 TURBO FLEX LIMITED AT6" title="1.3 T270 TURBO FLEX LIMITED AT6">1.3 T270 TURBO FLEX...</option>'
                    versao.innerHTML += '<option value="2.0 TD380 TURBO DIESEL OVERLAND AT9" title="2.0 TD380 TURBO DIESEL OVERLAND AT9">2.0 TD380 TURBO DIESEL...</option>'
                    versao.innerHTML += '<option value="2.0 TD380 TURBO DIESEL LIMITED AT9" title="2.0 TD380 TURBO DIESEL LIMITED AT9">2.0 TD380 TURBO DIESEL...</option>'
                    versao.innerHTML += '<option value="1.3 T270 TURBO FLEX OVERLAND AT6" title="1.3 T270 TURBO FLEX OVERLAND AT6">1.3 T270 TURBO FLEX...</option>'
                    versao.style.fontSize = '17px'
                    
                break    
                case 'Wrangler':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="2.0 TURBO GASOLINA RUBICON 4P 4X4 AT8" title="2.0 TURBO GASOLINA RUBICON 4P 4X4 AT8">2.0 TURBO GASOLINA...</option>'
                    versao.innerHTML += '<option value="3.6 75 ANOS 4X4 V6 GASOLINA 4P AUTOMÁTICO" title="3.6 75 ANOS 4X4 V6 GASOLINA 4P AUTOMÁTICO">3.6 75 ANOS 4X4 V6...</option>'
                    versao.innerHTML += '<option value="3.8 SPORT 4X4 TETO RIGIDO V6 12V GASOLINA 2P AUTOMÁTICO" title="3.8 SPORT 4X4 TETO RIGIDO V6 12V GASOLINA 2P AUTOMÁTICO">3.8 SPORT 4X4 TETO RIGIDO...</option>'
                    versao.innerHTML += '<option value="4.0 SPORT 4X4 TETO RIGIDO 6I 12V GASOLINA 2P AUTOMÁTICO" title="4.0 SPORT 4X4 TETO RIGIDO 6I 12V GASOLINA 2P AUTOMÁTICO">4.0 SPORT 4X4 TETO...</option>'
                    versao.style.fontSize = '17px'
                    
                break
                case 'n':
                    versao.innerHTML = '<option value="n">Selecione a Versão</option>'
                    versao.style.fontSize = '17px'
                break
            }
        break
        case 'Mercedes-Benz':

            switch (valor_modelo) {
                case 'CLA 45':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="2.0 CGI GASOLINA 7G-DCT" title="2.0 CGI GASOLINA 7G-DCT">2.0 CGI GASOLINA 7G-DCT</option>'
                    versao.innerHTML += '<option value="2.0 CGI GASOLINA SPORT 4MATIC 7G-DCT" title="2.0 CGI GASOLINA SPORT 4MATIC 7G-DCT">2.0 CGI GASOLINA SPORT...</option>'
                    versao.innerHTML += '<option value="2.0 SPORT 16V TURBO GASOLINA 4P AUTOMÁTICO" title="2.0 SPORT 16V TURBO GASOLINA 4P AUTOMÁTICO">2.0 SPORT 16V TURBO...</option>'
                    versao.style.fontSize = '17px'
                    
                break  
                case 'AMG GT':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="4.0 V8 TURBO GASOLINA R PRO 7G-DCT" title="4.0 V8 TURBO GASOLINA R PRO 7G-DCT">4.0 V8 TURBO GASOLINA R...</option>'
                    versao.innerHTML += '<option value="4.0 V8 TURBO GASOLINA C ROADSTER 7G-DCT" title="4.0 V8 TURBO GASOLINA C ROADSTER 7G-DCT">4.0 V8 TURBO GASOLINA C...</option>'
                    versao.innerHTML += '<option value="4.0 V8 TURBO GASOLINA 7G-DCT" title="4.0 V8 TURBO GASOLINA 7G-DCT">4.0 V8 TURBO GASOLINA...</option>'
                    versao.innerHTML += '<option value="4.0 V8 TURBO GASOLINA S 7G-DCT" title="4.0 V8 TURBO GASOLINA S 7G-DCT">4.0 V8 TURBO GASOLINA S...</option>'
                    versao.style.fontSize = '17px'
                    
                break    
                case 'C 180':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="1.6 CGI 16V TURBO FLEX 4P AUTOMÁTICO" title="1.6 CGI 16V TURBO FLEX 4P AUTOMÁTICO">1.6 CGI 16V TURBO FLEX...</option>'
                    versao.innerHTML += '<option value="1.6 CGI AVANTGARDE 16V TURBO GASOLINA 4P AUTOMÁTICO" title="1.6 CGI AVANTGARDE 16V TURBO GASOLINA 4P AUTOMÁTICO">1.6 CGI AVANTGARDE 16V...</option>'
                    versao.innerHTML += '<option value="1.6 CGI FLEX AVANTGARDE 7G-TRONIC" title="1.6 CGI FLEX AVANTGARDE 7G-TRONIC">1.6 CGI FLEX AVANTGARDE...</option>'
                    versao.innerHTML += '<option value="1.6 CGI GASOLINA AVANTGARDE COUPÉ 9G-TRONIC" title="1.6 CGI GASOLINA AVANTGARDE COUPÉ 9G-TRONIC">1.6 CGI GASOLINA AVANT...</option>'
                    versao.style.fontSize = '17px'
                    
                break    
                case 'GLA 200':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="1.3 GCI GASOLINA AMG LINE 7G-DCT" title="1.3 GCI GASOLINA AMG LINE 7G-DCT">1.3 GCI GASOLINA AMG LINE...</option>'
                    versao.innerHTML += '<option value="1.6 CGI FLEX ENDURO 7G-DCT" title="1.6 CGI FLEX ENDURO 7G-DCT">1.6 CGI FLEX ENDURO 7G-DCT</option>'
                    versao.innerHTML += '<option value="1.6 CGI VISION 16V TURBO GASOLINA 4P AUTOMÁTICO" title="1.6 CGI VISION 16V TURBO GASOLINA 4P AUTOMÁTICO">1.6 CGI VISION 16V TURBO...</option>'
                    versao.innerHTML += '<option value="1.6 CGI VISION BLACK EDITION 16V TURBO GASOLINA 4P AUTOMÁTICO" title="1.6 CGI VISION BLACK EDITION 16V TURBO GASOLINA 4P AUTOMÁTICO">1.6 CGI VISION BLACK EDIT...</option>'
                    versao.style.fontSize = '17px'
                    
                break    
                case 'SLK 200':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="1.8 16V KOMPRESSOR GASOLINA AUTOMÁTICO" title="1.8 16V KOMPRESSOR GASOLINA AUTOMÁTICO">1.8 16V KOMPRESSOR...</option>'
                    versao.innerHTML += '<option value="1.8 CGI GASOLINA 2P AUTOMÁTICO" title="1.8 CGI GASOLINA 2P AUTOMÁTICO">1.8 CGI GASOLINA 2P...</option>'
                    versao.innerHTML += '<option value="1.8 KOMPRESSOR SPORT GASOLINA 2P AUTOMATICO" title="1.8 KOMPRESSOR SPORT GASOLINA 2P AUTOMATICO">1.8 KOMPRESSOR SPORT...</option>'
                    versao.style.fontSize = '17px'
                    
                break
                case 'n':
                    versao.innerHTML = '<option value="n">Selecione a Versão</option>'
                    versao.style.fontSize = '17px'
                break
            }
        break
        case 'Nissan':

            switch (valor_modelo) {
                case 'March':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="1.0 S 16V FLEX 4P MANUAL" title="1.0 S 16V FLEX 4P MANUAL">1.0 S 16V FLEX 4P MANUAL</option>'
                    versao.innerHTML += '<option value="1.6 SL 16V FLEXSTART 4P XTRONIC" title="1.6 SL 16V FLEXSTART 4P XTRONIC">1.6 SL 16V FLEXSTART...</option>'
                    versao.innerHTML += '<option value="1.6 SV 16V FLEX 4P MANUAL" title="1.6 SV 16V FLEX 4P MANUAL">1.6 SV 16V FLEX 4P MANUAL</option>'
                    versao.innerHTML += '<option value="1.0 CONFORTO 16V FLEX 4P MANUAL" title="1.0 CONFORTO 16V FLEX 4P MANUAL">1.0 CONFORTO 16V FLEX 4P...</option>'
                    versao.style.fontSize = '17px'
                    
                break  
                case 'Kicks':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="1.6 16V FLEXSTART EXCLUSIVE XTRONIC" title="1.6 16V FLEXSTART EXCLUSIVE XTRONIC">1.6 16V FLEXSTART EXCLU...</option>'
                    versao.innerHTML += '<option value="1.6 16V FLEXSTART S 4P XTRONIC" title="1.6 16V FLEXSTART S 4P XTRONIC">1.6 16V FLEXSTART S 4P...</option>'
                    versao.innerHTML += '<option value="1.6 16V FLEXSTART SV 4P XTRONIC" title="1.6 16V FLEXSTART SV 4P XTRONIC">1.6 16V FLEXSTART SV 4P...</option>'
                    versao.innerHTML += '<option value="1.6 16V FLEXSTART UEFA CHAMPIONS LEAGUE 4P XTRONIC" title="1.6 16V FLEXSTART UEFA CHAMPIONS LEAGUE 4P XTRONIC">1.6 16V FLEXSTART UEFA...</option>'
                    versao.style.fontSize = '17px'
                    
                break    
                case 'Frontier':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="2.3 16V TURBO DIESEL ATTACK CD 4X2 AUTOMÁTICO" title="2.3 16V TURBO DIESEL ATTACK CD 4X2 AUTOMÁTICO">2.3 16V TURBO DIESEL...</option>'
                    versao.innerHTML += '<option value="2.3 16V TURBO DIESEL PLATINUM CD 4X4 AUTOMÁTICO" title="2.3 16V TURBO DIESEL PLATINUM CD 4X4 AUTOMÁTICO">2.3 16V TURBO DIESEL...</option>'
                    versao.innerHTML += '<option value="2.5 XE 4X2 CD TURBO ELETRONIC DIESEL 4P MANUAL" title="2.5 XE 4X2 CD TURBO ELETRONIC DIESEL 4P MANUAL">2.5 XE 4X2 CD TURBO...</option>'
                    versao.innerHTML += '<option value="2.8 XE ATTACK 4X2 CD TURBO ELETRONIC DIESEL 4P MANUAL" title="2.8 XE ATTACK 4X2 CD TURBO ELETRONIC DIESEL 4P MANUAL">2.8 XE ATTACK 4X2 CD...</option>'
                    versao.style.fontSize = '17px'
                    
                break    
                case 'Versa':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="1.6 16V FLEXSTART V-DRIVE PREMIUM XTRONIC" title="1.6 16V FLEXSTART V-DRIVE PREMIUM XTRONIC">1.6 16V FLEXSTART V-DRIVE...</option>'
                    versao.innerHTML += '<option value="1.6 16V FLEX EXCLUSIVE XTRONIC" title="1.6 16V FLEX EXCLUSIVE XTRONIC">1.6 16V FLEX EXCLUSIVE...</option>'
                    versao.innerHTML += '<option value="1.6 16V FLEXSTART S 4P MANUAL" title="1.6 16V FLEXSTART S 4P MANUAL">1.6 16V FLEXSTART S...</option>'
                    versao.innerHTML += '<option value="1.0 12V FLEX V-DRIVE MANUAL" title="1.0 12V FLEX V-DRIVE MANUAL">1.0 12V FLEX V-DRIVE...</option>'
                    versao.style.fontSize = '17px'
                    
                break    
                case 'Sentra':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="2.0 SV 16V FLEXSTART 4P AUTOMÁTICO" title="2.0 SV 16V FLEXSTART 4P AUTOMÁTICO">2.0 SV 16V FLEXSTART 4P...</option>'
                    versao.innerHTML += '<option value="2.0 SL 16V FLEX 4P AUTOMÁTICO" title="2.0 SL 16V FLEX 4P AUTOMÁTICO">2.0 SL 16V FLEX 4P...</option>'
                    versao.innerHTML += '<option value="2.0 16V GASOLINA 4P MANUAL" title="2.0 16V GASOLINA 4P MANUAL">2.0 16V GASOLINA 4P MANUAL</option>'
                    versao.innerHTML += '<option value="2.0 UNIQUE 16V FLEX 4P AUTOMÁTICO" title="2.0 UNIQUE 16V FLEX 4P AUTOMÁTICO">2.0 UNIQUE 16V FLEX 4P...</option>'
                    versao.style.fontSize = '17px'
                    
                break
                case 'n':
                    versao.innerHTML = '<option value="n">Selecione a Versão</option>'
                    versao.style.fontSize = '17px'
                break
            }
        break
        case 'Renault':

            switch (valor_modelo) {
                case 'Captur':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="1.3 TCE FLEX ICONIC X-TRONIC" title="1.3 TCE FLEX ICONIC X-TRONIC">1.3 TCE FLEX ICONIC...</option>'
                    versao.innerHTML += '<option value="1.3 TCE FLEX ZEN X-TRONIC" title="1.3 TCE FLEX ZEN X-TRONIC">1.3 TCE FLEX ZEN...</option>'
                    versao.innerHTML += '<option value="1.6 16V SCE FLEX LIFE X-TRONIC" title="1.6 16V SCE FLEX LIFE X-TRONIC">1.6 16V SCE FLEX LIFE...</option>'
                    versao.style.fontSize = '17px'

                break  
                case 'Duster':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="1.6 16V SCE FLEX LIFE X-TRONIC" title="1.6 16V SCE FLEX LIFE X-TRONIC">1.6 16V SCE FLEX LIFE...</option>'
                    versao.innerHTML += '<option value="2.0 DYNAMIQUE 4X2 16V FLEX 4P AUTOMÁTICO" title="2.0 DYNAMIQUE 4X2 16V FLEX 4P AUTOMÁTICO">2.0 DYNAMIQUE 4X2 16V...</option>'
                    versao.innerHTML += '<option value="1.6 16V SCE FLEX DYNAMIQUE X-TRONIC" title="1.6 16V SCE FLEX DYNAMIQUE X-TRONIC">1.6 16V SCE FLEX DYNA...</option>'
                    versao.innerHTML += '<option value="2.0 16V HI-FLEX DAKAR II MANUAL" title="2.0 16V HI-FLEX DAKAR II MANUAL">2.0 16V HI-FLEX DAKAR...</option>'
                    versao.style.fontSize = '17px'
                    
                break    
                case 'Sandero':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="1.6 16V SCE FLEX STEPWAY MANUAL" title="1.6 16V SCE FLEX STEPWAY MANUAL">1.6 16V SCE FLEX STEP...</option>'
                    versao.innerHTML += '<option value="1.0 12V SCE FLEX ZEN MANUAL" title="1.0 12V SCE FLEX ZEN MANUAL">1.0 12V SCE FLEX ZEN...</option>'
                    versao.innerHTML += '<option value="1.0 12V SCE FLEX EXPRESSION MANUAL" title="1.0 12V SCE FLEX EXPRESSION MANUAL">1.0 12V SCE FLEX EXPRES...</option>'
                    versao.innerHTML += '<option value="1.6 16V SCE FLEX STEPWAY ICONIC X-TRONIC" title="1.6 16V SCE FLEX STEPWAY ICONIC X-TRONIC">1.6 16V SCE FLEX STEP...</option>'
                    versao.style.fontSize = '17px'
                    
                break    
                case 'Oroch':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="1.3 TCE FLEX OUTSIDER X-TRONIC" title="1.3 TCE FLEX OUTSIDER X-TRONIC">1.3 TCE FLEX OUTSIDER...</option>'
                    versao.innerHTML += '<option value="1.6 16V SCE FLEX INTENSE MANUAL" title="1.6 16V SCE FLEX INTENSE MANUAL">1.6 16V SCE FLEX INTENSE...</option>'
                    versao.innerHTML += '<option value="1.6 16V SCE FLEX PRO MANUAL" title="1.6 16V SCE FLEX PRO MANUAL">1.6 16V SCE FLEX PRO...</option>'
                    versao.style.fontSize = '17px'
                    
                break    
                case 'Fluense':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="1.6 EXPRESSION 16V FLEX 4P MANUAL" title="1.6 EXPRESSION 16V FLEX 4P MANUAL">1.6 EXPRESSION 16V FLEX...</option>'
                    versao.innerHTML += '<option value="2.0 DYNAMIQUE 16V FLEX 4P AUTOMÁTICO" title="2.0 DYNAMIQUE 16V FLEX 4P AUTOMÁTICO">2.0 DYNAMIQUE 16V FLEX...</option>'
                    versao.innerHTML += '<option value="2.0 GT 16V TURBO GASOLINA 4P MANUAL" title="2.0 GT 16V TURBO GASOLINA 4P MANUAL">2.0 GT 16V TURBO GASOLINA...</option>'
                    versao.innerHTML += '<option value="2.0 PRIVILÉGE 16V FLEX 4P AUTOMÁTICO" title="2.0 PRIVILÉGE 16V FLEX 4P AUTOMÁTICO">2.0 PRIVILÉGE 16V FLEX...</option>'
                    versao.style.fontSize = '17px'
                    
                break
                case 'n':
                    versao.innerHTML = '<option value="n">Selecione a Versão</option>'
                    versao.style.fontSize = '17px'
                break
            }
        break
        case 'Toyota':

            switch (valor_modelo) {
                case 'Hilux':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="2.5 4X4 16V TURBO DIESEL 2P MANUAL" title="2.5 4X4 16V TURBO DIESEL 2P MANUAL">2.5 4X4 16V TURBO...</option>'
                    versao.innerHTML += '<option value="2.5 STD 4X2 CD 16V TURBO DIESEL 4P MANUAL" title="2.5 STD 4X2 CD 16V TURBO DIESEL 4P MANUAL">2.5 STD 4X2 CD 16V...</option>'
                    versao.innerHTML += '<option value="3.0 SRV 4X4 CD 7 LUGARES 16V TURBO INTERCOOLER DIESEL 4P AUTOMÁTICO" title="3.0 SRV 4X4 CD 7 LUGARES 16V TURBO INTERCOOLER DIESEL 4P AUTOMÁTICO">3.0 SRV 4X4 CD 7 LUGARES...</option>'
                    versao.innerHTML += '<option value="4.0 V6 SRX 4X4 CD GASOLINA AUTOMÁTICO" title="4.0 V6 SRX 4X4 CD GASOLINA AUTOMÁTICO">4.0 V6 SRX 4X4 CD GASOLINA...</option>'
                    versao.style.fontSize = '17px'
                    
                break  
                case 'SW4':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="2.7 SR 4X2 16V FLEX 4P AUTOMÁTICO" title="2.7 SR 4X2 16V FLEX 4P AUTOMÁTICO">2.7 SR 4X2 16V FLEX...</option>'
                    versao.innerHTML += '<option value="2.8 SRX DIAMOND 4X4 7 LUGARES 16V TURBO INTERCOOLER DIESEL 4P AUTOMÁTICO" title="2.8 SRX DIAMOND 4X4 7 LUGARES 16V TURBO INTERCOOLER DIESEL 4P AUTOMÁTICO">2.8 SRX DIAMOND 4X4...</option>'
                    versao.innerHTML += '<option value="3.0 SRV 4X4 16V TURBO INTERCOOLER DIESEL 4P MANUAL" title="3.0 SRV 4X4 16V TURBO INTERCOOLER DIESEL 4P MANUAL">3.0 SRV 4X4 16V TURBO...</option>'
                    versao.innerHTML += '<option value="4.0 SRX 4X4 7 LUGARES V6 24V GASOLINA 4P AUTOMÁTICO" title="4.0 SRX 4X4 7 LUGARES V6 24V GASOLINA 4P AUTOMÁTICO">4.0 SRX 4X4 7 LUGARES...</option>'
                    versao.style.fontSize = '17px'
                    
                break    
                case 'Corolla':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="1.6 XLI 16V GASOLINA 4P AUTOMÁTICO" title="1.6 XLI 16V GASOLINA 4P AUTOMÁTICO">1.6 XLI 16V GASOLINA...</option>'
                    versao.innerHTML += '<option value="1.8 S 16V GASOLINA 4P MANUAL" title="1.8 S 16V GASOLINA 4P MANUAL">1.8 S 16V GASOLINA...</option>'
                    versao.innerHTML += '<option value="2.0 DYNAMIC 16V FLEX 4P AUTOMÁTICO" title="2.0 DYNAMIC 16V FLEX 4P AUTOMÁTICO">2.0 DYNAMIC 16V FLEX...</option>'
                    versao.innerHTML += '<option value="2.0 XRS 16V FLEX 4P AUTOMÁTICO" title="2.0 XRS 16V FLEX 4P AUTOMÁTICO">2.0 XRS 16V FLEX...</option>'
                    versao.style.fontSize = '17px'
                    
                break    
                case 'Corolla Cross':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="1.8 VVT-I HYBRID FLEX SPECIAL EDITION CVT" title="1.8 VVT-I HYBRID FLEX SPECIAL EDITION CVT">1.8 VVT-I HYBRID FLEX...</option>'
                    versao.innerHTML += '<option value="1.8 VVT-I HYBRID FLEX XRX CVT" title="1.8 VVT-I HYBRID FLEX XRX CVT">1.8 VVT-I HYBRID FLEX...</option>'
                    versao.innerHTML += '<option value="2.0 VVT-IE FLEX GR-SPORT DIRECT SHIFT" title="2.0 VVT-IE FLEX GR-SPORT DIRECT SHIFT">2.0 VVT-IE FLEX GR-SPORT...</option>'
                    versao.style.fontSize = '17px'                    
                break    
                case 'Etios':

                    versao.innerHTML = ''
                    versao.innerHTML += '<option value="n">Selecione a Versão</option>'
                    versao.innerHTML += '<option value="1.3 X 16V FLEX 4P AUTOMÁTICO" title="1.3 X 16V FLEX 4P AUTOMÁTICO">1.3 X 16V FLEX 4P...</option>'
                    versao.innerHTML += '<option value="1.5 PLATINUM SEDAN 16V FLEX 4P MANUAL" title="1.5 PLATINUM SEDAN 16V FLEX 4P MANUAL">1.5 PLATINUM SEDAN 16V...</option>'
                    versao.innerHTML += '<option value="1.5 X STANDARD SEDAN 16V FLEX 4P MANUAL" title="1.5 X STANDARD SEDAN 16V FLEX 4P MANUAL">1.5 X STANDARD SEDAN 16V...</option>'
                    versao.innerHTML += '<option value="1.5 XS SEDAN 16V FLEX 4P AUTOMÁTICO" title="1.5 XS SEDAN 16V FLEX 4P AUTOMÁTICO">1.5 XS SEDAN 16V FLEX...</option>'
                    versao.style.fontSize = '17px'
                    
                break
                case 'n':
                    versao.innerHTML = '<option value="n">Selecione a Versão</option>'
                    versao.style.fontSize = '17px'
                break
            }
        break
    }
})

anoF.addEventListener('change', function() {
    console.log(anoF)
    console.log(anoF.value)
    if (marca.value != 'n' && modelo.value != 'n' && anoM.value >= 1891 && anoM.value <= anoAtual+1 && anoF.value != 'Ano de Fabricação' && versao.value != 'n' && cor.value != 'n' && combustivel.value != 'n' && cambio.value != 'n') {
        botao.innerHTML = '<input type="submit" name="continuar" value="Continuar" class="botao_venda">' //amo minha namorada//
    } else if (marca.value == 'n' || modelo.value == 'n' || anoM.value < 1891 || anoM.value > anoAtual+1 || anoF.value == 'Ano de Fabricação' || versao.value == 'n' || cor.value == 'n' || combustivel.value == 'n' || cambio.value == 'n') {
        botao.innerHTML = '<div class="botao_fake">Continuar</div>'
    } 
})

versao.addEventListener('change', function(){
    console.log(versao.value)
    if (marca.value != 'n' && modelo.value != 'n' && anoM.value >= 1891 && anoM.value <= anoAtual+1 && anoF.value != 'Ano de Fabricação' && versao.value != 'n' && cor.value != 'n' && combustivel.value != 'n' && cambio.value != 'n') {
        botao.innerHTML = '<input type="submit" name="continuar" value="Continuar" class="botao_venda">' //amo minha namorada//
    } else if (marca.value == 'n' || modelo.value == 'n' || anoM.value < 1891 || anoM.value > anoAtual+1 || anoF.value == 'Ano de Fabricação' || versao.value == 'n' || cor.value == 'n' || combustivel.value == 'n' || cambio.value == 'n') {
        botao.innerHTML = '<div class="botao_fake">Continuar</div>'
    }

    if (versao.value != 'n') {
        versao.style.fontSize = '15px'
    } else {
        versao.style.fontSize = '17px'
    }
})

cor.addEventListener('change', function(){
    console.log(cor.value)
    if (marca.value != 'n' && modelo.value != 'n' && anoM.value >= 1891 && anoM.value <= anoAtual+1 && anoF.value != 'Ano de Fabricação' && versao.value != 'n' && cor.value != 'n' && combustivel.value != 'n' && cambio.value != 'n') {
        botao.innerHTML = '<input type="submit" name="continuar" value="Continuar" class="botao_venda">' //amo minha namorada//
    } else if (marca.value == 'n' || modelo.value == 'n' || anoM.value < 1891 || anoM.value > anoAtual+1 || anoF.value == 'Ano de Fabricação' || versao.value == 'n' || cor.value == 'n' || combustivel.value == 'n' || cambio.value == 'n') {
        botao.innerHTML = '<div class="botao_fake">Continuar</div>'
    }
})

combustivel.addEventListener('change', function(){
    console.log(combustivel.value)
    if (marca.value != 'n' && modelo.value != 'n' && anoM.value >= 1891 && anoM.value <= anoAtual+1 && anoF.value != 'Ano de Fabricação' && versao.value != 'n' && cor.value != 'n' && combustivel.value != 'n' && cambio.value != 'n') {
        botao.innerHTML = '<input type="submit" name="continuar" value="Continuar" class="botao_venda">' //amo minha namorada//
    } else if (marca.value == 'n' || modelo.value == 'n' || anoM.value < 1891 || anoM.value > anoAtual+1 || anoF.value == 'Ano de Fabricação' || versao.value == 'n' || cor.value == 'n' || combustivel.value == 'n' || cambio.value == 'n') {
        botao.innerHTML = '<div class="botao_fake">Continuar</div>'
    }
})

cambio.addEventListener('change', function(){
    console.log(cambio.value)
    if (marca.value != 'n' && modelo.value != 'n' && anoM.value >= 1891 && anoM.value <= anoAtual+1 && anoF.value != 'Ano de Fabricação' && versao.value != 'n' && cor.value != 'n' && combustivel.value != 'n' && cambio.value != 'n') {
        botao.innerHTML = '<input type="submit" name="continuar" value="Continuar" class="botao_venda">' //amo minha namorada//
    } else if (marca.value == 'n' || modelo.value == 'n' || anoM.value < 1891 || anoM.value > anoAtual+1 || anoF.value == 'Ano de Fabricação' || versao.value == 'n' || cor.value == 'n' || combustivel.value == 'n' || cambio.value == 'n') {
        botao.innerHTML = '<div class="botao_fake">Continuar</div>'
    }
})