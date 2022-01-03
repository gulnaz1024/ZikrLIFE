let ellipseSize;
let axialElongation; 

if (window.innerWidth < 500 && window.innerHeight < 700) {
  ellipseSize = window.innerHeight/2.2;
  axialElongation = 1.3;
} else if (window.innerWidth < 500 && window.innerHeight < 900) {
  ellipseSize = window.innerHeight/2.2;
  axialElongation = 1.2;
} else if (window.innerWidth < 900 && window.innerHeight < 1200) {
  ellipseSize = window.innerHeight/2;
  axialElongation = 1.1;
}
else if (window.innerWidth < 1200 && window.innerHeight < 1000) {
  ellipseSize = window.innerHeight;
  axialElongation = 0.6;
} else if (window.innerWidth < 1200 && window.innerHeight < 1500) {
  ellipseSize = window.innerHeight/1.6;
  axialElongation = 0.9;
} else {
  ellipseSize = window.innerHeight;
  axialElongation = 0.6;
}

let shiftX;
if (window.innerWidth < 400) shiftX = Math.round(window.innerWidth / 2.25);
else if (window.innerWidth < 500) shiftX = Math.round(window.innerWidth / 2.5);
else if (window.innerWidth < 1200 && window.innerHeight > 1300) shiftX = Math.round(window.innerWidth / 3);
else if (window.innerWidth < 1000) shiftX = Math.round(window.innerWidth / 3);
else if (window.innerWidth < 1500) shiftX = Math.round(window.innerWidth / 11);
else shiftX = Math.round(window.innerWidth / 8);

let xPosition = window.innerWidth / 2 - shiftX;
let yPosition = window.innerHeight / 2;

let pi = Math.PI;
let speed = pi/10;

let posInUnitСircleSun = pi;
let posInUnitСircleMoon = 0;

function count() {  
  if (localStorage.count) {
    //localStorage.count++;
    move_by_ellipse();
    move_by_line()
  } else {
    localStorage.count = 1;
  }
  localStorage.count++;
  document.getElementById("zikrs").innerHTML=`${localStorage.count}` ;
}

function reset() {  
  localStorage.count = 0;
  document.getElementById("zikrs").innerHTML=`${localStorage.count}` ;
  document.getElementById('sunID').style.left=  (ellipseSize*Math.cos(pi)) + xPosition + "px";
  document.getElementById('sunID').style.top= (ellipseSize*axialElongation*Math.sin(pi)) + yPosition + "px";
  
  document.getElementById('moonID').style.left=  (ellipseSize*Math.cos(0)) + xPosition + "px";
  document.getElementById('moonID').style.top= (ellipseSize*axialElongation*Math.sin(0)) + yPosition + "px";
}
reset()

function move_by_ellipse() {
  let xNewPositionSun= (ellipseSize*Math.cos(posInUnitСircleSun)) + xPosition;
  let yNewPositionSun= (ellipseSize*axialElongation*Math.sin(posInUnitСircleSun)) + yPosition;

  let xNewPositionMoon= (ellipseSize*Math.cos(posInUnitСircleMoon)) + xPosition;
  let yNewPositionMoon= (ellipseSize*axialElongation*Math.sin(posInUnitСircleMoon)) + yPosition;

  posInUnitСircleSun += speed;
  posInUnitСircleMoon += speed;

  let offsetSun = document.getElementById("sunID");
  offsetSun.style.top = yNewPositionSun + "px";
  offsetSun.style.left = xNewPositionSun + "px";

  let offsetMoon = document.getElementById("moonID");
  offsetMoon.style.top = yNewPositionMoon + "px";
  offsetMoon.style.left = xNewPositionMoon + "px";

}

function move_by_line() {
  let step = 50;
  let x = document.getElementById('sunID').offsetTop;
  x -= step;
  document.getElementById('sunID').style.top= x + "px";
}

//Reset function for only Y-axis movement
// function reset() {  
//   localStorage.count = 0;
//   document.getElementById("zikrs").innerHTML=`${localStorage.count}` ;
//   document.getElementById('sunID').style.top= 350 + "px";
// }
// reset()