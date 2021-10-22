//Global Vars
var toggle2 = 0; //0: 2d; 1: 3d

//Register Aframe Component (all lower case)
AFRAME.registerComponent('togglemodel', {
	//Initialize function
	init: function() {
		//get scene element
		var sceneEl = document.querySelector('a-scene')
		
		//Get this element
		let el = this.el;
		console.log(el);
		
		//get all elements in text frame
		var els = sceneEl.querySelectorAll('#textFrame');
		
		//get model buttons
		var twodb = sceneEl.querySelectorAll('#psyche2dbutton')
		var threedb = sceneEl.querySelectorAll('#psyche3dbutton')
		
		//get 2d model
		var psyche2d = sceneEl.querySelector('#twodpsyche')
		
		//get 3d model
		var psyche3d = sceneEl.querySelector('#threedpsyche')
		
		//Give component a function
		this.toggleModel = function() {
			console.log(el);
			
			if(el.id == "psyche2dbutton" && toggle2 == 1)
			{
				console.log("changing model2");
				let currPosition = psyche2d.getAttribute('position');
				let params = {
					property: 'position',
					to: {
						x: currPosition.x,
						y: currPosition.y - 100,
						z: currPosition.z
					},
					dur: 5,
				};
				psyche2d.setAttribute('animation', params);
				let currOpacity2 = psyche3d.getAttribute('opacity');
				let params2 = {
					property: 'opacity',
					to: 0.0,
					dur: 5,
				};
				psyche3d.setAttribute('animation', params2);
				toggle2 = 0;
			}
			else if (el.id == "psyche3dbutton" && toggle2 == 0)
			{
				console.log("changing model1");
				let currPosition = psyche2d.getAttribute('position');
				let params = {
					property: 'position',
					to: {
						x: currPosition.x,
						y: currPosition.y + 100,
						z: currPosition.z
					},
					dur: 5,
				};
				psyche2d.setAttribute('animation', params);
				let currOpacity2 = psyche3d.getAttribute('opacity');
				let params2 = {
					property: 'opacity',
					to: 1.0,
					dur: 5,
				};
				psyche3d.setAttribute('animation', params2);
				toggle2 = 1;
			}
		}
		
		//Add EventListener
		this.el.addEventListener('click', this.toggleModel);
	},
	//On Remove
	remove: function() {
		this.el.removeEventListener('click', this.toggleModel);
	}
});