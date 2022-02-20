var last_position_of_x, last_position_of_y;
var colour = "black";
var width = 1;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
var width = screen.width
new_width = screen.width - 70;
new_height = screen.height - 300;
if (width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
    colour = document.getElementById("color").value;
    width1 = document.getElementById("width_of_line").value;
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {
    current_position = e.touches[0].clientX - canvas.offsetLeft;
    current_position1 = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = colour;
    ctx.lineWidth = width1;
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_position, current_position1);
    ctx.stroke();

    last_position_of_x = current_position;
    last_position_of_y = current_position1;
}

function cleararea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}