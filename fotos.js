const botao = document.querySelector('.botao')
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

var extensoesPermitidas = /(.jpg|.jpeg|.png)$/i;

const inputTraseira = document.querySelector('#traseira')
const esq_traseira = document.querySelector('#esq_traseira')
const arq_traseira = document.querySelector('#arq_traseira')
const dir_traseira = document.querySelector('#dir_traseira')
inputTraseira.addEventListener('change', () => {
    fotoTraseira = inputTraseira.value
    fotoTraseira = fotoTraseira.replace('C:', '')
    fotoTraseira = fotoTraseira.replaceAll('\\', '')
    fotoTraseira = fotoTraseira.replace('fakepath', '')
    esq_traseira.style.height = '35px'
    arq_traseira.innerHTML = fotoTraseira
    dir_traseira.style.height = '35px'

    console.log(inputTraseira.value.split('.').pop());

    if(!extensoesPermitidas.exec(inputTraseira.value)){
        arq_traseira.innerHTML = '<p class="erro">Formato Inválido</p>'
        botao.innerHTML = '<div class="botao_fake">Continuar</div>'
    } else if(inputTraseira.files[0].size > 3145728) {
        arq_traseira.innerHTML = '<p class="erro">Tamanho Inválido</p>'
        botao.innerHTML = '<div class="botao_fake">Continuar</div>'
    } else if(inputTraseira == '') {
        botao.innerHTML = '<div class="botao_fake">Continuar</div>'
    } else if((inputTraseira.value != '' && (inputTraseira.value.split('.').pop() == 'png' || inputTraseira.value.split('.').pop() == 'jpg' || inputTraseira.value.split('.').pop() == 'jpeg') && (inputTraseira.files[0].size <= 3145728)) && (inputFrontal.value != '' && (inputFrontal.value.split('.').pop() == 'png' || inputFrontal.value.split('.').pop() == 'jpg' || inputFrontal.value.split('.').pop() == 'jpeg') && (inputFrontal.files[0].size <= 3145728)) && (inputLatEsq.value != '' && (inputLatEsq.value.split('.').pop() == 'png' || inputLatEsq.value.split('.').pop() == 'jpg' || inputLatEsq.value.split('.').pop() == 'jpeg') && (inputLatEsq.files[0].size <= 3145728)) && (inputLatDir.value != '' && (inputLatDir.value.split('.').pop() == 'png' || inputLatDir.value.split('.').pop() == 'jpg' || inputLatDir.value.split('.').pop() == 'jpeg') && (inputLatDir.files[0].size <= 3145728)) && (inputMotor.value != '' && (inputMotor.value.split('.').pop() == 'png' || inputMotor.value.split('.').pop() == 'jpg' || inputMotor.value.split('.').pop() == 'jpeg') && (inputMotor.files[0].size <= 3145728)) && (inputPortamalas.value != '' && (inputPortamalas.value.split('.').pop() == 'png' || inputPortamalas.value.split('.').pop() == 'jpg' || inputPortamalas.value.split('.').pop() == 'jpeg') && (inputPortamalas.files[0].size <= 3145728)) && (inputPainel.value != '' && (inputPainel.value.split('.').pop() == 'png' || inputPainel.value.split('.').pop() == 'jpg' || inputPainel.value.split('.').pop() == 'jpeg') && (inputPainel.files[0].size <= 3145728)) && (inputInterior.value != '' && (inputInterior.value.split('.').pop() == 'png' || inputInterior.value.split('.').pop() == 'jpg' || inputInterior.value.split('.').pop() == 'jpeg') && (inputInterior.files[0].size <= 3145728))) {
        botao.innerHTML = '<input type="submit" name="continuar" value="Continuar" class="botao_fotos">'
    }
})

