function contar(){
    var n1 = document.getElementById('n1')
    var n2 = document.getElementById('n2')
    var passo = document.getElementById('passo')
    var resp = document.getElementById('resposta')

    if(n1.value.length == 0 || n2.value.length == 0 || passo.value.length == 0){ 
        resp.innerHTML = 'Impossível contar!'
    } else {
        resp.innerHTML = 'Contando... <br>'
        let i = Number(n1.value)
        let f = Number(n2.value)
        let p = Number(passo.value)
        
        if(p <= 0 ) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if( i < f){
            for ( c = i; c <= f; c += p){ //contagem progressiva
                resp.innerHTML += ` ${c} \u{1F449} `
            }
        } else {
            for( c = i; c >= f; c -= p) { //contagem regressiva
                resp.innerHTML += ` ${c} \u{1F449} `
            }
        }
        resp.innerHTML += `\u{1F3C1}`
    }
}