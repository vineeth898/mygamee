var bg;
var hom;
var money=100000;
var state='no';
var gameState='homepage';
var a1={
cost:20000,
aero:50,
state:'not owned'
};
var a2={
cost:40000,
aero:60,
state:'not owned'
};
var a3={
cost:90000,
aero:80,
state:'not owned'
}

var t1={
cost:15000,
tyre:40,
state:'not owned'
};
var t2={
cost:30000,
tyre:50,
state:'not owned'
};
var t3={
cost:60000,
tyre:70,
state:'not owned'
}


var e1={
cost:30000,
eng:40,
state:'not owned'
};
var e2={
cost:60000,
eng:70,
state:'not owned'
};
var e3={
cost:120000,
eng:90,
state:'not owned'
}
this.equip={
    a:null,
    t:null,
    e:null
}
function preload(){
    bg=loadImage('BG.jpg');
}
function setup(){
    createCanvas(displayWidth,displayHeight-50);
    hom=new home();
    bett=new bet();
}
function draw(){
    console.log(mouseX,mouseY);
    if(gameState==='homepage'){
        hom.display();
    }
    if(gameState==='bet'){
        hom.remove();
        bett.display();
    }
}