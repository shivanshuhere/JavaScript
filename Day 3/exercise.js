let firstName = 'Shivanshu',
    lastName = 'Koundal',
    country = 'India',
    city = 'Dharmshala',
    age = 19,
    isMarried = false,
    year = 2023
console.log(typeof(firstName) +'\n' +  typeof(lastName) + '\n' + typeof(country)  +'\n' + typeof(country)  +'\n' + typeof(city) +'\n' + typeof(city)  +'\n' + typeof(age)  +'\n' + typeof(isMarried)  +'\n' + typeof(year))  // 1

console.log(typeof(10) == typeof('10')) // 2 --false 

console.log(Math.ceil(parseInt(9.8)) == 10) // 3 --false

console.log(Math.round(9.8) == 10) // 4.1.1 true
console.log(parseInt('19') == 19) // 4.1.2 true
console.log('im here' == 'IM HERE'.toLowerCase()) // 4.1.3 true
console.log('Hii' == 'hii') // 4.2.1 false
console.log('10' === 10) //  4.2.2 false
console.log(Math.PI == 3.14) // 4.2.3 false 

console.log( 4 > 3) // 5.1 true
console.log(4 >= 3) // 5.2 true
console.log(4 < 3) // 5.3 false 
console.log(4 <= 3) // 5.4 false
console.log(4 == 4) // 5.5 true
console.log(4 === 4) // 5.6 true
console.log(4 != 4) // 5.7 false
console.log(4 !== 4) // 5.8 false
console.log(4 != '4') // 5.9 false
console.log(4 == '4') // 5.10 true
console.log(4 === '4') // 5.11 false 
console.log('python'.length != 'jargon'.length) // 5.12  false

console.log(4 > 3 && 10 < 12) // 6.1 true
console.log(4 > 3 && 10 > 12) // 6.2 false
console.log(4 > 3 || 10 < 12) // 6.3 true
console.log(4 > 3 || 10 > 12) // 6.4 true
console.log(!(4 > 3)) // 6.5 false
console.log(!(4 < 3)) // 6.6 true
console.log(!(false)) // 6.7 true
console.log(!(4 > 3 && 10 < 12)) // 6.8 false
console.log(!(4 > 3 && 10 > 12)) // 6.9 true
console.log(!(4 === '4')) // 6.10 true
console.log('dragon'.includes('on') != 'python'.includes('on')) // 6.11 false

let now = new Date
console.log(now.getFullYear()) // 7.1 --2023
console.log(now.getMonth()+1) // 7.2 --8
console.log(now.getDate()) // 7.3 --17
console.log(now.getDay()) // 7.4 --4 
console.log(now.getHours()) // 7.5 --15
console.log(now.getMinutes()) // 7.6 --24
console.log(now.getTime()) // 7.7 --1692266085979