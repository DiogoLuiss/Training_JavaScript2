//[X] Faça um programa que compare um número com 10 e imprime na tela "o número é maior, o número é menor o número é igual"


let number = 10
if (number > 10) {
    console.log("O numero é maior que 10")
} else if (number == 10) {
    console.log(" Numero igual a 10")

} else {
    console.log("O numero é menor que 10")
}

//[X] Faça um programa que verifica se uma pessoa é brasileira ou não. // DEVE SER UM OBJETO

let person1 = {
    Name: "Maria",
    Sex: "Female",
    nationality: "Brasilian",
    Age: 20
}

if (person1.nationality == "Brasilian") {
    console.log("Essa pessoa é brasileira")
} else {
    console.log("Essa pessoa não é brasileira ")
}

