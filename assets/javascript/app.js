window.onload = function () {
  $("#start").on("click", quiz.start);
  $("#reset").on("click", quiz.reset);
  $("#submit").on("click", quiz.submitAnswers);
  $("#countdownTimer").text("00:45");
  document.getElementById("question-card").style.cssText = "display: none";
  document.getElementById("reset").style.cssText = "display: none";
}

var quizResults = {
  // Variables to set and hold the quiz results
  var: rightAnswers = 0,
  var: wrongAnswers = 0,
  var: skippedAnswers = 0
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
    $(".card-body input").prop("checked", false).attr("disabled", false);
    
    // Clear the score
    document.getElementById("answersRightText").innerText = ("");
    document.getElementById("answersWrongText").innerText = ("");
    document.getElementById("answersSkippedText").innerText = ("");

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
    document.getElementById("skipped1").innerText = ("");
    document.getElementById("skipped2").innerText = ("");
    document.getElementById("skipped3").innerText = ("");
    document.getElementById("skipped4").innerText = ("");
    document.getElementById("skipped5").innerText = ("");
    document.getElementById("skipped6").innerText = ("");
    document.getElementById("skipped7").innerText = ("");
    document.getElementById("skipped8").innerText = ("");
    document.getElementById("skipped9").innerText = ("");
    document.getElementById("skipped10").innerText = ("");

    // Reset the score
    rightAnswers = 0;
    wrongAnswers = 0;
    skippedAnswers = 0;
    
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

      // Hide the "submit" and "start" buttons
      document.getElementById("submit").style.cssText = "display: none";
      document.getElementById("start").style.cssText = "display: none";

      // Disable radio buttons
      $(".card-body input").attr("disabled", true);

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
    
    // Show the reset button
    document.getElementById("reset").style.cssText = "display: block";

    // Stop the clock
    quiz.stop();

    // check the answers
    quiz.checkAnswers();

    //disable the radio buttons
    $(".card-body input").attr("disabled", true);


  },

  checkAnswers: function () {

    var quizAnswers = ["Venus", "42", "Himalayas", "Steven Spielberg", "Midas", "Springfield", "The High Jump", "Iron", "Rome", "Julia Roberts"]; 
    for (n = 1; n <= 10; n++) {
      var checked = false;
      var radios = document.getElementsByName("question" + n);
      var playerAnswer;
      
      for (i = 0; i < radios.length; i++) {
        if ($(radios[i]).prop("checked") == true) {
          playerAnswer = radios[i].value;
          checked = true;
        }
      }

      console.log(checked);

      if (checked != true) {
        skippedAnswers++;
        document.getElementById("answersSkippedText").innerText = ("Skipped answers: " + skippedAnswers);
        document.getElementById("skipped" + n).innerText = ("Opps, you missed this question.");
        // return;
      }
      else {
        // When the correct answer is chosen
        if (playerAnswer === quizAnswers[n-1]) {
          rightAnswers++;
          document.getElementById("answersRightText").innerText = ("Right answers: " + rightAnswers);
          document.getElementById("correct" + n).innerText = ("Yes, the right answer is " + quizAnswers[n-1]);
        }

        // When an incorrect answer is chosen
        else {
        wrongAnswers++;
        document.getElementById("answersWrongText").innerText = ("Wrong answers: " + wrongAnswers);
        document.getElementById("incorrect" + n).innerText = ("No, that the wrong answer.");
        }
      }
    }
  }
};
