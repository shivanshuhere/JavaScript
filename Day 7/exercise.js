function fullname() {
  let firstName = "Shivanshu";
  let space = " ";
  let lastName = "Koundal";
  return firstName + space + lastName;
}
console.log(fullname()); // 1

function fullName(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  return fullName;
}
console.log(fullName("Mahesh", "Keshwala")); // 2

function addNumbers(one, two) {
  let sum = one + two;
  return sum;
}
console.log(addNumbers(10, 90)); // 3

function areaOfRectangle(length, widht) {
  let area = length * widht;
  return area;
}
console.log(areaOfRectangle(20, 100)); // 4

function perimeterOfRectangle(length, widht) {
  let peri = (length + widht) * 2;
  return peri;
}
console.log(perimeterOfRectangle(10, 30)); // 5

function volumeOfRectPrism(l, w, h) {
  let vol = l * w * h;
  return vol;
}
console.log(volumeOfRectPrism(10, 12, 9)); // 6

function areaOfCircle(rad) {
  const PI = Math.PI;
  let area = rad ** 2 * PI;
  return area;
}
console.log(areaOfCircle(10)); // 7

function cirumOfCircle(r) {
  let circum = 2 * Math.PI * r;
  return circum;
}
console.log(cirumOfCircle(10)); // 8

function density(mass, vol) {
  let dens = mass / vol;
  return dens;
}
console.log(density(809, 39)); // 9

const speed = (dis, time) => {
  let speed = dis / time;
  return speed;
};
console.log(speed(50, 10)); // 11

const convertCelsiusToFahrenheit = (cel) => (cel * 9) / 5 + 32;
console.log(convertCelsiusToFahrenheit(100)); // 12

const bmi = (w, h) => {
  let bmi1 = (w / Math.pow(h / 100, 2)).toFixed(1);
  switch (bmi1) {
    case bmi1 < 18.5: {
      return "Under Weight";
      break;
    }
    case bmi1 >= 18.5 && bmi1 <= 24.9: {
      return "Normal Weight";
      break;
    }
    case bmi1 >= 25 && bmi1 <= 29.9: {
      return "Over Weight";
      break;
    }
    case bmi1 >= 30: {
      return "Over Weight";
      break;
    }
    default:
      return "Wrong Input !";
  }
};
console.log(bmi(54, 172)); // 12

const checkSeason = (month) => {
  if (month > 4 && month < 8) {
    return "Summer";
  } else if (month > 7 && month < 11) {
    ("Autumn");
  } else if ((month > 10 && month < 13) || month == 1) {
    return "Winter";
  } else {
    return "Spring";
  }
}; // 13

function findMax() {
  let max = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > arguments[i + 1]) {
      big = arguments[i];
    }
  }
  return max;
}
