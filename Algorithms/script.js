'use strict'

// O que é o formato de 24 horas?

// Soma 12 a hora se for pm, diminui 12 se for pm ?

// Como converter para formato militar ?

const timeConversion = (str) => {
  // Transformar array em numero
  const strToNumber = str.split('').filter(e => e !== 'A, M')
  console.log(strToNumber)

  // Verificar am ou pm

  // Somar ou diminuir 12 dependendo do formato
    
  // Retornar na função 

}

console.log(timeConversion('07:05:45AM'))

function teste() {
  console.log('Teste')
}