'use strict'
//Scopes
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName} You are ${age}, born in ${birthYear}`;

    console.log(output);

    if(birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you're a millenial, ${firstName}`

      console.log(str)
    }

  }
  printAge()
  return age;
}

const firstName = 'Luan' // Global Scope

// calcAge(1991)


// HOISTING