// $(document).ready(function() {

// array of star wars stuff
var topics = ["Ships", "Jedi", "Sith", "Bounty Hunters"];

// api key
var apiKey = "1XFs0hWuTTHZjLE2c02BWlTFYr80TUbv"

//display info function to show content 
function displayStarWarsInfo(topic){

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=" + "1XFs0hWuTTHZjLE2c02BWlTFYr80TUbv" + "&limit=10";

//creating ajax
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    //div to hold sw thing
    console.log(response.data)
    $("#results").empty();

    for(var k = 0 ; k < response.data.length; k++){
        console.log(response.data[k].images.original.url)
        const gifUrl = response.data[k].images.original.url;
        $("#results").prepend(`<p> ${topic}</p><img src="${gifUrl}">`)


        // $('#results').append(gifOne, gifTwo, gifThree, gifFour);
        // $('#results').append(SwThing);
        // SwThing();
        // something needs to go within here to make the gifs appear on the screen and it has to do with the SwThing appends
    }
    var SwThing = $("<div class='sw'>");

    //storing the data 
    var data = response.Data;

    // Creating an element to have the ships gif displayed
    var gifOne = `<p> Ship: <img src="${imgUrl}"/>`

    // Displaying the ships
    SwThing.append(gifOne);

    // Storing the gifs
    var gifs = response.Gifs;

    // Creating an element to have the jedi gif displayed
    var gifTwo = $("<p>").text("Jedi: " + image);

    // Displaying the jedi
    SwThing.append(gifTwo);

    // Storing the plot
    var plot = response.Plot;

    // Storing the rating data
    var rating = response.Rated;

    // Creating an element to have the sith gif diplayed
    var gifThree = $("<p>").text("Sith: " + imgURL);

    // Appending the sith
    SwThing.append(gifThree);

    // Creating an element to have the bounty hunters gif displayed
    var gifFour = $("<p>").text("Bounty Hunters " + image);

    // Appending the bounty hunters
    SwThing.append(gifFour);

    // Retrieving the URL for the image
    var imgURL = response.Gif;

    // Creating an element to hold the image
    var image = $("<img>").attr("src", imgURL);

    // Appending the image
    SwThing.append(image);

    // Putting the gif above the previous gif
    $("#starwars-view").prepend(SwThing);
  });

}

// animate and still for gif fucntions ...

// Function for displaying gifs
function renderButtons() {

  // Deleting the gifs prior to adding new gifs
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view").empty();
  // Function to empty out the results
// function clear() {
//   $("#results").empty();
// }

  
  // Looping through the array of gifs
  for (var i = 0; i < topics.length; i++) {
    // Then dynamicaly generating buttons for each gifs in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of star-wars-btn to our button
    a.addClass("star-wars-btn");
    // Adding a data-attribute
    a.attr("id", topics[i]);
    // Providing the initial button text
    a.text(topics[i]);
    // Adding the button to the buttons-view div
    $("#buttons-view").append(a);
  }
}


// This function handles events where a gif button is clicked
$("#search").on("click", function(event) {
  event.preventDefault();
  // This line grabs the input from the textbox
  var topic = $("#sw-input").val().trim();

  // Adding a gif from the textbox to our array
  topics.push(topic);

  // Calling renderButtons which handles the processing of our topics array
  renderButtons();
});

// Adding a click event listener to all elements with a class of "star-wars-btn"
$(document).on("click", ".star-wars-btn", function(){
    var character = $(this).text()

    console.log(character)
    displayStarWarsInfo(character)
});

// Calling the renderButtons function to display the intial buttons
renderButtons();
// })
