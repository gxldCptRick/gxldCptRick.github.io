var canvas = document.getElementById("stuff"),
    context = canvas.getContext('2d'),
    SquareMan = (function(){
        return{ 
            square: {
                xPos: 627,
                yPos: 277,
                size: 20
            },

            checkSquareMan: function(){
                if(!((this.square.xPos + this.square.size) >= maxWidth) && !((this.square.yPos + this.square.size) >= maxHeight) && !(this.square.xPos <= 0) && !(this.square.yPos <= 0)){

                    if(up){
                        if(left){
                            this.square.xPos -= speed;
                        }
                        else if(right){
                            this.square.xPos += speed;
                        }
                        this.square.yPos -= speed;
                    }
                    else if(down){
                        if(left){
                            this.square.xPos -= speed;
                        }
                        else if(right){
                            this.square.xPos += speed;
                        }
                        this.square.yPos += speed;
                    }
                    else if(left){
                        this.square.xPos -= speed;
                    }
                    else if(right){
                        this.square.xPos += speed;
                    }
                    this.drawSquareMan();
                } 
                else if(this.square.yPos <= 0){
                    this.square.yPos = maxHeight - (this.square.size + 10);
                    this.drawSquareMan();
                }
                else if((this.square.yPos + this.square.size) >= maxHeight){
                    this.square.yPos = 10;
                    this.drawSquareMan();
                }
                else if(this.square.xPos <= 0){
                    this.square.xPos = maxWidth - (this.square.size + 10);
                    this.drawSquareMan();
                }
                else if((this.square.xPos + this.square.size) >= maxWidth){
                    this.square.xPos = 10;
                    this.drawSquareMan();
                }
            },
            drawSquareMan: function(){
            context.beginPath();
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.rect(this.square.xPos, this.square.yPos, this.square.size, this.square.size);
            context.fillStyle = "#000";
            context.fill();
            context.closePath();

        }
            
        };


    })();
