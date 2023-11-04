// console.time() - .timeEnd()

const nums = [112, 435, 2351, 6134, 6, 23632, 23432, 151, 35, 12];
console.time("Execution time is: ");
for (const n of nums) {
  console.log(n);
}
console.timeEnd("Execution time is: ");
