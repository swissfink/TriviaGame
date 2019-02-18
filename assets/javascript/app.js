window.onload = function() {
  $("#start").on("click", quizTimer.start);
  $("#stop").on("click", quizTimer.stop);
  $("#reset").on("click", quizTimer.reset);
  $("#submit").on("click", submitAnswers);
  $("#countdownTimer").text("00:05");
  document.getElementById("questions").style.cssText = "display: none";
};

var rightAnswers = 0;
var wrongAnswers = 0;
var emptyAnswers = 0;

//  Variable that will hold the setInterval that runs the timer
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;

// The quiz object
var quizTimer = {

  time: 5,

  reset: function() {

    quizTimer.time = 5;

    // Set the "display" div to "00:05."
    $("#countdownTimer").text("00:05");

    // Display submit, start, and stop buttons
    document.getElementById("submit").style.cssText = "display: block";
    document.getElementById("start").style.cssText = "display: inline";
    // document.getElementById("stop").style.cssText = "display: inline";
    
    // Clear the score
    document.getElementById("answersRightText").innerText = "";
    document.getElementById("answersWrongText").innerText = "";
    document.getElementById("answersEmptyText").innerText = "";

    // Hide the score and questions section
    document.getElementById("questions").style.cssText = "display: none";

  },

  start: function() {

    // use setInterval to start the counter here and to set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(quizTimer.count, 1000);
      clockRunning = true;
    }

    // display the questions
    document.getElementById("questions").style.cssText = "display: block";
  },

  stop: function() {

    // Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  },

  count: function() {

    // Decrement time by 1.
    quizTimer.time--;

    if (quizTimer.time === 0) {

      // run the submitAnswers funciton
      submitAnswers ();

      // Stop the clock
      clearInterval(intervalId);
      clockRunning = false;

      // Hide the "submit" and "start" buttons
      document.getElementById("submit").style.cssText = "display: none";
      document.getElementById("start").style.cssText = "display: none";
      // document.getElementById("stop").style.cssText = "display: none"; 

    }

    // Get the current time, pass that into the quizTimer.timeConverter function,
    // and save the result in a variable.
    var converted = quizTimer.timeConverter(quizTimer.time);
    
     // Use the variable created to show the converted time in the "countdownTimer" span.
     $("#countdownTimer").text(converted);

  },

  timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  },

};


// Check the player's answers

function submitAnswers() {
  
  var radios = document.getElementsByName("choice");
  var i = 0, len = radios.length;
  var checked = false;
  var playerAnswer;
  
  for( ; i < len; i++ ) {
    if(radios[i].checked) {
      checked = true;
      playerAnswer = radios[i].value;
    }
  } 

  // When no answer is chosen
  if(!checked) {
    emptyAnswers++;
    document.getElementById("answersEmptyText").innerText = ("Skipped: " + emptyAnswers);
    return;
  }

  // When the correct answer is chosen
  if(playerAnswer === "Scripting") {
    rightAnswers++;
    document.getElementById("answersRightText").innerText = ("Right answers: " + rightAnswers);
  }

  // When an incorrect answer is chosen
  else {
    wrongAnswers++;
    document.getElementById("answersWrongText").innerText = ("Wrong answers: " + wrongAnswers);
  }
  
  // Stop the clock
  clearInterval(intervalId);
  clockRunning = false;

  // hide the "submit" and "start" buttons
  document.getElementById("submit").style.cssText = "display: none";
  document.getElementById("start").style.cssText = "display: none";
  // document.getElementById("stop").style.cssText = "display: none";

};