const inputFrontal = document.querySelector('#frontal')
const esq_frontal = document.querySelector('#esq_frontal')
const arq_frontal = document.querySelector('#arq_frontal')
const dir_frontal = document.querySelector('#dir_frontal')
inputFrontal.addEventListener('change', () => {
    fotoFrontal = inputFrontal.value
    fotoFrontal = fotoFrontal.replace('C:', '')
    fotoFrontal = fotoFrontal.replaceAll('\\', '')
    fotoFrontal = fotoFrontal.replace('fakepath', '')
    esq_frontal.style.height = '35px'
    arq_frontal.innerHTML = fotoFrontal
    dir_frontal.style.height = '35px'

    console.log(inputFrontal.value.split('.').pop());

    if(!extensoesPermitidas.exec(inputFrontal.value)){
        arq_frontal.innerHTML = '<p class="erro">Formato Inválido</p>'
        botao.innerHTML = '<div class="botao_fake">Continuar</div>'
    } else if(inputFrontal.files[0].size > 3145728) {
        arq_frontal.innerHTML = '<p class="erro">Tamanho Inválido</p>'
        botao.innerHTML = '<div class="botao_fake">Continuar</div>'
    } else if(inputFrontal == '') {
        botao.innerHTML = '<div class="botao_fake">Continuar</div>'
    } else if((inputTraseira.value != '' && (inputTraseira.value.split('.').pop() == 'png' || inputTraseira.value.split('.').pop() == 'jpg' || inputTraseira.value.split('.').pop() == 'jpeg') && (inputTraseira.files[0].size <= 3145728)) && (inputFrontal.value != '' && (inputFrontal.value.split('.').pop() == 'png' || inputFrontal.value.split('.').pop() == 'jpg' || inputFrontal.value.split('.').pop() == 'jpeg') && (inputFrontal.files[0].size <= 3145728)) && (inputLatEsq.value != '' && (inputLatEsq.value.split('.').pop() == 'png' || inputLatEsq.value.split('.').pop() == 'jpg' || inputLatEsq.value.split('.').pop() == 'jpeg') && (inputLatEsq.files[0].size <= 3145728)) && (inputLatDir.value != '' && (inputLatDir.value.split('.').pop() == 'png' || inputLatDir.value.split('.').pop() == 'jpg' || inputLatDir.value.split('.').pop() == 'jpeg') && (inputLatDir.files[0].size <= 3145728)) && (inputMotor.value != '' && (inputMotor.value.split('.').pop() == 'png' || inputMotor.value.split('.').pop() == 'jpg' || inputMotor.value.split('.').pop() == 'jpeg') && (inputMotor.files[0].size <= 3145728)) && (inputPortamalas.value != '' && (inputPortamalas.value.split('.').pop() == 'png' || inputPortamalas.value.split('.').pop() == 'jpg' || inputPortamalas.value.split('.').pop() == 'jpeg') && (inputPortamalas.files[0].size <= 3145728)) && (inputPainel.value != '' && (inputPainel.value.split('.').pop() == 'png' || inputPainel.value.split('.').pop() == 'jpg' || inputPainel.value.split('.').pop() == 'jpeg') && (inputPainel.files[0].size <= 3145728)) && (inputInterior.value != '' && (inputInterior.value.split('.').pop() == 'png' || inputInterior.value.split('.').pop() == 'jpg' || inputInterior.value.split('.').pop() == 'jpeg') && (inputInterior.files[0].size <= 3145728))) {
        botao.innerHTML = '<input type="submit" name="continuar" value="Continuar" class="botao_fotos">'
    }
})

