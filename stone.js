class Stone{
    constructor(x,y,r){

    var options={
        isStatic:false,
        restitution:0,
        friction:1,
        density:1.2
    }
    this.r = r;
    this.body = Bodies.circle(x,y,r,options);
    World.add(world,this.body);
    this.image = loadImage("Pluckingmangoes/stone.png");

    }

    display(){
       // this.body.position.y = mouseY;
       // this.body.position.x = mouseX;

        var pos = this.body.position;
        imageMode (CENTER);
        image (this.image,pos.x,pos.y,this.r,this.r);
    }
}