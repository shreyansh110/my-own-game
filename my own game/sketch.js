const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const Body= Matter.Body;


var horizontalborder,horizontalmedium,horizontalsmall,horizontalverysmall,verticalborder,verticalmedium,verticalsmall,verticalverysmall
var maize1,maize2,maize3,maize4;
var gemsGroup,maizeGroup;
var score=0;
var gameState="play";






function preload(){
horizontalborder=loadImage("mzpics/horizontalborder.png");
horizontalmedium=loadImage("mzpics/horizontalmedium.png")
horizontalsmall=loadImage("mzpics/horizontalsmall.png");
horizontalverysmall=loadImage("mzpics/horizontalverysmall.png");
verticalborder=loadImage("mzpics/verticalborder.png");
verticalmedium=loadImage("mzpics/verticalmedium.png");
verticalsmall=loadImage("mzpics/verticalsmall.png");
verticalverysmall=loadImage("mzpics/verticalverysmall.png");
blue=loadImage("gems/1.png");
darkgreen=loadImage("gems/2.png");
lightgreen=loadImage("gems/3.png");
red=loadImage("gems/4.png");
yellow=loadImage("gems/5.png");
east=loadImage("theifimages/east.png");
west=loadImage("theifimages/west.png");
north=loadImage("theifimages/north.png");
south=loadImage("theifimages/south.png");
king=loadImage("king.png")
king2=loadImage("king2.png")
grey=loadImage("gems/6.png")
winning=loadSound("sounds/soundonwinning.mp3");
loosing=loadSound("sounds/soundonloosing.mp3");
points=loadSound("sounds/pointssound.mp3");
//energy=loadSound("sounds/sound on getting energy bar.mp3");
//hit=loadSound("sounds/ghosthitsound.mp3");
sadface=loadImage("sademoji.png");
happyface=loadImage("happyemoji.png");
reset=loadImage("resetbutton.jpg");
righthand=loadImage("right hand.png");
backgroundmusic=loadSound("backgroundsound.mp3")
}

