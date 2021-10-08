var stop2 = 0;

AFRAME.registerComponent('movery', {
	init: function() {
		let el = this.el;
		this.animateMoveY = function() {
			if (step == 1 && stop2 == 0)
			{
				console.log("wtf2");
				let currPosition = el.getAttribute('position');
				let params = {
					property: 'position',
					to: {
						x: currPosition.x,
						y: currPosition.y + 5,
						z: currPosition.z
					},
					dur: 1000,
					//easing: 'easeInOutElastic'
				};
				el.setAttribute('animation', params);
				stop2 = 1;
				step++;
			}
		}
		this.el.addEventListener('click', this.animateMoveY);
	},
	remove: function() {
		this.el.removeEventListener('click', this.animateMoveY);
	}
});