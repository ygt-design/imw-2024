//printing message to console
console.log("testing javascript link")

//interaction container
const greenCircle = document.getElementById("green")
const pinkCircle = document.getElementById("plum")
const blueCircle = document.getElementById("blue")
let interactionContainer = document.getElementById("interactionContainer")

greenCircle.addEventListener("click", function () {
    interactionContainer.style.backgroundColor = "lightgreen"
})

pinkCircle.addEventListener("click", function () {
    console.log("pink button");
    interactionContainer.style.backgroundColor = "plum"
})

blueCircle.addEventListener("click", function () {
    interactionContainer.style.backgroundColor = "lightblue"
})


//loop container
const loopContainer = document.getElementById("loopContainer")
const message = "worm";


for (let i = 0; i < 5; i++) {
    console.log("worm");
    const textDiv = document.createElement("div")
    textDiv.innerHTML = message;
    loopContainer.appendChild(textDiv);
}


//condition container
const conditionContainer = document.getElementById("conditionContainer");
const square = document.getElementById("square")

conditionContainer.addEventListener("mouseover", function () {
    // console.log("hovering over condition container");
    square.style.backgroundColor = "green"

});

conditionContainer.addEventListener("mouseout", function () {
    // console.log("hovering over condition container");
    square.style.backgroundColor = "lightsalmon"

});


// time container
var increaseText = document.getElementById("increaseText");

var sizeNow = 12;

var increaseFontSize = function () {
    sizeNow++;
    increaseText.style.fontSize = sizeNow + 'px';
};

setInterval(increaseFontSize, 1000);


// input container
document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    countLetters();
});

function countLetters() {
    var word = document.getElementById("inputText").value;

    var letterCount = word.length;

    document.getElementById("text-length").innerHTML = letterCount;
}


// console container
console.log("here is a printed message to the console :D")

