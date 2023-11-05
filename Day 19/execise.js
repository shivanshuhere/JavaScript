function outer ()
{
    let a = 9;
    function inner ()
    {
        a++;
        return a;
    }
    return inner
}

const one = outer();
console.log(one())
//1

function outer2 ()
{
    let a = 0;
    function inner1 ()
    {
        a++;
        return 'inner 1 fxn';
    }
    function inner2 ()
    {
        a--;
        return a;
    }
     function inner3 ()
    {
        a += 3;
        return a;
    }
    
    return {
        inner1:inner1(),
        inner2:inner2(),
        inner3:inner3()
    }
}

const three = outer2();
console.log(three.inner3)

//2
function personAccount ()
{
    let firstname = 'shiv', 
        lastname = 'anshu',
        incomes = 10,
        expenses = 5;
    function totalIncome (){
        return incomes
    }
    function totalExpense (){
        return expenses
    } 
    function accountInfo (){
        return (`${firstname}, ${lastname}, ${incomes}, ${expenses}`)
    } 
    function addIncome (){
        incomes += 100
        return incomes
    }
    function addExpense (){function outer ()
        {
            let a = 9;
            function inner ()
            {
                a++;
                return a;
            }
            return inner
        }
        
        const one = outer();
        console.log(one())
        //1
        
        function outer2 ()
        {
            let a = 0;
            function inner1 ()
            {
                a++;
                return 'inner 1 fxn';
            }
            function inner2 ()
            {
                a--;
                return a;
            }
             function inner3 ()
            {
                a += 3;
                return a;
            }
            
            return {
                inner1:inner1(),
                inner2:inner2(),
                inner3:inner3()
            }
        }
        
        const three = outer2();
        console.log(three.inner3)
        
        //2
        expenses += 100
        return expenses
    } 
    function accountBalance (){
        return (`${incomes - expenses}`)
    } 

    return {
        totalIncome,
        totalExpense,
        accountInfo,
        addIncome,
        addExpense,
        accountBalance
    };

}

const test = personAccount();
console.log(test.accountInfo());
