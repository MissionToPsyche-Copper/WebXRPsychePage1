//Javascript logic

//Print to Console
console.log("test.js print");

//Variables
var x = 1; //int
var y = "hello"; //string
var z = true; //bool
var a = null; //null

var b = [2, 4, 6, 8, "red", "blue"]; //array
console.log(b[3],b[4]); //prints 8 and red

var c = {
		name: "John",
		favoriteFood: "Chocolate"
} //struct
console.log(c.name); //get element of struct

//Let, rather than var
var q = 0;
var d = 1;
for (let d = 0; d < 5; d++)
{
	q += d;
}
console.log(q, d); //d outside of for loop is unaffect by d in for loop

//Functions
function exampleFunc(x1, x2) //function definition
{
	console.log("result: " + (x1 + x2)); //function body
	return x1 + x2; //return value
}
exampleFunc(3, 4); //function call
var res = exampleFunc(3, 4); //store function result
console.log(res);

//Window Onload
window.onload = function init()
{
	
}

//Button Type 1
function hello()
{
	alert("tt");
}

//Button Type 2
document.addEventListener('DOMContentLoaded', function() {
	document.querySelector('#goodbyeButton').onclick = goodbye;
});
function goodbye(){
	alert("gg");
}
	