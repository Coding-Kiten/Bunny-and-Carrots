canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
var score = 0;
rover_image = "bunny2.png";
rover_width = 70;
rover_height = 80;
background_image = "https://studio.code.org/api/v1/animation-library/vrlUwPslp0VK_KJcPQ9OPZNb.Ms5eBL5/category_backgrounds/floating_grass.png";
rover_x = 10;
rover_y = 10;
block_image = "carrot.png";
block_image_width = 70;
block_image_height = 70;
block_image_x = Math.floor(Math.random() * 700);
block_image_y = Math.floor(Math.random() * 500);


function add() {
    background_imgTag = new Image(); //defining a variable with a new image
    background_imgTag.onload = uploadBackground; // setting a function, onloading this variable 
    background_imgTag.src = background_image; // load image 

    rover_imgTag = new Image(); //defining a variable with a new image 
    rover_imgTag.onload = uploadrover; // setting a function, onloading this variable 
    rover_imgTag.src = rover_image; // load image 

    block_imgTag = new Image(); //defining a variable with a new image 
    block_imgTag.onload = uploadblock; // setting a function, onloading this variable 
    block_imgTag.src = block_image; // load image
    collisionDetection();
}

function uploadBackground() { ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height); }

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

function uploadblock() {
    ctx.drawImage(block_imgTag, block_image_x, block_image_y, block_image_width, block_image_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
}

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadrover();
        uploadblock();
        collisionDetection();
    }
}

function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadrover();
        uploadblock();
        collisionDetection();
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadrover();
        uploadblock();
        collisionDetection();
    }
}

function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadrover();
        uploadblock();
        collisionDetection();
    }
}

function collisionDetection() {
    if (block_image_x < rover_x + rover_width && block_image_x + block_image_width > rover_x && block_image_y < rover_y + rover_height && block_image_y + block_image_height > rover_y) {
        score = score + 1;
        document.getElementById("Score").innerHTML = score;
        console.log("Collision Detected");
        block_image_x = Math.floor(Math.random() * 700);
        block_image_y = Math.floor(Math.random() * 500);
        canvas.remove(block_image_object);
        uploadblock();
    }
}