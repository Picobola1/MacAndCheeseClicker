let MacCheese;
MacCheese = 4;
let MacOnClick = 1;
let Mac1Bought = 0;
const PointsLabel =  document.getElementById("MacCheesePoints")
const Mac1 = document.getElementById("Mac1")
const Mac1Img = document.getElementById("Mac1Img")
const ButtonMac1 = document.getElementById("ButtonMac1")



function MacClick(){
    MacCheese += MacOnClick;
    
    
}
function fButtonMac1(){
    if (MacCheese >= 5){
        MacOnClick += 1 
        MacCheese -= 5
        Mac1Bought++ 
        ButtonMac1.style.backgroundColor = 'orange' 
    } else {
        ButtonMac1.style.backgroundColor = 'black'
    }
    
    
}
function UpdateText(){
    ButtonMac1.textContent = "+1 Per Click🧀🧀🧀🧀: " + Mac1Bought
    PointsLabel.textContent = "Points: " + MacCheese;
}




Mac1.addEventListener("click", MacClick);
ButtonMac1.addEventListener("click", fButtonMac1)


setInterval(UpdateText, 100);