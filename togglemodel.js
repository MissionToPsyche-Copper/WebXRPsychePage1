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
		var twodbBG = sceneEl.querySelector('#psyche2dbuttonBG')
		var threedbBG = sceneEl.querySelector('#psyche3dbuttonBG')
		var twodbText = sceneEl.querySelector('#psyche2dbuttonText')
		var threedbText = sceneEl.querySelector('#psyche3dbuttonText')
		
		//get 2d model
		var psyche2d = sceneEl.querySelector('#twodpsyche')
		
		//get 3d model
		var psyche3d = sceneEl.querySelector('#threedpsyche')
		
		//Give component a function
		this.toggleModel = function() {
			console.log(el);
			
			if((el.id == "psyche2dbuttonBG" || el.id == "psyche2dbuttonText") && toggle2 == 1)
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
				
				console.log("t3");
				console.log(psyche3d.getAttribute('position'));
				
				let currPosition22 = psyche3d.getAttribute('position');
				let params2 = {
					property: 'position',
					to: {
						x: currPosition.x,
						y: currPosition.y + 100,
						z: currPosition.z
					},
					dur: 5,
				};
				psyche3d.setAttribute('animation', params2);
				
				psyche3d.object3D.scale.set(2.5, 2.5, 2.5);
				psyche3d.object3D.rotation.set(0,0,0);
				
				//psyche3d.setAttribute('rotation', {x: 0, y: 0, z: 0});
				//psyche3d.setAttribute('gltf-model', 'assets/Psyche_Asteroid.gltf');
				
				console.log("t4");
				console.log(psyche3d.getAttribute('position'));
				
				
				toggle2 = 0;
				
				twodbBG.setAttribute('color', '#000000');
				threedbBG.setAttribute('color', '#222426');
			}
			else if ((el.id == "psyche3dbuttonBG" || el.id == "psyche3dbuttonText") && toggle2 == 0)
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
				
				console.log("t1");
				console.log(psyche3d.getAttribute('position'));
				
				let currPosition2 = psyche3d.getAttribute('position');
				let params2 = {
					property: 'position',
					to: {
						x: currPosition.x,
						y: currPosition.y + 0,
						z: currPosition.z
					},
					dur: 5,
				};
				psyche3d.setAttribute('animation', params2);
				
				
				psyche3d.object3D.scale.set(2.5, 2.5, 2.5);
				psyche3d.object3D.rotation.set(0,0,0);
				//psyche3d.setAttribute('rotation', {x: 0, y: 0, z: 0});
				toggle2 = 1;
				
				console.log("t2");
				console.log(psyche3d.getAttribute('position'));
				
				twodbBG.setAttribute('color', '#222426');
				threedbBG.setAttribute('color', '#000000');
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