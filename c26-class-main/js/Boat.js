class Boat{
   
    constructor(x, y, w, h, boatPos, boatAnimation)
    {
        var boat_options = {
        friction: 1,
        density:1,
        restitution:0.75
        }
        this.body  = Bodies.rectangle(x, y, w, h, boat_options)
        this.w = w
        this.h = h;

        this.animation = boatAnimation;
        this.speed = 0.05;
        
        this.boatPosition = boatPos;
        this.image = loadImage("assets/boat.png")  
        World.add(myWorld, this.body)   
     }

     animate()
     {
         this.speed = this.speed + 0.05;
         console.log(this.speed);
     }
                    
     display(){

         var pos = this.body.position;

         var index = floor(this.speed % 4);
         

         push();

         imageMode(CENTER);
         image(this.animation[index], pos.x, this.boatPosition , this.w, this.h )
         pop();
     }

    // boats[j].remove(j);
      remove(index)
      {
            Matter.World.remove(myWorld, boats[index].body);
            boats.splice(index, 1)
            
      }


    }





