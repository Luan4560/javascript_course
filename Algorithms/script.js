'use strict'

// O que é o formato de 24 horas?

// Soma 12 a hora se for pm, diminui 12 se for pm ?

// Como converter para formato militar ?

const timeConversion = (str) => {
  // Separar string 
    const parseToArray = str.split('')
    console.log(parseToArray)

    // Verificar se é AM ou PM
    parseToArray.map(item => {
      if(item === 'P') {
        console.log('Tarde')
      } else if( item === 'A') {
        console.log('Manhã')
      }
    })

  // Converter o valor para o formato 24horas

  // Retornar na função 

}

console.log(timeConversion('07:05:45PM'))