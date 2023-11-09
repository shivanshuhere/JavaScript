// exercise 1
const firstPara = document.querySelector('p');
// 1


const allPara = document.querySelectorAll('p'); // 3


allPara.forEach((para, i)=> {
    para.setAttribute('id', `para${i+1}`);
}); // adding id's to each para
const para1 = document.querySelector('#para1');
const para2 = document.querySelector('#para2');
const para3 = document.querySelector('#para3');
const para4 = document.querySelector('#para4');
2


allPara.forEach((para, i) => {
    console.log( `content of para ${i+1}`, para.textContent);
}) 
// 4

para4.textContent = 'Fourth Paragraph'
 // 5

 allPara.forEach(para =>{
    para.setAttribute('class', 'para');
 }) // setAttribute

 allPara[0].className = 'paraOne'; //without setAttribute






