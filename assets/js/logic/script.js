var timerText = document.getElementById('timer-text');
var startButton = document.getElementById('start-quiz');
var secondsLeft = 75;
var currentQuestionIndex = 0;
var startScreen = document.getElementById('start-screen');
var questionScreen = document.getElementById('question-screen');
var questionTitle = document.getElementById('question-title');
var choicesContainer = document.getElementById('choices');

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

startButton.addEventListener("click", startQuiz) 

// When the start quiz button is selected the start screen page is hidden and the first question and choices display

function startQuiz() {
        startTimer()
        startScreen.classList.add("hide");
        questionScreen.classList.remove("hide");
        displayQuestion()
}

function displayQuestion() {
        questionTitle.textContent = questions[currentQuestionIndex].question;
        for (let index = 0; index < questions[currentQuestionIndex].choices.length; index++) {
          const answerChoice = questions[currentQuestionIndex].choices[index];
        var answerButton = document.createElement("button")
        answerButton.textContent = answerChoice;
        choicesContainer.append(answerButton);
        }
}

// When question is answered and other question is presented

// When question is answered incorrectly 15 seconds is subtracted from the clock

// When all questions answered or the timer reaches 0 - the game is over

// When the game is over I can save my intials and my score
 
 