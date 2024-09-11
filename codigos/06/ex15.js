let num = [4,6,2,8,5]
num.push(7) //Adiciona o elemento entre () no dinal do vetor
num.sort() //Arruma o vetor colocando os elementos em ordem crescente
/*
for(let pos = 0; pos < num.length; pos++){
    console.log(`${pos} = ${num[pos]}`)
}
*/

for(let pos in num){
    console.log(`${pos} = ${num[pos]}`)
}

console.log(num.indexOf(7)) //quando for procurar por um número que não existe no vetor o valor de output = -1 

