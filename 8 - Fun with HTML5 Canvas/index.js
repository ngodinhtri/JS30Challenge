const canvasElement = document.querySelector("#draw");
//set full screen
canvasElement.width = window.innerWidth;
canvasElement.height = window.innerHeight;

//getContext
const ctx = canvasElement.getContext("2d");
ctx.strokeStyle = "red";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;

//Update size canvas element when resize the window
window.onresize = () => {
  canvasElement.width = window.innerWidth;
  canvasElement.height = window.innerHeight;
};

//Draw
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let direction = false;
let hue = 0; //red

canvasElement.onmousedown = (e) => {
  isDrawing = true;
  //set start position
  [lastX, lastY] = [e.offsetX, e.offsetY];
};
canvasElement.onmouseup = (e) => {
  isDrawing = false;
  //clear screen
  ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
};
canvasElement.onmouseout = (e) => {
  isDrawing = false;
};
canvasElement.onmousemove = draw;

function draw(e) {
  if (!isDrawing) return;
  //Draw the line
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  //Update position and color
  [lastX, lastY] = [e.offsetX, e.offsetY];
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  hue++;

  //change the lineWidth
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if (!direction) ctx.lineWidth += 0.5;
  else ctx.lineWidth -= 0.5;
}
