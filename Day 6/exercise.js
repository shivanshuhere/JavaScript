let i = 0
for (i = 0; i <= 10; i++)
{
    console.log(i)
} // 1.1 --for

let j = 0
while (j <= 10)
{
    console.log(j)
    j++
} // 1.2 --while

let k = 0
do 
{
    console.log(k)
    k++
} while(k <= 10) // 1.3 --do while


let i1 = 10
for (i1 = 10; i1 >= 0; i1--)
{
    console.log(i1)
} // 2.1 --for

let j2 = 10
while (j2 >= 0)
{
    console.log(j2)
    j2--
} // 2.2 --while

let k2 = 10
do 
{
    console.log(k2)
    k2--
} while(k2 >= 0) // 2.3 --do while


let n = prompt('Enter the vlaue of n :')
n = parseInt(n)
for(let i = 0; i <= n; i++)
{
    console.log(i)
}   // 3


let count = 5
let str1 = ""
for ( let  i = 0; i < count; i++)
{
    for (let j = 0; j <= i; j++)
    {
        str1 += "#" 
    }
    str1 += "\n"
}
console.log(str1) //4


let num = 0
str2 = ""
for(num = 0; num < 11; num++)
{
    str2 += `${num} x ${num} = ${num * num} \n`
}
console.log(str2) // 5


let num2 = 0
str2 = "i\ti^2\ti^3\n"

for(num2 = 0; num2 < 11; num2++)
{
    str2 += `${num2}\t ${Math.pow(num2, 2)}\t ${Math.pow(num2, 3)}\n`
}
console.log(str2) // 6


let eve = 0
str3 = ""
for (eve = 0; eve <= 100; eve++)
{
    if (eve % 2 == 0 && eve != 0)
    {
        str3 += `${eve}\t`
    }
}
console.log(str3) // 7


let odd = 0
let str4 = ""
for (odd = 0; odd <= 100; odd++)
{
    if (odd % 2 != 0 && odd != 0 && odd != 1)
    {
        str4 += `${odd}\t`
    }
}
console.log(str4) // 8


let num5 = 0
let str5 = ""
for (num5 = 0; num5 <= 100; num5++)
{
    if (num5 > 2)
    {
        for (var p = 2; p < num5; p++)
        {
            if (num5 % p == 0){
                break;
            }
        }
        if (num5 == p)
        {
            str5 += `${num5}\t`
        }
    }
}
console.log(`All the prime numbers from 0 to 100 are: ${str5}\n`) // 9


let sum = 0
for (let i = 0; i <= 100; i++)
{
    sum += i
}
console.log(`Sum of all the numbers from 0 to 100 is : ${sum}\n`) // 10


let oddSum = 0,
    evenSum = 0
    for (let n = 0; n <= 100; n++)
    {
        if (n % 2 == 0)
        {
            evenSum += n
        }
        else
        {
            oddSum += n
        }
    }
console.log(`Sum of all evens from 0 to 100 is : ${evenSum}. And sum of all odds from 0 to 100 is :${oddSum}`) // 11


 let arraySum = [evenSum, oddSum]
 console.log(arraySum) // 12


 let arrayRan = []
 for (let i = 0; i < 5; i++)
 {
    arrayRan.push(Math.ceil(Math.random()*11))
 }
 console.log(arrayRan) // 13

 let arrayUniq = []
 for (let i = 0; i < 5; i++)
 {
    arrayUniq.push(Math.ceil(Math.random()*100)+1)
 }
 console.log(arrayUniq) // 14

 let str7 = ""
str7 += Math.random().toString(29).slice(2,8)
 console.log(str7) // 15


