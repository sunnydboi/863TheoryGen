// SET UP
let theoryPt1 = ["Matt killed Woods", "We are the missing link", "Sam and Woods are twins", "Deb is really Syphus", "Nelson is dead", "Sam killed Matt", "The serum is radioactive"]
let theoryPt2 = ["Quinn is the camera operator", "Matt is married to Amanda", "Matt is Syphus", "Deb gave birth to Sam", "Matt hid the Mountaineer", "Matt is really Syphus", "Subject 4 is fake"]


// CHOOSING A RANDOM ITEM
var pt1 = theoryPt1[Math.floor(Math.random()*theoryPt1.length)];
var pt2 = theoryPt2[Math.floor(Math.random()*theoryPt2.length)];

// TEST
console.log(pt1 + " because " + pt2 + ".");
const textInTheory = pt1 + " because " + pt2 + ".";

// ADDING TO HTML
function addToHtml(text){
    let textNode = document.createTextNode(text);
    let newH1 = document.createElement("h1");
    newH1.appendChild(textNode);
    let element = document.getElementById("theory");
    element.appendChild(newH1);
}
addToHtml(textInTheory);
