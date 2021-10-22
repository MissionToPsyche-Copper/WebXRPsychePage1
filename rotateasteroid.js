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
		//let el = this.el;
		el = this.el;
	
		//Give component a function
		/*this.rotateAst = function() {
			
		}*/
	
		//get mouse/touch info
		this.ifMouseDown = false;
		this.xCord = 0; 
		this.yCord = 0;
		
		//mousedown/up/move event listeners
		document.addEventListener('mousedown',this.OnDocumentMouseDown.bind(this));
		document.addEventListener('mouseup',this.OnDocumentMouseUp.bind(this));
		document.addEventListener('mousemove',this.OnDocumentMouseMove.bind(this));
		
		//Add EventListener
		//this.el.addEventListener('click', this.rotateAst);
	},
	
	//mouse down event
	OnDocumentMouseDown : function(event)
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
	OnDocumentMouseUp : function()
	{
        el.setAttribute('color', 'blue');
		
		this.ifMouseDown = false;
	},
	
	//mouse move event
	OnDocumentMouseMove : function(event)
	{
		//check mouse down
		if(this.ifMouseDown)
		{
			el.setAttribute('color', 'green');
			
			//get mouse position
			var xTemp = event.clientX - this.xCoord;
			var yTemp = event.clientY - this.yCoord;
		
			console.log("MouseDown xTemp " + xTemp);
			console.log("MouseDown yTemp " + yTemp);
			
			//rotate object by x and y speeds
			//el.object3D.rotate(yTemp*this.data.ySpeed/1000,xTemp*this.data.xSpeed/1000, 0);
			el.object3D.rotateY(xTemp*this.data.xSpeed/1000);
			el.object3D.rotateX(yTemp*this.data.ySpeed/1000);
			
			//set coordinates
			this.xCoord = event.clientX;
			this.yCoord = event.clientY;
			}
		}
	},
	
	//On Remove
	//remove: function() {
	//	this.el.removeEventListener('click', this.rotateAst);
	//}	
);