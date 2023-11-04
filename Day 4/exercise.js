let age = prompt("Enter your age:")
age = Number(age) 
if (age >= 18 )
{
    alert("You are old enough to drive.")
}
else {
    alert(`You are left with ${18 - age} years to drive.`)
} // 1

let myAge = 19, yourAge
    yourAge = prompt(`Enter you age:`)
    yourAge = Number(yourAge)
    if(myAge > yourAge)
    {
    alert(`You are ${myAge - yourAge} years younger than me.`)
    }
    else if (myAge == yourAge)
    {
        alert(`Our age is same buddy.`)
    }
    else
    {
        alert(`You are ${yourAge - myAge} years older than me.`)
    } // 2

    let a = 9, b = 20
    if (a > b)
    {
        alert(` ${a} is greater than ${b}.`)
    }
    else{
        alert(` ${a} is less than ${b}.`)
    } // 3.1

    let one, two, result
    one = prompt("Enter first value")
    two = prompt("Enter first value")
    one = Number(one)
    two = Number(two)
    result = (one > two)?
    `${one} is greater than ${two}`:
    `${one} is lesser than ${two}` // 3.2
    alert(result)

    let num = prompt(`Enter a number:`)
    num = Number(num) 
    if (num % 2 == 0)
    {
        alert(`${num} is even.`)
    }
    else 
    {
        alert(`${num} is odd.`)
    } // 4


