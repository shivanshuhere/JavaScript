
// level : 1
const dog = {
 name : "Tuffy",
 legs : 4 ,
 color : "Snow White",
 age : 10 ,
 bark () {
    return("woof! woof!")
 }
}

// console.log(dog);
// console.log(dog.age, dog.name, dog.legs, dog.color, dog.bark());
dog.bark();

dog.breed = "bts";
dog.getInfo = function()
{
    return (`${this.name}, ${this.breed}`);
}

// console.log(dog.getInfo());


// level : 2

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: [ 'CSS' ],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

// brute force
  const copyUsers = Object.assign({}, users);

  const userName =  Object.keys(copyUsers);
  
   if (copyUsers.Alex.skills.length != 1)
   {
    console.log(userName[0]);
   }

   if (copyUsers.Alex.skills.length != 1)
   {
    console.log(userName[1]);
   }
   if (copyUsers.Asab.skills.length != 1)
   {
    console.log(userName[2]);
   }
   if (copyUsers.Brook.skills.length != 1)
   {
    console.log(userName[3]);
   }
   if (copyUsers.Daniel.skills.length != 1)
   {
    console.log(userName[4]);
   }
   if (copyUsers.Thomas.skills.length != 1)
   {
    console.log(userName[5]);
   }
   if (copyUsers.Paul.skills.length != 1)
   {
    console.log(userName[6]);
   }