const inputLatEsq = document.querySelector('#lat_esq')
const esq_lat_esq = document.querySelector('#esq_lat_esq')
const arq_lat_esq = document.querySelector('#arq_lat_esq')
const dir_lat_esq = document.querySelector('#dir_lat_esq')
inputLatEsq.addEventListener('change', () => {
    fotoLatEsq = inputLatEsq.value
    fotoLatEsq = fotoLatEsq.replace('C:', '')
    fotoLatEsq = fotoLatEsq.replaceAll('\\', '')
    fotoLatEsq = fotoLatEsq.replace('fakepath', '')
    esq_lat_esq.style.height = '35px'
    arq_lat_esq.innerHTML = fotoLatEsq
    dir_lat_esq.style.height = '35px'

    console.log(inputLatEsq.value.split('.').pop());

    if(!extensoesPermitidas.exec(inputLatEsq.value)){
        arq_lat_esq.innerHTML = '<p class="erro">Formato Inválido</p>'
        botao.innerHTML = '<div class="botao_fake">Continuar</div>'
    } else if(inputLatEsq.files[0].size > 3145728) {
        arq_lat_esq.innerHTML = '<p class="erro">Tamanho Inválido</p>'
        botao.innerHTML = '<div class="botao_fake">Continuar</div>'
    } else if(inputLatEsq == '') {
        botao.innerHTML = '<div class="botao_fake">Continuar</div>'
    } else if((inputTraseira.value != '' && (inputTraseira.value.split('.').pop() == 'png' || inputTraseira.value.split('.').pop() == 'jpg' || inputTraseira.value.split('.').pop() == 'jpeg') && (inputTraseira.files[0].size <= 3145728)) && (inputFrontal.value != '' && (inputFrontal.value.split('.').pop() == 'png' || inputFrontal.value.split('.').pop() == 'jpg' || inputFrontal.value.split('.').pop() == 'jpeg') && (inputFrontal.files[0].size <= 3145728)) && (inputLatEsq.value != '' && (inputLatEsq.value.split('.').pop() == 'png' || inputLatEsq.value.split('.').pop() == 'jpg' || inputLatEsq.value.split('.').pop() == 'jpeg') && (inputLatEsq.files[0].size <= 3145728)) && (inputLatDir.value != '' && (inputLatDir.value.split('.').pop() == 'png' || inputLatDir.value.split('.').pop() == 'jpg' || inputLatDir.value.split('.').pop() == 'jpeg') && (inputLatDir.files[0].size <= 3145728)) && (inputMotor.value != '' && (inputMotor.value.split('.').pop() == 'png' || inputMotor.value.split('.').pop() == 'jpg' || inputMotor.value.split('.').pop() == 'jpeg') && (inputMotor.files[0].size <= 3145728)) && (inputPortamalas.value != '' && (inputPortamalas.value.split('.').pop() == 'png' || inputPortamalas.value.split('.').pop() == 'jpg' || inputPortamalas.value.split('.').pop() == 'jpeg') && (inputPortamalas.files[0].size <= 3145728)) && (inputPainel.value != '' && (inputPainel.value.split('.').pop() == 'png' || inputPainel.value.split('.').pop() == 'jpg' || inputPainel.value.split('.').pop() == 'jpeg') && (inputPainel.files[0].size <= 3145728)) && (inputInterior.value != '' && (inputInterior.value.split('.').pop() == 'png' || inputInterior.value.split('.').pop() == 'jpg' || inputInterior.value.split('.').pop() == 'jpeg') && (inputInterior.files[0].size <= 3145728))) {
        botao.innerHTML = '<input type="submit" name="continuar" value="Continuar" class="botao_fotos">'
    }
})

