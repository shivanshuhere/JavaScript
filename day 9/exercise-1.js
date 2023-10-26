const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Europe']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
//forEach, map, filter and reduce
// forEach
/* all of these functions takes function as parameter .

forEach - it iterate through, and apply the code statements on each of elements throughout

map - it creates new array of each element and return the new array.it can't change the original array.

filter - it takes a condition and return a new array which satisfy the conditions.

reduce - it called the specified fxn for each element in the array and save the result in the accumaltor.


*/ // 1

const callback = n => {
    return (n+10);
}; //2 a callback fxn

countries.forEach(coutnry => console.log(coutnry)); // 3

names.forEach(name => console.log(name)); // 4

numbers.forEach(num => console.log(num));

const upperCase = countries.map(coutnry => coutnry.toUpperCase()
)
console.log(upperCase); // 6

const countriesLength = countries.map(coutnry => coutnry.length);
console.log(countriesLength); // 7

const numSq = numbers.map(num => num*num);
console.log(numSq); //8

const nameUpper = names.map(name => name.toUpperCase());
console.log(nameUpper); // 9

const prodPrice = products.map(prod => {
   let arr = [prod.product, prod.price]
   return arr; 
})
console.log(prodPrice); //10

const landCountry = countries.filter(coutnry => 
    coutnry.includes('land') || coutnry.includes('Land')
)
console.log(landCountry); // 11

const sixCharCount = countries.filter(country => {if(country.length == 6 ){
    return country
}
})
console.log(sixCharCount); // 12

const sixCharMoreCount = countries.filter(country => {if(country.length > 5 ){
    return country
}
})
console.log(sixCharMoreCount);// 13

const eCountry = countries.filter(cont => {
    
    if (cont.charAt(0) == 'E')
    {
        return cont ;
    }
})
console.log(eCountry); // 14

const priceWithValue = products.filter(prod => {
    
}
)
console.log(priceWithValue)//15
