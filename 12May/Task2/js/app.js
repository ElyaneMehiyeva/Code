var ball = document.querySelector(".box");
var area = document.querySelector(".area");

var areavalue = document.getElementById("areavalue");
var ballvalue = document.getElementById("ballvalue");
var stepvalue = document.getElementById("stepvalue");

areavalue.addEventListener("change", function (e) {
    if (areavalue.value > 700) {
        areavalue.value = 700;
    }
    if (areavalue.value < 100) {
        areavalue.value = 100;
    }
    area.style.width = Number(areavalue.value) + "px";
    area.style.height = Number(areavalue.value) + "px";
})

ballvalue.addEventListener("change", function (e) {
    if (ballvalue.value > 100) {
        ballvalue.value = 100;
    }
    if (ballvalue.value < 30) {
        ballvalue.value = 30;
    }
    ball.style.width = Number(ballvalue.value) + "px";
    ball.style.height = Number(ballvalue.value) + "px";
})

stepvalue.addEventListener("change", function (e) {
    if (stepvalue.value > 30) {
        stepvalue.value = 30;
    }
    if (stepvalue.value < 5) {
        stepvalue.value = 5;
    }
})

window.addEventListener("keydown", function (e) {
    if (e.key == "r") {
        ball.style.top = ((Number(areavalue.value) - Number(ballvalue.value)) / 2) + "px";
        ball.style.left = ((Number(areavalue.value) - Number(ballvalue.value)) / 2) + "px";
    }
    if (e.key == "ArrowUp") {
        if (Number(ball.offsetTop <= 0)) {
            ball.style.top = 0 + "px";
        } else {
            ball.style.top = Number(ball.offsetTop) - Number(stepvalue.value) + "px";
        }
    }
    if (e.key == "ArrowLeft") {
        if (Number(ball.offsetLeft <= 0)) {
            ball.style.left = 0 + "px";
        } else {
            ball.style.left = Number(ball.offsetLeft) - Number(stepvalue.value) + "px";
        }
    }
    if (e.key == "ArrowDown") {
        ball.style.top = Number(ball.offsetTop) + Number(stepvalue.value) + "px";
        if (Number(ball.offsetTop) > (Number(areavalue.value) - Number(ballvalue.value))) {
            ball.style.top = Number(areavalue.value) - Number(ballvalue.value) + "px";
        }
    }
    if (e.key == "ArrowRight") {
        ball.style.left = Number(ball.offsetLeft) + Number(stepvalue.value) + "px";
        if (Number(ball.offsetLeft) > (Number(areavalue.value) - Number(ballvalue.value))) {
            ball.style.left = (Number(areavalue.value) - Number(ballvalue.value)) + "px";
        }
    }
});