function setup(){
    var canvas=createCanvas(1000,800);

    engine=Engine.create();
    world=engine.world;

    gemsGroup=new Group();
    maizeGroup=new Group();

var maize1a=new Maize(300,788,1200,10);
maize1a.body.addImage("1a",horizontalborder);
maize1a.body.scale=1.1
maizeGroup.add(maize1a.body);

var maize1b=new Maize(500,788,1200,10);
maize1b.body.addImage("1b",horizontalborder);
maize1b.body.scale=1.1
maizeGroup.add(maize1b.body);

var maize2a=new Maize(780,480,10,700);
maize2a.body.addImage("2a",verticalborder);
maize2a.body.scale=1.1
maizeGroup.add(maize2a.body);


var maize2b=new Maize(780,200,10,700);
maize2b.body.addImage("2b",verticalborder);
maize2b.body.scale=1.1
maizeGroup.add(maize2b.body);

var maize3a=new Maize(300,10,10,10);
maize3a.body.addImage("3a",horizontalborder);
maize3a.body.scale=1.1
maizeGroup.add(maize3a.body);

var maize3b=new Maize(500,10,10,10);
maize3b.body.addImage("3b",horizontalborder);
maize3b.body.scale=1.1
maizeGroup.add(maize3b.body);

var maize4a=new Maize(10,290,10,10);
maize4a.body.addImage("4a",verticalborder);
maize4a.body.scale=1.1
maizeGroup.add(maize4a.body);

var maize4b=new Maize(10,500,10,10);
maize4b.body.addImage("4b",verticalborder);
maize4b.body.scale=1.1
maizeGroup.add(maize4b.body);

var maize5=new Maize(130,660,10,10);
maize5.body.addImage("5",horizontalmedium);
maize5.body.scale=1.1
maizeGroup.add(maize5.body);

var maize6=new Maize(220,615,10,10);
maize6.body.addImage("6",verticalverysmall);
maize6.body.scale=1.1
maizeGroup.add(maize6.body);

var maize7=new Maize(340,597,10,10);
maize7.body.addImage("7",horizontalmedium);
maize7.body.scale=1.1
maizeGroup.add(maize7.body);

var maize8=new Maize(452,550,10,10);
maize8.body.addImage("8",verticalsmall);
maize8.body.scale=1.1
maizeGroup.add(maize8.body);

var maize9=new Maize(350,478,10,10);
maize9.body.addImage("9",horizontalmedium);
maize9.body.scale=1.1
maizeGroup.add(maize9.body);

var maize10=new Maize(640,703,10,10);
maize10.body.addImage("10",verticalsmall);
maize10.body.scale=1.1
maizeGroup.add(maize10.body);

maize11=new Maize(712,636,10,10);
maize11.body.addImage("11",horizontalsmall);
maize11.body.scale=1.1
maizeGroup.add(maize11.body);

maize12a=new Maize(700,549,10,10);
maize12a.body.addImage("12a",horizontalsmall);
maize12a.body.scale=1.1
maizeGroup.add(maize12a.body);

maize12b=new Maize(610,549,10,10);
maize12b.body.addImage("12b",horizontalsmall);
maize12b.body.scale=1.1
maizeGroup.add(maize12b.body);

maize13=new Maize(335,680,10,10);
maize13.body.addImage("13",horizontalmedium);
maize13.body.scale=1.1
maizeGroup.add(maize13.body);

maize14=new Maize(559,500,10,10);
maize14.body.addImage("14",verticalverysmall);
maize14.body.scale=1.2
maizeGroup.add(maize14.body);

maize15=new Maize(259,434,10,10);
maize15.body.addImage("15",verticalverysmall);
maize15.body.scale=1.1
maizeGroup.add(maize15.body);

maize16a=new Maize(350,391,10,10);
maize16a.body.addImage("16a",horizontalmedium);
maize16a.body.scale=1.1
maizeGroup.add(maize16a.body);

maize16b=new Maize(550,391,10,10);
maize16b.body.addImage("16b",horizontalmedium);
maize16b.body.scale=1.1
maizeGroup.add(maize16b.body);

maize17=new Maize(666,475,10,10);
maize17.body.addImage("17",horizontalmedium);
maize17.body.scale=1.1
maizeGroup.add(maize17.body);

maize18=new Maize(640,347,10,10);
maize18.body.addImage("18",verticalverysmall);
maize18.scale=1.1
maizeGroup.add(maize18.body);

maize19a=new Maize(560,327,10,10);
maize19a.body.addImage("19",horizontalmedium);
maize19a.scale=1.1
maizeGroup.add(maize19a.body);

maize19b=new Maize(380,327,10,10);
maize19b.body.addImage("19b",horizontalmedium);
maize19b.scale=1.1
maizeGroup.add(maize19b.body);

//left hand side of the box (first part)
maize20a=new Maize(310,100,10,10);
maize20a.body.addImage("20a",verticalsmall);
maize20a.body.scale=1.1
maizeGroup.add(maize20a.body);

//left hand side of the box(second part)
maize20b=new Maize(310,196,10,10);
maize20b.body.addImage("20b",verticalverysmall);
maize20b.body.scale=1.1
maizeGroup.add(maize20b.body);

//base of the box (first part)
maize21a=new Maize(400,226,10,10);
maize21a.body.addImage("21a",horizontalmedium);
maize21a.body.scale=1.1
maizeGroup.add(maize21a.body);

//base of the box(second part)
maize21b=new Maize(490,226,10,10);
maize21b.body.addImage("21b",horizontalmedium);
maize21b.body.scale=1.1
maizeGroup.add(maize21b.body);

//right hand side of the box(first part)
maize22=new Maize(580,100,10,10);
maize22.body.addImage("22",verticalsmall);
maize22.body.scale=1.1
maizeGroup.add(maize22.body);

maize23=new Maize(380,113,10,10);
maize23.body.addImage("23",verticalverysmall);
maize23.body.scale=1.1
maizeGroup.add(maize23.body);

maize24=new Maize(476,117,10,10);
maize24.body.addImage("24",verticalverysmall);
maize24.body.scale=1.1
maizeGroup.add(maize24.body);

maize25=new Maize(681,151,10,10);
maize25.body.addImage("25",verticalsmall);
maize25.body.scale=1.1
maizeGroup.add(maize25.body);

maize26=new Maize(370,539,10,10);
maize26.body.addImage("26",verticalverysmall);
maize26.body.scale=1.1
maizeGroup.add(maize26.body);

maize27=new Maize(172,230,10,10);
maize27.body.addImage("27",verticalborder);
maize27.body.scale=1.1
maizeGroup.add(maize27.body);

/*
maize28=new Maize(130,170,10,10);
maize28.body.addImage("28",horizontalverysmall);
maize28.body.scale=1.1
maizeGroup.add(maize28.body);
*/

maize29=new Maize(60,294,10,10);
maize29.body.addImage("29",horizontalverysmall);
maize29.body.scale=1.1
maizeGroup.add(maize29.body);

maize30=new Maize(140,397,10,10);
maize30.body.addImage("30",horizontalverysmall);
maize30.body.scale=1.1
maizeGroup.add(maize30.body);

theif=new Theif(69,725,10,10);
//theif.body.addImage("Tf",east);
theif.body.scale=0.7
//theif.body.debug=true;
theif.body.setCollider("rectangle",0,0,55,55);


protecter=new King(60,234,10,10);
protecter.body.addImage("Kg",king);
protecter.body.scale=0.2
protecter.body.velocityX=3;
//protecter.body.debug=true
protecter.body.setCollider("rectangle",0,0,110,110)

protecter2=new King(120,345,10,10);
protecter2.body.addImage("Kg",king2);
protecter2.body.scale=0.25
protecter2.body.velocityX=7
protecter2.body.velocityY=7
// protecter2.body.debug=true
protecter2.body.setCollider("rectangle",0,0,110,110)

protecter3=new King(55,486,10,10);
protecter3.body.addImage("Kg",king);
protecter3.body.scale=0.2
protecter3.body.velocityX=6
protecter3.body.velocityY=-6
// protecter3.body.debug=true
protecter3.body.setCollider("rectangle",0,0,110,110)
/*
protecter4=new King(694,714,10,10);
protecter4.body.addImage("Kg",king2);
protecter4.body.scale=0.2
protecter4.body.velocityX=6
protecter4.body.velocityY=-5
// protecter4.body.debug=true
protecter4.body.setCollider("rectangle",0,0,110,110)
*/

// middle obstacle
obstacle1=new Barrier(170,267,30,460);
obstacle1.body.visible=false
//obstacle1.body.debug=true

// right obstacle
obstacle2=new Barrier(787,405,40,810);
obstacle2.body.visible=false
//obstacle2.body.debug=true

// bottom obstacle
obstacle3=new Barrier(362,780,800,40);
obstacle3.body.visible=false
//obstacle3.body.debug=true

//left obstacle
obstacle4=new Barrier(17,388,40,800);
obstacle4.body.visible=false
//obstacle4.body.debug=true

//top obstacle
obstacle5=new Barrier(380,20,800,40);
obstacle5.body.visible=false
//obstacle5.body.debug=true

obstacle6=new Barrier(444,240,300,10);
obstacle6.body.visible=false

obstacle7=new Barrier(315,137,30,200);
obstacle7.body.visible=false

obstacle8=new Barrier(470,327,365,30);
obstacle8.body.visible=false

obstacle9=new Barrier(451,387,409,30);
obstacle9.body.visible=false

obstacle10=new Barrier(580,105,30,130);
obstacle10.body.visible=false

obstacle11=new Barrier(445,536,30,130);
obstacle11.body.visible=false

obstacle12=new Barrier(352,490,200,20);
obstacle12.body.visible=false

obstacle13=new Barrier(263,439,30,100);
obstacle13.body.visible=false

obstacle14=new Barrier(658,550,227,30);
obstacle14.body.visible=false

obstacle15=new Barrier(653,470,227,30);
obstacle15.body.visible=false

obstacle16=new Barrier(682,142,30,150);
obstacle16.body.visible=false

obstacle17=new Barrier(120,663,227,30);
obstacle17.body.visible=false

obstacle18=new Barrier(332,682,210,30);
obstacle18.body.visible=false

obstacle19=new Barrier(327,595,210,30);
obstacle19.body.visible=false

obstacle20=new Barrier(225,631,30,80);
obstacle20.body.visible=false

obstacle21=new Barrier(560,522,30,80);
obstacle21.body.visible=false

obstacle22=new Barrier(130,395,70,30);
obstacle22.body.visible=false

//protected area for the theif(vertical)
obstacle23=new Barrier(640,711,30,130);
obstacle23.body.visible=false

//protected area for the theif (horizontal)
obstacle24=new Barrier(710,632,150,30);
obstacle24.body.visible=false

obstacle25=new Barrier(60,290,70,30);
obstacle25.body.visible=false


gem1=new Gem(260,732,10,10);
gem1.body.addImage("a",blue);
gem1.body.scale=0.2
gemsGroup.add(gem1.body);


gem2=new Gem(390,732,10,10);
gem2.body.addImage("b",red);
gem2.body.scale=0.2
gemsGroup.add(gem2.body);

gem3=new Gem(510,732,10,10);
gem3.body.addImage("c",yellow);
gem3.body.scale=0.2
gemsGroup.add(gem3.body);

gem4=new Gem(510,632,10,10);
gem4.body.addImage("d",lightgreen);
gem4.body.scale=0.2
gemsGroup.add(gem4.body);

gem5=new Gem(581,632,10,10);
gem5.body.addImage("e",blue);
gem5.body.scale=0.2
gemsGroup.add(gem5.body);

gem6=new Gem(578,732,10,10);
gem6.body.addImage("f",red);
gem6.body.scale=0.2
gemsGroup.add(gem6.body);

gem7=new Gem(301,641,10,10);
gem7.body.addImage("g",darkgreen);
gem7.body.scale=0.2
gemsGroup.add(gem7.body);

gem8=new Gem(397,641,10,10);
gem8.body.addImage("h",yellow);
gem8.body.scale=0.2
gemsGroup.add(gem8.body);

gem9=new Gem(505,560,10,10);
gem9.body.addImage("i",darkgreen);
gem9.body.scale=0.2
gemsGroup.add(gem9.body);

gem10=new Gem(505,495,10,10);
gem10.body.addImage("j",red);
gem10.body.scale=0.2
gemsGroup.add(gem10.body);

  gem11=new Gem(328,435,10,10);
gem11.body.addImage("k",red);
gem11.body.scale=0.2
gemsGroup.add(gem11.body);

gem12=new Gem(409,435,10,10);
gem12.body.addImage("l",yellow);
gem12.body.scale=0.2
gemsGroup.add(gem12.body);

gem13=new Gem(505,441,10,10);
gem13.body.addImage("m",lightgreen);
gem13.body.scale=0.2
gemsGroup.add(gem13.body);

gem14=new Gem(600,432,10,10);
gem14.body.addImage("n",blue);
gem14.body.scale=0.2
gemsGroup.add(gem14.body);

gem15=new Gem(680,434,10,10);
gem15.body.addImage("o",yellow);
gem15.body.scale=0.2
gemsGroup.add(gem15.body);

gem16=new Gem(735,434,10,10);
gem16.body.addImage("o",red);
gem16.body.scale=0.2
gemsGroup.add(gem16.body);

gem17=new Gem(680,359,10,10);
gem17.body.addImage("p",blue);
gem17.body.scale=0.2
gemsGroup.add(gem17.body);

gem18=new Gem(736,359,10,10);
gem18.body.addImage("q",darkgreen);
gem18.body.scale=0.2
gemsGroup.add(gem18.body);

gem19=new Gem(675,289,10,10);
gem19.body.addImage("r",red);
gem19.body.scale=0.2
gemsGroup.add(gem19.body);

gem20=new Gem(730,289,10,10);
gem20.body.addImage("s",lightgreen);
gem20.body.scale=0.2
gemsGroup.add(gem20.body);

gem21=new Gem(729,224,10,10);
gem21.body.addImage("t",yellow);
gem21.body.scale=0.2
gemsGroup.add(gem21.body);

gem22=new Gem(628,208,10,10);
gem22.body.addImage("u",blue);
gem22.body.scale=0.2
gemsGroup.add(gem22.body);

gem23=new Gem(579,273,10,10);
gem23.body.addImage("v",darkgreen);
gem23.body.scale=0.2
gemsGroup.add(gem23.body);

gem24=new Gem(491,273,10,10);
gem24.body.addImage("w",red);
gem24.body.scale=0.2
 gemsGroup.add(gem24.body);

gem25=new Gem(727,162,10,10);
gem25.body.addImage("x",lightgreen);
gem25.body.scale=0.2
gemsGroup.add(gem25.body);

gem26=new Gem(627,133,10,10);
gem26.body.addImage("y",yellow);
gem26.body.scale=0.2
gemsGroup.add(gem26.body);

gem27=new Gem(408,278,10,10);
gem27.body.addImage("z",blue);
gem27.body.scale=0.2
gemsGroup.add(gem27.body);

gem28=new Gem(314,277,10,10);
gem28.body.addImage("a",darkgreen);
gem28.body.scale=0.2
gemsGroup.add(gem28.body);

gem29=new Gem(236,281,10,10);
gem29.body.addImage("a",red);
gem29.body.scale=0.2
gemsGroup.add(gem29.body);

gem30=new Gem(236,208,10,10);
gem30.body.addImage("a",yellow);
gem30.body.scale=0.2
gemsGroup.add(gem30.body);

gem31=new Gem(236,145,10,10);
gem31.body.addImage("a",lightgreen);
gem31.body.scale=0.2
gemsGroup.add(gem31.body);

gem32=new Gem(236,82,10,10);
gem32.body.addImage("a",blue);
gem32.body.scale=0.2
gemsGroup.add(gem32.body);

gem33=new Gem(214,373,10,10);
gem33.body.addImage("a",blue);
gem33.body.scale=0.2
gemsGroup.add(gem33.body);

gem34=new Gem(213,452,10,10);
gem34.body.addImage("a",lightgreen);
gem34.body.scale=0.2
gemsGroup.add(gem34.body);

gem35=new Gem(214,542,10,10);
gem35.body.addImage("a",yellow);
gem35.body.scale=0.2
gemsGroup.add(gem35.body);

gem36=new Gem(284,545,10,10);
gem36.body.addImage("a",darkgreen);
gem36.body.scale=0.2
gemsGroup.add(gem36.body);

gem37=new Gem(722,69,10,10);
gem37.body.addImage("a",darkgreen);
gem37.body.scale=0.2
gemsGroup.add(gem37.body);

gem38=new Gem(620,69,10,10);
gem38.body.addImage("a",red);
gem38.body.scale=0.2
gemsGroup.add(gem38.body);

gem39=new Gem(140,615,10,10);
gem39.body.addImage("a",lightgreen);
gem39.body.scale=0.2
gemsGroup.add(gem39.body);

gem40=new Gem(56,615,10,10);
gem40.body.addImage("a",blue);
gem40.body.scale=0.2
gemsGroup.add(gem40.body);

gem41=new Gem(76,559,10,10);
gem41.body.addImage("a",yellow);
gem41.body.scale=0.2
gemsGroup.add(gem41.body);

gem42=new Gem(132,561,10,10);
gem42.body.addImage("a",darkgreen);
gem42.body.scale=0.2
gemsGroup.add(gem42.body);



gem43=new Gem(425,175,10,10);
gem43.body.addImage("a",yellow);
gem43.body.scale=0.2  
gemsGroup.add(gem43.body);

gem44=new Gem(518,65,10,10);
gem44.body.addImage("a",red);
gem44.body.scale=0.2  
gemsGroup.add(gem44.body);

gem45=new Gem(420,63,10,10);
gem45.body.addImage("a",blue);
gem45.body.scale=0.2  
gemsGroup.add(gem45.body);

gem46=new Gem(523,176,10,10);
gem46.body.addImage("a",lightgreen);
gem46.body.scale=0.2  
gemsGroup.add(gem46.body);

gem47=new Gem(89,92,10,10);
gem47.body.addImage("a",grey);
gem47.body.scale=0.5
gemsGroup.add(gem47.body);

for(var i=0;i<gemsGroup.length;i++){
 
  //gemsGroup.get(i).debug=true;
 gemsGroup.get(i).setCollider("rectangle",0,0,200,200);
  
  }

/*
for(var j=1;j<48;j++){
var gemdebug="gem"+j;
gemdebug.body.debug=true;

}
*/


if (keyCode===UP_ARROW){
  theif.velocityX=0;
  theif.velocityY=3;
  theif.body.addImage("t",north);
}


if (gameState==="play"){
  backgroundmusic.play();
}
// if (theif.body.isTouching(gem1)){
//  gem1.destroy();    
//   }
  
}



