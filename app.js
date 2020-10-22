// Name variables for elements of page
var scoresEl = document.querySelector("#scores");
var timerEl = document.querySelector("#timer");
var welcomeEl = document.querySelector("#welcomediv");
var quizEl = document.querySelector("#quizdiv");
var highscoresEl = document.querySelector("#highscoresdiv");

var questionEl = document.querySelector("#question");
var choicesEl = document.querySelector("#choices");
var button = document.querySelector("#button");
var timerId;
var score = 0;

// Welcome Screen
// Hide quiz div and scores div 
quizEl.style.display = "none";
highscoresEl.style.display = "none";

// Timer that counts down from one minute to zero
// Lose 10 seconds when answer question wrong

// Set timer start at 60 seconds
var startTime = 60; 
timerEl.textContent = (`${startTime} seconds remain`);

// Define Quiz Questions
var quizObject = [
   {title: "Question1?",
    choices: ["choice1", "choice2", "choice3"] ,
    answer: "choice3"
   },
   {title: "Question2?",
    choices: ["choice1", "choice2", "choice3"] ,
    answer: "choice2"
   }]

// Add Event Listener to Start Game Button
button.addEventListener("click", function() { 
    //Start counter
    timerId = setInterval(countdownTimer, 1000);
    //timerEl.textContent = (`${startTime} seconds remain`);
    
    // Hide Welcome Div
    welcomeEl.style.display = "none";
    
    // Show first question and first choices
    quizEl.style.display = "initial";
    quizEl.textContent = quizObject[0];
 

    // Change choices content  //change this to for each
    // for (let i = 0; i < choices1.length; i++) {
    // var arr1 = choices1[i];        
    // var li = document.createElement("li");
    // li.textContent = (arr1);
    // choicesEl.appendChild(li);
    // }
});

function countdownTimer() {
    startTime--;
    timerEl.textContent = (`${startTime} seconds remain`);
    }// add when time === 0 



// Scores

var player = [
    {initials: "",
     scores: [] ,
    },
    {title: "Question2?",
     choices: ["choice1", "choice2", "choice3"] ,
     answer: "choice2"
    }]

// // Add Event Listener to Choices
// li.addEventListener("click", function()){
//     // Change Timer

//     // Track Score
//     if (choices[i] === choices[3]) {
//         score ++
//     } else {
//         timer - 10
//     }
    // Change question content

    // Change choices content

