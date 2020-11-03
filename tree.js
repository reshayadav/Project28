class Tree{
    constructor(x,y,w,h){
        var options={
            isStatic:true
      }
      
      
      this.body = Bodies.rectangle(x,y,w,h,options);
      World.add(world,this.body);
      this.image= loadImage("Pluckingmangoes/tree.png");

    }
    display(){
        var treepos = this.body.position;
      
        imageMode(CENTER);
        image(this.image,treepos.x,treepos.y,490,590);
       
        
    }
}