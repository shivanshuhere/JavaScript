const PI = Math.PI

    console.log(PI) // 3.14592...


// rounding the closest number 
console.log(Math.round(PI)) //3

console.log(Math.floor(PI)) //3

console.log(Math.ceil(PI)) //4

console.log(Math.min(2, 4, 6, -2, -10, 7, 0)) // -10

console.log(Math.max(2, 4, 6, -2, -10, 7, 0)) // 7

// random generates  a random number form 0 to o.99999

 let randNum = Math.random() 
    console.log(randNum) // random number in decimals

let tenNum = Math.random() * 11 
    console.log(Math.round(tenNum)) // 0 to 10

// Absolute Value
console.log(Math.abs(-10)) // 10

// Square root 
console.log(Math.sqrt(100)) // 10
console.log(Math.sqrt(4)) // 2

// Power 
console.log(Math.pow(3, 2)) // 9 
console.log(2, 3) // 8

// Logarithm 
console.log(Math.log(2)) // 0.6931471805599453 with base E
console.log(Math.log(10)) // 2.302585092994046 with base E

console.log(Math.LN2) // 0.6931471805599453 wiht Natural log
console.log(Math.LN10) // 2.302585092994046 with natural log

// Trigonomatry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)


// random no generator 0 t 10 
let num = Math.random()*11 
 console.log(num) // 0 t 10.99

console.log(Math.floor(num)) // 0 to 10