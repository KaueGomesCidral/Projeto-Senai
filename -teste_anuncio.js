const cep = document.querySelector('#cep')
const deAno = document.querySelector('#deAno')
const ateAno = document.querySelector('#ateAno')
const dePreco = document.querySelector('#dePreco')
const atePreco = document.querySelector('#atePreco')
const deKm = document.querySelector('#deKm')
const ateKm = document.querySelector('#ateKm')
const limpar = document.querySelector('#limpar')

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

// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("demo");
//     let captionText = document.getElementById("caption");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
//     captionText.innerHTML = dots[slideIndex - 1].alt;
// }