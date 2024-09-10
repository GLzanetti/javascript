//Quando uma função chama ela mesma é chamado de Recursividade

function fatorial(n){
    if(n == 1){
        return 1
    } else {
        return n*fatorial(n-1)
    }
}

console.log(fatorial(10))