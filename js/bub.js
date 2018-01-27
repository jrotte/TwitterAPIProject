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


// --------------------------------------------------------------


// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {


}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

//this doesn't work but would be the modal when a search is performed - Nick
function myLocationCurtain(){
          locationCurtainDiv = $('<div id="intCurtain"><div class="loader"></div></div>');
          console.log("modal fire is working");
          if($("#intCurtain").length<=0){
            $(locationCurtainDiv).insertBefore('#intContainer');
          }else{
            if($("#intCurtain").length>0)
            $("#intCurtain").remove();
          }
     }

$("#submitTweetSubject").on("click", function(event) {
  // Prevent default behavior
  event.preventDefault();
  myLocationCurtain();

});
