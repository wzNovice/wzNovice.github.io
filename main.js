var resource = 0;
var heroes = 0;

//Stats
var passiveGain = 1;
var clickPower = 1;

function checkStats(){
	document.getElementById("passiveGain").innerHTML = passiveGain;
	document.getElementById("clickPower").innerHTML = clickPower;
}

function Ultimate(){
	resource = resource + clickPower;
	document.getElementById("res").innerHTML = resource;
}

///this is a really bad method to do things
function clearBackpack(){
	Display = " ";
}

window.setInterval(function(){
	resource = resource + passiveGain;
	document.getElementById("res").innerHTML = resource;
}, 1000);

window.setInterval(function(){
	checkStats();
	clearBackpack();
}, 500);

