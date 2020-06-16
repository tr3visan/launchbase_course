/*
  Crie um programa que armazena dados da company Rocketseat 
  dentro de um objeto chamado company.
*/

const usuario = {
  name: 'Wagner',
  company: {
    name: 'Rocketseat',
    color: 'Roxo',
    focus: 'Programação',
    address: {
      street: 'Rua Guilherme Gembala',
      number: 260
    }
  }
}

console.log(`
  A company ${usuario.company.name} está localizada em ${usuario.company.address.street}, ${usuario.company.address.number}
`)  