const inputLatDir = document.querySelector('#lat_dir')
const esq_lat_dir = document.querySelector('#esq_lat_dir')
const arq_lat_dir = document.querySelector('#arq_lat_dir')
const dir_lat_dir = document.querySelector('#dir_lat_dir')
inputLatDir.addEventListener('change', () => {
    fotoLatDir = inputLatDir.value
    fotoLatDir = fotoLatDir.replace('C:', '')
    fotoLatDir = fotoLatDir.replaceAll('\\', '')
    fotoLatDir = fotoLatDir.replace('fakepath', '')
    esq_lat_dir.style.height = '35px'
    arq_lat_dir.innerHTML = fotoLatDir
    dir_lat_dir.style.height = '35px'

    console.log(inputLatDir.value.split('.').pop());

    if(!extensoesPermitidas.exec(inputLatDir.value)){
        arq_lat_dir.innerHTML = '<p class="erro">Formato Inválido</p>'
        botao.innerHTML = '<div class="botao_fake">Continuar</div>'
    } else if(inputLatDir.files[0].size > 3145728) {
        arq_lat_dir.innerHTML = '<p class="erro">Tamanho Inválido</p>'
        botao.innerHTML = '<div class="botao_fake">Continuar</div>'
    } else if(inputLatDir == '') {
        botao.innerHTML = '<div class="botao_fake">Continuar</div>'
    } else if((inputTraseira.value != '' && (inputTraseira.value.split('.').pop() == 'png' || inputTraseira.value.split('.').pop() == 'jpg' || inputTraseira.value.split('.').pop() == 'jpeg') && (inputTraseira.files[0].size <= 3145728)) && (inputFrontal.value != '' && (inputFrontal.value.split('.').pop() == 'png' || inputFrontal.value.split('.').pop() == 'jpg' || inputFrontal.value.split('.').pop() == 'jpeg') && (inputFrontal.files[0].size <= 3145728)) && (inputLatEsq.value != '' && (inputLatEsq.value.split('.').pop() == 'png' || inputLatEsq.value.split('.').pop() == 'jpg' || inputLatEsq.value.split('.').pop() == 'jpeg') && (inputLatEsq.files[0].size <= 3145728)) && (inputLatDir.value != '' && (inputLatDir.value.split('.').pop() == 'png' || inputLatDir.value.split('.').pop() == 'jpg' || inputLatDir.value.split('.').pop() == 'jpeg') && (inputLatDir.files[0].size <= 3145728)) && (inputMotor.value != '' && (inputMotor.value.split('.').pop() == 'png' || inputMotor.value.split('.').pop() == 'jpg' || inputMotor.value.split('.').pop() == 'jpeg') && (inputMotor.files[0].size <= 3145728)) && (inputPortamalas.value != '' && (inputPortamalas.value.split('.').pop() == 'png' || inputPortamalas.value.split('.').pop() == 'jpg' || inputPortamalas.value.split('.').pop() == 'jpeg') && (inputPortamalas.files[0].size <= 3145728)) && (inputPainel.value != '' && (inputPainel.value.split('.').pop() == 'png' || inputPainel.value.split('.').pop() == 'jpg' || inputPainel.value.split('.').pop() == 'jpeg') && (inputPainel.files[0].size <= 3145728)) && (inputInterior.value != '' && (inputInterior.value.split('.').pop() == 'png' || inputInterior.value.split('.').pop() == 'jpg' || inputInterior.value.split('.').pop() == 'jpeg') && (inputInterior.files[0].size <= 3145728))) {
        botao.innerHTML = '<input type="submit" name="continuar" value="Continuar" class="botao_fotos">'
    }
})

const inputMotor = document.querySelector('#motor')
const esq_motor = document.querySelector('#esq_motor')
const arq_motor = document.querySelector('#arq_motor')
const dir_motor = document.querySelector('#dir_motor')
inputMotor.addEventListener('change', () => {
    fotoMotor = inputMotor.value
    fotoMotor = fotoMotor.replace('C:', '')
    fotoMotor = fotoMotor.replaceAll('\\', '')
    fotoMotor = fotoMotor.replace('fakepath', '')
    esq_motor.style.height = '35px'
    arq_motor.innerHTML = fotoMotor
    dir_motor.style.height = '35px'

    console.log(inputMotor.value.split('.').pop());

    if(!extensoesPermitidas.exec(inputMotor.value)){
        arq_motor.innerHTML = '<p class="erro">Formato Inválido</p>'
        botao.innerHTML = '<div class="botao_fake">Continuar</div>'
    } else if(inputMotor.files[0].size > 3145728) {
        arq_motor.innerHTML = '<p class="erro">Tamanho Inválido</p>'
        botao.innerHTML = '<div class="botao_fake">Continuar</div>'
    } else if(inputMotor == '') {
        botao.innerHTML = '<div class="botao_fake">Continuar</div>'
    } else if((inputTraseira.value != '' && (inputTraseira.value.split('.').pop() == 'png' || inputTraseira.value.split('.').pop() == 'jpg' || inputTraseira.value.split('.').pop() == 'jpeg') && (inputTraseira.files[0].size <= 3145728)) && (inputFrontal.value != '' && (inputFrontal.value.split('.').pop() == 'png' || inputFrontal.value.split('.').pop() == 'jpg' || inputFrontal.value.split('.').pop() == 'jpeg') && (inputFrontal.files[0].size <= 3145728)) && (inputLatEsq.value != '' && (inputLatEsq.value.split('.').pop() == 'png' || inputLatEsq.value.split('.').pop() == 'jpg' || inputLatEsq.value.split('.').pop() == 'jpeg') && (inputLatEsq.files[0].size <= 3145728)) && (inputLatDir.value != '' && (inputLatDir.value.split('.').pop() == 'png' || inputLatDir.value.split('.').pop() == 'jpg' || inputLatDir.value.split('.').pop() == 'jpeg') && (inputLatDir.files[0].size <= 3145728)) && (inputMotor.value != '' && (inputMotor.value.split('.').pop() == 'png' || inputMotor.value.split('.').pop() == 'jpg' || inputMotor.value.split('.').pop() == 'jpeg') && (inputMotor.files[0].size <= 3145728)) && (inputPortamalas.value != '' && (inputPortamalas.value.split('.').pop() == 'png' || inputPortamalas.value.split('.').pop() == 'jpg' || inputPortamalas.value.split('.').pop() == 'jpeg') && (inputPortamalas.files[0].size <= 3145728)) && (inputPainel.value != '' && (inputPainel.value.split('.').pop() == 'png' || inputPainel.value.split('.').pop() == 'jpg' || inputPainel.value.split('.').pop() == 'jpeg') && (inputPainel.files[0].size <= 3145728)) && (inputInterior.value != '' && (inputInterior.value.split('.').pop() == 'png' || inputInterior.value.split('.').pop() == 'jpg' || inputInterior.value.split('.').pop() == 'jpeg') && (inputInterior.files[0].size <= 3145728))) {
        botao.innerHTML = '<input type="submit" name="continuar" value="Continuar" class="botao_fotos">'
    }
})

