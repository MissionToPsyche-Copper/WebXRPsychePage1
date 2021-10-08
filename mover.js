var stop1 = 0;
var step = 0;

AFRAME.registerComponent('mover', {
	init: function() {
		let el = this.el;
		this.animateMove = function() {
			if (step == 0 && stop1 == 0)
			{
				console.log("wtf1");
				let currPosition = el.getAttribute('position');
				let params = {
					property: 'position',
					to: {
						x: currPosition.x - 5,
						y: currPosition.y,
						z: currPosition.z
					},
					dur: 1000,
					//easing: 'easeInOutElastic'
				};
				el.setAttribute('animation', params);
				stop1 = 1;
				step++;
			}
			
		}
		this.el.addEventListener('click', this.animateMove);
	},
	remove: function() {
		this.el.removeEventListener('click', this.animateMove);
	}
});