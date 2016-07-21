var canvas = document.getElementById("stuff"),
    context = canvas.getContext('2d'),
    square = {
        xPos: 10,
        yPos: 10,
        size: 50
    },
    interval,
    speed = 10,
    up = false,
    down = false,
    left = false,
    right = false;
function draw () {
    context.beginPath();
    if((square.xPos + square.size) !== canvas.width && (square.yPos + square.size) !== canvas.height && square.xPos !== 0 && square.yPos !== 0){
        if(up){
            square.yPos -= speed;
        }
        else if(down){
            square.yPos += speed;
        }
        else if(left){
            square.xPos -= speed;
        }
        else if(right){
            square.xPos += speed;
        }
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.rect(square.xPos, square.yPos, square.size, square.size);
        context.fillStyle = "#00ff33";
        context.fill();
    }
    else {
        square.xPos = 10;
        square.yPos = 10;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.rect(square.xPos, square.yPos, square.size, square.size);
        context.fillStyle = "#00ff33";
        context.fill();
    }
}
interval = setInterval(draw, 20);
document.addEventListener('keydown',function(e){
        switch(e.keyCode){
            case 65:
                left = true;
                break;
            case 87:
                up = true;
                break;
            case 68:
                right = true;
                break;
            case 83:
                down = true;
                break;
        }
    });
document.addEventListener('keyup',function(e){
        switch(e.keyCode){
            case 65:
                left = false;
                break;
            case 87:
                up = false;
                break;
            case 68:
                right = false;
                break;
            case 83:
                down = false;
                break;
        }
    });
