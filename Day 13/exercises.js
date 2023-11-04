// exercise 1
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
console.table(countries);
// 1

const count = Object.assign(countries);
console.table(count);
// 2 (not sure )

console.group("countries");
console.log(count);
console.groupEnd();
//3

//exercise 2
console.assert(10 > 2 * 10, "not greater");
// 1

console.warn("this is a warning to all the villager to stop trading now !");
//2

console.error("this error caused by someone you know");
//3

//exercise 3
let ct = 0;
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let i = 0;
console.time("while");
while (i < 10) {
  ct++;
  i++;
}
console.timeEnd("while");

console.time("for");
for (i = 0; i < 10; i++) {
  ct++;
}
console.timeEnd("for");

console.time("for of");
for (const n of num) {
  ct++;
}
console.timeEnd("for of");

// console.time("forEach");
// num.forEach()
// console.timeEnd("forEach");
// 1
