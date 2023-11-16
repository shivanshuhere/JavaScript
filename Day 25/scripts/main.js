const graphTitle = document.querySelector('.graph-title');
const popBtn = document.querySelector('.population');
const langBtn = document.querySelector('.languages');
const graphWrap = document.querySelector('#stat');

popBtn.addEventListener('click', ()=>{
    graphTitle.textContent = "10 Most popular countries in the world";
    const popArr = countries.sort((a,b)=> b.population - a.population)
    const popTen = popArr.slice(0, 10);
})

langBtn.addEventListener('click', ()=>{
    graphTitle.textContent = "10 Most spoken languages in the world";
    
})

