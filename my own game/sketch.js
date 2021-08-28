  const World=Matter.World;
  const Engine=Matter.Engine;
  const Bodies=Matter.Bodies;
  const Body= Matter.Body;


  var horizontalborder,horizontalmedium,horizontalsmall,horizontalverysmall,verticalborder,verticalmedium,verticalsmall,verticalverysmall
  var maize1,maize2,maize3,maize4;






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
  }

  function setup(){
      var canvas=createCanvas(800,800);

      engine=Engine.create();
      world=engine.world;

  var maize1a=new Maize(300,788,1200,10);
  maize1a.body.addImage("1a",horizontalborder);
  maize1a.body.scale=1.1

  var maize1b=new Maize(500,788,1200,10);
  maize1b.body.addImage("1b",horizontalborder);
  maize1b.body.scale=1.1

  var maize2a=new Maize(780,480,10,700);
  maize2a.body.addImage("2a",verticalborder);
  maize2a.body.scale=1.1

  var maize2b=new Maize(780,200,10,700);
  maize2b.body.addImage("2b",verticalborder);
  maize2b.body.scale=1.1

  var maize3a=new Maize(300,10,10,10);
  maize3a.body.addImage("3a",horizontalborder);
  maize3a.body.scale=1.1

  var maize3b=new Maize(500,10,10,10);
  maize3b.body.addImage("3b",horizontalborder);
  maize3b.body.scale=1.1

  var maize4a=new Maize(10,290,10,10);
  maize4a.body.addImage("4a",verticalborder);
  maize4a.body.scale=1.1

  var maize4b=new Maize(10,500,10,10);
  maize4b.body.addImage("4b",verticalborder);
  maize4b.body.scale=1.1

  var maize5=new Maize(130,660,10,10);
  maize5.body.addImage("5",horizontalmedium);
  maize5.body.scale=1.1

  var maize6=new Maize(220,615,10,10);
  maize6.body.addImage("6",verticalverysmall);
  maize6.body.scale=1.1

  var maize7=new Maize(340,597,10,10);
  maize7.body.addImage("7",horizontalmedium);
  maize7.body.scale=1.1

  var maize8=new Maize(452,550,10,10);
  maize8.body.addImage("8",verticalsmall);
  maize8.body.scale=1.1

  var maize9=new Maize(350,478,10,10);
  maize9.body.addImage("9",horizontalmedium);
  maize9.body.scale=1.1

  var maize10=new Maize(640,703,10,10);
  maize10.body.addImage("10",verticalsmall);
  maize10.body.scale=1.1

  maize11=new Maize(712,636,10,10);
  maize11.body.addImage("11",horizontalsmall);
  maize11.body.scale=1.1

  maize12a=new Maize(700,549,10,10);
  maize12a.body.addImage("12a",horizontalsmall);
  maize12a.body.scale=1.1

  maize12b=new Maize(610,549,10,10);
  maize12b.body.addImage("12b",horizontalsmall);
  maize12b.body.scale=1.1

  maize13=new Maize(335,680,10,10);
  maize13.body.addImage("13",horizontalmedium);
  maize13.body.scale=1.1

  maize14=new Maize(559,500,10,10);
  maize14.body.addImage("14",verticalverysmall);
  maize14.body.scale=1.2

  maize15=new Maize(259,434,10,10);
  maize15.body.addImage("15",verticalverysmall);
  maize15.body.scale=1.1

  maize16a=new Maize(350,391,10,10);
  maize16a.body.addImage("16a",horizontalmedium);
  maize16a.body.scale=1.1

  maize16b=new Maize(550,391,10,10);
  maize16b.body.addImage("16b",horizontalmedium);
  maize16b.body.scale=1.1

  maize17=new Maize(666,475,10,10);
  maize17.body.addImage("17",horizontalmedium);
  maize17.body.scale=1.1

  maize18=new Maize(640,347,10,10);
  maize18.body.addImage("18",verticalverysmall);
  maize18.scale=1.1

  maize19a=new Maize(560,327,10,10);
  maize19a.body.addImage("19",horizontalmedium);
  maize19a.scale=1.1

  maize19b=new Maize(380,327,10,10);
  maize19b.body.addImage("19b",horizontalmedium);
  maize19b.scale=1.1

  //left hand side of the box (first part)
  maize20a=new Maize(310,100,10,10);
  maize20a.body.addImage("20a",verticalsmall);
  maize20a.body.scale=1.1

  //left hand side of the box(second part)
  maize20b=new Maize(310,196,10,10);
  maize20b.body.addImage("20b",verticalverysmall);
  maize20b.body.scale=1.1

  //base of the box (first part)
  maize21a=new Maize(400,226,10,10);
  maize21a.body.addImage("21a",horizontalmedium);
  maize21a.body.scale=1.1

  //base of the box(second part)
  maize21b=new Maize(490,226,10,10);
  maize21b.body.addImage("21b",horizontalmedium);
  maize21b.body.scale=1.1

  //right hand side of the box(first part)
  maize22=new Maize(580,100,10,10);
  maize22.body.addImage("22",verticalsmall);
  maize22.body.scale=1.1

  maize23=new Maize(380,113,10,10);
  maize23.body.addImage("23",verticalverysmall);
  maize23.body.scale=1.1

  maize24=new Maize(476,117,10,10);
  maize24.body.addImage("24",verticalverysmall);
  maize24.body.scale=1.1

  maize25=new Maize(681,151,10,10);
  maize25.body.addImage("25",verticalsmall);
  maize25.body.scale=1.1

  maize26=new Maize(370,539,10,10);
  maize26.body.addImage("26",verticalverysmall);
  maize26.body.scale=1.1

  maize27=new Maize(172,230,10,10);
  maize27.body.addImage("27",verticalborder);
  maize27.body.scale=1.1

  maize28=new Maize(130,170,10,10);
  maize28.body.addImage("28",horizontalverysmall);
  maize28.body.scale=1.1

  maize29=new Maize(60,294,10,10);
  maize29.body.addImage("29",horizontalverysmall);
  maize29.body.scale=1.1

  maize30=new Maize(140,397,10,10);
  maize30.body.addImage("30",horizontalverysmall);
  maize30.body.scale=1.1

  theif=new Theif(69,725,10,10);
 //theif.body.addImage("Tf",east);
  theif.body.scale=0.7

protecter=new King(60,234,10,10);
protecter.body.addImage("Kg",king);
  protecter.body.scale=0.2

  protecter2=new King(120,345,10,10);
protecter2.body.addImage("Kg",king2);
  protecter2.body.scale=0.25

  protecter3=new King(55,486,10,10);
  protecter3.body.addImage("Kg",king);
  protecter3.body.scale=0.2

  gem1=new Gem(260,732,10,10);
  gem1.body.addImage("a",blue);
  gem1.body.scale=0.2

  gem2=new Gem(390,732,10,10);
  gem2.body.addImage("b",red);
  gem2.body.scale=0.2
  
  gem3=new Gem(510,732,10,10);
  gem3.body.addImage("c",yellow);
  gem3.body.scale=0.2

  gem4=new Gem(510,632,10,10);
  gem4.body.addImage("d",lightgreen);
  gem4.body.scale=0.2

  gem5=new Gem(581,632,10,10);
  gem5.body.addImage("e",blue);
  gem5.body.scale=0.2

  gem6=new Gem(578,732,10,10);
  gem6.body.addImage("f",red);
  gem6.body.scale=0.2

  var gemsGroup=createGroup();
/*
  gem7=new Gem(301,641,10,10);
  gem7.body.addImage("g",darkgreen);
  gem7.body.scale=0.2

  gem8=new Gem(397,641,10,10);
  gem8.body.addImage("h",yellow);
  gem8.body.scale=0.2

  gem9=new Gem(505,560,10,10);
  gem9.body.addImage("i",darkgreen);
  gem9.body.scale=0.2

  gem10=new Gem(505,495,10,10);
  gem10.body.addImage("j",red);
  gem10.body.scale=0.2

    gem11=new Gem(328,435,10,10);
  gem11.body.addImage("k",red);
  gem11.body.scale=0.2

  gem12=new Gem(409,435,10,10);
  gem12.body.addImage("l",yellow);
  gem12.body.scale=0.2

  gem13=new Gem(505,441,10,10);
  gem13.body.addImage("m",lightgreen);
  gem13.body.scale=0.2

  gem14=new Gem(600,432,10,10);
  gem14.body.addImage("n",blue);
  gem14.body.scale=0.2

  gem15=new Gem(680,434,10,10);
  gem15.body.addImage("o",yellow);
  gem15.body.scale=0.2

  gem15=new Gem(735,434,10,10);
  gem15.body.addImage("o",red);
  gem15.body.scale=0.2

  gem16=new Gem(680,359,10,10);
  gem16.body.addImage("p",blue);
  gem16.body.scale=0.2

  gem17=new Gem(736,359,10,10);
  gem17.body.addImage("q",darkgreen);
  gem17.body.scale=0.2

  gem18=new Gem(675,289,10,10);
  gem18.body.addImage("r",red);
  gem18.body.scale=0.2

  gem19=new Gem(730,289,10,10);
  gem19.body.addImage("s",lightgreen);
  gem19.body.scale=0.2

  gem20=new Gem(729,224,10,10);
  gem20.body.addImage("t",yellow);
  gem20.body.scale=0.2

  gem21=new Gem(628,208,10,10);
  gem21.body.addImage("u",blue);
  gem21.body.scale=0.2

  gem22=new Gem(579,273,10,10);
  gem22.body.addImage("v",darkgreen);
  gem22.body.scale=0.2
 
  gem23=new Gem(491,273,10,10);
  gem23.body.addImage("w",red);
  gem23.body.scale=0.2

  gem24=new Gem(727,162,10,10);
  gem24.body.addImage("x",lightgreen);
  gem24.body.scale=0.2

  gem25=new Gem(627,133,10,10);
  gem25.body.addImage("y",yellow);
  gem25.body.scale=0.2

  gem26=new Gem(408,278,10,10);
  gem26.body.addImage("z",blue);
  gem26.body.scale=0.2

  gem27=new Gem(314,277,10,10);
  gem27.body.addImage("a",darkgreen);
  gem27.body.scale=0.2

  gem28=new Gem(236,281,10,10);
  gem28.body.addImage("a",red);
  gem28.body.scale=0.2

  gem29=new Gem(236,208,10,10);
  gem29.body.addImage("a",yellow);
  gem29.body.scale=0.2

  gem30=new Gem(236,145,10,10);
  gem30.body.addImage("a",lightgreen);
  gem30.body.scale=0.2

  gem31=new Gem(236,82,10,10);
  gem31.body.addImage("a",blue);
  gem31.body.scale=0.2

  gem32=new Gem(214,373,10,10);
  gem32.body.addImage("a",blue);
  gem32.body.scale=0.2

  gem33=new Gem(213,452,10,10);
  gem33.body.addImage("a",lightgreen);
  gem33.body.scale=0.2

  gem34=new Gem(214,542,10,10);
  gem34.body.addImage("a",yellow);
  gem34.body.scale=0.2

  gem35=new Gem(284,545,10,10);
  gem35.body.addImage("a",darkgreen);
  gem35.body.scale=0.2

  gem36=new Gem(722,69,10,10);
  gem36.body.addImage("a",darkgreen);
  gem36.body.scale=0.2

  gem37=new Gem(620,69,10,10);
  gem37.body.addImage("a",red);
  gem37.body.scale=0.2

  gem38=new Gem(140,615,10,10);
  gem38.body.addImage("a",lightgreen);
  gem38.body.scale=0.2

  gem39=new Gem(56,615,10,10);
  gem39.body.addImage("a",blue);
  gem39.body.scale=0.2

  gem40=new Gem(76,559,10,10);
  gem40.body.addImage("a",yellow);
  gem40.body.scale=0.2

  gem41=new Gem(132,561,10,10);
  gem41.body.addImage("a",darkgreen);
  gem41.body.scale=0.2

  gem42=new Gem(89,92,10,10);
  gem42.body.addImage("a",grey);
  gem42.body.scale=0.5

  gem43=new Gem(425,175,10,10);
  gem43.body.addImage("a",yellow);
  gem43.body.scale=0.2  

  gem44=new Gem(518,65,10,10);
  gem44.body.addImage("a",red);
  gem44.body.scale=0.2  

  gem45=new Gem(420,63,10,10);
  gem45.body.addImage("a",blue);
  gem45.body.scale=0.2  

  gem46=new Gem(523,176,10,10);
  gem46.body.addImage("a",lightgreen);
  gem46.body.scale=0.2  

  */

  if (keyCode===UP_ARROW){
    theif.velocityX=0;
    theif.velocityY=3;
    theif.body.addImage("t",north);
  }

  if (theif.body.isTouching(gem1)){
    gem1.destroy();    
    }
    
}

  function draw(){
    background(0,0,0)
    Engine.update(engine);
  //text(mouseX+","+mouseY,mouseX,mouseY)

  spawngems();
  
  if (keyIsDown(UP_ARROW)){
    theif.body.velocityX=0;
    theif.body.velocityY=-3;
    theif.body.addImage("t",north);
  }else{
theif.body.velocityX=0;
theif.body.velocityY=0;
theif.body.addImage("t",east)
  }

  if (keyIsDown(DOWN_ARROW)){
    theif.body.velocityX=0;
    theif.body.velocityY=3;
    theif.body.addImage("t",south);
  }
 

  if (keyIsDown(LEFT_ARROW)){
    theif.body.velocityX=-3;
    theif.body.velocityY=0;
    theif.body.addImage("t",west);
  }

  if (keyIsDown(RIGHT_ARROW)){
    theif.body.velocityX=3;
    theif.body.velocityY=0;
    theif.body.addImage("t",east);
  }

if (theif.isTouching(gemsGroup)){
gemsGroup.destroyEach();


}

  drawSprites();
  }   

  function spawngems(){
    gemsGroup.add(gem1,gem2,gem3,gem4,gem5,gem6)
    
    
    
      }

  