const inputPortamalas = document.querySelector('#portamalas')
const esq_portamalas = document.querySelector('#esq_portamalas')
const arq_portamalas = document.querySelector('#arq_portamalas')
const dir_portamalas = document.querySelector('#dir_portamalas')
inputPortamalas.addEventListener('change', () => {
    fotoPortamalas = inputPortamalas.value
    fotoPortamalas = fotoPortamalas.replace('C:', '')
    fotoPortamalas = fotoPortamalas.replaceAll('\\', '')
    fotoPortamalas = fotoPortamalas.replace('fakepath', '')
    esq_portamalas.style.height = '35px'
    arq_portamalas.innerHTML = fotoPortamalas
    dir_portamalas.style.height = '35px'

    console.log(inputPortamalas.value.split('.').pop());
    console.log(inputPortamalas.files[0].size)

    if(!extensoesPermitidas.exec(inputPortamalas.value)){
        arq_portamalas.innerHTML = '<p class="erro">Formato Inválido</p>'
        botao.innerHTML = '<div class="botao_fake">Continuar</div>'
    } else if(inputPortamalas.files[0].size > 3145728) {
        arq_portamalas.innerHTML = '<p class="erro">Tamanho Inválido</p>'
        botao.innerHTML = '<div class="botao_fake">Continuar</div>'
    } else if(inputPortamalas == '') {
        botao.innerHTML = '<div class="botao_fake">Continuar</div>'
    } else if((inputTraseira.value != '' && (inputTraseira.value.split('.').pop() == 'png' || inputTraseira.value.split('.').pop() == 'jpg' || inputTraseira.value.split('.').pop() == 'jpeg') && (inputTraseira.files[0].size <= 3145728)) && (inputFrontal.value != '' && (inputFrontal.value.split('.').pop() == 'png' || inputFrontal.value.split('.').pop() == 'jpg' || inputFrontal.value.split('.').pop() == 'jpeg') && (inputFrontal.files[0].size <= 3145728)) && (inputLatEsq.value != '' && (inputLatEsq.value.split('.').pop() == 'png' || inputLatEsq.value.split('.').pop() == 'jpg' || inputLatEsq.value.split('.').pop() == 'jpeg') && (inputLatEsq.files[0].size <= 3145728)) && (inputLatDir.value != '' && (inputLatDir.value.split('.').pop() == 'png' || inputLatDir.value.split('.').pop() == 'jpg' || inputLatDir.value.split('.').pop() == 'jpeg') && (inputLatDir.files[0].size <= 3145728)) && (inputMotor.value != '' && (inputMotor.value.split('.').pop() == 'png' || inputMotor.value.split('.').pop() == 'jpg' || inputMotor.value.split('.').pop() == 'jpeg') && (inputMotor.files[0].size <= 3145728)) && (inputPortamalas.value != '' && (inputPortamalas.value.split('.').pop() == 'png' || inputPortamalas.value.split('.').pop() == 'jpg' || inputPortamalas.value.split('.').pop() == 'jpeg') && (inputPortamalas.files[0].size <= 3145728)) && (inputPainel.value != '' && (inputPainel.value.split('.').pop() == 'png' || inputPainel.value.split('.').pop() == 'jpg' || inputPainel.value.split('.').pop() == 'jpeg') && (inputPainel.files[0].size <= 3145728)) && (inputInterior.value != '' && (inputInterior.value.split('.').pop() == 'png' || inputInterior.value.split('.').pop() == 'jpg' || inputInterior.value.split('.').pop() == 'jpeg') && (inputInterior.files[0].size <= 3145728))) {
        botao.innerHTML = '<input type="submit" name="continuar" value="Continuar" class="botao_fotos">'
    }
})

