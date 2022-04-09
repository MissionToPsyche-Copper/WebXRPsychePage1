/*
Programmer: Micah Schmidt
Program Description:
Psyche WebXR Exploration XR WebPage
The webpage is programmed with AFrame, a WebXR development framework.
User can rotate the camera around the Psyche asteroid object and tap blue points to be presented with text boxes about Psyche.
This Javascript file handles the text boxes which appear when the user taps blue circles on the Psyche asteroid.
*/

function toggleText(optionSelected)
{
	//console.log("toggleText()");
	var thismodal = document.querySelector('#textInfoModal');
	var modaltext = document.querySelector('#textInfoModalDescription');
	var tally = document.querySelector('#pointsfound');

	//console.log(thismodal.getAttribute("style"));
	if (thismodal.getAttribute("style") == "visibility: hidden; opacity: 0.0") {

		if (optionSelected == 1) {
			modaltext.innerHTML = "Psyche is the name of an asteroid orbiting the Sun between Mars and Jupiter and the name of a NASA space mission to visit that asteroid.";

			thismodal.setAttribute("style", "visibility: visible; opacity: 0.8");
		}
		else if (optionSelected == 2) {
			modaltext.innerHTML = "The asteroid Psyche consist largely of metal from the core of a planetesimal, one of the building blocks of the Sun’s planetary system. At Psyche scientists will explore, for the first time ever, a world made not of rock or ice, but rich in metal.";

			thismodal.setAttribute("style", "visibility: visible; opacity: 0.8");
		}
		else if (optionSelected == 3) {
			modaltext.innerHTML = "Deep within the terrestrial planets, including Earth, scientists infer the presence of metallic cores, but these lie unreachably far below the planets’ rocky mantles and crusts.The asteroid Psyche offers a unique window into these building blocks of planet formation and the opportunity to investigate a previously unexplored type of world.";

			thismodal.setAttribute("style", "visibility: visible; opacity: 0.8");
		}
		else if (optionSelected == 4) {
			modaltext.innerHTML = "This work was created in partial fulfillment of Arizona State University Capstone Course CSE 485/486. The work is a result of the Psyche Student Collaborations component of NASA’s Psyche Mission (https://psyche.asu.edu). “Psyche: A Journey to a Metal World” [Contract number NNM16AA09C] is part of the NASA Discovery Program mission to solar system targets. Trade names and trademarks of ASU and NASA are used in this work for identification only. Their usage does not constitute an official endorsement, either expressed or implied, by Arizona State University or National Aeronautics and Space Administration. The content is solely the responsibility of the authors and does not necessarily represent the official views of ASU or NASA.";

			thismodal.setAttribute("style", "visibility: visible; opacity: 0.8");
		}

		const sum = numberButtonsPressed.reduce((a, b) => a + b, 0)
		//console.log(sum);
		tally.innerHTML = "Points Found:<br> " + sum + "/3";
		//console.log(tally.innerHTML);
	}
	else {
		//console.log("toggle");
		thismodal.setAttribute("style", "visibility: hidden; opacity: 0.0");
    }
}