//Global Vars
var toggle = 0;

//Register Aframe Component (all lower case)
AFRAME.registerComponent('togglehidden', {
	//Initialize function
	init: function() {
		//get scene element
		var sceneEl = document.querySelector('a-scene')
		
		//Get this element
		let el = this.el;
		
		//get all elements in text frame
		var els = sceneEl.querySelectorAll('#textFrame');
		
		//get toggle button
		var tb = sceneEl.querySelector('#toggleButton');
		
		//get model buttons
		var twodb = sceneEl.querySelectorAll('#psyche2dbutton')
		var threedb = sceneEl.querySelectorAll('#psyche3dbutton')
		
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
		this.toggleHide = function() {
			if (toggle == 0)
			{
				for (var i = 0; i < els.length; i++) {
					let currOpacity = els[i].getAttribute('opacity');
					console.log(currOpacity);
					let params = {
						property: 'opacity',
						to: 0,
						dur: 750,
					};
					els[i].setAttribute('animation', params);
				}
				toggle = 1;
				tb.setAttribute('value', "Show Text");
				
				for (var i = 0; i < twodb.length; i++) {
					let currOpacity = twodb[i].getAttribute('opacity');
					console.log(currOpacity);
					let params = {
						property: 'opacity',
						to: 1.0,
						dur: 750,
					};
					twodb[i].setAttribute('animation', params);;
				}
				for (var i = 0; i < threedb.length; i++) {
					let currOpacity = threedb[i].getAttribute('opacity');
					console.log(currOpacity);
					let params = {
						property: 'opacity',
						to: 1.0,
						dur: 750,
					};
					threedb[i].setAttribute('animation', params);;
				}
			}
			else
			{
				for (var i = 0; i < els.length; i++) {
					let currOpacity = els[i].getAttribute('opacity');
					console.log(currOpacity);
					let params = {
						property: 'opacity',
						to: 0.8,
						dur: 750,
					};
					els[i].setAttribute('animation', params);;
				}
				toggle = 0;
				tb.setAttribute('value', "Hide Text");
				
				for (var i = 0; i < twodb.length; i++) {
					let currOpacity = twodb[i].getAttribute('opacity');
					console.log(currOpacity);
					let params = {
						property: 'opacity',
						to: 0.0,
						dur: 750,
					};
					twodb[i].setAttribute('animation', params);;
				}
				for (var i = 0; i < threedb.length; i++) {
					let currOpacity = threedb[i].getAttribute('opacity');
					console.log(currOpacity);
					let params = {
						property: 'opacity',
						to: 0.0,
						dur: 750,
					};
					threedb[i].setAttribute('animation', params);;
				}
			}
		}
		
		//Add EventListener
		this.el.addEventListener('click', this.toggleHide);
	},
	//On Remove
	remove: function() {
		this.el.removeEventListener('click', this.toggleHide);
	}
});