const inputPainel = document.querySelector('#painel')
const esq_painel = document.querySelector('#esq_painel')
const arq_painel = document.querySelector('#arq_painel')
const dir_painel = document.querySelector('#dir_painel')
inputPainel.addEventListener('change', () => {
    fotoPainel = inputPainel.value
    fotoPainel = fotoPainel.replace('C:', '')
    fotoPainel = fotoPainel.replaceAll('\\', '')
    fotoPainel = fotoPainel.replace('fakepath', '')
    esq_painel.style.height = '35px'
    arq_painel.innerHTML = fotoPainel
    dir_painel.style.height = '35px'

    console.log(inputPainel.value.split('.').pop());

    if(!extensoesPermitidas.exec(inputPainel.value)){
        arq_painel.innerHTML = '<p class="erro">Formato Inválido</p>'
        botao.innerHTML = '<div class="botao_fake">Continuar</div>'
    } else if(inputPainel.files[0].size > 3145728) {
        arq_painel.innerHTML = '<p class="erro">Tamanho Inválido</p>'
        botao.innerHTML = '<div class="botao_fake">Continuar</div>'
    } else if(inputPainel == '') {
        botao.innerHTML = '<div class="botao_fake">Continuar</div>'
    } else if((inputTraseira.value != '' && (inputTraseira.value.split('.').pop() == 'png' || inputTraseira.value.split('.').pop() == 'jpg' || inputTraseira.value.split('.').pop() == 'jpeg') && (inputTraseira.files[0].size <= 3145728)) && (inputFrontal.value != '' && (inputFrontal.value.split('.').pop() == 'png' || inputFrontal.value.split('.').pop() == 'jpg' || inputFrontal.value.split('.').pop() == 'jpeg') && (inputFrontal.files[0].size <= 3145728)) && (inputLatEsq.value != '' && (inputLatEsq.value.split('.').pop() == 'png' || inputLatEsq.value.split('.').pop() == 'jpg' || inputLatEsq.value.split('.').pop() == 'jpeg') && (inputLatEsq.files[0].size <= 3145728)) && (inputLatDir.value != '' && (inputLatDir.value.split('.').pop() == 'png' || inputLatDir.value.split('.').pop() == 'jpg' || inputLatDir.value.split('.').pop() == 'jpeg') && (inputLatDir.files[0].size <= 3145728)) && (inputMotor.value != '' && (inputMotor.value.split('.').pop() == 'png' || inputMotor.value.split('.').pop() == 'jpg' || inputMotor.value.split('.').pop() == 'jpeg') && (inputMotor.files[0].size <= 3145728)) && (inputPortamalas.value != '' && (inputPortamalas.value.split('.').pop() == 'png' || inputPortamalas.value.split('.').pop() == 'jpg' || inputPortamalas.value.split('.').pop() == 'jpeg') && (inputPortamalas.files[0].size <= 3145728)) && (inputPainel.value != '' && (inputPainel.value.split('.').pop() == 'png' || inputPainel.value.split('.').pop() == 'jpg' || inputPainel.value.split('.').pop() == 'jpeg') && (inputPainel.files[0].size <= 3145728)) && (inputInterior.value != '' && (inputInterior.value.split('.').pop() == 'png' || inputInterior.value.split('.').pop() == 'jpg' || inputInterior.value.split('.').pop() == 'jpeg') && (inputInterior.files[0].size <= 3145728))) {
        botao.innerHTML = '<input type="submit" name="continuar" value="Continuar" class="botao_fotos">'
    }
})

