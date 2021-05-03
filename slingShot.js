class slingshot{
  constructor(bodyA, pointB){
      var option = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.004,
          length: 10
      }
      this.chain = Constraint.create(option);
      World.add(world, this.chain);
  }
  fly(){
      this.chain.bodyA = null;
  }
  attach(){
      this.chain.bodyA = stoneObj.body;   
  }
  display(){
      if(this.chain.bodyA){
      var pointA = this.chain.bodyA.position;
      var pointB = this.pointB;
      strokeWeight(4);
      line(pointA.x, pointA.y, pointB.x, pointB.y);
      }
  }
  
}