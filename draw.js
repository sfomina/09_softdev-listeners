var svg = document.getElementById("s");
var clear = document.getElementById("clear");




var clearing = function(){
    svg.innerHTML = "";
}


var drawCircle = function(e){
    mouseX = e.offsetX.toString();
    mouseY = e.offsetY.toString();
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("fill", "black");
    circle.setAttribute("cx", mouseX);    
    circle.setAttribute("cy", mouseY);
    circle.setAttribute("r", "10");
    svg.appendChild(circle);
    circle.addEventListener("click", clickType);
    
}

var clickType = function(e){
    if (this.getAttribute("fill") == "red"){
	svg.removeChild(this);
	e.stopPropagation();
	drawRandom();
    }
    else {
	changeColor(this);
	e.stopPropagation();
	console.log(svg);
    }
}

var drawRandom = function(){
    circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", (Math.floor(Math.random() * 500)).toString());
    circle.setAttribute("cy", (Math.floor(Math.random() * 500)).toString());
    circle.setAttribute("r", "10");
    circle.setAttribute("fill", "black");
    svg.appendChild(circle);
    circle.addEventListener("click", clickType);
}

var changeColor = function(c){
    c.setAttribute("fill" , "red");
}


svg.addEventListener("click" , drawCircle);
clear.addEventListener("click", clearing);
