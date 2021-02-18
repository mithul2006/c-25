class ground
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=0;
		this.y=0;
		this.w=50
		this.h=80
		this.body=Bodies.rectangle(x,y,50,80,options);
 		World.add(world,this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(pos.x,pos.y,);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(0,0,this.width,this.hieght);
			pop()
			
	}

}