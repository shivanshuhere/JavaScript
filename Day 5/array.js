let arr = ['mango', 'apple', 'banana']
console.log(arr)
let result = arr.indexOf('mango')
console.log(result)
if (result != -1 )
{
    console.log(`Exist in the array`)
}
else 
{
    console.log(`Does not exist in the array`)
}

let index = -1

index == -1 ? console.log(`Element does not exist`): console.log(`Element does exist`)

let yourArray = 10

console.log(Array.isArray(yourArray))
console.log(Array.isArray(arr))

console.log(arr)
console.log(arr.join('\n'))

console.log(arr.toString())

arr = arr.slice(0,2)
console.log(arr)

arr.push('new fruit')
console.log(arr)

arr.pop()
console.log(arr)

arr.push('last fruit')
arr.shift()
console.log(arr)

arr.unshift('first fruit')
console.log(arr)

console.log(arr.reverse())

let sortedArr = arr.sort()
console.log(sortedArr)