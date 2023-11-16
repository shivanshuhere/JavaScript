let gravity = 10;
const massField = document.querySelector('#mass');
const desc  = document.querySelector('.description');
const btn = document.querySelector('#calcBtn');
const planet = document.querySelector(".selectPlanet");
const imgDiv = document.querySelector(".image");

// select planet
planet.addEventListener("change", () => { 
    if (planet.value == "none") {
        desc.innerHTML = "";
        imgDiv.innerHTML = ""
        desc.textContent = "Select a planet";
        desc.classList = 'des1'
      }


  if (planet.value == "earth") {
    imgDiv.innerHTML = "";
    let img = document.createElement("img");
    imgDiv.appendChild(img);
    img.setAttribute("src", "./images/earth.png");
    gravity = 10;
  }
  if (planet.value == "mars") {
    imgDiv.innerHTML = "";
    let img = document.createElement("img");
    imgDiv.appendChild(img);
    img.setAttribute("src", "./images/mars.png");
    gravity = 3.7;
  }
  if (planet.value == "jupiter") {
    imgDiv.innerHTML = "";
    let img = document.createElement("img");
    imgDiv.appendChild(img);
    img.setAttribute("src", "./images/jupiter.png");
    gravity = 23;
  }
  if (planet.value == "mercury") {
    imgDiv.innerHTML = "";
    let img = document.createElement("img");
    imgDiv.appendChild(img);
    img.setAttribute("src", "./images/mercury.png");
    gravity = 3.7;
  }
  if (planet.value == "moon") {
    imgDiv.innerHTML = "";
    let img = document.createElement("img");
    imgDiv.appendChild(img);
    img.setAttribute("src", "./images/moon.png");
    gravity = 1.6;
  }
  if (planet.value == "neptune") {
    imgDiv.innerHTML = "";
    let img = document.createElement("img");
    imgDiv.appendChild(img);
    img.setAttribute("src", "./images/neptune.png");
    gravity = 11;
  }
  if (planet.value == "pluto") {
    imgDiv.innerHTML = "";
    let img = document.createElement("img");
    imgDiv.appendChild(img);
    img.setAttribute("src", "./images/pluto.png");
    gravity = 0.7;
  }
  if (planet.value == "saturn") {
    imgDiv.innerHTML = "";
    let img = document.createElement("img");
    imgDiv.appendChild(img);
    img.setAttribute("src", "./images/saturn.png");
    gravity = 9;
  }
  if (planet.value == "venus") {
    imgDiv.innerHTML = "";
    let img = document.createElement("img");
    imgDiv.appendChild(img);
    img.setAttribute("src", "./images/venus.png");
    gravity = 8.9;

  }
  if (planet.value == "uranus") {
    imgDiv.innerHTML = "";
    let img = document.createElement("img");
    imgDiv.appendChild(img);
    img.setAttribute("src", "./images/uranus.png");
    gravity = 8.7;
  }
});

// calculate mass



btn.addEventListener('click', function(){
  let mass = massField.value;
  let res =  null; 
  res = Math.floor(mass*gravity);
  desc.textContent = `${res} Newtons`;
  desc.classList = 'des1';
})



