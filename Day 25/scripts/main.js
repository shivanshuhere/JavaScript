const graphTitle = document.querySelector('.graph-title');
const popBtn = document.querySelector('.population');
const langBtn = document.querySelector('.languages');
const graphWrap = document.querySelector('#stat');

popBtn.addEventListener('click', ()=>{
    graphTitle.textContent = "10 Most popular countries in the world";
    let popArr = countries.sort((a,b)=> b.population - a.population)
    let popTen = popArr.slice(0, 10);

    popTen.forEach(pop => {
        //name
        let name = document.createElement('p')
        name.textContent = pop.name
        graphWrap.appendChild(name)

        // graph
        let graph = document.createElement('div')
        graph.classList = 'popGraph'
        graphWrap.appendChild(graph)


        // population
        let popNum = document.createElement('p')
        popNum.textContent = pop.population
        graphWrap.appendChild(popNum)


    })
})
langBtn.addEventListener('click', ()=>{
    graphTitle.textContent = "10 Most spoken languages in the world";  
})