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

		//get all elements in text frame
		var els = sceneEl.querySelectorAll('#textFrame');

		//get all elements in text frame 2
		var els2 = sceneEl.querySelectorAll('#textFrame2');

		//Interactive Buttons
		var ib1 = sceneEl.querySelector('#interactiveButton1');
		var ib2 = sceneEl.querySelector('#interactiveButton2');
		var ib3 = sceneEl.querySelector('#interactiveButton3');

		//text boxes with info
		var tfi1 = sceneEl.querySelector('#textFrameInfo1');
		var tfi2 = sceneEl.querySelector('#textFrameInfo2');
		var tfi3 = sceneEl.querySelector('#textFrameInfo3');

		//get toggle button
		var tb = sceneEl.querySelector('#toggleButton');

		//credits button
		var cb = sceneEl.querySelector('#creditsButton');

		//NASA Psyche Link
		var pwl = sceneEl.querySelector('#psycheWebsiteLink');

		//A-Frame Link
		var afwl = sceneEl.querySelector('#aframeWebsiteLink');

		//function calling
		var thComponent = document.querySelector('[togglehidden]').components.togglehidden;

		//test function
		thComponent.qux();

		//Give component a function
		this.toggleModel = function () {
			//console.log(el);

			if (el.getAttribute('id') == 'interactiveButton1') {
				//on click, toggle textbox
				thComponent.toggleTextBox(tfi1);

				//button 1 pressed
				numberButtonsPressed[0] = 1;
				//console.log(numberButtonsPressed);

				//hide other text boxes
				tfi2.setAttribute('opacity', 0.0);
				tfi3.setAttribute('opacity', 0.0);
			}
			else if (el.getAttribute('id') == 'interactiveButton2') {
				//on click, toggle textbox
				thComponent.toggleTextBox(tfi2);

				//button 2 pressed
				numberButtonsPressed[1] = 1;
				//console.log(numberButtonsPressed);

				//hide other text boxes
				tfi1.setAttribute('opacity', 0.0);
				tfi3.setAttribute('opacity', 0.0);
			}
			else if (el.getAttribute('id') == 'interactiveButton3') {
				//on click, toggle textbox
				thComponent.toggleTextBox(tfi3);

				//button 2 pressed
				numberButtonsPressed[2] = 1;
				//console.log(numberButtonsPressed);

				//hide other text boxes
				tfi1.setAttribute('opacity', 0.0);
				tfi2.setAttribute('opacity', 0.0);
			}

			//show end screen button after at least one blue point clicked
			if (numberButtonsPressed[0] == 1 || numberButtonsPressed[1] == 1 || numberButtonsPressed[2] == 1) {
				thComponent.showEndScreenButton(cb);
			}

			if (el.getAttribute('id') == 'creditsButton') {
				//hide intro screen
				thComponent.hideMenu(els);
				toggle = 0;

				//hide text boxes
				thComponent.hideTextBoxes(tfi1, tfi2, tfi3);

				if (toggle2 == 0) {
					//show end screen
					thComponent.showMenu(els2);
					thComponent.showLinks(pwl, afwl);

					//set toggle2 to 1
					toggle2 = 1;

					//hide blue points while menu active
					thComponent.disableBlueInfoPoints(ib1, ib2, ib3);

					//button text
					cb.setAttribute('value', "Return to Game");

					//weird opacity overlay issue, so move text box while menu active
					tfi1.setAttribute('position', { x: -4.575, y: -5.25, z: -0.25 });
				}
				else if (toggle2 == 1) {
					//hide end screen
					thComponent.hideMenu(els2);
					thComponent.hideLinks(pwl, afwl);

					//set toggle2 to 0
					toggle2 = 0;

					//show blue points
					thComponent.activateBlueInfoPoints(ib1, ib2, ib3);

					//button text
					cb.setAttribute('value', "Credits");

					//weird opacity overlay issue, so move text box while menu active
					tfi1.setAttribute('position', { x: -4.575, y: -2.25, z: -0.25 });
				}

				/*console.log("toggle");
				console.log(toggle);
				console.log("toggle2");
				console.log(toggle2);*/

				//button text
				tb.setAttribute('value', "Show Introduction");
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