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
		var sceneEl = document.querySelector('a-scene');
		
		//Get this element
		el = this.el;
		console.log(el);
		
		//Listen for touch event
		sceneEl.addEventListener('touchmove', event => {touchRotate(event)});
		
		//Hammer.js for touch gestures
		//const hammerManager = new Hammer.Manager(sceneEl)
		const hammerManager = new Hammer(sceneEl);
		
		//add pinch gesture
		const pinch = new Hammer.Pinch()
		hammerManager.add(pinch)
		
		/*
		//pan event
		hammerManager.on('pan', (ev) => {
			let rotation = el.getAttribute("rotation");
			console.log(ev);
			/*switch(ev.direction){
				case 2:
					rotation.y = rotation.y - 1.4;
					break;
				case 4:
					rotation.y = rotation.y + 1.4;
					break;
				case 8:
					rotation.x = rotation.x - 1.4;
					break;
				case 16:
					rotation.x = rotation.x + 1.4;
				break;
				default:
					break;
			}
			
			/*rotation.x = rotation.x - (0.01)*ev.deltaY;
			rotation.y = rotation.y + (0.01)*ev.deltaX;
			
			
			el.setAttribute("rotation", rotation);
		});*/
		
		//rotate on touch move event
		const touchRotate = event => {
		
			const currentRotate = el.getAttribute('rotation');
		
			let touches = event.changedTouches;
			
			for (touch of touches) 
			{
				var xTemp = touch.pageX;
				var yTemp = touch.pageY;
				
				/*el.setAttribute('rotation', {
					'x': currentRotate.x - touch.pageY*0.005,
					'y': currentRotate.y + touch.pageX*0.005,
					'z': currentRotate.z
				})*/
				
				/*el.setAttribute('rotation', {
					'x': currentRotate.x - yTemp*this.data.ySpeed/1000,
					'y': currentRotate.y + xTemp*this.data.xSpeed/1000,
					'z': currentRotate.z
				})*/
				
				el.object3D.rotation.set(
					THREE.Math.degToRad(currentRotate.x - yTemp*this.data.ySpeed/1000),
					THREE.Math.degToRad(currentRotate.y + xTemp*this.data.xSpeed/1000),
					THREE.Math.degToRad(currentRotate.z)
				);
			}
		}
		
		//pinch event
		hammerManager.on('pinch', function(ev) {
			const currentScale = el.getAttribute('scale');
			const newScale = (ev.scale - 1)*0.01;
			
			const maxScale = 2.75;
			const minScale = 0.2;
			
			/*console.log(Math.max(minScale, Math.min(currentScale.x + newScale, maxScale)));
			console.log(Math.max(minScale, Math.min(currentScale.y + newScale, maxScale)));
			console.log(Math.max(minScale, Math.min(currentScale.z + newScale, maxScale)));*/
			
			if (ev.type == "pinch") {
				el.object3D.scale.set(
					Math.max(minScale, Math.min(currentScale.x + newScale, maxScale)),
					Math.max(minScale, Math.min(currentScale.y + newScale, maxScale)),
					Math.max(minScale, Math.min(currentScale.z + newScale, maxScale))
				);
			}
		})
		
		/*
		//get mouse/touch info
		this.ifMouseDown = false;
		this.xCoord = 0; 
		this.yCoord = 0;
		document.addEventListener('mousedown',this.OnMouseDown.bind(this));
		document.addEventListener('mouseup',this.OnMouseUp.bind(this));
		document.addEventListener('touchmove',this.OnTouchMove.bind(this));
		*/
		/*
		//mousedown/up/move + touch event listeners
		document.addEventListener('mousedown',this.OnDocumentMouseDown.bind(this));
		document.addEventListener('mouseup',this.OnDocumentMouseUp.bind(this));
		document.addEventListener('mousemove',this.OnDocumentMouseMove.bind(this));
		document.addEventListener('touchmove',this.OnDocumentTouchMove.bind(this));*/
		/*document.addEventListener('mousedown',this.OnMouseDown.bind(this));
		document.addEventListener('mouseup',this.OnMouseUp.bind(this));
		document.addEventListener('mousemove',this.OnMouseMove.bind(this));
		document.addEventListener('touchmove',this.OnTouchMove.bind(this));
		*/
	},
	
	/*
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
	
	*/
	//touch move event
	//OnDocumentTouchMove : function(e)
	/*OnTouchMove : function(e)
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
			*//*
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
	*/
	//On Remove
	//remove: function() {
	//	this.el.removeEventListener('click', this.rotateAst);
	//}	
});