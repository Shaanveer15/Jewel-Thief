var w1,w2,w3,w4,wc,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15,w16,w17,w18,w19,w20,w21;
var a,b,c;
var door,doorimg;
var bob;
var bg,dmd,dmd2;
var RUN=1;
var CHASE=2;
var PLAY=0;

var END=4;
var restarts;
var restartimg;
var score;
var gamestate=PLAY;
var l1,l2,lzr;
var ogre;
var cop;
var gameover;
var gm;
var s1,s2,s3,s4;
function preload(){
 bg=loadImage('bg.png')
dmd=loadImage('diamond.png')
dmd2=loadImage('dmd2.png')
 a=loadAnimation("h1.png","h2.png")
b=loadAnimation("h3.png","h4.png")
c=loadAnimation("h5.png","h6.png")
d=loadAnimation("h7.png","h8.png")
 doorimg=loadAnimation("d1.png","d2.png","d3.png","d4.png","d5.png")
 lzr=loadAnimation("k2.png","k3.png","k4.png","k5.png")
cop=loadAnimation("c1.png","c2.png","c4.png")
gm=loadAnimation("g.png","g.png","g.png","o.png","o.png","o.png")
restartimg=loadAnimation("r1.png","r2.png")
winimg=loadAnimation("4.png","5.png");
s1=loadSound("s1.wav");
s2=loadSound("s2.wav");
s3=loadSound("s3.wav");
s4=loadSound("s4.wav");
}
function setup() {
  createCanvas(600,600);
  w1=createSprite(300,10,590,10);
  w1.shapeColor=("white");
  w2=createSprite(10,320,10,500);
  w2.shapeColor=("white");
  w3=createSprite(300,590,590,10);
  w3.shapeColor=("white");
  w4=createSprite(590,300,10,520);
  w4.shapeColor=("white");
  wc=createSprite(200,200,40,40);
  wc.addImage(dmd);
  wc.scale=0.11;
  wd=createSprite(380,280,40,40);
  wd.addImage(dmd2);
  wd.scale=0.11;
  w5=createSprite(80,45,20,65);
  w5.shapeColor=("white");
  w6=createSprite(300,75,460,20);
  w6.shapeColor=("white");
 // w7=createSprite(60,45,20,65);
  //w7.shapeColor=("white");
  w8=createSprite(525,300,20,470);
  w8.shapeColor=("white");
  w9=createSprite(480,225,100,20);
  w9.shapeColor=("white");
  w10=createSprite(275,150,380,20);
  w10.shapeColor=("white");
  w11=createSprite(310,405,450,20);
  w11.shapeColor=("white");
  w12=createSprite(95,250,20,190);
  w12.shapeColor=("white");
  w13=createSprite(150,335,90,20);
  w13.shapeColor=("white");
  w14=createSprite(255,250,20,190);
  w14.shapeColor=("white");
  w15=createSprite(150,245,90,20);
  w15.shapeColor=("white");
  w16=createSprite(150,170,20,30);
  w16.shapeColor=("white");
  w17=createSprite(155,290,70,20);
  w17.shapeColor=("white");
  w18=createSprite(370,335,130,20);
  w18.shapeColor=("white");
  w19=createSprite(315,250,20,180);
  w19.shapeColor=("white");
  w20=createSprite(395,185,20,80);
  w20.shapeColor=("white");
  w21=createSprite(510,280,40,20);
  w21.shapeColor=("white");
  Bob=createSprite(20,40,15,15);
  Bob.shapeColor="red";
  Bob.addAnimation("running",a);
  Bob.addAnimation("running1",b);
  Bob.addAnimation("running2",c);
  Bob.addAnimation("running3",d);

  Bob.scale=0.6;
  Bob.debug=true;
  //Bob.setCollider("rectangle",0,0,110,110)
  ogre=createSprite(560,550,20,40);
ogre.addAnimation("cops",cop);
ogre.visible=false;
  door=createSprite(110,40,60,10);
  door.addAnimation("opening",doorimg);
  door.scale=0.5;
  l1=createSprite(300,480,20,80);
  l2=createSprite(300,520,20,80);
  l1.addAnimation("lazer",lzr);
  l2.addAnimation("lazer",lzr);
  l1.scale=0.3
  l2.scale=0.3
  l1.velocityX=-2;
  l2.velocityX=2;
l1.visible=false;
l2.visible=false;
gameover=createSprite(300,500,100,100);
gameover.addAnimation("over",gm);
gameover.addAnimation("win",winimg);
gameover.visible=false;
gameover.scale=0.3;
restarts=createSprite(300,200,100,100);
restarts.addAnimation("re",restartimg);
restarts.visible=false;
restarts.scale=0.5;
score=0;
}

