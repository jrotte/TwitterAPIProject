/* global moment firebase */

// Initialize Firebase
var config = {
 apiKey: "AIzaSyDflXbiAq1t1XDcBReAJvp61fbrsa6pTy0",
    authDomain: "project-bubble-burster.firebaseapp.com",
    databaseURL: "https://project-bubble-burster.firebaseio.com",
    projectId: "project-bubble-burster",
    storageBucket: "project-bubble-burster.appspot.com",
    messagingSenderId: "411169474141"
};

firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();
database.ref().on("value", function(snapshot) {


}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

//fires an overlay and animation when a user searches a term in twitter - Nick
function myLocationCurtain(){
          locationCurtainDiv = $('<div id="intCurtain"><div class="loader"></div></div>');
          console.log("modal fire is working");
          $("#intContainer").html(locationCurtainDiv);
          $("#intCurtain").show();
          setTimeout(function(){
            $("#intCurtain").hide();
          }, 3000);
     }

$("#run-search").on("click", function(event) {
  // Prevent default behavior
  event.preventDefault();

  var searchTerm = $("#search-term").val().trim();
  var searchURL = queryURLBase + searchTerm;
  runQuery(searchURL);

  //Comment or Uncomment this for the loading overlay - Nick
  myLocationCurtain();
  //pushes search term to header of block below input - Nick

  $("#tweetSubjectHeader").text(searchTerm);
  $("#carouselId").hide();

  $.post(
    'https://apiv2.indico.io/twitterengagement',
    JSON.stringify({
      "api_key": "cdf3dbb688a5bea7f94cd89da7a4e3a9",
      "data": searchTerm,
    })
  ).then(function(res) { console.log(res) });

});

$("#netneut").on("click", function(){
  $("#carouselId").hide();
  $("#netNeutTweets").show();
});
$("#muellerInvs").on("click", function(){
  $("#carouselId").hide();
  $("#muellerTweets").show();
});
$("#blart").on("click", function(){
  $("#carouselId").hide();
  $("#blartTweets").show();
});
$("#superBowl").on("click", function(){
  $("#carouselId").hide();
  $("#superBowlTweets").show();
});
$("#newCali").on("click", function(){
  $("#carouselId").hide();
  $("#newCaliTweets").show();
});
$("#cort").on("click", function(){
  $("#carouselId").hide();
  $("#cortTweets").show();
});

var searchTerm = "";
var queryURLBase = "http://207.229.138.9:3000/tweets/";

function runQuery(queryURL) {

  // The AJAX function uses the queryURL and GETS the JSON data associated with it.
  // The data then gets stored in the variable called: "NYTData"

  $.ajax({
  url: queryURL,
  method: "GET"
}).then(function(tweetData) {
  // Logging the URL so we have access to it for troubleshooting - Dennis
  console.log(tweetData);
  console.log("------------------------------------");
  console.log("URL: " + queryURL);
  console.log("------------------------------------");
  for (var i = 0; i < tweetData.length; i++) {
    console.log(i);
    console.log(tweetData[i].text);
     var tweetAuthorImage = $("<img>");
     tweetAuthorImage.attr("src", tweetData[i].user.profile_image_url_https);
     var tweetDivLoc = $("#loadLeft");
     var tweetAuthor = $("<div class='userTweet'><div class='userImage'>" + tweetAuthorImage + "</div><p>" + (tweetData[i].user.name) + "</p>" + "<div class='tweet'><p>" + (tweetData[i].text) + "</div>");
     var tweetText = $("<div class='tweet'><p>" + (tweetData[i].text) + "</div>");
     // Append the newly created table data to the table row
     tweetDivLoc.append(tweetAuthor);
  }
});
}
