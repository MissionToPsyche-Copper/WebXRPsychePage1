/*
Programmer: Micah Schmidt
Program Description:
Psyche WebXR Exploration XR WebPage
The webpage is programmed with AFrame, a WebXR development framework.
User can rotate the camera around the Psyche asteroid object and tap blue points to be presented with text boxes about Psyche.
This Javascript file plays/pauses the 'orbit' rotation animation of the asteroid.
*/

//Global Vars
var toggle3 = 1;

//Register Aframe Component (all lower case)
AFRAME.registerComponent('playpauseorbit', {
	//Initialize function
	init: function () {
		//get scene element
		var sceneEl = document.querySelector('a-scene')

		//Get this element
		let el = this.el;

		//get asteroid
		var ast = sceneEl.querySelector('#threedpsyche');

		//pauseplay button
		var ppbg = sceneEl.querySelector('#playPauseBG');
		var ppb = sceneEl.querySelector('#playPauseButton');

		//Give component a function
		this.toggleModel = function () {
			//console.log(el);

			if (toggle3 == 1) {
				//pause
				ast.dispatchEvent(new CustomEvent('rotation-pause'));

				//set icon
				ppb.setAttribute('material', 'src: #playSvg;');

				toggle3 = 0;
			}
			else if (toggle3 == 0) {
				//play
				ast.dispatchEvent(new CustomEvent('rotation-resume'));

				//set icon
				ppb.setAttribute('material', 'src: #pauseSvg;');

				toggle3 = 1;
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