function draw(){
 
  background(0,0,0)
 Engine.update(engine);
text(mouseX+","+mouseY,mouseX,mouseY)

if(gameState==="play"){

  fill("yellow")
  stroke(20);
  textSize(28);
  text("Score:"+score,820,400);
  fill(97,224,252)
  textSize(19)
  text("Collect All The Gems!",805,172);
  fill(192,192,192)
  textSize(15);
  text("Protection!",676,715);
  fill(108,244,234);
  textSize(22);
text("Instructions:",840,569);
fill(255,128,0)
textSize(18)
text("Use the arrow keys",815,610);
text("to move the theif",815,632)

  

if (keyIsDown(UP_ARROW)){
  theif.body.velocityX=0;
  theif.body.velocityY=-8;
  theif.body.addImage("t",north);
}else{
theif.body.velocityX=0;
theif.body.velocityY=0;
theif.body.addImage("t",east)
}

if (keyIsDown(DOWN_ARROW)){
  theif.body.velocityX=0;
  theif.body.velocityY=8;
  theif.body.addImage("t",south);
}


if (keyIsDown(LEFT_ARROW)){
  theif.body.velocityX=-8;
  theif.body.velocityY=0;
  theif.body.addImage("t",west);
}

if (keyIsDown(RIGHT_ARROW)){
  theif.body.velocityX=8;
  theif.body.velocityY=0;
  theif.body.addImage("t",east);
}

for(var i=0;i<gemsGroup.length;i++){
if(gemsGroup.get(i).isTouching(theif.body)){
gemsGroup.get(i).destroy();
score=score+10
points.play();
//return false;


}
}


protecter.body.bounceOff(obstacle1.body);
protecter.body.bounceOff(obstacle4.body);
protecter2.body.bounceOff(obstacle1.body);
//protecter2.body.bounceOff(obstacle4.body);
protecter2.body.bounceOff(obstacle2.body);
protecter2.body.bounceOff(obstacle3.body);
protecter2.body.bounceOff(obstacle4.body);
protecter2.body.bounceOff(obstacle5.body);
//protecter3.body.bounceOff(obstacle4.body);
protecter3.body.bounceOff(obstacle1.body)
protecter3.body.bounceOff(obstacle2.body);
protecter3.body.bounceOff(obstacle3.body);
protecter3.body.bounceOff(obstacle4.body);
protecter3.body.bounceOff(obstacle5.body);

protecter2.body.bounceOff(obstacle6.body);
protecter3.body.bounceOff(obstacle6.body);


protecter2.body.bounceOff(obstacle7.body);
protecter3.body.bounceOff(obstacle7.body);


protecter2.body.bounceOff(obstacle8.body);
protecter3.body.bounceOff(obstacle8.body);


protecter2.body.bounceOff(obstacle9.body);
protecter3.body.bounceOff(obstacle9.body);


protecter2.body.bounceOff(obstacle10.body);
protecter3.body.bounceOff(obstacle10.body);


protecter2.body.bounceOff(obstacle11.body);
protecter3.body.bounceOff(obstacle11.body);


protecter2.body.bounceOff(obstacle12.body);
protecter3.body.bounceOff(obstacle12.body);


protecter2.body.bounceOff(obstacle13.body);
protecter3.body.bounceOff(obstacle13.body);


protecter2.body.bounceOff(obstacle14.body);
protecter3.body.bounceOff(obstacle14.body);


protecter2.body.bounceOff(obstacle15.body);
protecter3.body.bounceOff(obstacle15.body);


protecter2.body.bounceOff(obstacle16.body);
protecter3.body.bounceOff(obstacle16.body);


protecter2.body.bounceOff(obstacle17.body);
protecter3.body.bounceOff(obstacle17.body);


protecter2.body.bounceOff(obstacle18.body);
protecter3.body.bounceOff(obstacle18.body);


protecter2.body.bounceOff(obstacle19.body);
protecter3.body.bounceOff(obstacle19.body);


protecter2.body.bounceOff(obstacle20.body);
protecter3.body.bounceOff(obstacle20.body);


protecter2.body.bounceOff(obstacle21.body);
protecter3.body.bounceOff(obstacle21.body);


protecter2.body.bounceOff(obstacle22.body);
protecter3.body.bounceOff(obstacle22.body);


protecter2.body.bounceOff(obstacle23.body);
protecter3.body.bounceOff(obstacle23.body);


protecter2.body.bounceOff(obstacle24.body);
protecter3.body.bounceOff(obstacle24.body);

protecter2.body.bounceOff(obstacle25.body);
protecter3.body.bounceOff(obstacle25.body);

theif.body.collide(obstacle1.body);
theif.body.collide(obstacle2.body);
theif.body.collide(obstacle3.body);
theif.body.collide(obstacle4.body);
theif.body.collide(obstacle5.body);
theif.body.collide(obstacle6.body);
theif.body.collide(obstacle7.body);
theif.body.collide(obstacle8.body);
theif.body.collide(obstacle9.body);
theif.body.collide(obstacle10.body);
theif.body.collide(obstacle11.body);
theif.body.collide(obstacle12.body);
theif.body.collide(obstacle13.body);
theif.body.collide(obstacle14.body);
theif.body.collide(obstacle15.body);
theif.body.collide(obstacle16.body);
theif.body.collide(obstacle17.body);
theif.body.collide(obstacle18.body);
theif.body.collide(obstacle19.body);
theif.body.collide(obstacle20.body);
theif.body.collide(obstacle21.body);
theif.body.collide(obstacle22.body);
//theif.body.collide(obstacle23.body);
//theif.body.collide(obstacle24.body);
theif.body.collide(obstacle25.body);





/*
protecter4.body.bounceOff(obstacle1.body);
protecter4.body.bounceOff(obstacle4.body);
protecter4.body.bounceOff(obstacle2.body);
protecter4.body.bounceOff(obstacle3.body);
protecter4.body.bounceOff(obstacle5.body);
*/

if(score===470){
gameState="win"
winning.play();
}
if(protecter2.body.isTouching(theif.body)){
loosing.play();
gameState="end"
}

if(protecter.body.isTouching(theif.body)){
loosing.play();
gameState="end"
}

if(protecter3.body.isTouching(theif.body)){
loosing.play();
  gameState="end"
  }


  }


else if(gameState==="end"){
    protecter.body.destroy();
    protecter2.body.destroy();
    protecter3.body.destroy();
   // protecter4.body.destroy();
    score=0
    gemsGroup.destroyEach();
    maizeGroup.destroyEach();
    theif.body.destroy();
    sad=new Face(500,200,10,10);
    sad.body.addImage("s",sadface)
    sad.body.scale=0.5
   /* replay=new Face(475,550,10,10);
    replay.body.addImage("r",reset);
    replay.body.scale=0.1*/
    hand=new Face(737,736,10,10);
    hand.body.addImage("s",righthand);
    hand.body.scale=0.2
    fill("red");
    textSize(80);
text("You Loose!",320,450);
fill(241,232,9)
textSize(20)
text("Reload the page to ",814,719)
text("restart the game",814,749)
backgroundmusic.pause();
  }else if(gameState==="win"){
    protecter.body.destroy();
    protecter2.body.destroy();
    protecter3.body.destroy();
   // protecter4.body.destroy();
    score=0
    gemsGroup.destroyEach();
    maizeGroup.destroyEach();
    theif.body.destroy();
    happy=new Face(420,200,10,10);
    happy.body.addImage("s",happyface)
    happy.body.scale=0.5
    hand=new Face(737,736,10,10);
    hand.body.addImage("s",righthand);
    hand.body.scale=0.2
    fill(115,242,72);
    textSize(80);
    text("You Win!",320,450)
    fill(241,232,9)
textSize(20)
text("Reload the page to ",814,719)
text("restart the game",814,749);
backgroundmusic.pause();
   //winning.play();
  }





drawSprites();


}   




