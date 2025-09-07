let MacCheese;
MacCheese = 100;
let MacOnClick = 1;
let Mac1Bought = 0;
let Mac2Bought = 0;
let MacPerSec = 0;
let Warning;
let Warning2;
const PointsLabel =  document.getElementById("MacCheesePoints")
const Mac1 = document.getElementById("Mac1")
const Mac1Img = document.getElementById("Mac1Img")
const ButtonMac1 = document.getElementById("ButtonMac1")
const ButtonMac2 = document.getElementById("ButtonMac2")



function MacClick(){
    MacCheese += MacOnClick;
    
    
}
function fButtonMac1(){
    if (MacCheese >= 100){
        MacOnClick += 1 
        MacCheese -= 100
        Mac1Bought++ 
        ButtonMac1.style.backgroundColor = 'orange' 
    } else {
        ButtonMac1.style.backgroundColor = 'black'
    } 
}
function fButtonMac2(){
    if (MacCheese >= 200){
        MacPerSec += 1 
        MacCheese -= 200
        Mac2Bought++ 
        ButtonMac2.style.backgroundColor = 'blue' 
    } else {
        ButtonMac2.style.backgroundColor = 'black'
    } 
}
function Mac1Colors(){
    if (MacCheese >= 100){
        ButtonMac1.style.backgroundColor = 'orange' 
        Warning = ""
    } else {
        ButtonMac1.style.backgroundColor = 'gray'
        Warning = "NOT ENOUGH"
    } 
}
function Mac2Colors(){
    if (MacCheese >= 100){
        ButtonMac2.style.backgroundColor = 'orange' 
        Warning2 = ""
    } else {
        ButtonMac2.style.backgroundColor = 'gray'
        Warning2 = "NOT ENOUGH"
    } 
}
function UpdateText(){
    ButtonMac1.textContent = "+1 Per Click🧀Cost: 100🧀: " + Mac1Bought + " " + Warning
    ButtonMac2.textContent = "+1 Per Second🧀Cost: 200🧀: " + Mac2Bought + " " + Warning2
    PointsLabel.textContent = "Points: " + MacCheese;
}
function MacPerSecond(){
    MacCheese += MacPerSec
}




Mac1.addEventListener("click", MacClick);
ButtonMac1.addEventListener("click", fButtonMac1)
ButtonMac2.addEventListener("click", fButtonMac2)


setInterval(MacPerSecond, 1000);
setInterval(Mac1Colors, 100);
setInterval(Mac2Colors, 100);
setInterval(UpdateText, 100);