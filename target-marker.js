//Aframe component Signifier
AFRAME.registerComponent('target-marker', {
	//init function
	init: function() {
		//get element to perform function on
		let el = this.el;
		this.addMarker = function(e) {
			console.log("addMarker call");
			let p = e.detail.intersection.point;
			let scene = document.querySelector('a-scene');
			
			let newMark = document.createElement('a-entity');
			newMark.setAttribute('geometry', {
				primitive: 'sphere'
			});
			newMark.setAttribute('material', 'color: red');
			newMark.setAttribute('scale', '0.2 0.2 0.2');
			newMark.setAttribute('position', el.object3D.worldToLocal(p));
			newMark.setAttribute('target-marker', '{}');
			
			//Append to object
			el.appendChild(newMark);
			
			//Animate shrinking
			newMark.setAttribute('animation', "property: scale; to: 0.01 0.01 0.01; loop: false; dur: 500");
			
			//on animation completion
			newMark.addEventListener('animationcomplete', function(e) {
				console.log("unload marker");
				newMark.parentNode.removeChild(newMark); //unloads marker
			});
		}
		//add event listener
		this.el.addEventListener('click', this.addMarker);
	},
	//remove function
	remove: function() {
		//remove event listener
		this.el.removeEventListener('click', this.addMarker);
	}
});