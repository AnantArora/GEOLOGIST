class Rubber{
    constructor(x,y,radius){
        var options={
            restitution:0.8,
            friction:1,
            density:1
        }
        this.body=Bodies.circle(720,270,20,options)
        this.radius=50;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);

        fill("#000099");
        strokeWeight(8);
stroke("#00ff00");
        ellipse(0,0,40);
        pop();
    }
}
