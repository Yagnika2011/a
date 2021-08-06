var canvas=new fabric.Canvas("myCanvas");
ball_y=0;
ball_x=0;
hole_y=400; 
hole_x=800;

// Create canvas variable

//Set initial positions for ball and hole images.


block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("golf-h.png",function(Img){
		ho=Img;
		ho.scaleToWidth(50);
		ho.scaleToHeight(50);
		ho.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(ho);
	});
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("ball.png",function(Img){
		bo=Img;
		bo.scaleToWidth(50);
		bo.scaleToHeight(50);
	    bo.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(bo);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	function down(){
		if(ball_y<=450){
			ball_y=ball_y+block_image_height;
			canvas.remove(bo);
			new_image();
		}
	}
	
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(bo);
		document.getElementById("hd3").innerHTML="YOU HAVE HIT THE GOAL!";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
	}

	function down()
	{
		 // Write a code to move ball downward.
	}

	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
		}
	}
	
}

