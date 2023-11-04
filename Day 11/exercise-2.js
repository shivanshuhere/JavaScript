const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTML', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
    ]

    for (const {name, scores, skills,age} of users){
        // console.log(name,scores,age);
        
        for (const skill of skills)
        {
            // console.log(skill);
        }
    }// 1

    for (const {name, score, skills, age} of users)
    {
        let i = 0;
        for (const skill of skills)
        {
             i = i +1;
        }
        if (i < 2)
        {
            console.log(name)
        }
    } //2