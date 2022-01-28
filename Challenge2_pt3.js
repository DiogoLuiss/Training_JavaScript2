//[X] Crie 5 objetos nesse formato
//{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
//Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,
//a pessoa deve ser maior de idade e brasileira para ser aprovada.


//Foi atualizado o metodo deste exercicio, automatiizando
/*const objects = {
    person1: {

        Name: "Diogo",
        Age: 18,
        Sex: "Male",
        nationality: "Canadian",
        profession: "garbageman",
    },

    person2: {
        Name: "Antonio",
        Age: 21,
        Sex: "Male",
        nationality: "Brazilian",
        profession: "garbageman",
    },
    person3: {
        Name: "Ingrid",
        Age: 22,
        Sex: "Female",
        nationality: "Brazilian",
        profession: "garbageman",
    },
    person4: {
        Name: "Marcella",
        Age: 19,
        Sex: "Female",
        nationality: "Canadian",
        profession: "garbageman",
    },
    person5: {
        Name: "Victor",
        Age: 30,
        Sex: "Male",
        nationality: "Canadian",
        profession: "garbageman",
    },
}
*/

/*if (objects.person1.nationality == "Brazilian" && objects.person1.Age >= 18) {
    console.log(" Diogo foi Aprovado")

} else {
    console.log("Diogo foi Reprovado")
}

if (objects.person2.nationality == "Brazilian" && objects.person2.Age >= 18) {
    console.log(" Antonio foi Aprovado")

} else {
    console.log("Antonio foi Reprovado")
}

if (objects.person3.nationality == "Brazilian" && objects.person3.Age >= 18) {
    console.log(" Ingrid foi Aprovada")

} else {
    console.log(" ingrid foi Reprovada")
}
if (objects.person4.nationality == "Brazilian" && objects.person4.Age >= 18) {
    console.log(" Marcella foi Aprovada")

} else {
    console.log(" Marcella foi Reprovada")
}
if (objects.person5.nationality == "Brazilian" && objects.person5.Age >= 18) {
    console.log(" Victor foi Aprovado")

} else {
    console.log(" Victor foi Reprovado")
}
*/

const objects = [{


        Name: "Diogo",
        Age: 18,
        Sex: "Male",
        nationality: "Canadian",
        profession: "garbageman",
    },

    {
        Name: "Antonio",
        Age: 21,
        Sex: "Male",
        nationality: "Brazilian",
        profession: "garbageman",
    },
    {
        Name: "Ingrid",
        Age: 22,
        Sex: "Female",
        nationality: "Brazilian",
        profession: "garbageman",
    },
    {
        Name: "Marcella",
        Age: 19,
        Sex: "Female",
        nationality: "Canadian",
        profession: "garbageman",
    },
    {
        Name: "Victor",
        Age: 30,
        Sex: "Male",
        nationality: "Canadian",
        profession: "garbageman",
    },
]


const information = () => {

    for (let i = 0; i < objects.length; i++) {


        let nationality = (objects[i].nationality)
        let Age = (objects[i].Age)

        if (nationality == "Brazilian" && Age >= "18") {
            console.log(`${objects[i].Name} Esta aprovado, cumpriu os requisitos`)

        } else(console.log(`${objects[i].Name} Esta reprovado não cumpriu os requisitos`))

    }
}

information (objects)



//[X] Faça um programa onde os jurados vão dar a explicação para cada nota dada. 
//São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.


let Number_note = Math.floor(Math.random() * (11 - 0)) + 0;


if (Number_note == 0) {
    console.log(" sua nota foi 0 , Você precisa estudar muito, reprovado")

} else if (Number_note == 1) {
    console.log("Sua nota foi 1, horrivel")
} else if (Number_note == 2) {
    console.log("Sua nota foi 2, por favor melhora essa porcaria")

} else if (Number_note == 3) {
    console.log("Sua nota foi 3, por favor se esforce mais")

} else if (Number_note == 4) {
    console.log("Sua nota foi 4, por favor estudar mais")

} else if (Number_note == 5) {
    console.log("Sua nota foi 5, Média ruim")

} else if (Number_note == 6) {
    console.log("Sua nota foi 6, Média")

} else if (Number_note == 7) {
    console.log("Sua nota foi 7, Média boa")

} else if (Number_note == 8) {
    console.log("Sua nota foi 8, Média boa")

} else if (Number_note == 9) {
    console.log("Sua nota foi 9, Muito boa")

} else if (Number_note == 10) {
    console.log("Sua nota foi 10, nota maxima continue assim")

}