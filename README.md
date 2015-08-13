# Material Button Click v1.0
A jQuery plugin that creates a material button click feel with some options

<a href="http://codepen.io/zephyr/pen/vOVqjm/" target="\_blank">Click here</a> for a demo of it in action

Usage:

```javascript
$(document).ready(function() {
		var $click = $('.clickhere');
		$click.addClicker({
				size: 300, //Maximum size of circle
				speed: 750, //Time of animation in miliseconds
				colour: 'rgba(0,0,0,0.11)', //Colour of circle and shadow
				shadow: false, //Whether or not to have a shadow on the circle
				buttonAnimation: true //Only use if button doesn't have attr style
		});
});
```