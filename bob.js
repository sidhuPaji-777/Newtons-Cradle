class Bob
{
    constructor(x, y, radius)
    {

        var option = {
            isStatic:true,
            restitution:1,
            friction:0,
            density:0.8
        }
        this.body = Bodies.circle(x, y, radius, option);
        World.add(world, this.body);

        this.radius = radius;
        // this.collide(plank1);
        // this.collide(plank2);
    }
    
    display()
    {
        fill(rgb(0, 163, 204));
        stroke("pink");
        strokeWeight(1.5);
        var pos = this.body.position;
        ellipseMode(CENTER);
        ellipse(pos.x ,pos.y+20, this.radius);

    }



}