function draw() {
  background(bg);  
  drawSprites();
  fill ("white");
  text("score:"+  score, 490,50,15,15);
  edges=createEdgeSprites();
Bob.bounceOff(edges);

if(Bob.x>=540 && Bob.y===490){
ogre.visible=true;
gamestate=CHASE;

}
  if(keyDown(UP_ARROW)) {   
Bob.x +=0;
Bob.y +=-2;
Bob.changeAnimation("running3",d);
  }
if (keyDown(DOWN_ARROW)) {
  Bob.y +=2;
  Bob.x +=0;
  Bob.changeAnimation("running",a);
 }
   if (keyDown(LEFT_ARROW)) {
  Bob.y +=0;
  Bob.x +=-2;
  Bob.changeAnimation("running1",b);
  }  
  if (keyDown(RIGHT_ARROW)){
Bob.y +=0;
 Bob.x +=2;
 Bob.changeAnimation("running2",c);
  }
  if(gamestate===CHASE){
    ogre.velocityY=-1.5;

  }
  if(Bob.isTouching(door)){
    win();

  }
 
if(Bob.isTouching(w1)||Bob.isTouching(w2)||Bob.isTouching(w3)||Bob.isTouching(w4)||Bob.isTouching(w5)
||Bob.isTouching(w6)||Bob.isTouching(w8)||Bob.isTouching(w9)||Bob.isTouching(w10)
||Bob.isTouching(w11)||Bob.isTouching(w12)||Bob.isTouching(w13)||Bob.isTouching(w14)||Bob.isTouching(w15)
||Bob.isTouching(w16)||Bob.isTouching(w17)||Bob.isTouching(w18)||Bob.isTouching(w19)||Bob.isTouching(w20)||
Bob.isTouching(w21)){
s4.play();
  gamestate=END;
}
l1.bounceOff(w2);
l1.bounceOff(w4);
l2.bounceOff(w4);
l2.bounceOff(w2);
 if(Bob.isTouching(wc)){
gamestate=RUN;
wc.visible=false;
score=score+10;
s2.play();
}
if(gamestate===RUN){

l1.visible=true;
l2.visible=true;
}
if(Bob.isTouching(wd)){
  gamestate=RUN;
  wd.visible=false;
  score=score+10;
  s2.play();
  }

  if(gamestate===RUN){
 
  }
if(Bob.isTouching(l1)||Bob.isTouching(l2)){
s4.play();
gamestate=END;
}

if(gamestate===END){
  Bob.x=20;
  Bob.y=30;
  Bob.velocityX=0;
  Bob.velocityY=0;
  gameover.visible=true;
  restarts.visible=true;
  if(mousePressedOver(restarts)){
restart();

  }
}
}
function restart(){
gamestate=PLAY;
score=0;
restarts.visible=false
Bob.x=10;
Bob.y=40;
gameover.visible=false;
wd.visible=true;
wc.visible=true;
l1.visible=false;
l2.visible=false;
gameover.changeAnimation('over',gm)
}
function win(){
restart.visible=true;
gameover.changeAnimation("win",winimg);
s3.play();
}