/* Create an oject with question, choices, and correct answer
HTML
<div id="questions" class="hide">
  <h2 id="question-title"></h2>
  <div id="choices" class="choices"></div> */

// When start button selected timer and quiz start and question presents

// When question is answered and other question is presented

// When question is answered incorrectly 15 seconds is subtracted from the clock

// When all questions answered or the timer reaches 0 - the game is over

//When the game is over I can save my intials and my score

// var question = document.getElementById("question-title");
// var choices = Array.from(document.getElementById("choices"));

// var currentQuestion = {};
// var acceptingAnswers = true;
// var score = 0
// var questionCounter = 0;




var timerText = document.getElementById('timer-text');
var startButton = document.getElementById('start-quiz');
var secondsLeft = 75;

// When start quiz button selected the timer starts to count down from 75 seconds
function startTimer() {
        var timeInterval = setInterval(function() {
        secondsLeft--;
        
        if (secondsLeft > 1) {
            timerText.textContent = secondsLeft;

        } else if (timeLeft === 1) {
            timerText.textContent = 'Times UP!';
            clearInterval(timeInterval);
// If incorrect answer is selected the time left is reduced by 15 seconds
        } else if (!correctAnswer) {
            secondsLeft = secondsLeft - 15
        }

  }, 1000);

      
}

startButton.addEventListener("click", startTimer) 
 