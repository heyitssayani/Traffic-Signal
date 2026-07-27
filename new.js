const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");

function turnOff(){
    red.classList.remove("active");
    yellow.classList.remove("active");
    green.classList.remove("active");
}

function showRed(){
    turnOff();
    red.classList.add("active");
}

function showYellow(){
    turnOff();
    yellow.classList.add("active");
}

function showGreen(){
    turnOff();
    green.classList.add("active");
}