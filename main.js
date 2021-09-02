//creating and adding a div to the

document.body.onload = addContent;

function addContent() {
  const newDiv = document.createElement("div");
  const newContent = document.createTextNode("This is the new content created");

  newDiv.appendChild(newContent);
  const currentContent = document.querySelector("#currentDiv");
  document.body.insertBefore(newDiv, currentContent);
}

//Adding style to current div using JS

const currentContent = document.querySelector("#currentDiv");
currentContent.style.backgroundColor = "#333";
currentContent.style.color = "#fff";
currentContent.style.fontSize = "2.5rem";

// Adding text to the console when the heading is clicked (events)
const mainHeading = document.querySelector("h1");

mainHeading.addEventListener("click", function () {
  console.log("The heading was clicked!");

  // When heading is clicked. The background color is changed
  const headingStyle = document.querySelector("h1");
  headingStyle.style.backgroundColor = "#333333";
});

// Testing Performance using performance.now()

const startTime = performance.now();

for (let i = 0; i <= 100; i++) {
  for (let j = 0; j <= 100; j++) {
    console.log("i and j are ", i, j);
  }
}

const endTime = performance.now();
console.log("This code took " + (endTime - startTime) + " milliseconds.");

/* Reflow and Repaint
-the purpose of this code is to show that setting an element display to none is faster than removing the element from the page. This is because of reflow and repaint.

*/

// hide #comments
document.getElementById("comments").style.display = "none";

// Delete spam comments from

// Show #comments
document.getElementById("comments").style.display = "block";
