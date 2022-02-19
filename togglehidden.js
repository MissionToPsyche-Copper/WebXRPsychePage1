//Global Vars
var toggle = 0;

//Register Aframe Component (all lower case)
AFRAME.registerComponent('togglehidden', {
	//Initialize function
	init: function () {
		//get scene element
		var sceneEl = document.querySelector('a-scene')

		//Get this element
		//let el = this.el;

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

		//slow in animation on load
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

		//Give component a function
		this.toggleHide = function () {
			if (toggle == 0) {
				//information
				for (var i = 0; i < els.length; i++) {
					let currOpacity = els[i].getAttribute('opacity');
					//console.log(currOpacity);
					let params = {
						property: 'opacity',
						to: 0,
						dur: 750,
					};
					els[i].setAttribute('animation', params);
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
				toggle = 1;
				//change button text
				tb.setAttribute('value', "Show Introduction");
				cb.setAttribute('value', "Credits");

				//activate blue information points
				ib1.setAttribute('position', { x: -1.25, y: -1.75, z: -1.5 });
				ib2.setAttribute('position', { x: 3.75, y: 1.5, z: -5 });
				ib3.setAttribute('position', { x: 0, y: -2.15, z: -6.15 });

				//hide text boxes
				tfi1.setAttribute('opacity', 0.0);
				tfi2.setAttribute('opacity', 0.0);
				tfi3.setAttribute('opacity', 0.0);

				pwl.setAttribute('position', { x: 0, y: 0, z: -4 });
				pwl.removeAttribute('data-raycastable');

				afwl.setAttribute('opacity', 0.0);
				afwl.removeAttribute('data-raycastable');
			}
			else {
				//information
				for (var i = 0; i < els.length; i++) {
					let currOpacity = els[i].getAttribute('opacity');
					//console.log(currOpacity);
					let params = {
						property: 'opacity',
						to: 0.8,
						dur: 750,
					};
					els[i].setAttribute('animation', params);;
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
				toggle = 0;
				//set button text
				tb.setAttribute('value', "Begin");
				cb.setAttribute('value', "Credits");

				//hide blue points while menu active
				ib1.setAttribute('position', { x: 1, y: 0, z: -4 });
				ib2.setAttribute('position', { x: 1, y: 0, z: -4 });
				ib3.setAttribute('position', { x: 1, y: 0, z: -4 });

				//hide text boxes
				tfi1.setAttribute('opacity', 0.0);
				tfi2.setAttribute('opacity', 0.0);
				tfi3.setAttribute('opacity', 0.0);

				pwl.setAttribute('position', { x: 0, y: 0, z: -4 });
				pwl.removeAttribute('data-raycastable');

				afwl.setAttribute('opacity', 0.0);
				afwl.removeAttribute('data-raycastable');
			}
		}

		//Add EventListener
		this.el.addEventListener('click', this.toggleHide);
	},
	//On Remove
	remove: function () {
		this.el.removeEventListener('click', this.toggleHide);
	}
});