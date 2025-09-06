let MacCheese;
MacCheese = 4;
let MacOnClick = 1;
const PointsLabel =  document.getElementById("MacCheesePoints")
const Mac1 = document.getElementById("Mac1")
const Mac1Img = document.getElementById("Mac1Img")


function UpdatePoints() {
   PointsLabel.textContent = "Points: " + MacCheese;
}
function MacClick(){
    MacCheese += MacOnClick;
    
    
}



Mac1.addEventListener("click", MacClick);


setInterval(UpdatePoints, 100);