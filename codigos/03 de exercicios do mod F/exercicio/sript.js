let numeroadd = []

function adicionar(){
    let numero = Number(document.getElementById('numero').value)
    let tab = document.getElementById('numadd')
    let item = document.createElement('option')
    if(numero == ""){
        alert("Erro! Digite um número.")
    } else if(numero > 100){ 
        alert("Número invalido")
        return
    } else {
        item.text = `O numero ${numero} foi adicionado.`
        item.value = `${numero}`
        tab.appendChild(item)
        numeroadd.push(numero)
        resp.innerHTML = ''
    }
}

function somar(){
    let soma = 0;
    for (let i = 0; i < numeroadd.length; i++) {
        soma += numeroadd[i];
    }
    return soma;
}

function media(){
    //media = item1+ item2+ item3/total de itens
    let media = 0
    media = somar()/numeroadd.length
    return media
}

function finalizar(){
    let total = numeroadd.length
    let somatotal = somar()
    let mediatotal = media()
    let maiornumero = numeroadd[numeroadd.length - 1]
    numeroadd.sort()
    let menornumero = numeroadd[0]
    
    let resp = document.getElementById('resposta')
    resp.innerHTML = `O total de números foi de ${total}`
    resp.innerHTML += `<br>O maior número foi ${maiornumero}`
    resp.innerHTML += `<br>O menor valor foi ${menornumero}`
    resp.innerHTML += `<br>A soma total entre os números é ${somatotal}`
    resp.innerHTML += `<br>A média entre os números é ${mediatotal}`
}