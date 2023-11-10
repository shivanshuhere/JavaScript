const container = document.getElementById('container')


function isPrime (num)
{
  if (num < 2){
    return false
  }
 for (let i = 2; i <= Math.sqrt(num); i++){
     if (num % i === 0)
     {
         return false
     }
 }
 return true;
}

for (let i = 1; i <= 100; i++)
{
    newElement = document.createElement('div')
    container.appendChild(newElement)
    newElement.className = 'number'
    newElement.textContent = i;
    if (i%2 == 0)
    {
        
        newElement.classList.add('evenNum')
    }
    if (i%2 != 0)
    {
        newElement.classList.add('oddNum')
    }
  
   if (isPrime(i))
   {
    newElement.classList.add('primeNum')
   }
}
