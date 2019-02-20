window.onload = function () {
  $("#start").on("click", quiz.start);
  $("#reset").on("click", quiz.reset);
  $("#submit").on("click", quiz.submitAnswers);
  // $("#stop").on("click", quiz.stop);
  $("#countdownTimer").text("00:45");
  document.getElementById("question-card").style.cssText = "display: none";
  document.getElementById("reset").style.cssText = "display: none";
}

var quizResults = {
  // Variables to set and hold the quiz results
  var: rightAnswers = 0,
  var: wrongAnswers = 0,
}

// Variable that will hold the setInterval that runs the timer
var intervalId;

// Something to prevent the clock from being sped up unnecessarily
var clockRunning = false;

// The quiz object
var quiz = {

  // Set the timer value
  timer: 45,

  reset: function () {

    // Clear the selected answers
    $(".card-body input").prop("checked", false);
    
    // Clear the score
    document.getElementById("answersRightText").innerText = ("");
    document.getElementById("answersWrongText").innerText = ("");

    // Clear the feedback
    document.getElementById("correct1").innerText = ("");
    document.getElementById("correct2").innerText = ("");
    document.getElementById("correct3").innerText = ("");
    document.getElementById("correct4").innerText = ("");
    document.getElementById("correct5").innerText = ("");
    document.getElementById("correct6").innerText = ("");
    document.getElementById("correct7").innerText = ("");
    document.getElementById("correct8").innerText = ("");
    document.getElementById("correct9").innerText = ("");
    document.getElementById("correct10").innerText = ("");
    document.getElementById("incorrect1").innerText = ("");
    document.getElementById("incorrect2").innerText = ("");
    document.getElementById("incorrect3").innerText = ("");
    document.getElementById("incorrect4").innerText = ("");
    document.getElementById("incorrect5").innerText = ("");
    document.getElementById("incorrect6").innerText = ("");
    document.getElementById("incorrect7").innerText = ("");
    document.getElementById("incorrect8").innerText = ("");
    document.getElementById("incorrect9").innerText = ("");
    document.getElementById("incorrect10").innerText = ("");

    // Reset the score
    rightAnswers = 0;
    wrongAnswers = 0;
    
    // Reset the timer
    quiz.timer = 45;

    // Reset the timer's "display" div to "00:45."
    $("#countdownTimer").text("00:45");

    // Hide the reset button
    document.getElementById("reset").style.cssText = "display: none";

    // Hide the score and questions section
    document.getElementById("question-card").style.cssText = "display: none";

    // Display start button
    document.getElementById("start").style.cssText = "display: inline";
    // document.getElementById("stop").style.cssText = "display: inline";
  },

  start: function () {
    
    // Display submit button
    document.getElementById("submit").style.cssText = "display: block";

    // use setInterval to start the counter here and to set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(quiz.count, 1000);
      clockRunning = true;
    }

    // display the questions
    document.getElementById("question-card").style.cssText = "display: block";

    // hide the start button
    document.getElementById("start").style.cssText = "display: none";

  },

  stop: function () {

    // Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  },

  count: function () {

    // Decrement time by 1.
    quiz.timer--;

    if (quiz.timer === 0) {

      // Stop the clock
      quiz.stop();

      // check the answers
      quiz.checkAnswers();

      // Alert the player
      // alert ("Time's up!");

      // Hide the "submit" and "start" buttons
      document.getElementById("submit").style.cssText = "display: none";
      document.getElementById("start").style.cssText = "display: none";
      document.getElementById("stop").style.cssText = "display: none"; 

      // Show the reset button
      document.getElementById("reset").style.cssText = "display: block";

    }

    // Get the current time, pass that into the quizTimer.timeConverter function,
    // and save the result in a variable.
    var converted = quiz.timeConverter(quiz.timer);

    // Use the variable created to show the converted time in the "countdownTimer" span.
    $("#countdownTimer").text(converted);

  },

  timeConverter: function (t) {

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

  submitAnswers: function () {

    // hide the "submit" and "start" buttons
    document.getElementById("submit").style.cssText = "display: none";
    document.getElementById("start").style.cssText = "display: none";
    // document.getElementById("stop").style.cssText = "display: none";
    
    // Show the reset button
    document.getElementById("reset").style.cssText = "display: block";

    // Stop the clock
    quiz.stop();

    // check the answers
    quiz.checkAnswers();

  },

  checkAnswers: function () {
        
    // Check Question 1
    var radios = document.getElementsByName("question1"); 
    var i = 0, len = radios.length;
    // var checked = false;
    var playerAnswer;

    for (; i < len; i++) {
      if (radios[i].checked) {
        checked = true;
        playerAnswer = radios[i].value;
      }
    }

    // When the correct answer is chosen
    if (playerAnswer === "Venus") {
      rightAnswers++;
      document.getElementById("answersRightText").innerText = ("Right answers: " + rightAnswers);
      document.getElementById("correct1").innerText = ("Yes, the right answer is Venus.");
    }

    // When an incorrect answer is chosen
    else {
    wrongAnswers++;
    document.getElementById("answersWrongText").innerText = ("Wrong answers: " + wrongAnswers);
    document.getElementById("incorrect1").innerText = ("No, that the wrong answer.");
    }

  // Check Question 2
    var radios = document.getElementsByName("question2"); 
    var i = 0, len = radios.length;
    var checked = false;
    var playerAnswer;

    for (; i < len; i++) {
      if (radios[i].checked) {
        checked = true;
        playerAnswer = radios[i].value;
      }
    }
    
    // When the correct answer is chosen
    if (playerAnswer === "42") {
      rightAnswers++;
      document.getElementById("answersRightText").innerText = ("Right answers: " + rightAnswers);
      document.getElementById("correct2").innerText = ("Yes, the right answer is 42.");
    }

    // When an incorrect answer is chosen
    else {
    wrongAnswers++;
    document.getElementById("answersWrongText").innerText = ("Wrong answers: " + wrongAnswers);
    document.getElementById("incorrect2").innerText = ("No, that the wrong answer.");
    }

  // Check Question 3
    var radios = document.getElementsByName("question3"); 
    var i = 0, len = radios.length;
    var checked = false;
    var playerAnswer;

    for (; i < len; i++) {
      if (radios[i].checked) {
        checked = true;
        playerAnswer = radios[i].value;
      }
    }

    // When the correct answer is chosen
    if (playerAnswer === "Himalayas") {
      rightAnswers++;
      document.getElementById("answersRightText").innerText = ("Right answers: " + rightAnswers);
      document.getElementById("correct3").innerText = ("Yes, the right answer is Himalayas.");
    }

    // When an incorrect answer is chosen
    else {
    wrongAnswers++;
    document.getElementById("answersWrongText").innerText = ("Wrong answers: " + wrongAnswers);
    document.getElementById("incorrect3").innerText = ("No, that the wrong answer.");
    }

  // Check Question 4
    var radios = document.getElementsByName("question4"); 
    var i = 0, len = radios.length;
    var checked = false;
    var playerAnswer;

    for (; i < len; i++) {
      if (radios[i].checked) {
        checked = true;
        playerAnswer = radios[i].value;
      }
    }

    // When the correct answer is chosen
    if (playerAnswer === "Steven Spielberg") {
      rightAnswers++;
      document.getElementById("answersRightText").innerText = ("Right answers: " + rightAnswers);
      document.getElementById("correct4").innerText = ("Yes, the right answer is Steven Spielberg.");
    }

    // When an incorrect answer is chosen
    else {
    wrongAnswers++;
    document.getElementById("answersWrongText").innerText = ("Wrong answers: " + wrongAnswers);
    document.getElementById("incorrect4").innerText = ("No, that the wrong answer.");
    }

  // Check Question 5
    var radios = document.getElementsByName("question5"); 
    var i = 0, len = radios.length;
    var checked = false;
    var playerAnswer;

    for (; i < len; i++) {
      if (radios[i].checked) {
        checked = true;
        playerAnswer = radios[i].value;
      }
    }

    // When the correct answer is chosen
    if (playerAnswer === "Midas") {
      rightAnswers++;
      document.getElementById("answersRightText").innerText = ("Right answers: " + rightAnswers);
      document.getElementById("correct5").innerText = ("Yes, the right answer is Midas.");
    }

    // When an incorrect answer is chosen
    else {
    wrongAnswers++;
    document.getElementById("answersWrongText").innerText = ("Wrong answers: " + wrongAnswers);
    document.getElementById("incorrect5").innerText = ("No, that the wrong answer.");
    }

  // Check Question 6
    var radios = document.getElementsByName("question6"); 
    var i = 0, len = radios.length;
    var checked = false;
    var playerAnswer;

    for (; i < len; i++) {
      if (radios[i].checked) {
        checked = true;
        playerAnswer = radios[i].value;
      }
    }

    // When the correct answer is chosen
    if (playerAnswer === "Springfield") {
      rightAnswers++;
      document.getElementById("answersRightText").innerText = ("Right answers: " + rightAnswers);
      document.getElementById("correct6").innerText = ("Yes, the right answer is Springfield.");
    }

    // When an incorrect answer is chosen
    else {
    wrongAnswers++;
    document.getElementById("answersWrongText").innerText = ("Wrong answers: " + wrongAnswers);
    document.getElementById("incorrect6").innerText = ("No, that the wrong answer.");
    }

  // Check Question 7
    var radios = document.getElementsByName("question7"); 
    var i = 0, len = radios.length;
    var checked = false;
    var playerAnswer;

    for (; i < len; i++) {
      if (radios[i].checked) {
        checked = true;
        playerAnswer = radios[i].value;
      }
    }

    // When the correct answer is chosen
    if (playerAnswer === "The High Jump") {
      rightAnswers++;
      document.getElementById("answersRightText").innerText = ("Right answers: " + rightAnswers);
      document.getElementById("correct7").innerText = ("Yes, the right answer is The High Jump.");
    }

    // When an incorrect answer is chosen
    else {
    wrongAnswers++;
    document.getElementById("answersWrongText").innerText = ("Wrong answers: " + wrongAnswers);
    document.getElementById("incorrect7").innerText = ("No, that the wrong answer.");
    }

  // Check Question 8
    var radios = document.getElementsByName("question8"); 
    var i = 0, len = radios.length;
    var checked = false;
    var playerAnswer;

    for (; i < len; i++) {
      if (radios[i].checked) {
        checked = true;
        playerAnswer = radios[i].value;
      }
    }

    // When the correct answer is chosen
    if (playerAnswer === "Iron") {
      rightAnswers++;
      document.getElementById("answersRightText").innerText = ("Right answers: " + rightAnswers);
      document.getElementById("correct8").innerText = ("Yes, the right answer is Iron.");
    }

    // When an incorrect answer is chosen
    else {
    wrongAnswers++;
    document.getElementById("answersWrongText").innerText = ("Wrong answers: " + wrongAnswers);
    document.getElementById("incorrect8").innerText = ("No, that the wrong answer.");
    }

  // Check Question 9
    var radios = document.getElementsByName("question9"); 
    var i = 0, len = radios.length;
    var checked = false;
    var playerAnswer;

    for (; i < len; i++) {
      if (radios[i].checked) {
        checked = true;
        playerAnswer = radios[i].value;
      }
    }

    // When the correct answer is chosen
    if (playerAnswer === "Rome") {
      rightAnswers++;
      document.getElementById("answersRightText").innerText = ("Right answers: " + rightAnswers);
      document.getElementById("correct9").innerText = ("Yes, the right answer is Rome.");
    }

    // When an incorrect answer is chosen
    else {
    wrongAnswers++;
    document.getElementById("answersWrongText").innerText = ("Wrong answers: " + wrongAnswers);
    document.getElementById("incorrect9").innerText = ("No, that the wrong answer.");
  }

  // Check Question 10
    var radios = document.getElementsByName("question10"); 
    var i = 0, len = radios.length;
    var checked = false;
    var playerAnswer;

    for (; i < len; i++) {
      if (radios[i].checked) {
        checked = true;
        playerAnswer = radios[i].value;
      }
    }

    // When the correct answer is chosen
    if (playerAnswer === "Julia Roberts") {
      rightAnswers++;
      document.getElementById("answersRightText").innerText = ("Right answers: " + rightAnswers);
      document.getElementById("correct10").innerText = ("Yes, the right answer is Julia Roberts.");
    }

    // When an incorrect answer is chosen
    else {
    wrongAnswers++;
    document.getElementById("answersWrongText").innerText = ("Wrong answers: " + wrongAnswers);
    document.getElementById("incorrect10").innerText = ("No, that the wrong answer.");
    }
  }
};
    


