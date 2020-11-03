class Mango{
    constructor(x,y,r){

        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }

        this.r = r;
        this.body = Bodies.circle(x,y,r,options);
        this.image = loadImage("Pluckingmangoes/mango.png");
        World.add(world,this.body);

    }

    display(){
     var mangopos = this.body.position; 
        imageMode (CENTER);
        image (this.image,mangopos.x,mangopos.y,40,40);

    }
}