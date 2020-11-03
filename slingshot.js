class Slingshot{
    constructor(bodyA,pointB){

        var options={
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.003,
          lenght: 10
        }
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
        console.log(this.sling);
      }

   attach(body){
     this.sling.bodyA = body;
   }

    display(){
       if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(4);
        line (pointA.x,pointA.y,pointB.x,pointB.y);
       }
    }
    fly(){
      this.sling.bodyA = null;
     }
}