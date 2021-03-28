class Paper{
    constructor(x,y,r){
        var options = {
            'restitution': 0.3,
            'isStatic': true,
            'density':1.2,
            'friction':0.5
            
        }
        this.r = r;
        this.paper = Bodies.circle(x,y,this.r,options);
        this.color = color(random(0,255), random(0,255), random(0, 255));
        World.add(world,this.paper);
    }

    display(){

        var position = this.paper.position;
        var angle = this.paper.angle;
        
        push();
        translate(position.x, position.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r, this.r)
        pop();
    }
}

