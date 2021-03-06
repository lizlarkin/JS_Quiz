// Name variables for elements of page
var scoresEl = document.querySelector("#scores");
var timerEl = document.querySelector("#timer");
var welcomeEl = document.querySelector("#welcomediv");
var quizEl = document.querySelector("#quizdiv");
var highscoresEl = document.querySelector("#highscoresdiv");
var questionEl = document.querySelector("#question");
var choices1El = document.querySelector("#choice1");
var choices2El = document.querySelector("#choice2");
var choices3El = document.querySelector("#choice3");
var button = document.querySelector("#button");
var storeName = document.querySelector("#player-name");
var storeScore = document.querySelector("#player-score");
var scoreEl = document.querySelector("#yourscorediv");
var finalScore = document.querySelector("#final-score");
var submitButton = document.querySelector("#submit-button");

var timerId;
var score = 0;
var currentIndex = 0;

// Welcome Screen
// Hide quiz div and scores div 
quizEl.style.display = "none";
highscoresEl.style.display = "none";
scoreEl.style.display = "none";
scoresEl.textContent = score;

// Timer that counts down from one minute to zero
// Lose 10 seconds when answer question wrong
function countdownTimer() {
    startTime--;
    timerEl.textContent = (`${startTime} seconds remain`);
    if (startTime <= 0) {
        quizEl.style.display = "none";
        timerEl.textContent = "Times up!";
        clearInterval(timerId);
    }
}

// Set timer start at 60 seconds
var startTime = 60; 
timerEl.textContent = (`${startTime} seconds remain`);

// Define Quiz Questions
var questionArray = [
    {
        question: "What is a for loop?",
        options: ["A way to iterate code", "A way to avoid rewriting code", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What number index is bird in this list: cat, turtle, bird, zebra",
        options: ["1", "2", "4"],
        answer: "2"
    },
    {
        question: "What might an object contain?",
        options: ["A method", "An event handler", "All of the above"],
        answer: "A method"
    }
]

// Start Quiz
// Add Event Listener to Start Quiz Button
button.addEventListener("click", function() { 
    //Start counter
    timerId = setInterval(countdownTimer, 1000);
    //timerEl.textContent = (`${startTime} seconds remain`);
    
    // Hide Welcome Div
    welcomeEl.style.display = "none";
    
    // Show first question and first choices
    quizEl.style.display = "initial";
    displayQuestion();
   
});

function displayQuestion() {
    questionEl.textContent = questionArray[currentIndex].question;
    choices1El.textContent = questionArray[currentIndex].options[0];
    choices2El.textContent = questionArray[currentIndex].options[1];
    choices3El.textContent = questionArray[currentIndex].options[2];
};

// Take Quiz
choices1El.addEventListener("click", function() {
    if (this.textContent === questionArray[currentIndex].answer) {
        score++;
        scoresEl.textContent = score;
    } else {
        startTime = startTime - 10;
    }
    
    if (currentIndex < questionArray.length - 1 ) {
        currentIndex++;
        displayQuestion();
    } else {
        endOfGame();
    }
});

choices2El.addEventListener("click", function() {
    if (this.textContent === questionArray[currentIndex].answer) {
        score++;
        scoresEl.textContent = score;
    } else {
        startTime = startTime - 10;
    }
    
    if (currentIndex < questionArray.length - 1 ) {
        currentIndex++;
        displayQuestion();
    } else {
        endOfGame();
    }
});

choices3El.addEventListener("click", function() {
    if (this.textContent === questionArray[currentIndex].answer) {
        score++;
        scoresEl.textContent = score;
    } else {
        startTime = startTime - 10;
    }
    
    if (currentIndex < questionArray.length - 1 ) {
        currentIndex++;
        displayQuestion();
    } else {
        endOfGame();
    }
});

// End Quiz
function endOfGame() {
    // display user performance
    quizEl.style.display = "none";   
    scoreEl.style.display = "initial";
    finalScore.textContent = score;
}

// Score History
var allPlayers = []
var allScores = []

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    scoreEl.style.display = "none";
    highscoresEl.style.display = "initial";
    allScores.push(score);
    storeScore.textContent = allScores;
    var userName = document.querySelector("#user-name").value;
    allPlayers.push(userName);
    storeName.textContent = allPlayers;
    })

