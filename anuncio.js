const cep = document.querySelector('#cep')
const deAno = document.querySelector('#deAno')
const ateAno = document.querySelector('#ateAno')
const dePreco = document.querySelector('#dePreco')
const atePreco = document.querySelector('#atePreco')
const deKm = document.querySelector('#deKm')
const ateKm = document.querySelector('#ateKm')
const limpar = document.querySelector('#limpar')
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

limpar.addEventListener('click', () => {

    cep.value = ''
    deAno.value = ''
    ateAno.value = ''
    dePreco.value = ''
    atePreco.value = ''
    deKm.value = ''
    ateKm.value = ''

})

cep.addEventListener('keyup', function(e){
    let tam = cep.value.length
    console.log(tam)

    if (tam == 9) {
        get_endereco()
    }
})

cep.addEventListener('keypress', function(e){
    const keyCode = (e.keyCode ? e.keyCode : e.wich)

    if (keyCode < 48 || keyCode > 57){
        e.preventDefault()
    }
})

deAno.addEventListener('keypress', function(e){
    const keyCode = (e.keyCode ? e.keyCode : e.wich)

    if (keyCode < 48 || keyCode > 57){
        e.preventDefault()
    }
})

ateAno.addEventListener('keypress', function(e){
    const keyCode = (e.keyCode ? e.keyCode : e.wich)

    if (keyCode < 48 || keyCode > 57){
        e.preventDefault()
    }
})

dePreco.addEventListener('keypress', function(e){
    const keyCode = (e.keyCode ? e.keyCode : e.wich)

    if (keyCode < 48 || keyCode > 57){
        e.preventDefault()
    }
})

atePreco.addEventListener('keypress', function(e){
    const keyCode = (e.keyCode ? e.keyCode : e.wich)

    if (keyCode < 48 || keyCode > 57){
        e.preventDefault()
    }
})

dePreco.addEventListener('blur', function(){
    let valor = dePreco.value
    valor = valor.replace('R$ ','')
    if(valor.length != 0) {
        dePreco.value = 'R$ ' + valor
    }
})

dePreco.addEventListener('focus', () => {
    let valor = dePreco.value
    valor = valor.replace('R$ ','')
    dePreco.value = valor
})

atePreco.addEventListener('keypress', function(e){
    const keyCode = (e.keyCode ? e.keyCode : e.wich)

    if (keyCode < 48 || keyCode > 57){
        e.preventDefault()
    }
})

atePreco.addEventListener('blur', function(){
    let valor = atePreco.value
    valor = valor.replace('R$ ','')
    if(valor.length != 0) {
        atePreco.value = 'R$ ' + valor
    }
})

atePreco.addEventListener('focus', () => {
    let valor = atePreco.value
    valor = valor.replace('R$ ','')
    atePreco.value = valor
})

deKm.addEventListener('keypress', function(e){
    const keyCode = (e.keyCode ? e.keyCode : e.wich)

    if (keyCode < 48 || keyCode > 57){
        e.preventDefault()
    }
})

ateKm.addEventListener('keypress', function(e){
    const keyCode = (e.keyCode ? e.keyCode : e.wich)

    if (keyCode < 48 || keyCode > 57){
        e.preventDefault()
    }
})

