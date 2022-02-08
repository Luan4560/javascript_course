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
// console.log(me) // undefined 
// console.log(job) // error
// console.log(year) // error

//Variáveis
var me = 'Luan';
let job = 'Developer';
const year = '1994';

//Functions
// console.log(addDecl(2, 3))
// console.log(addExp(2, 3))
// console.log(addArrow(2, 3))

function addDecl(a, b) {
  return a + b;
}

var addExp = function(a,b) {
  return a + b;
}

var addArrow = (a, b) => a + b;

//Error Example
if(!numProducts) deleteShoppingCart();
//undefined é um valor true
var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}