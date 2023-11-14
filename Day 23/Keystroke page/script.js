const container = document.querySelector('html');
const div = document.querySelector('.container')
const newDiv = document.createElement('div');
const context = document.createElement('p');
const context2 = document.createElement('p');

container.addEventListener('keypress', e => {
    div.innerHTML = ""
    context.textContent = `You just pressed : ${e.key}  `;
    context2.textContent =  `Key code is : ${e.keyCode}`;
    newDiv.className = 'keyContainer'
    context.className = 'keyContext'
    div.appendChild(newDiv);
    newDiv.appendChild(context);
    newDiv.appendChild(context2);
    if (e.keyCode == 32)
    {
        context.textContent = "You just pressed : Space";
    }  
      container.addEventListener('keydown', event =>{

    if (event.shiftKey) {
     context.textContent = `You just pressed : Shift `;
    context2.textContent =  `Key code is : ${event.keyCode}`;
    }

    if (event.altKey) {
    context.textContent = `You just pressed : Alt `;
    context2.textContent =  `Key code is : ${event.keyCode}`;
    }

    if (event.ctrlKey) {
     context.textContent = `You just pressed : Ctrl `;
    context2.textContent =  `Key code is : ${event.keyCode}`;

    if (event.keyCode >= 112 && event.keyCode <= 123) {
        switch(event.key) {
            case 112: {
                context.textContent = `You just pressed : F1 `;
                context2.textContent =  `Key code is : ${event.keyCode}`;
            }
            case 113: {
                context.textContent = `You just pressed : F2 `;
                context2.textContent =  `Key code is : ${event.keyCode}`;
            }
            case 114: {
                context.textContent = `You just pressed : F3 `;
                context2.textContent =  `Key code is : ${event.keyCode}`;
            }case 115: {
                context.textContent = `You just pressed : F4 `;
                context2.textContent =  `Key code is : ${event.keyCode}`;
            }case 116: {
                context.textContent = `You just pressed : F5 `;
                context2.textContent =  `Key code is : ${event.keyCode}`;
            }case 117: {
                context.textContent = `You just pressed : F6 `;
                context2.textContent =  `Key code is : ${event.keyCode}`;
            }case 118: {
                context.textContent = `You just pressed : F7 `;
                context2.textContent =  `Key code is : ${event.keyCode}`;
            }case 119: {
                context.textContent = `You just pressed : F8 `;
                context2.textContent =  `Key code is : ${event.keyCode}`;
            }case 120: {
                context.textContent = `You just pressed : F9 `;
                context2.textContent =  `Key code is : ${event.keyCode}`;
            }case 121: {
                context.textContent = `You just pressed : F10 `;
                context2.textContent =  `Key code is : ${event.keyCode}`;
            }case 122: {
                context.textContent = `You just pressed : F11 `;
                context2.textContent =  `Key code is : ${event.keyCode}`;
            }case 123: {
                context.textContent = `You just pressed : F12 `;
                context2.textContent =  `Key code is : ${event.keyCode}`;
            }
            
        }
    }
    }
  });
});

// upkey