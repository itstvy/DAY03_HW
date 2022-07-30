let myCanvas = document.getElementById("my-Canvas");
const WIDTH = myCanvas.width;
const HEIGHT = myCanvas.height;

let pen = myCanvas.getContext("2d");
let toggle = true;

let body = document.getElementsByTagName("body")[0];

body.onclick = function () {
    moMat = !moMat;
}



function drawFace(mat) {
    pen.fillStyle = 'yellow';
    pen.strokeStyle = "black";
    pen.lineWidth = 10;
    pen.beginPath();
    pen.arc(WIDTH / 2, HEIGHT / 2, 200, 0, Math.PI * 2);
    pen.stroke();
    pen.fill();


    if (mat == true) {
        // Mat phai
        pen.beginPath();
        pen.fillStyle = 'blue';
        pen.lineCap = "round";
        pen.arc(450, 170, 35, 0, Math.PI * 2);
        pen.stroke();
        pen.fill();

        pen.beginPath();
        pen.fillStyle = 'black';
        pen.lineCap = "round";
        pen.arc(450, 170, 10, 0, Math.PI * 2);
        pen.stroke();


        //Mat trai
        pen.beginPath();
        pen.fillStyle = 'blue';
        pen.lineCap = "round";
        pen.arc(270, 170, 35, 0, Math.PI * 2);
        pen.stroke();
        pen.fill();

        pen.beginPath();
        pen.fillStyle = 'black';
        pen.lineCap = "round";
        pen.arc(270, 170, 10, 0, Math.PI * 2);
        pen.stroke();

        pen.fillStyle = 'red';
        pen.strokeStyle = "black";
        pen.lineWidth = 5;
        pen.lineCap = "round";
        pen.beginPath();
        pen.ellipse(360, 315, 80, 60, 0, 0, Math.PI);
        pen.fill();
        pen.stroke();

    } else {
        //  Mat nham
        pen.beginPath();
        pen.lineWidth = 5;
        pen.lineCap = "round";
        pen.arc(450, 150, 40, 0.8 * Math.PI, 0.2 * Math.PI, true);
        pen.stroke();

        // Mat nham
        pen.beginPath();
        pen.lineWidth = 5;
        pen.lineCap = "round";
        pen.arc(270, 150, 40, 0.8 * Math.PI, 0.2 * Math.PI, true);
        pen.stroke();


        //mieng
        pen.beginPath();
        pen.lineWidth = 10;
        pen.moveTo(290, 320);
        pen.lineTo(430, 320);
        pen.stroke();
    }


}


const FPS = 3.5;
let startFrameTime = Date.now();


let moMat = true;
function gameLoop() {
    pen.clearRect(0, 0, WIDTH, HEIGHT);
    let currentFrameTime = Date.now();
    let deltaTime = currentFrameTime - startFrameTime;
    let actualFPS = 1000 / deltaTime;
    pen.textStyle = "20px Arial";
    pen.fillText("FPS: " + actualFPS.toFixed(2), 10, 20);
    startFrameTime = currentFrameTime;

    drawFace(moMat)


    console.log(startFrameTime);
}

setInterval(gameLoop, 1000 / FPS);









