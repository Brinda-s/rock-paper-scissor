// script.js
const container = document.querySelector("#container");

//add a <p> with red text
const redParagraph = document.createElement("p");
redParagraph.textContent ="Hey I'm red!";
redParagraph.style.color="red";
container.appendChild(redParagraph);

//add an <h3> with blue text
const blueHeading = document.createElement("h3");
blueHeading.textContent ="I'm a blue h3!";
blueHeading.style.color ="blue";
container.appendChild(blueHeading);

//add a <div> with a black border and a pink background
const pinkDiv = document.createElement("div");
pinkDiv.style.border ="1px solid black";
pinkDiv.style.backgroundColor = "pink";


//Add an <h1> inside the pink div
const divHeading = document.createElement("h1");
divHeading.textContent ="I'm in a div";
pinkDiv.appendChild(divHeading);

//add a <p> inside the pink div
const divParagraph = document.createElement("p");
divParagraph.textContent="Mee too!";
pinkDiv.appendChild(divParagraph);

//append the pink div to the container
container.appendChild(pinkDiv);