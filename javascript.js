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

    // // //creating an element to have things displayed
    // // var funFact = $("")

    // //displaying SW things
    // SwThing.append();

    // //stroing things

    // Creating an element to have the ships gif displayed
    var gifOne = $("<p>").text("Ships: " + image);

    // Displaying the gif
    SwThing.append(gifOne);

    // Storing the gifs
    var gifs = response.Gifs;

    // Creating an element to have the jedi gif displayed
    var gifTwo = $("<p>").text("Jedi: " + image);

    // Displaying the release year
    Swthing.append(gifTwo);

    // // Storing the plot
    // var plot = response.Plot;

    // Creating an element to have the sith gif diplayed
    var gifThree = $("<p>").text("Sith: " + image);

    // Appending the plot
    SwThing.append(gifThree);

    // Creating an element to have the bounty hunters gif displayed
    var gifFour = $("<p>").text("Bounty Hunters " + image);

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

// Function for displaying movie data
function renderButtons() {

  // Deleting the movies prior to adding new movies
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view").empty();

  // Looping through the array of movies
  for (var i = 0; i < movies.length; i++) {

    // Then dynamicaly generating buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of movie-btn to our button
    a.addClass("movie-btn");
    // Adding a data-attribute
    a.attr("data-name", movies[i]);
    // Providing the initial button text
    a.text(movies[i]);
    // Adding the button to the buttons-view div
    $("#buttons-view").append(a);
  }
}

// This function handles events where a movie button is clicked
$("#add-movie").on("click", function(event) {
  event.preventDefault();
  // This line grabs the input from the textbox
  var movie = $("#movie-input").val().trim();

  // Adding movie from the textbox to our array
  movies.push(movie);

  // Calling renderButtons which handles the processing of our movie array
  renderButtons();
});

// Adding a click event listener to all elements with a class of "movie-btn"
$(document).on("click", ".movie-btn", displayMovieInfo);

// Calling the renderButtons function to display the intial buttons
renderButtons();
})
}