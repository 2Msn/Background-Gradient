var css    = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

var body = document.getElementById("gradient");

function set_gradient()
{
	body.style.background = 
	"linear-gradient(to right,"
	+color1.value 
	+ "," 
	+ color2.value
	+ 
	")";

	css.textContent = body.style.background + ";" ; 
}




color1.addEventListener("moseseener" , set_gradient);

color2.addEventListener("input" , set_gradient); 

function rnd(){
	var x = Math.floor( (Math.random()*100) + 1);
	console.log(x);
	return x; 	
}

rnd();

// var btn = document.querySelector("button");
// btn.addEventListener("click", rnd);

