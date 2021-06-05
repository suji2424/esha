class Ground {
    constructor(x,y,width,height)   {
        var options = {
           isStatic:true,
           'density':1,
           'restitution':0,
           'friction':0
        }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
}
display()  {
    push ()
       rectMode(CENTER);
      fill(255);
      rect(this.ground.position.x, this.ground.position.y,1200,20);
      pop ();
    }
};
