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

		//get all elements in text frame
		var els2 = sceneEl.querySelectorAll('#textFrame');

		//get all elements in text frame 2
		var els = sceneEl.querySelectorAll('#textFrame2');

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

		//NASA Psyche Link
		var pwl = sceneEl.querySelector('#psycheWebsiteLink');

		//A-Frame Link
		var afwl = sceneEl.querySelector('#aframeWebsiteLink');
		
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

			if (el.getAttribute('id') == 'creditsButton') {


				if (toggle2 == 0) {

					for (var i = 0; i < els.length; i++) {
						let currOpacity = els[i].getAttribute('opacity');
						console.log(currOpacity);
						let params = {
							property: 'opacity',
							to: 0.8,
							dur: 750,
						};
						els[i].setAttribute('animation', params);
					}
					pwl.setAttribute('position', { x: 1, y: 1.25, z: 0.2 });
					pwl.setAttribute('data-raycastable');

					afwl.setAttribute('opacity', 1.0);
					afwl.setAttribute('data-raycastable');

					toggle2 = 1;
				}
				else if (toggle2 == 1) {

					for (var i = 0; i < els.length; i++) {
						let currOpacity = els[i].getAttribute('opacity');
						console.log(currOpacity);
						let params = {
							property: 'opacity',
							to: 0.0,
							dur: 1750,
						};
						els[i].setAttribute('animation', params);
					}
					pwl.setAttribute('position', { x: 0, y: 0, z: -4 });
					pwl.removeAttribute('data-raycastable');

					afwl.setAttribute('opacity', 0.0);
					afwl.removeAttribute('data-raycastable');

					toggle2 = 0;
				}
				for (var i = 0; i < els2.length; i++) {
					let currOpacity = els2[i].getAttribute('opacity');
					//console.log(currOpacity);
					let params = {
						property: 'opacity',
						to: 0,
						dur: 750,
					};
					els2[i].setAttribute('animation', params);
				}
				//button text
				cb.setAttribute('value', "Return to Game");

				//hide blue points while menu active
				ib1.setAttribute('position', { x: 1, y: 0, z: -4 });
				ib2.setAttribute('position', { x: 1, y: 0, z: -4 });
				ib3.setAttribute('position', { x: 1, y: 0, z: -4 });

				//hide text boxes
				tfi1.setAttribute('opacity', 0.0);
				tfi2.setAttribute('opacity', 0.0);
				tfi3.setAttribute('opacity', 0.0);
            }
		}

		//Add EventListener
		this.el.addEventListener('click', this.toggleModel);
	},
	//On Remove
	remove: function () {
		this.el.removeEventListener('click', this.toggleModel);
	}
});