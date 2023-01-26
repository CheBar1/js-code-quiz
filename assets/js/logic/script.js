let timerText = document.getElementById('timer-text');
let startButton = document.getElementById('start-quiz');
let secondsLeft = 75;
let currentQuestionIndex = 0;
let startScreen = document.getElementById('start-screen');
let questionScreen = document.getElementById('question-screen');
let questionTitle = document.getElementById('question-title');
let choicesContainer = document.getElementById('choices');
const endScreen = document.getElementById('end-screen');
let timeInterval;

// When start quiz button selected the timer starts to count down from 75 seconds
// 
function startTimer() {
        timeInterval = setInterval(function() {
        timerText.textContent = secondsLeft;
        secondsLeft--;
        if (secondsLeft <= 0) {
            endQuiz()
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
        answerButton.onclick=checkAnswer;
        answerButton.textContent = answerChoice;
        choicesContainer.append(answerButton);
        }
}

// When question is answered incorrectly 15 seconds is subtracted from the clock

function checkAnswer(event) {
        let answer = event.target.textContent
        if (answer !== questions[currentQuestionIndex].correctAnswer) {
                secondsLeft -= 15
                timerText.textContent = secondsLeft;
                if (secondsLeft <= 0) {
                        secondsLeft = 0
                        endQuiz()
                }
        } else {

        }
        currentQuestionIndex++
        if (currentQuestionIndex === questions.length) {
                endQuiz()
        } else {
                displayQuestion()
        }
}

function endQuiz() {
        clearInterval(timeInterval)
        questionScreen.classList.add("hide");
        endScreen.classList.remove("hide");
}

        // When question is answered and other question is presented



// When all questions answered or the timer reaches 0 - the game is over

// When the game is over I can save my intials and my score
 
 