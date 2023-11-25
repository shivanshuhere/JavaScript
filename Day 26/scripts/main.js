// btns
const startWordBtn = document.querySelector('#stWordBtn')
const anyWordBtn = document.querySelector('#anyWordBtn')
const sortBtn = document.querySelector('#sortBtn')
const searchField = document.querySelector('#searchInput')
const searchBtn = document.querySelector('#searchBtn')
const lowerCountries = countries.map(ele => ele.toLowerCase())

//  wraper 
const wrap = document.getElementById('wrapper')

let reqArr = [] // required countreis
searchField.addEventListener('input', e=>{
    let input = ''; input = e.target.value.toLowerCase() // input string
    reqArr = []
    // search with any word
    // lowerCountries.forEach(ele=> {
    //     if (ele.includes(input)) {
    //     reqArr.push(ele.toUpperCase())
    //     }
    // })

    // search with starting word
    lowerCountries.forEach(ele=> {
        if (ele.startsWith(input)) {
        reqArr.push(ele.toUpperCase())
        }
    })

    // inserting coutnries into dom
    reqArr.forEach(ele=>{
        wrap.innerHTML = ""
        const box = document.createElement('div')
        box.classList = "m-5 w-28 h-28 flex justify-center align-middle rounded-lg bg-violet-300 border-red-600 border-4";

        wrap.appendChild(box)
    })
        
    
})

startWordBtn.addEventListener('click',{

})
anyWordBtn.addEventListener('click',{
    
})

searchBtn.addEventListener('click',{
    
})