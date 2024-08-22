function carregar(){
    var agora = new Date()
    var hora = agora.getHours()
    var hr = document.getElementById('hora')
    var imagem = document.getElementById('imagem')
    hr.innerHTML =`Agrora são ${hora} horas`
     
    var hora = 5
    if(hora >= 0 && hora < 12) {
        imagem.src = 'manha.png'
        document.body.style.background = '#fce752'
    } else if (hora >=12 && hora <= 18){
        imagem.src = 'tarde.png'
        document.body.style.background = '#8a7564'
    } else {
        imagem.src = 'noite.png'
        document.body.style.background = '#023248'
    }
}