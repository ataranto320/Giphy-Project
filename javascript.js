// array of star wars stuff
var things = ["Ships", "Jedi", "Sith", "Bounty Hunters"];

//display info function to show content 
function displayStarWarsInfo(){
    var SW = $(this).attr("id");
    var queryURL = "https://www.omdbapi.com/?t=" + 1XFs0hWuTTHZjLE2c02BWlTFYr80TUbv + "&apikey=trilogy";

//creating ajax
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    //div to hold sw thing
    var SwThing = $("<div class='sw'>");

    //storing the data 
    var data = response.Data;

    // //creating an element to have things displayed
    // var funFact = $("")

    //displaying SW things
    SwThing.append();

    //stroing things
    
    
})
}