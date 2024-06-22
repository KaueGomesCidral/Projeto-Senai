const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
const img_senha = document.querySelector('.ver_ocultar')
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

function ver() {
    senha.type = 'text'
    img_senha.style.backgroundImage = "url(img/ver2.png)"
}

function ocultar() {
    senha.type = 'password'
    img_senha.style.backgroundImage = "url(img/ocultar2.png)"
}

function ValidarEmail (email) {
    var emailPattern =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email); 
}

email.addEventListener('keyup', () => {
    resultado = ValidarEmail(email.value)

    if(resultado == true && senha.value.length >= 8 && senha.value.length <= 16) {
        botao.innerHTML = '<input type="submit" name="entrar" value="Entrar" class="botao_log">'
    } else {
        botao.innerHTML = '<div class="botao_fake">Entrar</div>'
    }
})

senha.addEventListener('keyup', () => {
    resultado = ValidarEmail(email.value)

    if(resultado == true && senha.value.length >= 8 && senha.value.length <= 16) {
        botao.innerHTML = '<input type="submit" name="entrar" value="Entrar" class="botao_log">'
    } else {
        botao.innerHTML = '<div class="botao_fake">Entrar</div>'
    }
})