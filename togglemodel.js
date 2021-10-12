//Global Vars
var toggle = 0;

//Register Aframe Component (all lower case)
AFRAME.registerComponent('togglemodel', {
	//Initialize function
	init: function() {
		//get scene element
		var sceneEl = document.querySelector('a-scene')
		
		//Get this element
		let el = this.el;
		
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
			console.log("changing model");
			let currOpacity = psyche3d.getAttribute('opacity');
			let params = {
				property: 'opacity',
				to: 1.0,
				dur: 750,
			};
			psyche3d.setAttribute('animation', params);
		}
		
		//Add EventListener
		this.el.addEventListener('click', this.toggleModel);
	},
	//On Remove
	remove: function() {
		this.el.removeEventListener('click', this.toggleModel);
	}
});