let MacCheese;
MacCheese = 4;
const PointsLabel =  document.getElementById("MacCheesePoints")

function UpdatePoints() {
   PointsLabel.textContent = "Points: " + MacCheese;
}

setInterval(UpdatePoints, 100);