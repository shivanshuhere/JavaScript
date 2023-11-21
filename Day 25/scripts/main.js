const graphTitle = document.querySelector('.graph-title');
const popBtn = document.querySelector('.population');
const langBtn = document.querySelector('.languages');
const graphWrap = document.querySelector('#stat');

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
langBtn.addEventListener('click', ()=>{
    graphTitle.textContent = "10 Most spoken languages in the world";  
    graphWrap.innerHTML = ''
})