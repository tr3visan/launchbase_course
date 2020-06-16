const usuarios = [
  {
    name: "Salvio",
    recipes: [115.3, 48.7, 98.3, 14.5],
    expenses: [85.3, 13.5, 19.9]
  },
  {
    name: "Marcio",
    recipes: [24.6, 214.3, 45.3],
    expenses: [185.3, 12.1, 120.0]
  },
  {
    name: "Lucia",
    recipes: [9.8, 120.3, 340.2, 45.3],
    expenses: [450.2, 29.9]
  }
];

for(let i=0; i < usuarios.length; i++){
  let name = usuarios[i].name
  let recipes = usuarios[i].recipes
  let expenses = usuarios[i].expenses  
  calculatingBalance(name, recipes, expenses)
}

function calculatingBalance(name, recipes, expenses) {
  let totalrecipes = 0
  for(let i=0; i < recipes.length; i++){
    totalrecipes += recipes[i]
  }

  let totalexpenses = 0
  for(let i=0; i < expenses.length; i++){
    totalexpenses += expenses[i]
  }

  let numbers = totalrecipes - totalexpenses

  sumNumbers(name, numbers.toFixed(2))
}

function sumNumbers(name, numbers) {
  // Soma todos números dentro do array "numbers"
  if(numbers > 0){
    console.log(`${name} possui saldo POSITIVO de ${numbers}`)
  } else {
    console.log(`${name} possui saldo NEGATIVO de ${numbers}`)
  }
}

