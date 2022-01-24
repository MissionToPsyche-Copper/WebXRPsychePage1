//Global Vars
var rotateable = 0;
let el;

//Register Aframe Component (all lower case)
AFRAME.registerComponent('rotateasteroid', {
	//Schema: user defined properties of the component
	schema : { 
		xSpeed : {default: 3.5},
		ySpeed : {default: 3.5}
	},
	
	//Initialize function
	init : function(){
		//get scene element
		var sceneEl = document.querySelector('a-scene')
		
		//Get this element
		el = this.el;
		console.log(el);
	
		//get mouse/touch info
		this.ifMouseDown = false;
		this.xCoord = 0; 
		this.yCoord = 0;
		
		//mousedown/up/move + touch event listeners
		/*document.addEventListener('mousedown',this.OnDocumentMouseDown.bind(this));
		document.addEventListener('mouseup',this.OnDocumentMouseUp.bind(this));
		document.addEventListener('mousemove',this.OnDocumentMouseMove.bind(this));
		document.addEventListener('touchmove',this.OnDocumentTouchMove.bind(this));*/
		/*document.addEventListener('mousedown',this.OnMouseDown.bind(this));
		document.addEventListener('mouseup',this.OnMouseUp.bind(this));
		document.addEventListener('mousemove',this.OnMouseMove.bind(this));
		document.addEventListener('touchmove',this.OnTouchMove.bind(this));
		*/
		//Hammerhead.js for touch gestures
		
		var hammertime = new Hammer(sceneEl);
		var pinch = new Hammer.Pinch(); //pinch
		hammertime.add(pinch); // add pinch to Manager instance
		
		hammertime.on('pan', (ev) => {
			let rotation = el.getAttribute("rotation")
			switch(ev.direction) {
			  case 4:
				rotation.y = rotation.y + 1.4
				break;
			  case 2:
				rotation.y = rotation.y - 1.4
				break;
			  case 16:
				rotation.x = rotation.x + 1.4
				break;
			  case 8:
				rotation.x = rotation.x - 1.4
				break;
			  default:
				break;
			}
			el.setAttribute("rotation", rotation)
		});
		
		hammertime.on("pinch", (ev) => {
			let scale = {x:ev.scale*23.0, y:ev.scale*23.0, z:ev.scale*23.0}
			el.setAttribute("scale", scale);
		});
	},
	
	
	//mouse down event
	//OnDocumentMouseDown : function(event)
	OnMouseDown : function(event)
	{
        el.setAttribute('color', 'red');
		
		this.ifMouseDown = true;
		
		//get coordinates
		this.xCoord = event.clientX;
		this.yCoord = event.clientY;
		
		console.log("MouseDown event.clientX " + event.clientX);
		console.log("MouseDown event.clientY " + event.clientY);
	},
	
	//mouse up event
	//OnDocumentMouseUp : function()
	OnMouseUp : function()
	{
        el.setAttribute('color', 'blue');
		
		this.ifMouseDown = false;
	},
	
	
	//touch move event
	//OnDocumentTouchMove : function(e)
	OnTouchMove : function(e)
	{
		//touch coordinates
		var evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent;
		var touch = evt.touches[0] || evt.changedTouches[0];
		
		
		//check mouse down
		if(this.ifMouseDown)
		{
			console.log("touch moving");
			el.setAttribute('color', 'cyan');
			
			//get mouse position
			//var xTemp = touch.pageX - this.xCoord;
			//var yTemp = touch.pageY - this.yCoord;
			var xTemp = touch.pageX;// - this.xCoord;
			var yTemp = touch.pageY;// - this.yCoord;
		
			console.log("MouseDown xTemp " + xTemp);
			console.log("MouseDown yTemp " + yTemp);
			/*
			//rotate object by x and y speeds
			el.object3D.rotateX(yTemp*this.data.ySpeed/100000);
			el.object3D.rotateY(xTemp*this.data.xSpeed/100000);
			*/
			if(Math.abs(yTemp)<Math.abs(xTemp))
			{
				el.object3D.rotateY(xTemp*this.data.ySpeed/100000);
			}
			else
			{
				el.object3D.rotateX(yTemp*this.data.xSpeed/100000);
			}
			
			
			//set coordinates
			this.xCoord = touch.pageX;
			this.yCoord = touch.pageY;
		}
	},

	//mouse move event
	//OnDocumentMouseMove : function(event)
	OnMouseMove : function(event)
	{
		//check mouse down
		if(this.ifMouseDown)
		{
			console.log("moving");
			el.setAttribute('color', 'green');
			
			//get mouse position
			var xTemp = event.clientX - this.xCoord;
			var yTemp = event.clientY - this.yCoord;
		
			console.log("MouseDown xTemp " + xTemp);
			console.log("MouseDown yTemp " + yTemp);
			/*
			//rotate object by x and y speeds
			//el.object3D.rotate(yTemp*this.data.ySpeed/1000,xTemp*this.data.xSpeed/1000, 0);
			el.object3D.rotateY(xTemp*this.data.xSpeed/1000);
			el.object3D.rotateX(yTemp*this.data.ySpeed/1000);
			*/
			
			if(Math.abs(yTemp)<Math.abs(xTemp))
			{
				el.object3D.rotateY(xTemp*this.data.ySpeed/1000);
			}
			else
			{
				el.object3D.rotateX(yTemp*this.data.xSpeed/1000);
			}
			
			//set coordinates
			this.xCoord = event.clientX;
			this.yCoord = event.clientY;
		}
	}
	
	
	//On Remove
	//remove: function() {
	//	this.el.removeEventListener('click', this.rotateAst);
	//}	
});