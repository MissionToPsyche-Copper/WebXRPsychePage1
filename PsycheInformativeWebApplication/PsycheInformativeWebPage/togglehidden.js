//Global Vars
var toggle = 1;

//Register Aframe Component (all lower case)
AFRAME.registerComponent('togglehidden', {
	//Initialize function
	init: function () {
		//get scene element
		var sceneEl = document.querySelector('a-scene')

		//Get this element
		var el = this.el;

		//get all elements in text frame
		var els = sceneEl.querySelectorAll('#textFrame');

		//get all elements in text frame
		var els2 = sceneEl.querySelectorAll('#textFrame2');

		//get toggle button
		var tb = sceneEl.querySelector('#toggleButton');

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

		//camera
		var cameraOrbit = document.querySelector('#cameraCustomOrbit');
		var cameraStatic = document.querySelector('#cameraStatic');

		//pause
		//cameraOrbit.pause();

		//function calling
		var thComponent = document.querySelector('[togglehidden]').components.togglehidden;

		//test function
		//thComponent.qux();

		//slow in animation on load
		thComponent.menuSlideDown(els, tb);

		//Give component a function
		this.toggleHide = function () {
			//hide end screen menu
			thComponent.hideMenu(els2);
			thComponent.hideLinks(pwl, afwl);
			toggle2 = 0;

			//hide text boxes
			thComponent.hideTextBoxes(tfi1, tfi2, tfi3);

			if (toggle == 1) {
				//change camera
				cameraOrbit.setAttribute('camera', 'active', true);
				//console.log(cameraOrbit.getAttribute('orbit-controls'));

				//hide intro menu
				thComponent.hideMenu(els);

				//set toggle to 1
				toggle = 0;

				//change button text
				tb.setAttribute('value', "Show Introduction");
				cb.setAttribute('value', "Credits");

				//activate blue information points
				thComponent.activateBlueInfoPoints(ib1, ib2, ib3);
			}
			else if (toggle == 0) {
				//change camera
				cameraStatic.setAttribute('camera', 'active', true);

				//hide intro menu
				thComponent.showMenu(els);

				//set toggle to 0
				toggle = 1;

				//set button text
				tb.setAttribute('value', "Begin");
				cb.setAttribute('value', "Credits");

				//hide blue points while menu active
				thComponent.disableBlueInfoPoints(ib1, ib2, ib3);
			}

			/*console.log("toggle");
			console.log(toggle);
			console.log("toggle2");
			console.log(toggle2);*/
		}

		//Add EventListener
		this.el.addEventListener('click', this.toggleHide);
	},

	//On Remove
	remove: function () {
		this.el.removeEventListener('click', this.toggleHide);
	},

	//Test function call
	qux: function () {
		console.log("called function");
	},

	//Have intro menu slide down on start
	menuSlideDown: function (els, tb) {
		for (var i = 0; i < els.length; i++) {
			let currPosition = els[i].getAttribute('position');
			let params = {
				property: 'position',
				to: {
					x: currPosition.x,
					y: currPosition.y - 10,
					z: currPosition.z
				},
				dur: 1750,
			};
			els[i].setAttribute('animation', params);
		}
		let currPosition = tb.getAttribute('position');
		let params = {
			property: 'position',
			to: {
				x: currPosition.x,
				y: currPosition.y - 10,
				z: currPosition.z
			},
			dur: 1750,
		};
		tb.setAttribute('animation', params);
	},

	//Show specified screen
	showMenu: function (els) {
		for (var i = 0; i < els.length; i++) {
			//let currOpacity = els[i].getAttribute('opacity');
			//console.log(currOpacity);
			let params = {
				property: 'opacity',
				to: 0.8,
				dur: 750,
			};
			els[i].setAttribute('animation', params);
		}
	},

	//Hide specified screen
	hideMenu: function (els) {
		for (var i = 0; i < els.length; i++) {
			//let currOpacity = els[i].getAttribute('opacity');
			//console.log(currOpacity);
			let params = {
				property: 'opacity',
				to: 0,
				dur: 750,
			};
			els[i].setAttribute('animation', params);
		}
	},

	//show links (associated with endscreen)
	showLinks: function (pwl, afwl) {//hide psyche website link
		pwl.setAttribute('position', { x: 1, y: 1.25, z: 0.2 });
		pwl.setAttribute('data-raycastable');

		//hide aframe website link
		afwl.setAttribute('opacity', 1.0);
		afwl.setAttribute('data-raycastable');
	},

	//hide links (associated with endscreen)
	hideLinks: function (pwl, afwl) {
		//hide psyche website link
		pwl.setAttribute('position', { x: 0, y: 0, z: -4 });
		pwl.removeAttribute('data-raycastable');

		//hide aframe website link
		afwl.setAttribute('opacity', 0.0);
		afwl.removeAttribute('data-raycastable');
	},

	//Show blue information points
	activateBlueInfoPoints: function (ib1, ib2, ib3) {
		//move points to positions
		ib1.setAttribute('position', { x: -1.25, y: -1.75, z: -1.5 });
		ib2.setAttribute('position', { x: 3.75, y: 1.5, z: -5 });
		ib3.setAttribute('position', { x: 0, y: -2.15, z: -6.15 });

		//make clickable
		ib1.setAttribute('data-raycastable');
		ib2.setAttribute('data-raycastable');
		ib3.setAttribute('data-raycastable');
	},

	//Hide blue information points
	disableBlueInfoPoints: function (ib1, ib2, ib3) {
		//hide points inside asteroid (can't set opacity)
		ib1.setAttribute('position', { x: 1, y: 0, z: -4 });
		ib2.setAttribute('position', { x: 1, y: 0, z: -4 });
		ib3.setAttribute('position', { x: 1, y: 0, z: -4 });

		//make unclickable
		ib1.removeAttribute('data-raycastable');
		ib2.removeAttribute('data-raycastable');
		ib3.removeAttribute('data-raycastable');
	},

	//Hide all informative text boxes (associated with blue info points)
	hideTextBoxes: function (tfi1, tfi2, tfi3) {
		//hide all text boxes
		tfi1.setAttribute('opacity', 0.0);
		tfi2.setAttribute('opacity', 0.0);
		tfi3.setAttribute('opacity', 0.0);
	},

	toggleTextBox: function (tfi) {
		//toggle text box's visibility
		//console.log(tfi.getAttribute('opacity'));
		if (tfi.getAttribute('opacity') == '1') {
			tfi.setAttribute('opacity', 0);
		}
		else {
			tfi.setAttribute('opacity', 1);
		}
	},

	//Show credits button
	showEndScreenButton: function (cb) {
		//move credits button to position
		cb.setAttribute('position', { x: 1.5, y: -3.5, z: 0.0 });
	}
});