const initialize = () => {
	let sliders = document.getElementsByClassName("slider");
	for (let i = 0; i < sliders.length; i++) {
		// we moeten zowel op het input als het change event reageren,
		// zie http://stackoverflow.com/questions/18544890
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	update();
};

const update = () => {
	let red = document.getElementById("redSlider").value;
	let green = document.getElementById("greenSlider").value;
	let blue = document.getElementById("blueSlider").value;
	document.getElementById("redLabel").innerHTML= red;
	document.getElementById("greenLabel").innerHTML= green;
	document.getElementById("blueLabel").innerHTML= blue;
	let swatch = document.getElementById("swatch");
	swatch.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
};

window.addEventListener("load", initialize);