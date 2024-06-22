const cep = document.querySelector('#cep')
const estado = document.querySelector('#estado')
const cidade = document.querySelector('#cidade')
const bairro = document.querySelector('#bairro')
const rua = document.querySelector('#rua')
const num = document.querySelector('#num')
const complemento = document.querySelector('#complemento')
const botao = document.querySelector('.botao')
const conteudo = document.querySelector('.conteudo_end')
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

cep.addEventListener('keyup', function(e){
    let tam = cep.value.length
    
    if (tam == 9) {
        get_endereco()
    } else {
        estado.value = ''
        cidade.value = ''
        bairro.value = ''
        rua.value = ''
    }
})

cep.addEventListener('keypress', function(e){
    const keyCode = (e.keyCode ? e.keyCode : e.wich)

    if (keyCode < 48 || keyCode > 57){
        e.preventDefault()
    }
})

function get_endereco() {

    estado.value = ''
    cidade.value = ''
    bairro.value = ''
    rua.value = ''

    var cepValue = cep.value
    cepValue = cepValue.replace("-", "")
    console.log(cepValue)

    let url = 'http://viacep.com.br/ws/' + cepValue + '/json/'
    
    fetch(url)
    .then(response => response.json())
    .then(json => {
        
        if (json.uf) {
            estado.value = json.uf
            cidade.value = json.localidade
            bairro.value = json.bairro
            rua.value = json.logradouro
        } else {
            setTimeout(function() {
                window.location.href = "endereco2.php"
            }, 500);
        }

    })
}

cep.addEventListener('keyup', () => {
    if(cep.value != '' && estado.value != '' && cidade.value != '' && bairro.value != '' && rua.value != '' && num.value != '') {
        console.log(cep.value)
        console.log(estado.value)
        console.log(cidade.value)
        console.log(bairro.value)
        console.log(rua.value)
        console.log(num.value)
        console.log(complemento.value)
        botao.innerHTML = '<input type="submit" name="cadastrar" value="Cadastrar" class="botao_end">'
    } else {
        botao.innerHTML = '<div class="botao_fake">Cadastrar</div>'
    }
})

estado.addEventListener('keyup', () => {
    if(cep.value != '' && estado.value != '' && cidade.value != '' && bairro.value != '' && rua.value != '' && num.value != '') {
        console.log(cep.value)
        console.log(estado.value)
        console.log(cidade.value)
        console.log(bairro.value)
        console.log(rua.value)
        console.log(num.value)
        console.log(complemento.value)
        botao.innerHTML = '<input type="submit" name="cadastrar" value="Cadastrar" class="botao_end">'
    } else {
        botao.innerHTML = '<div class="botao_fake">Cadastrar</div>'
    }
})

cidade.addEventListener('keyup', () => {
    if(cep.value != '' && estado.value != '' && cidade.value != '' && bairro.value != '' && rua.value != '' && num.value != '') {
        console.log(cep.value)
        console.log(estado.value)
        console.log(cidade.value)
        console.log(bairro.value)
        console.log(rua.value)
        console.log(num.value)
        console.log(complemento.value)
        botao.innerHTML = '<input type="submit" name="cadastrar" value="Cadastrar" class="botao_end">'
    } else {
        botao.innerHTML = '<div class="botao_fake">Cadastrar</div>'
    }
})

bairro.addEventListener('keyup', () => {
    if(cep.value != '' && estado.value != '' && cidade.value != '' && bairro.value != '' && rua.value != '' && num.value != '') {
        console.log(cep.value)
        console.log(estado.value)
        console.log(cidade.value)
        console.log(bairro.value)
        console.log(rua.value)
        console.log(num.value)
        console.log(complemento.value)
        botao.innerHTML = '<input type="submit" name="cadastrar" value="Cadastrar" class="botao_end">'
    } else {
        botao.innerHTML = '<div class="botao_fake">Cadastrar</div>'
    }
})

rua.addEventListener('keyup', () => {
    if(cep.value != '' && estado.value != '' && cidade.value != '' && bairro.value != '' && rua.value != '' && num.value != '') {
        console.log(cep.value)
        console.log(estado.value)
        console.log(cidade.value)
        console.log(bairro.value)
        console.log(rua.value)
        console.log(num.value)
        console.log(complemento.value)
        botao.innerHTML = '<input type="submit" name="cadastrar" value="Cadastrar" class="botao_end">'
    } else {
        botao.innerHTML = '<div class="botao_fake">Cadastrar</div>'
    }
})

num.addEventListener('keyup', () => {
    if(cep.value != '' && estado.value != '' && cidade.value != '' && bairro.value != '' && rua.value != '' && num.value != '') {
        console.log(cep.value)
        console.log(estado.value)
        console.log(cidade.value)
        console.log(bairro.value)
        console.log(rua.value)
        console.log(num.value)
        console.log(complemento.value)
        botao.innerHTML = '<input type="submit" name="cadastrar" value="Cadastrar" class="botao_end">'
    } else {
        botao.innerHTML = '<div class="botao_fake">Cadastrar</div>'
    }
})

complemento.addEventListener('keyup', () => {
    if(cep.value != '' && estado.value != '' && cidade.value != '' && bairro.value != '' && rua.value != '' && num.value != '') {
        console.log(cep.value)
        console.log(estado.value)
        console.log(cidade.value)
        console.log(bairro.value)
        console.log(rua.value)
        console.log(num.value)
        console.log(complemento.value)
        botao.innerHTML = '<input type="submit" name="cadastrar" value="Cadastrar" class="botao_end">'
    } else {
        botao.innerHTML = '<div class="botao_fake">Cadastrar</div>'
    }
})