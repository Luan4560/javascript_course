'use strict'

//Scopes
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `${firstName} You are ${age}, born in ${birthYear}`;

//     console.log(output);

//     if(birthYear >= 1981 && birthYear <= 1996) {
//       const str = `Oh, and you're a millenial, ${firstName}`

//       console.log(str)
//     }

//   }
//   printAge()
//   return age;
// }

// const firstName = 'Luan' // Global Scope

// calcAge(1991)

// HOISTING
// console.log(me) // undefined 
// console.log(job) // error
// console.log(year) // error

//Variáveis
// var me = 'Luan';
// let job = 'Developer';
// const year = '1994';

//Functions
// console.log(addDecl(2, 3))
// console.log(addExp(2, 3))
// console.log(addArrow(2, 3))

// function addDecl(a, b) {
//   return a + b;
// }

// var addExp = function(a,b) {
//   return a + b;
// }

// var addArrow = (a, b) => a + b;

//Error Example
// if(!numProducts) deleteShoppingCart();
//undefined é um valor true
// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// This keyword

// console.log(this);

// const calcAge = function(birthyear) {
//   console.log(2037 - birthyear)
//   console.log(this)
// }

// calcAge(1991)

// const calcAgeArrow = (birthyear) => {
//   console.log(2037 - birthyear)
//   console.log(this)
// }

// calcAgeArrow(1992)

// const matilda = {
//   year: 2017,
// }

// matilda.calcAge = jonas.calcAge;

// Regular functions & Arrow functions (This)

const luan = {
  firstName: 'Luan',
  year: 1991,
  calcAge: function() {
    console.log(this);
    console.log(2037 - this.year)

    // Solution one 
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self)
    //   console.log(self.year >= 1981 && self.year <= 1996)
    // };

    //Solution 2
    const isMillenial = () => {
      console.log(this)
      console.log(this.year >= 1981 && this.year <= 1996)
    };
   
    isMillenial()
  },

  greet: () => console.log(`${this.firstName}`)
}

luan.greet()
luan.calcAge()


// Arguments (this keyword)
const addExpr = function (a, b) {
  console.log(arguments)
  return a + b
}

addExpr(2, 5);
addExpr(2, 5, 8, 12)

const addArrow = (a, b) => {
  console.log(arguments)
  return a + b
}

addArrow(2, 5, 8)