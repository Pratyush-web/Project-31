class Particle
{
    constructor(x, y, r)
    {
        var options = {isStatic: false, restitution: 0.5, friction: 0.8, density: 1};
        this.r = r;
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        this.body = Bodies.circle(x, y, this.r, options);

        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        var ang = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(ang);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}