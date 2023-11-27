const search = document.querySelector('#searchInput');
let countriesLower = countries.map(ele=> ele.toLowerCase())
let reqArr = []
search.addEventListener('input', e=>{
    reqArr = []
    // search with first word
    countriesLower.forEach(ele=>{
        if ( ele.startsWith(e.target.value)){
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

    
    console.log(reqArr)
})
