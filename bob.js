class Bob
{
    constructor(x, y, radius)
    {

        var option = {
            isStatic:false,
            restitution:1,
            friction:0,
            density:0.8
        }
        this.body = Bodies.circle(x, y, radius/2, option);
        // this.body = Bodies.circle(x, y, radius, option);
        World.add(world, this.body);

        this.radius = radius;
        // this.collide(plank1);
        // this.collide(plank2);
    }
    
    display()
    {
        // fill(rgb(0, 163, 204));
        // var pos = this.body.position;
        // ellipseMode(CENTER);
        // ellipse(pos.x ,pos.y+20, this.radius);
        var pos=this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(rgb(0, 153, 255));
        stroke(rgb(1, 137, 228));
        ellipse(0,35,this.radius, this.radius);
        pop();
    }



}
