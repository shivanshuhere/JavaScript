const countriesAPI = 'https://jsonplaceholder.typicode.com/todos/1'
const countriesFetch = async () => {
    try {
        const response = await fetch(countriesAPI);
        const country = await response.json();
        console.log(country);
    }
    catch (err)
    {
        console.log(err);
    }
}
countriesFetch();
//1

const catsAPI = 'https://jsonplaceholder.typicode.com/todos/1'
const catsFetch = async () => {
    try{
        const response = await fetch(catsAPI);
        const cats = await response.json();
        console.log(cats);
    }
    catch(err){
        console.log(err);
    }
}
catsFetch();
