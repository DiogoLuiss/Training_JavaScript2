//[X] Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. 
//Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. 
//Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.

let random = Math.floor(Math.random() * 10) + 1

console.log(`Numero ganhador é ${random}`)


let Number_random = Math.floor(Math.random() * 10) + 1

console.log(`Numero sorteado é ${Number_random}`)

if (random == Number_random) {
    console.log("Vocé venceu, premio no valor $500")
} else {
    console.log("Não foi dessa vez, você não foi sorteado")
}

//[X] Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.


let Number1 = Math.floor(Math.random() * 10) + 1

let Number2 = Math.floor(Math.random() * 10) + 1

let Number3 = Math.floor(Math.random() * 10) + 1

console.log(Number1)

console.log(Number2)

console.log(Number3)

if (Number3 > Number1 && Number1 > Number2) {

    console.log(`Number3 = ${Number3} é o maior e Number2 = ${Number2} é o menor`)
} else if (Number3 > Number2 && Number2 > Number1) {
    console.log(`Number3 = ${Number3} é o maior Number1 = ${Number1} é o menor`)

} else if (Number2 > Number3 && Number3 > Number1) {
    console.log(` Number2 = ${Number2} é o maior e Number1 = ${Number1} é o menor`)
} else if (Number2 > Number1 && Number1 > Number3) {

    console.log(`Number2 = ${Number2} é o maior e Number3 = ${Number3} é o menor`)
} else if (Number1 > Number3 && Number3 > Number2) {
    console.log(`Number1 = ${Number1} é o maior e Number2 = ${Number2} é o menor`)

} else if (Number1 > Number2 && Number2 > Number3) {
    console.log(`Number1 = ${Number1} é o maior e Number3 = ${Number3} é o menor`)
} else if (Number1 == Number2 || Number2 == Number3 || Number1 == Number3 || Number1 == Number2 == Number3) {
    console.log("Os valores se reptiram.")

}