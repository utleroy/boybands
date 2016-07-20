// Instructions

// Paste the following code into your JavaScript file.

var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

var loopCount = 5;

var currentBand = "";

var currentVeggie = "";

var bandElement = document.getElementById("boy-bands");
console.log(bands);

var veggieElement = document.getElementById("vegetables");
console.log(vegetables);

for (var i = 0; i < loopCount; i += 1) {
  bandElement.innerHTML += "<div>" + bands[i] + "</div>";

  /* the += sets the iteration // + only displays the only the last item in the array */

  veggieElement.innerHTML += "<div>" + vegetables[i] + "</div>";
}


// // The number of loops to perform (what if the array changes?)
// // Keep track of which band we're on in the loop
// // Keep track of which veggie we're on in the loop
// // Get a reference to the appropriate DOM element for bands
// // Get a reference to the appropriate DOM element for vegetables
// // Start looping
  // Add the band names into the correct <div>
    // currentBand = ???;
  // Add the veggie names into the correct <div>
  // currentVeggie = ???;
// Loop through the two arrays provided (bands and vegetables) and output each element in the arrays into their corresponding HTML <div> element. Ensure that each item is in a block element (e.g. li, div, p. etc...)