function Enemy(x, y){
    this.xPos = x;
    this.yPos = y;
    this.radius = 32;
    this.speed = 2;
};
Enemy.prototype.collisionTest = function(square){
    if(this.xPos >= square.xPos && (this.xPos <=  (square.xPos + square.size)) && this.yPos >= square.yPos && (this.yPos <= (square.yPos + square.size))){
        collision = true;
    }
};
Enemy.prototype.drawMe = function(){
    context.beginPath();
    context.arc(this.xPos, this.yPos, this.radius, 0 * Math.PI, 2 * Math.PI,true);
    context.fillStyle = "#9900ff";
    context.fill();
    context.closePath();
};
Enemy.prototype.followTheMan = function(squareMan){
    if(this.xPos > squareMan.xPos){
        if(this.yPos > squareMan.yPos){
            if((squareMan.yPos - this.yPos) >= 200){
                this.yPos -= this.speed * 2;
            } 
            else
                this.yPos-= this.speed;
        }
        else {
            if((this.yPos - squareMan.yPos) >= 200){
                this.yPos += this.speed * 2;
            }
            else
                this.yPos += this.speed;
        }

        if((this.xPos - squareMan.xPos) >= 200){
            this.xPos -= this.speed * 2;
        }
        else
            this.xPos -= this.speed;
    }
    else if(this.xPos < squareMan.xPos){
        if(this.yPos > squareMan.yPos){
            if(( squareMan.yPos - this.yPos) >= 200){
                this.yPos -= this.speed * 2;   
            }
            else
            this.yPos -= this.speed;
        }
        else {
            this.yPos += this.speed;
        }
        this.xPos += this.speed;
    }
    else if(this.yPos > squareMan.yPos){
        if((squareMan.yPos - this.yPos) >= 200){
            this.yPos -= this.speed * 2
        }
        this.yPos -= this.speed;
    }
    else {
        this.yPos += this.speed;
    }

};