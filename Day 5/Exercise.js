const arr = Array() // or
let arr1 = []  // 1

const arra = ['First', 'Second', 'Third', 'Fourth', 'Fifth']  // 2

let len = arra.length
console.log(len) // 3

let firstElement = 0
let lastElement = len-1
let midElement = 3
console.log(arra[firstElement])
console.log(arra[midElement])
console.log(arra[lastElement]) // 4

const mixedDataTypes = ['First', 2, true, null, 'Second', 3, false, ''] 
console.log(mixedDataTypes)
console.log(mixedDataTypes.length) // 5

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'] // 6

console.log(itCompanies) // 7

console.log(itCompanies.length) // 8

console.log(itCompanies[0])
console.log(itCompanies[3])
console.log(itCompanies[itCompanies.length - 1]) // 9

console.log(itCompanies.join(', ')) // 10

for( let i = 0; i < itCompanies.length; i++ )
{
    itCompanies[i].toUpperCase()
}
console.log(itCompanies) // 11

console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT compaines.`) // 12


let check = 'AMAZON'
let res = itCompanies.includes(check)
if (res == true)
{
    alert(`${check} in the big IT companies.`)
}
else
{
    alert('Not found')
}   // 13

let oo = []
for (let i = 0; i < itCompanies.length ; i++)
{
    
    if(itCompanies[i].indexOf('O') != itCompanies[i].lastIndexOf('O'))
    {
        oo.push(itCompanies[i])
    }
}
console.log(oo) // 14  Imp 

let sortedArray = itCompanies.sort()
console.log(sortedArray.join(', ')) // 15

let revArray = itCompanies.reverse()
console.log(revArray.join(', ')) // 16

let first3 = itCompanies.slice(0,3)
console.log(first3.toString()) // 17

let last3 = itCompanies.slice(itCompanies.length-3, itCompanies.len)
console.log(last3.join(', ')) // 18

let mid = itCompanies.length / 2
console.log(itCompanies.slice(mid, mid+1)) // 19

itCompanies.shift()
console.log(itCompanies) // 20

let leng = itCompanies.length
     mid = leng / 2
if( leng % 2 == 0){
    delete itCompanies[mid-1]
    delete itCompanies[mid]
}
else
{
    delete itCompanies[mid]   
}
console.log(itCompanies.join(' ')) // 21

itCompanies.pop()
console.log(itCompanies.join(' ')) // 22

itCompanies = [] // use can also use Array()
console.log(itCompanies) // 23

    

