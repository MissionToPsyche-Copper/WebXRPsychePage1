//Global Vars
var toggle = 0;

//Register Aframe Component (all lower case)
AFRAME.registerComponent('togglehidden', {
	//Initialize function
	init: function() {
		//Get this element
		let el = this.el;
		//Give component a function
		this.toggleHide = function() {
			if (toggle == 0)
			{
				console.log("togglehidden");
				//Get attribute to change
				let currOpacity = el.getAttribute('opacity');
				console.log(currOpacity);
				let params = {
					property: 'opacity',
					to: {
						x: 0.0,
						y: 0.0,
						z: 0.0
					},
					dur: 1000,
					//easing: 'easeInOutElastic'
				};
				el.setAttribute('animation', params);
				toggle = 1;
			}
			else
			{
				toggle = 0;
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