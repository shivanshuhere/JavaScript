let five = [5, 10, 15] //array
five[2] = 20

console.log(five) // [5, 10, 20]


let num = [10, 5, 0],
    number = [10, 5, 0]

    console.log(num == number) //false


let first = {
    name:'Shivu',
    role:'Student',
    age:19
},

    second = {
    name:'Shivu',
    role:'Student',
    age:19
}

    console.log(first == second) //false

/* -------------------------------------------------- */

let one = [1, 2, 3]
let two = one

    console.log(one = two) // true


let firstUser = {
    name:'Shiv',
    age:19
}

let secondUser = firstUser 

    console.log(firstUser == secondUser) //true

    