const search = document.querySelector('#searchInput');
let countriesLower = countries.map(ele=> ele.toLowerCase())
const wrap = document.querySelector('#wrapper')

let reqArr = []
search.addEventListener('input', e=>{
    reqArr = []
    // search with first word
    countriesLower.forEach(ele=>{
        if ( ele.startsWith(e.target.value.toLowerCase())){
            reqArr.push(ele)
        }
    })
    // // search with any word
    // countriesLower.forEach(ele=>{
    //     if ( ele.includes(e.target.value)){
    //         reqArr.push(ele)
    //     }
    // })
    // a - z default
    reqArr.sort()
    // z -a sort 

    wrap.innerHTML = ''
    reqArr.forEach(ele=>{
        
        let wrapper = document.createElement('div')
        let box = document.createElement('div')

        wrapper.classList = "m-5 w-28 h-28 flex justify-center align-middle rounded-lg bg-slate-600 text-slate-200 border-slate-300 border-4"
        box.classList = "flex place-self-center text-center"
        
        box.textContent = `${ele.toUpperCase()}`

        wrapper.appendChild(box)
        wrap.appendChild(wrapper)
    })
    
})
