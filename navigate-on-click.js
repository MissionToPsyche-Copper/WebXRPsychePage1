//Register Aframe Component (all lower case)
AFRAME.registerComponent('navigate-on-click', {
	//Schema: user defined properties of the component
	schema: {
		url: { default: ''}
	},

	//Initialize function
	init: function () {
		//get scene element
		var sceneEl = document.querySelector('a-scene');

		//Get this element
		var el = this.el;
		console.log(el);

		//get this element's link
		var data = this.data;

		//on click, head to specified url
		el.addEventListener('click', function () {
			console.log("going to other site");
			window.location.href = data.url;
		});
	},

	//On Remove
	remove: function() {
		this.el.removeEventListener('click', this.rotateAst);
	}	
});