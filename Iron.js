class Iron{
	constructor(x,y)
	{
		var options = {
            'restitution':0.8,
            'friction':3,
            'density':30
        }
	// assign options to the rubber ball
		
    this.body=Bodies.rectangle(x,y,80,50, options)
    this.width=80
    this.height=50

    World.add(world, this.body);

}
display()
{
        var ironpos=this.body.position;
        var angle=this.body.angle		
        push()
        translate(ironpos.x, ironpos.y);
        rotate(angle)
        rectMode(CENTER)
      //  strokeWeight(4);
       // stroke("black");
        fill("black");
        //draw the ellipse here to display the rubber ball
        rect(0,0,this.witdth,this.height)

        pop()
}

}