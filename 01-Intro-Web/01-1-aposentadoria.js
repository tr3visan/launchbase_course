const name = 'Valdecir'
const genre = 'M'
const age = 60
const contribution = 36

if (genre == 'F') {
  if (contribution < 30){
    console.log(`
      Olá ${name}, o seu tempo de contribuição no momento é ${contribution}, e deve ser superior a 30 anos.
    `)
  } else {
    const time = age + contribution
    if (time < 85) {
      console.log(`
        Olá ${name}, seu tempo de contribuição foi aceito, porém ainda não atingiu o tempo necessário que deve ser superior a 85 anos somando sua idade + tempo de contribuição.
      `)
    } else {
      console.log(`
        Olá ${name}, sua aposentadoria foi aprovada!
        Sua idade: ${age} anos
        Tempo de contribuição: ${contribution} anos
        Soma total: ${age + contribution} anos
      `)
    }
  }
} else if (genre == 'M') {
  if (contribution < 35){
    console.log(`
      Olá ${name}, o seu tempo de contribuição no momento é ${contribution}, e deve ser superior a 35 anos.
    `)
  } else {
    const time = age + contribution
    if (time < 95) {
      console.log(`
        Olá ${name}, seu tempo de contribuição foi aceito, porém ainda não atingiu o tempo necessário que deve ser superior a 95 anos somando sua idade + tempo de contribuição.
      `)
    } else {
      console.log(`
        Olá ${name}, sua aposentadoria foi aprovada!
        Sua idade: ${age} anos
        Tempo de contribuição: ${contribution} anos
        Soma total: ${age + contribution} anos
      `)
    }
  }
}