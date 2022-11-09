var finishLine     = document.querySelector('.scoreboard');
var scoreScreen    = document.querySelector('.score-screen')
var scoreBoard     = document.querySelector('.highscore-button');
var questions      = document.querySelector('.questions');
var header         = document.querySelector('.welcome-screen');
var scoreAndTimer  = document.querySelector('.high-score-timer-bar');
var outerContainer = document.querySelector('.outer-container');
var innerContainer = document.querySelector('.inner-container');
var submit         = document.querySelector('.submit');
var choices        = document.querySelector('.choices'); 
var startButton    = document.querySelector('.start-quiz-button');
var question       = document.querySelector('#question');
var choice1        = document.querySelector('#choice1') 
var choice2        = document.querySelector('#choice2') 
var choice3        = document.querySelector('#choice3') 
var choice4        = document.querySelector('#choice4') 
var currentIndex   = 0
var timeLeft       = 60
var timer          
var countDown      = document.querySelector('#countdown')
var backButton     = document.querySelector('.backbutton')

function myFunction (){
    header.style.display="none"
    questions.style.display='block'
    startTimer()
    changeQuestion()
};

function highScoreButton(){
    header.style.display='none'
    question.style.display='none'
    scoreScreen.style.display='block'};

function endOfQuiz (){
     questions.style.display='none'
    finishLine.style.display='block'
    };
    
function backToQuiz (){
    myFunction()
    // header.style.display="none"
    // scoreScreen.style.display='none'
    // questions.style.display='block'
    // startTimer()
    // changeQuestion()
    // scoreScreen.style.display='none'
    // questions.style.display='block'
};




startButton.addEventListener("click", myFunction);
scoreBoard.addEventListener('click', highScoreButton);
backButton.addEventListener('click',backToQuiz);
// choice3.addEventListener('click',endOfQuiz);
// supposed to be any answer instead of choice
var quizContent= [
    {
        question: "1. Which tag should typically be at the bottom of your HTML page?",
        answer: "Footer",
        choices: ['Header', 'Main', 'Body', 'Footer'],
    },
    {
        question: "2. In CSS which symbol is used to define a class ",
        answer: ".",
        choices: ['.', '$', '#', '*']
    },
    {
        question: "3.Using gitbash or terminal how would you change directories",
        answer: "cd",
        choices: ["cd", "mkdir", "ls", "git status"]
    },
    {
        question: "4. what is HTML",
        answer: "a mark up language",
        choices: ["a mark up language", "a styling language", "a programming language", "an art language"]
    }
 
];

function changeQuestion (){
    question.textContent=quizContent[currentIndex].question
    choice1.textContent=quizContent[currentIndex].choices[0]
    choice2.textContent=quizContent[currentIndex].choices[1]
    choice3.textContent=quizContent[currentIndex].choices[2]
    choice4.textContent=quizContent[currentIndex].choices[3]
};
function clickAnswer(event){
    var userAnswer    = (event.target.textContent)
    var correctAnswer = quizContent[currentIndex].answer
    if (userAnswer == correctAnswer){
        alert('correct')
        
    }
    else {
        alert('wrong')
        timeLeft --
    }
    currentIndex++
    changeQuestion()
}

function startTimer (){
    timer = setInterval(function(){
        timeLeft--
        countDown.textContent='Timer: '+ timeLeft
    }, 1000)
}

choice1.addEventListener('click',clickAnswer)
choice2.addEventListener('click',clickAnswer)
choice3.addEventListener('click',clickAnswer)
choice4.addEventListener('click',clickAnswer)