const inputInterior = document.querySelector('#interior')
const esq_interior = document.querySelector('#esq_interior')
const arq_interior = document.querySelector('#arq_interior')
const dir_interior = document.querySelector('#dir_interior')
inputInterior.addEventListener('change', () => {
    fotoInterior = inputInterior.value
    fotoInterior = fotoInterior.replace('C:', '')
    fotoInterior = fotoInterior.replaceAll('\\', '')
    fotoInterior = fotoInterior.replace('fakepath', '')
    esq_interior.style.height = '35px'
    arq_interior.innerHTML = fotoInterior
    dir_interior.style.height = '35px'

    console.log(inputInterior.value.split('.').pop());

    if(!extensoesPermitidas.exec(inputMotor.value)){
        arq_motor.innerHTML = '<p class="erro">Formato Inválido</p>'
        botao.innerHTML = '<div class="botao_fake">Continuar</div>'
    } else if(inputMotor.files[0].size > 3145728) {
        arq_motor.innerHTML = '<p class="erro">Tamanho Inválido</p>'
        botao.innerHTML = '<div class="botao_fake">Continuar</div>'
    } else if(inputMotor == '') {
        botao.innerHTML = '<div class="botao_fake">Continuar</div>'
    } else if((inputTraseira.value != '' && (inputTraseira.value.split('.').pop() == 'png' || inputTraseira.value.split('.').pop() == 'jpg' || inputTraseira.value.split('.').pop() == 'jpeg') && (inputTraseira.files[0].size <= 3145728)) && (inputFrontal.value != '' && (inputFrontal.value.split('.').pop() == 'png' || inputFrontal.value.split('.').pop() == 'jpg' || inputFrontal.value.split('.').pop() == 'jpeg') && (inputFrontal.files[0].size <= 3145728)) && (inputLatEsq.value != '' && (inputLatEsq.value.split('.').pop() == 'png' || inputLatEsq.value.split('.').pop() == 'jpg' || inputLatEsq.value.split('.').pop() == 'jpeg') && (inputLatEsq.files[0].size <= 3145728)) && (inputLatDir.value != '' && (inputLatDir.value.split('.').pop() == 'png' || inputLatDir.value.split('.').pop() == 'jpg' || inputLatDir.value.split('.').pop() == 'jpeg') && (inputLatDir.files[0].size <= 3145728)) && (inputMotor.value != '' && (inputMotor.value.split('.').pop() == 'png' || inputMotor.value.split('.').pop() == 'jpg' || inputMotor.value.split('.').pop() == 'jpeg') && (inputMotor.files[0].size <= 3145728)) && (inputPortamalas.value != '' && (inputPortamalas.value.split('.').pop() == 'png' || inputPortamalas.value.split('.').pop() == 'jpg' || inputPortamalas.value.split('.').pop() == 'jpeg') && (inputPortamalas.files[0].size <= 3145728)) && (inputPainel.value != '' && (inputPainel.value.split('.').pop() == 'png' || inputPainel.value.split('.').pop() == 'jpg' || inputPainel.value.split('.').pop() == 'jpeg') && (inputPainel.files[0].size <= 3145728)) && (inputInterior.value != '' && (inputInterior.value.split('.').pop() == 'png' || inputInterior.value.split('.').pop() == 'jpg' || inputInterior.value.split('.').pop() == 'jpeg') && (inputInterior.files[0].size <= 3145728))) {
        botao.innerHTML = '<input type="submit" name="continuar" value="Continuar" class="botao_fotos">'
    }
})