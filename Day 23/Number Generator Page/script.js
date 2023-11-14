const numContainer = document.getElementById('numContainer')
const num = document.getElementById('numInput');
const generateBtn = document.getElementById('generateBtn')

function isPrime (n){
    if (n < 2){

        return false 
    }
    for (let i = 2; i <= Math.sqrt(n); i++){
        if (n % i === 0){
            return false
        }
    }
    return true
}
generateBtn.addEventListener('click', () =>{
    count = num.value
    numContainer.innerHTML= ''
    for (let i = 1; i <= count; i++)
    {
      newDiv =  document.createElement('div')
      numContainer.appendChild(newDiv)
      newDiv.textContent = i
      newDiv.className = 'number'
      if (i%2 == 0)
      {
        newDiv.classList.add('evenNum')
      }
      else {
        newDiv.classList.add('oddNum')
      }
      if (isPrime(i)){
        newDiv.classList.add('primeNum')

      }
   }

})

