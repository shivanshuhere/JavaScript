
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

const setOne = new Set(); // 1

tenDigits = new Set()
 for (let l = 1; l <= 10; l++)
 {
    tenDigits.add(l);
 }
 console.log(tenDigits);

newSet = new Set(a);
newSet.delete(4)
console.log(newSet) //3

newSet.clear();
console.log(newSet); // 4

stringSet = new Set(countries);
console.log(stringSet) // 5

const map = new Map();
for (const country of countries)
{
    map.set(country, country.length);
}
console.log(map); // 6