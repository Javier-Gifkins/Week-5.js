//NOTE - Math Object

/*
In JS the math object provides lots of methods to work with numbers.

*/


const PI = Math.PI
console.log(PI)

//!SECTION - Rounding to the closest Number:

//NOTE - if above .5 then round it up. if below or less, round down

// console.log(Math.round(PI))
// console.log(Math.round(9.81))

// console.log(Math.round(PI))

console.log(Math.ceil(PI))


console.log (Math.min(-5,6,7,3,9)) //prints -5
console.log (Math.max(-5,6,7,3,9)) //prints 9

const randNum = Math.random() //create a random number
console.log(randNum)

const num = Math.floor(Math.random() * 11) //create a random number between and 105
console.log(num)


console.log(Math.abs(-10)) //absolute value

console.log(Math.sqrt(100)) //print square root

console.log(Math.pow(3,2)) //print square root (3 to the power of 2)


//!SECTION - Strings

/*
strings re texts which are under single or double quottions
to declre a string we need vr nme ssignment opertor nd vlue
*/

let spce = ' '
firstNme = "Jvier"
lstNme = "Gifkins"
let course = "SDV503"
let job = "Tutor"

// string conctention
let myFullNme = firstNme + space + lstNme
console.log(myFullNme)

let newPerson = myFullNme + ". I m " + job + "teaching" + course
console.log(newPerson)