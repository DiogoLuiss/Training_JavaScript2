

//[X] Faça um programa onde leia um numero e diga se ele é par ou impar.
//[X] Faça um programa onde leia um número e diga se ele é: - ímpar, - par, - é um número primo e impar, - é par e divisível por 5.


let Number_Random = Math.floor(Math.random() * (10001 - 0)) + 0;
let n = Number_Random
let punctuation = 0
console.log(Number_Random)

for (let i = 0; i <= 1000; i++) {

    if (n % i == 0) {

        punctuation = punctuation + 1

    }

}

if (punctuation == 2 && n % 2 == 1) {
    console.log(` ${n} é primo e impar`)

} else if (n % 5 == 0 && n % 2 == 0) {

    console.log(`${n} é par e divisível por 5`)
} else if (n % 2 == 1) {
    console.log(`${n} é Numero impar`)

} else if (n % 2 == 0) {

    console.log(` ${n} é Numero par`)
}
//[X] Faça um programa onde ele leia 4 números. 
//Em cada caso, ele deve retornar a mensagem condizente: - Todos os números são 
//impares => TODOS OS NÚMEROS SÃO IMPARES - Todos os números são pares => TODOS OS NÚMEROS SÃO PARES. 
//Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares.


let N1 = 19
let N2 = 10
let N3 = 10
let N4 = 10

if (N1 % 2 == 0 && N2 % 2 == 0 && N3 % 2 == 0 && N4 % 2 == 0) {
    console.log("Todos são par")


} else if (N1 % 2 == 1 && N2 % 2 == 1 && N3 % 2 == 1 && N4 % 2 == 1) {
    console.log("Todos são impar")

} else {
    console.log("Há numeros pares e impares")
}