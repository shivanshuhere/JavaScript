// exercise 1
localStorage.setItem('name', 'Shivanshu Koundal');
localStorage.setItem('age', 19);
localStorage.setItem('country', 'india');
localStorage.setItem('city', 'kangra');
console.log(localStorage);

// exercise 2

const stuobj = {
    name : 'shivu',
    age : 19,
    skills :['HTML', 'CSS', 'JavaScript'],
    country : 'India'
}
const stuJSON = JSON.stringify(stuobj, undefined, 4)
localStorage.setItem('student', stuJSON);
console.log(localStorage)

// exercise 3
const personAccount = {
    firstName :'Shivu',
    lastName :'anshu',
    incomes : 10,
    expenses : 5,
    totalIncome(){
        return this.incomes;
    },
    totalExpense ()
    {
        return this.expenses;
    },
    accountBalance ()
    {
        return (this.incomes - this.expenses)
    }
};
const prsnAccJSON = JSON.stringify(personAccount, undefined, 4);
localStorage.getItem('personAccount',prsnAccJSON)
console.log(localStorage)

// use console to execute this code