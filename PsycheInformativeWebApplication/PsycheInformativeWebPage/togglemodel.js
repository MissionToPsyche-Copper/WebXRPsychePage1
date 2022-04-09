/*
Programmer: Micah Schmidt
Program Description:
Psyche WebXR Exploration XR WebPage
The webpage is programmed with AFrame, a WebXR development framework.
User can rotate the camera around the Psyche asteroid object and tap blue points to be presented with text boxes about Psyche.
This Javascript file handles the function of the blue information points on the AFrame scene.
*/

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

		//get toggle button
		var tb = sceneEl.querySelector('#toggleButton');

		//credits button
		var cb = sceneEl.querySelector('#creditsButton');

		//Interactive Buttons
		var ib1 = sceneEl.querySelector('#interactiveButton1');
		var ib2 = sceneEl.querySelector('#interactiveButton2');
		var ib3 = sceneEl.querySelector('#interactiveButton3');

		//text boxes with info [unused]
		var tfi1 = sceneEl.querySelector('#textFrameInfo1');
		var tfi2 = sceneEl.querySelector('#textFrameInfo2');
		var tfi3 = sceneEl.querySelector('#textFrameInfo3');

		//NASA Psyche Link
		var pwl = sceneEl.querySelector('#psycheWebsiteLink');

		//A-Frame Link
		var afwl = sceneEl.querySelector('#aframeWebsiteLink');

		//Disclaimer Link
		var disl = sceneEl.querySelector('#disclaimerLink');

		//camera
		var cameraOrbit = document.querySelector('#cameraCustomOrbit');
		var cameraStatic = document.querySelector('#cameraStatic');

		//function calling
		var thComponent = document.querySelector('[togglehidden]').components.togglehidden;
		var tmComponent = document.querySelector('[togglemodel]').components.togglemodel;

		//test function
		//thComponent.qux();

		//Give component a function
		this.toggleModel = function () {
			//console.log(el);

			if (el.getAttribute('id') == 'interactiveButton1') {

				//button 1 pressed
				numberButtonsPressed[0] = 1;
				//console.log(numberButtonsPressed);

				//on click, toggle textbox
				//thComponent.toggleTextBox(tfi1);
				toggleText(1);

				//hide other text boxes
				tfi2.setAttribute('opacity', 0.0);
				tfi3.setAttribute('opacity', 0.0);
			}
			else if (el.getAttribute('id') == 'interactiveButton2') {

				//button 2 pressed
				numberButtonsPressed[1] = 1;
				//console.log(numberButtonsPressed);

				//on click, toggle textbox
				//thComponent.toggleTextBox(tfi2);
				toggleText(2);

				//hide other text boxes
				tfi1.setAttribute('opacity', 0.0);
				tfi3.setAttribute('opacity', 0.0);
			}
			else if (el.getAttribute('id') == 'interactiveButton3') {

				//button 2 pressed
				numberButtonsPressed[2] = 1;
				//console.log(numberButtonsPressed);

				//on click, toggle textbox
				//thComponent.toggleTextBox(tfi3);
				toggleText(3);

				//hide other text boxes
				tfi1.setAttribute('opacity', 0.0);
				tfi2.setAttribute('opacity', 0.0);
			}
			else if (el.getAttribute('id') == 'disclaimerLink') {
				//on click, show disclaimer
				toggleText(4);
			}

			//show end screen button after at least one blue point clicked
			if (numberButtonsPressed[0] == 1 || numberButtonsPressed[1] == 1 || numberButtonsPressed[2] == 1) {
				tmComponent.showEndScreenButton(cb);
				//thComponent.showEndScreenButton(cb);
			}

			if (el.getAttribute('id') == 'creditsButton') {
				//hide intro screen
				thComponent.hideMenu(els);
				toggle = 0;

				//hide text boxes
				thComponent.hideTextBoxes(tfi1, tfi2, tfi3);
				toggleText();

				if (toggle2 == 0) {
					//change camera
					cameraOrbit.pause();
					cameraStatic.setAttribute('camera', 'active', true);

					//show end screen
					thComponent.showMenu(els2);
					thComponent.showLinks(pwl, afwl, disl);

					//set toggle2 to 1
					toggle2 = 1;

					//hide blue points while menu active
					thComponent.disableBlueInfoPoints(ib1, ib2, ib3);

					//button text
					cb.setAttribute('value', "Return to Game");

					//weird opacity overlay issue, so move text box while menu active
					tfi1.setAttribute('position', { x: -4.575, y: -5.25, z: -0.25 });

					toggleText();
				}
				else if (toggle2 == 1) {
					//change camera
					cameraOrbit.play();
					cameraOrbit.setAttribute('camera', 'active', true);

					//set three.js camera position
					cameraOrbit.getObject3D('camera').position.set(0, 0, 8);

					//hide end screen
					thComponent.hideMenu(els2);
					thComponent.hideLinks(pwl, afwl, disl);

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
	},

	//Show credits button
	showEndScreenButton: function (cb) {
		//move credits button to position
		cb.setAttribute('position', { x: 1.5, y: -3.5, z: 0.0 });
	}
});