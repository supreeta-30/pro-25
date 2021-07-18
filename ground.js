class Ground {
    constructor(x,y){
        var options ={
          isStatic:true,
          
        }
        this.body = Bodies.rectangle(x,y,800,20,options);
        this.width = 800;
        this.height = 20;

        World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      push();

       rectMode(CENTER);
       fill("yellow");
       rect(this.body.position.x,this.body.position.y,this.width,this.height);
       pop()


    }
}