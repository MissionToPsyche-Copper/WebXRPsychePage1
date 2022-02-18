//Global Vars
var toggle2 = 0; //0: 2d; 1: 3d
var numberButtonsPressed = [0, 0, 0]; //was each button pressed

//Register Aframe Component (all lower case)
AFRAME.registerComponent('togglemodel', {
	//Initialize function
	init: function () {
		//get scene element
		var sceneEl = document.querySelector('a-scene')

		//Get this element
		let el = this.el;
		console.log(el);

		//get model buttons
		var twodbBG = sceneEl.querySelector('#psyche2dbuttonBG')
		var threedbBG = sceneEl.querySelector('#psyche3dbuttonBG')
		var twodbText = sceneEl.querySelector('#psyche2dbuttonText')
		var threedbText = sceneEl.querySelector('#psyche3dbuttonText')

		//get 2d model
		var psyche2d = sceneEl.querySelector('#twodpsyche')

		//get 3d model
		var psyche3d = sceneEl.querySelector('#threedpsyche')

		//Interactive Buttons
		var ib1 = sceneEl.querySelector('#interactiveButton1');
		var ib2 = sceneEl.querySelector('#interactiveButton2');
		var ib3 = sceneEl.querySelector('#interactiveButton3');

		//text boxes with info
		var tfi1 = sceneEl.querySelector('#textFrameInfo1');
		var tfi2 = sceneEl.querySelector('#textFrameInfo2');
		var tfi3 = sceneEl.querySelector('#textFrameInfo3');

		//credits button
		var cb = sceneEl.querySelector('#creditsButton');

		//Give component a function
		this.toggleModel = function () {
			console.log(el);

			if (el.getAttribute('id') == 'interactiveButton1') {

				console.log(el.getAttribute('id'));

				//console.log(el.getAttribute('active-color'));
				//ib1.setAttribute('active-color', '#DE3163');
				//console.log(el.getAttribute('active-color'));
				//sadly unable to change attributes of aframe-gui
				//objects at run-time, very annoying

				console.log(tfi1.getAttribute('opacity'));

				if (tfi1.getAttribute('opacity') == '0.9') {
					tfi1.setAttribute('opacity', 0.0);
				}
				else {
					tfi1.setAttribute('opacity', 0.9);
					numberButtonsPressed[0] = 1; //button 1 pressed
					console.log(numberButtonsPressed);
				}

				tfi2.setAttribute('opacity', 0.0);
				tfi3.setAttribute('opacity', 0.0);

				console.log(tfi1.getAttribute('opacity'));
			}
			else if (el.getAttribute('id') == 'interactiveButton2') {

				console.log(el.getAttribute('id'));

				console.log(tfi2.getAttribute('opacity'));

				if (tfi2.getAttribute('opacity') == '0.9') {
					tfi2.setAttribute('opacity', 0.0);
				}
				else {
					tfi2.setAttribute('opacity', 0.9);
					numberButtonsPressed[1] = 1; //button 2 pressed
					console.log(numberButtonsPressed);
				}
				tfi1.setAttribute('opacity', 0.0);
				tfi3.setAttribute('opacity', 0.0);

				console.log(tfi2.getAttribute('opacity'));
			}
			else if (el.getAttribute('id') == 'interactiveButton3') {

				console.log(el.getAttribute('id'));

				console.log(tfi3.getAttribute('opacity'));

				if (tfi3.getAttribute('opacity') == '0.9') {
					tfi3.setAttribute('opacity', 0.0);
				}
				else {
					tfi3.setAttribute('opacity', 0.9);
					numberButtonsPressed[2] = 1; //button 3 pressed
					console.log(numberButtonsPressed);
				}

				tfi1.setAttribute('opacity', 0.0);
				tfi2.setAttribute('opacity', 0.0);

				console.log(tfi3.getAttribute('opacity'));
			}

			if (numberButtonsPressed[0] == 1 || numberButtonsPressed[1] == 1 || numberButtonsPressed[2] == 1) {
				cb.setAttribute('position', { x: 1.5, y: -3.5, z: 0.0 });
				
			}




			/*
			if ((el.id == "psyche2dbuttonBG" || el.id == "psyche2dbuttonText") && toggle2 == 1) {
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
				psyche3d.object3D.rotation.set(0, 0, 0);

				//psyche3d.setAttribute('rotation', {x: 0, y: 0, z: 0});
				//psyche3d.setAttribute('gltf-model', 'assets/Psyche_Asteroid.gltf');

				console.log("t4");
				console.log(psyche3d.getAttribute('position'));


				toggle2 = 0;

				twodbBG.setAttribute('color', '#000000');
				threedbBG.setAttribute('color', '#222426');
			}
			else if ((el.id == "psyche3dbuttonBG" || el.id == "psyche3dbuttonText") && toggle2 == 0) {
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
				psyche3d.object3D.rotation.set(0, 0, 0);
				//psyche3d.setAttribute('rotation', {x: 0, y: 0, z: 0});
				toggle2 = 1;

				console.log("t2");
				console.log(psyche3d.getAttribute('position'));

				twodbBG.setAttribute('color', '#222426');
				threedbBG.setAttribute('color', '#000000');
			}*/
		}

		//Add EventListener
		this.el.addEventListener('click', this.toggleModel);
	},
	//On Remove
	remove: function () {
		this.el.removeEventListener('click', this.toggleModel);
	}
});