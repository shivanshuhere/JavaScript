const people = {
    name : "Maya",
    age : 19,
    isMarried : false,
    contact : 7876555689,
    getFullName  () {
        return (this.name + ` Kapoor`);
    } 
}


people.name = "Mahesh";
people.age  = 20;
people.skill = ['css', 'java', 'cpp'];


const copy = Object.assign({}, people);

const entries = Object.entries(copy);


console.log(people.hasOwnProperty('id'));
people.id = 123924;
console.log(people.hasOwnProperty('id'));

