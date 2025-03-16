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

//NOTE - Strings
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

//NOTE - Template strings
console.log(`The Sum of Two & Three is Five`)
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // literal templates. similiar to formtted strings in python
//  only works with backticks `` and not "" or ''

console.log(`I am ${myFullNme} and im a ${job} and im in ${course}.`)



//NOTE - String methods
/*
everything in JS is on object.  string is o doto type
*/

let JS = javscript

console.log(JS.toUpperCase()) // print uppercase JS

console.log(JS.toLowerCase()) // print lowercase JS

console.log(JS.substr(4,6)) 





// the split method
let word = "SDV503 with javascript"
console.log(word.split()) // tke the string nd puts it into n rry, split string in specific plse

console.log(word.split(" ")) // split word into seperte indexs' put uottions on eveything in 'word'

let name = "Javier Thomas Gifkins"
console.log(name.split(" ")) // split name into seperte indexs' put uotations on eveything in 'name'


// the trim method
let name2 = "Gifkins   Jav"
console.log(name.trim()) //
