class Maize{
constructor(x,y,width,height){

this.x=x;
this.y=y;
this.width=width;
this.height=height;

    var options={

        'restitution':0.8,
        'friction':1.2,
        'density':1.2,
        isStatic:true
    }

    this.body=createSprite(this.x,this.y,this.width,this.height,options);

}






}