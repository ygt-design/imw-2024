//printing message to console
console.log("testing javascript link")

//interaction container
const greenCircle = document.getElementById("green")
let interactionContainer = document.getElementById("interactionContainer")

greenCircle.addEventListener("click", function () {
    console.log("iinteraction container")
    interactionContainer.style.backgroundColor = "lightgreen"
})

pinkCircle.addEventListener("click", function () {
    interactionContainer.style.backgroundColor = "plum"
})

blueCircle.addEventListener("click", function () {
    interactionContainer.style.backgroundColor = "blue"
})

//loop container
const loopContainer = document.getElementById("loopContainer")
const message = "brave";
const textDiv = document.createElement("div")

for (let i = 0; i < 10; i++) {
    loopContainer.appendChild(textDiv);
    textDiv.innerHTML = message;
    loopContainer.appendChild(textDiv);
}

//condition container
const conditionContainer = document.getElementById("conditionContainer");

conditionContainer.addEventListener("")
