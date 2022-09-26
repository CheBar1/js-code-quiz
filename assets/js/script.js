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

var question = document.getElementById("question-title");
var choices = Array.from(document.getElementById("choices"));

var currentQuestion = {};
var acceptingAnswers = true;
var score = 0
var questionCounter = 0;
var availableQuestions = [];

var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choice1: "strings",
        choice2: "booleans",
        choice3: "alerts",
        choice4: "numbers",
        correntAnswer: 3
    },
    {
        
    }
]
