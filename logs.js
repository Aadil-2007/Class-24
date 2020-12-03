class Logs {
    constructor(x, y, height,angle) {
      var options = {
          'restitution':0.1,
          'friction':5,
          'density':3
      }
      this.body = Bodies.rectangle(x, y,15,height, options);
      this.width = 15;
      this.height = height;
      Matter.Body.setAngle(this.body,angle);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("red");
      fill("yellow");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  