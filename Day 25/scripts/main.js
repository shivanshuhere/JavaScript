const graphTitle = document.querySelector('.graph-title');
const popBtn = document.querySelector('.population');
const langBtn = document.querySelector('.languages');
const graphWrap = document.querySelector('#stat');

// convert to array
let totLangArr = [];
totLangArr = countries.map(ele => ele.languages).flat()

// store the count in object 
let langCount = {}
totLangArr.forEach(ele => {
  langCount[ele]  = (langCount[ele] || 0 ) + 1;
})

// store the lang and count in array
let langArr = [];
for (var lang in langCount) {
    langArr.push([lang, langCount[lang]])
}

let langSum = 0;
for (i = 0; i< langArr.length; i++){
  
    langSum =  langSum + langArr[i][1]
}

// sort the array
let topLang = langArr.sort((a, b)=>{
  return b[1] - a[1];
})
// slice to get top 10 languages
let topTenLang = topLang.slice(0, 10) 

// population btn
popBtn.addEventListener('click', ()=>{
    graphWrap.innerHTML = ""
    graphTitle.textContent = "10 Most popular countries in the world";
    let popArr = countries.sort((a,b)=> b.population - a.population)
    let popTen = popArr.slice(0, 10);
    let totPop = 0;
    for (let i = 0; i < popArr.length; i++ )
    {
      
        totPop += popArr[i].population;
    } 
    popTen.forEach(pop => {
        
        let per = pop.population / totPop * 100;

        // container
        let container = document.createElement('div')
        container.classList = 'container'
        graphWrap.appendChild(container)
        //name
        let name = document.createElement('p')
        name.textContent = pop.name
        name.classList = 'popName, popEle'
        container.appendChild(name)

        // graph
        let graph = document.createElement('div')
        graph.style.width = `${per}%`
        graph.style.height = `2rem`
        graph.style.backgroundColor = 'yellow';
        graph.style.border = 'solid black 2px';
        graph.classList = 'popGraph';
        container.appendChild(graph)


        // population
        let popNum = document.createElement('p')
        popNum.textContent = pop.population
        popNum.classList = 'popNum, popEle'
        container.appendChild(popNum)


    })
})

// lang btn
langBtn.addEventListener('click', ()=>{
    graphTitle.textContent = "10 Most spoken languages in the world";  
    graphWrap.innerHTML = ''
    let totLangArr = countries.map(ele => ele.languages).flat()
    // loop to insert ele info
    topTenLang.forEach(lang=>{


    // container
    let container = document.createElement('div');
    container.classList = 'container'

    // lang Name div
    let name = document.createElement('p');
    name.classList = 'popName, popEle'
    name.textContent = lang[0] // key

    // graph
    let graphWidth = lang[1]/ langSum *1000;
    let graph = document.createElement('div');
    graph.style.width = `${graphWidth}px`
    graph.style.height = `2rem`
    graph.style.backgroundColor = 'yellow';
    graph.style.border = 'solid black 2px';
    graph.classList = 'popGraph';

    // number
    let num = document.createElement('p');
    name.classList = 'popName, popEle'
    num.textContent = lang[1] //value


    // append
    container.appendChild(name)
    container.appendChild(graph)
    container.appendChild(num)
    graphWrap.appendChild(container);
})
    // loop ends here
    
})