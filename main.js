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
