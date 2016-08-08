var timeSpace = document.getElementById("timer"),
    gameStartButton = document.getElementById("gameStart"),
    gameInterval,
    timerInterval,
    time,
    seconds = 0,
    minutes = 0, 
    hours = 0,
    speed = 3,
    up = false,
    down = false,
    left = false,
    righsssssssst = false,
    maxHeight = canvas.height,
    maxWidth = canvas.width,
    collision = false,
    oscar = new Enemy(40, 40),
    enemys = [oscar];
function drawEnemy(listOfEnemy){
    for(var i = 0; i < listOfEnemy.length; i++){
        listOfEnemy[i].followTheMan(SquareMan.square);
        listOfEnemy[i].drawMe();
        listOfEnemy[i].collisionTest(SquareMan.square);
    }
}
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
function draw () {
    SquareMan.checkSquareMan();
    drawEnemy(enemys);
    if(collision){
        clearInterval(gameInterval);
        clearInterval(timerInterval);
        gameStartButton.classList.remove("hidden");
    }
}
function gameStart(){
    collision = false;
    hours = minutes = seconds = 0;
    SquareMan.square.xPos = 627;
    SquareMan.square.yPos = 277;
    oscar.yPos = 40;
    oscar.xPos = 40;
    gameInterval = setInterval(draw, 1);
    timerInterval = setInterval(timer, 1000);
    gameStartButton.classList.add("hidden");
}
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
