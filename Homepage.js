class home{
constructor(){
    this.bet=createButton('PLAY!');
    this.arrow1=createButton('->');
    this.arrow2=createButton('<-');
    this.arrow3=createButton('->');
    this.arrow4=createButton('<-');
    this.arrow5=createButton('->');
    this.arrow6=createButton('<-');
    //this.dontpay=createButton("Don't pay");
    this.acount=1;
    this.tcount=1;
    this.ecount=1;
    this.ac;
    this.tc;
    this.ec;
    this.t;
    this.tp1=loadImage('t1.png');
    this.tp2=loadImage('t2.png');
    this.tp3=loadImage('t3.png');
    this.ap1=loadImage('a1.png');
    this.ap2=loadImage('a2.png');
    this.ap3=loadImage('a3.png');
    this.ep1=loadImage('e1.png');
    this.ep2=loadImage('e2.png');
    this.ep3=loadImage('e3.png');
    this.pay1=createButton("pay");
    this.equip1=createButton("equip");
    this.pay2=createButton("pay");
    this.equip2=createButton("equip");
    this.pay3=createButton("pay");
    this.equip3=createButton("equip");
}
display(){
    background(bg);
    this.bet.position(649,100);
    this.arrow1.position(1034,140);
    this.arrow2.position(867,140);
    this.arrow3.position(1034,277);
    this.arrow4.position(867,277);
    this.arrow5.position(1034,406);
    this.arrow6.position(867,406);
    this.pay1.position(1086,140);
    this.pay2.position(1086,277);
    this.pay3.position(1086,406);


    //aerodinamics function
    this.arrow1.mousePressed(()=>{
        this.acount=this.acount+1;
    });
    this.arrow2.mousePressed(()=>{
        this.acount=this.acount-1;
    });
    if(this.acount>3 || this.acount<1){
        this.acount=1;
    }
   
    switch(this.acount){
        case 1: text(a1.cost,950,200);text(a1.aero,960,230);image(this.tp1,910,145,110,35);image(this.tp1,150,580,550,175);if(this.t!=null){image(this.t,230,665,100,100);image(this.t,560,670,100,100);}if(a1.state==='not owned'){this.pay1.show();this.equip1.hide();this.pay1.mousePressed(()=>{if(money-a1.cost>=0){this.pay1.hide();money=money-a1.cost;a1.state='owned';}});}if(a1.state==='owned'){this.equip1.position(1086,140);this.equip1.show();}this.ac=a1.cost;this.equip1.mousePressed(()=>{equip.a=1;});break;
        case 2: text(a2.cost,950,200);text(a2.aero,960,230);image(this.tp2,910,145,110,30);image(this.tp2,150,580,600,150);if(this.t!=null){image(this.t,220,645,100,100);image(this.t,580,650,100,100);}if(a2.state==='not owned'){this.pay1.show();this.equip1.hide();this.pay1.mousePressed(()=>{if(money-a2.cost>=0){this.pay1.hide();money=money-a2.cost;a2.state='owned';}});}if(a2.state==='owned'){this.equip1.position(1086,140);this.equip1.show();}this.ac=a2.cost;this.equip1.mousePressed(()=>{equip.a=2;});break;
        case 3: text(a3.cost,950,200);text(a3.aero,960,230);image(this.tp3,910,145,110,25);image(this.tp3,150,580,550,125);if(this.t!=null){image(this.t,230,635,80,80);  image(this.t,545,640,80,80);}  if(a3.state==='not owned'){this.pay1.show();this.equip1.hide();this.pay1.mousePressed(()=>{if(money-a3.cost>=0){this.pay1.hide();money=money-a3.cost;a3.state='owned';}});}if(a3.state==='owned'){this.equip1.position(1086,140);this.equip1.show ();}this.ac=a3.cost;this.equip1.mousePressed(()=>{equip.a=3});break;
    }


    //tyretronics function
    this.arrow3.mousePressed(()=>{
        this.tcount=this.tcount+1;
    });
    this.arrow4.mousePressed(()=>{
        this.tcount=this.tcount-1;
    });
    if(this.tcount>3 || this.tcount<1){
        this.tcount=1;
    }
    switch(this.tcount){
        case 1: text(t1.cost,950,325);text(t1.tyre,960,360);image(this.ap2,940,255,50,50);this.t=this.ap2;this.tc=t1.cost;if(t1.state==='not owned'){this.pay2.show();this.equip2.hide();this.pay2.mousePressed(()=>{if(money-t1.cost>=0){this.pay2.hide();money=money-t1.cost;t1.state='owned';}});}if(t1.state==='owned'){this.equip2.position(1086,277);this.equip2.show();}this.equip2.mousePressed(()=>{equip.t=1;});break;
        case 2: text(t2.cost,950,325);text(t2.tyre,960,360);image(this.ap1,940,255,50,50);this.t=this.ap1;this.tc=t2.cost;if(t2.state==='not owned'){this.pay2.show();this.equip2.hide();this.pay2.mousePressed(()=>{if(money-t2.cost>=0){this.pay2.hide();money=money-t2.cost;t2.state='owned';}});}if(t2.state==='owned'){this.equip2.position(1086,277);this.equip2.show();}this.equip2.mousePressed(()=>{equip.t=2;});break;
        case 3: text(t3.cost,950,325);text(t3.tyre,960,360);image(this.ap3,940,255,50,50);this.t=this.ap3;this.tc=t3.cost;if(t3.state==='not owned'){this.pay2.show();this.equip2.hide();this.pay2.mousePressed(()=>{if(money-t3.cost>=0){this.pay2.hide();money=money-t3.cost;t3.state='owned';}});}if(t3.state==='owned'){this.equip2.position(1086,277);this.equip2.show();}this.equip2.mousePressed(()=>{equip.t=3;});break;
    }

    //engine function
    this.arrow5.mousePressed(()=>{
        this.ecount=this.ecount+1;
    });
    this.arrow6.mousePressed(()=>{
        this.ecount=this.ecount-1;
    });
    if(this.ecount>3 || this.ecount<1){
        this.ecount=1;
    }
    switch(this.ecount){
        case 1: text(e1.cost,950,455);text(e1.eng,960,490-5);image(this.ep1,945,390,50,50);image(this.ep1,635,535,100,100);this.ec=e1.cost;if(e1.state==='not owned'){this.pay3.show();this.equip3.hide();this.pay3.mousePressed(()=>{if(money-e1.cost>=0){this.pay3.hide();money=money-e1.cost;e1.state='owned';}});}if(e1.state==='owned'){this.equip3.position(1086,406);this.equip3.show();}this.equip3.mousePressed(()=>{equip.e=1;});break;
        case 2: text(a2.cost,950,455);text(e2.eng,960,490-5);image(this.ep2,945,390,50,50);image(this.ep2,635,535,50*2,50*2);this.ec=e2.cost;if(e2.state==='not owned'){this.pay3.show();this.equip3.hide();this.pay3.mousePressed(()=>{if(money-e2.cost>=0){this.pay3.hide();money=money-e2.cost;e2.state='owned';}});}if(e2.state==='owned'){this.equip3.position(1086,406);this.equip3.show();}this.equip3.mousePressed(()=>{equip.e=2;});break;
        case 3: text(a3.cost,950,455);text(e3.eng,960,490-5);image(this.ep3,945,390,50,50);image(this.ep3,635,535,50*2,50*2);this.ec=e3.cost;if(e3.state==='not owned'){this.pay3.show();this.equip3.hide();this.pay3.mousePressed(()=>{if(money-te3.cost>=0){this.pay3.hide();money=money-e3.cost;e3.state='owned';}});}if(e3.state==='owned'){this.equip3.position(1086,406);this.equip3.show();}this.equip3.mousePressed(()=>{equip.e=3;});break;
    }
    push();
    fill('green');
    textSize(25);
    text(money,1230,165);
    pop();
    this.bet.mousePressed(()=>{
       // if(equip.a!=null && equip.t!=null && equip.e!=null){
        gameState='bet';//}
       // else{}
    });
    }
    remove(){
    this.bet.hide();
    this.arrow1.hide();
    this.arrow2.hide();
    this.arrow3.hide();
    this.arrow4.hide();
    this.arrow5.hide();
    this.arrow6.hide();
    this.equip1.hide();
    this.equip2.hide();
    this.equip3.hide();
    this.pay1.hide();
    this.pay2.hide();
    this.pay3.hide();
    }
}