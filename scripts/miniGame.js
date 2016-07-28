var canvas = document.getElementById("stuff"),
    context = canvas.getContext('2d'),
    timeSpace = document.getElementById("timer"),
    square = {
        xPos: 627,
        yPos: 277,
        size: 20
    },
    gameInterval,
    timerInterval,
    speed = 3,
    up = false,
    down = false,
    left = false,
    right = false,
    maxHeight = canvas.height,
    maxWidth = canvas.width,
    time,
    seconds = 0,
    minutes = 0, 
    hours = 0;
function Enemy(x, y){
    this.xPos = x;
    this.yPos = y;
    this.radius = 32;
    this.speed = 2;
};
function timer(){
    if(seconds === 59){
        if(minutes === 59){
            hours++;
            minutes = 0;
        }
        else{
            minutes++;
        }
        seconds = 0;
    }
    else{
        seconds++;
    }
    if(seconds < 10 && minutes < 10)
        time = hours+":0"+minutes+":0"+seconds;
    else if(seconds < 10)
        time =  hours+":"+minutes+":0"+seconds;
    else if(minutes < 10)
        time =  hours+":0"+minutes+":"+seconds;
    else
        time =  hours+":"+minutes+":"+seconds;
    timeSpace.innerHTML = time;
}
function drawSquareMan(){
        context.beginPath();
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.rect(square.xPos, square.yPos, square.size, square.size);
        context.fillStyle = "#000";
        context.fill();
        context.closePath();
};
Enemy.prototype.drawMe = function(){
        context.beginPath();
        context.arc(this.xPos, this.yPos, this.radius, 0 * Math.PI, 2 * Math.PI,true);
        context.fillStyle = "#9900ff";
        context.fill();
        context.closePath();
    };
function checkSquareMan(){
    if(!((square.xPos + square.size) >= maxWidth) && !((square.yPos + square.size) >= maxHeight) && !(square.xPos <= 0) && !(square.yPos <= 0)){
        
        if(up){
            if(left){
                square.xPos -= speed;
            }
            else if(right){
                square.xPos += speed;
            }
            square.yPos -= speed;
        }
        else if(down){
            if(left){
                square.xPos -= speed;
            }
            else if(right){
                square.xPos += speed;
            }
            square.yPos += speed;
        }
        else if(left){
            square.xPos -= speed;
        }
        else if(right){
            square.xPos += speed;
        }
       drawSquareMan();
    } 
    else if(square.yPos <= 0){
        square.yPos = maxHeight - (square.size + 10);
        drawSquareMan();
    }
    else if((square.yPos + square.size) >= maxHeight){
        square.yPos = 10;
        drawSquareMan();
    }
    else if(square.xPos <= 0){
        square.xPos = maxWidth - (square.size + 10);
        drawSquareMan();
    }
    else if((square.xPos + square.size) >= maxWidth){
        square.xPos = 10;
        drawSquareMan();
    }
};
Enemy.prototype.followTheMan = function(squareMan){
    if(this.xPos > squareMan.xPos){
        if(this.yPos > squareMan.yPos){
            this.yPos-= this.speed;
        }
        else {
            this.yPos += this.speed;
        }
        this.xPos -= this.speed;
    }
    else if(this.xPos < squareMan.xPos){
        if(this.yPos > squareMan.yPos){
            this.yPos -= this.speed;
        }
        else {
            this.yPos += this.speed;
        }
        this.xPos += this.speed;
    }
    else if(this.yPos > squareMan.yPos){
        this.yPos -= this.speed;
    }
    else {
        this.yPos += this.speed;
    }
    
};
Enemy.prototype.badTouch = function (enemy){
   /*
   if((this.xPos + this.radius) <= (enemy.xPos + enemy.radius) && (this.xPos - this.radius) >=(enemy.xPos - enemy.radius)){
        this.xPos += enemy.radius * 2;
    }
    else if ((this.xPos - this.radius) <= (enemy.xPos + enemy.radius) && (this.xPos + this.radius) >= (enemy.xPos - enemy.radius)){
        this.xpos -= enemy.radius * 2;
    }
    else if ((this.yPos + this.radius) <= (enemy.yPos + enemy.radius) && (this.yPos - this.radius) <= (enemy.yPos - enemy.radius)){
        this.yPos -= enemy.radius * 2;
    }
    else if ((this.yPos + this.radius) >= (enemy.yPos + enemy.radius) && (this.yPos - this.radius) >= (enemy.yPos - enemy.radius)){
        this.yPos += enemy.radius * 2;
    }
    */
};
function drawEnemy(listOfEnemy){
    for(var i = 0; i < listOfEnemy.length; i++){
        listOfEnemy[i].followTheMan(square);
        listOfEnemy[i].drawMe();
    }
}
var oscar = new Enemy(40, 40),
    mike = new Enemy(1240,550),
    charlie = new Enemy(1240, 40),
    echo = new Enemy(40, 550),
    enemys = [oscar, mike, charlie, echo];
function draw () {
        checkSquareMan();
        drawEnemy(enemys);
}
gameInterval = setInterval(draw, 1);
timerInterval = setInterval(timer, 1000);
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
