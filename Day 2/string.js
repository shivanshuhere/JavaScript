let space = ' ',
    firstName = 'Shivanshu',
    lastName = 'Koundal',
    country = 'India',
    language = 'Hindi',
    quote = "This is a,'quote' using double quotation.",
    quoteUsingBackTick = `This is a, "quote" using backticks.`

 // Concatination 
     
    // Using addition operator 
    let fullName = firstName + space + lastName;
    console.log(fullName) // Shivanshu Koundal

    // long literal ie \ (backslash)
    let para = 'My name is Shivanshu Koundal.\n I live in Kangra.\t I love to code'
    console.log(para) 
    /* My name is Shivanshu Koundal.
    I live in Kangra.  I love to code*/
    
/*      \n: new line
        \t: Tab, means 8 spaces
        \\: Back slash
        \': Single quote (')
        \": Double quote (")    */
    

        console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
        console.log('Days\tTopics\tExercises')
        console.log('Day 1\t3\t5')
        console.log('Day 2\t3\t5')
        console.log('Day 3\t3\t5')
        console.log('Day 4\t3\t5')
        console.log('This is a backslash  symbol (\\)') // To write a backslash
        console.log('In every programming language it starts with \"Hello, World!\"')
        console.log("In every programming language it starts with \'Hello, World!\'")
        console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')


// Template literals        

let a = 5,
    b = 10
console.log(`The sum of ${a} and ${b} is ${a+b}.`) // The sum of 5 and 10 is 15.

console.log(`Hii, i am ${fullName}.\n I live in ${country}.`) 
/*  Hii, i am Shivanshu Koundal.
    I live in India.   */


    let d = 2
    let e = 3
    console.log(`${d} is greater than ${e}: ${d > e}`)


    // -----Methods------

//lenght
let js = 'JavaScript'
console.log(js.length) // 10


//access by index
let firstLetter = js[0], // J
    thirdLetter = js[2], // v
    lastLetter = js[9] // t

let lastIndex = js.length - 1
    console.log(lastIndex) // 9
    console.log(js[lastIndex]) // t


//toUpperCase
 console.log(js.toUpperCase()) // JAVASCRIPT
 console.log('Mahesh'.toUpperCase()) //MAHESH


// toLowerCase
console.log(js.toLowerCase()) // javascript
console.log('LaLiT'.toLowerCase())// lalit


//substr (stating and no of char to slice)
console.log(js.substr(0,4))
console.log('The Substr'.substr(0,4))


//substring (staring and ending args to slice)
console.log(js.substring(3, 9))
console.log('The substring'.substring(3, 9))


// split 
console.log('This is split'.split(' '))// ['This', 'is', 'split']
console.log('shivanshu'.split('h'))// ['s', 'ivans', 'u']


// trim (removes the spaces)
console.log('  trim   this    sentence'.trim()) // trim this sentence


// includes (true or false)
console.log('days and nights'.includes('s')) //true
console.log('days and nights'.includes('w')) //false


// replce 
let word ='This is a dog.'
console.log(word.replace('dog', 'cat')) // This is a cat.
console.log(`i am hungry.`.replace('i am', 'we are')) // we are hungry.


// charAt 
console.log('Lalit'.charAt(3)) // i
console.log(firstName.charAt(4)) // a
console.log(firstName.charAt(firstName.length)) // u


//charCodeAt ie ascii number 
console.log('Lalit'.charCodeAt(1)) // 97


// indexOf 
console.log('i am human'.indexOf('human'))// 5


// lastIndexOf (for last position)
console.log('i am human'.lastIndexOf('m')) // 7


// concat (joins)
let first = 'First String ',
    second = 'Second String '
console.log(first.concat(second,'and third string')) // First String Second String and third string


// startsWith (true or false)
console.log(first.startsWith('Fir')) // true
console.log(first.startsWith('Str')) // false


// endWith 
console.log(second.endsWith('ing ')) // true
console.log(second.endsWith('ing')) // false


// search 
console.log(first.search('r')) // 2
console.log(first.search('w')) // -1 as false


// match 
console.log(first.match('String')) // [ 'String', index: 6, input: 'First String ', groups: undefined ]

console.log('this is that and that is this'.match('this')) //[ 'String', index: 6, input: 'First String ', groups: undefined ]

console.log('this is that and that is this'.match(/this/)) //[ 'String', index: 6, input: 'First String ', groups: undefined ]

console.log('this is that and that is this'.match(/this/g)) // [ 'this', 'this' ]

console.log('this is that and that is this'.match(/this/gi)) //[ 'this', 'this' ]

console.log('this is that and that is this'.match('w')) // null


// match using regualr exp
let text = 'This is 20 years old text form a book. Now we are in 2023.',
    regExp = /\d+/g // g - globaly
console.log(text.match(regExp))// [ '20', '2023' ]


// repeat 
console.log(' YoYoHoHo '.repeat(4)) //  YoYoHoHo  YoYoHoHo  YoYoHoHo  YoYoHoHo 
