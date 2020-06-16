// Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.
const name = 'Wagner'
const weight = 84
const height = 1.88
const imc = weight / (height * height)

if (imc < 29.9) {
  console.log(`${name}, you are not overweight.`)
} else if (imc >= 30) {
  console.log(`${name}, you are overweight.`)
}