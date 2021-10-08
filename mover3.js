var stop3 = 0;

AFRAME.registerComponent('mover3', {
	init: function() {
		let el = this.el;
		this.animateMove3 = function() {
			if (step == 2 && stop3 == 0)
			{
				console.log("wtf3");
				let currPosition = el.getAttribute('position');
				let params = {
					property: 'position',
					to: {
						x: currPosition.x + 5,
						y: currPosition.y,
						z: currPosition.z
					},
					dur: 1000,
					//easing: 'easeInOutElastic'
				};
				el.setAttribute('animation', params);
				stop3 = 1;
				step++;
			}
		}
		this.el.addEventListener('click', this.animateMove3);
	},
	remove: function() {
		this.el.removeEventListener('click', this.animateMove3);
	}
});