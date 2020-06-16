const programador = [
  {
    name: 'Wagner',
    age: 33,
    tecnologys: [
      { name: 'Javacript', speciality: 'Web' },
      { name: 'Dart/Flutter', speciality: 'Mobile' },
      { name: 'C++', speciality: 'Desktop' }
    ]
  }
]

console.log(`
  O usuário ${programador[0].name} tem ${programador[0].age} e usa a tecnologia
  ${programador[0].tecnologys[0].name} com a especialidade ${programador[0].tecnologys[0].speciality}
`)