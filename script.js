// SET UP
let theoryPt1 = ["Matt killed Woods", "We are the missing link", "Sam and Woods are twins", "Deb is really Syphus", "Nelson is dead", "Sam killed Matt", "The serum is radioactive"]
let theoryPt2 = ["Quinn is the camera operator", "Matt is married to Amanda", "Matt is Syphus", "Deb gave birth to Sam", "Matt hid the Mountaineer", "Matt is really Syphus", "Subject 4 is fake"]


// CHOOSING A RANDOM ITEM
var pt1 = theoryPt1[Math.floor(Math.random()*theoryPt1.length)];
var pt2 = theoryPt2[Math.floor(Math.random()*theoryPt2.length)];

// TEST
console.log(pt1 + " because " + pt2 + ".");

// TEXT
const first = pt1;
const second = pt2 + ".";
const because = " because ";

// ADDING TO HTML
function addToHtml(partOne, partTwo, because){
    let textNode1 = document.createTextNode(partOne);
    let firstHeader = document.getElementById("theoPartOne");
    firstHeader.appendChild(textNode1);

    let textNode2 = document.createTextNode(because);
    let breaker = document.getElementById("breaker");
    breaker.appendChild(textNode2);

    let textNode3 = document.createTextNode(partTwo);
    let secondHeader = document.getElementById("theoPartTwo");
    secondHeader.appendChild(textNode3);
}
addToHtml(first, second, because);
