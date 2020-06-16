const user = {
  name: 'Wagner',
  transactions: [],
  balance: 0
}

function createTransaction(transaction) {
  if(transaction.type === 'credit') {
    user.transactions.push(transaction)
    user.balance += transaction.value
  }
  if(transaction.type === 'debit') {
    user.transactions.push(transaction)
    user.balance -= transaction.value
  }
  
}

// simulating some transaction
createTransaction({ type: 'credit', value: 150.5 })
createTransaction({ type: 'credit', value: 520.5 })
createTransaction({ type: 'credit', value: 350.5 })
createTransaction({ type: 'credit', value: 50.5 })
createTransaction({ type: 'debit', value: 150.5 })
createTransaction({ type: 'debit', value: 50.5 })


function getHigherTransactionByType(typeOfTransiction) {
  let type = null, value = 0, valuesArray = []
  for(let valueOfTransAct of user.transactions){
    if(valueOfTransAct.type === typeOfTransiction) {
      type = typeOfTransiction
      valuesArray.push(valueOfTransAct.value)
    }
  }
  value = Math.max(...valuesArray)
  return { type, value }
}
const maxValuePerTyper = getHigherTransactionByType('debit')
console.log(`Max value per type: ${JSON.stringify(maxValuePerTyper)}`)


function getAverageTransactionValue(){
  let average = 0
  for(let userValue of user.transactions) {
    average += userValue.value
  }
  return average / user.transactions.length
}
const average = getAverageTransactionValue()
console.log(`Average transactions: ${average.toFixed(2)}`)


function getTransactionsCount() {
  let credit = 0
  let debit = 0
    for(let typeTransAct of user.transactions){
      if(typeTransAct.type === 'credit') credit++
      if (typeTransAct.type === 'debit') debit++
    }
  return { credit, debit }
}
const numbersOfTransAct = getTransactionsCount()
console.log(`Transaction's numbers: ${JSON.stringify(numbersOfTransAct)}`)

console.table(user.transactions)