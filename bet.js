class bet{
    constructor(){
        this.plus=createButton('+');
        this.minus=createButton('-');
        this.back=createButton('back');
        this.play=createButton('Play');
        this.bet=500;
        this.background=loadImage('bet.jpg');
    }
    display(){
        background(this.background);
        this.plus.position(675,395);
        this.minus.position(765,395);
        this.back.position(605,610);
        this.play.position(865,610);
        fill('red');
        textSize(50);
        text(money,640,160);
        text(this.bet,690,330);
    }
    hide(){

    }
}