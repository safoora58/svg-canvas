
//rectangular with a text 
var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
ctx.font="30px Comic Sans MS";
ctx.fillStyle = "blue";
ctx.textAlign = "center";
ctx.strokeText("Hello World", 100, 50);
ctx.fillText("box", canvas.width/2, canvas.height/1.3);


//rectangular with a line 
var c = document.getElementById("myCanvas1");
var ctx2 = c.getContext("2d");
ctx2.moveTo(0, 0);
ctx2.lineTo(300, 200);
ctx2.stroke();


//circle
var c2 = document.getElementById("myCanvas2");
var ctx3 = c2.getContext("2d");
ctx3.beginPath();
ctx3.arc(95, 50, 40, 0, 2 * Math.PI);
ctx3.stroke();

//rectangular with fillstyle 
const c3 = document.querySelector('#myCanvas3');
const ctx4 = c3.getContext('2d');
ctx4.fillStyle = 'green';
ctx4.fillRect(10, 10, 100, 100);

// 3 rectangular 
const c4 = document.querySelector('#myCanvas4');
const ctx5 = c4.getContext('2d');
ctx5.fillStyle = 'black';
ctx5.fillRect(25, 25, 100, 100);
ctx5.clearRect(45, 45, 60, 60);
ctx5.strokeRect(50, 50, 50, 50);


// triangle 
const c5 = document.querySelector('#myCanvas5');
const ctx6 = c5.getContext('2d');
ctx6.fillStyle = 'red';
ctx6.beginPath();
ctx6.moveTo(75, 50);
ctx6.lineTo(100, 75);
ctx6.lineTo(100, 25);
ctx6.fill();