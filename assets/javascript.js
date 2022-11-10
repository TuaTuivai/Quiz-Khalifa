var finishLine     = document.querySelector('.quiz-finished');
var scoreScreen    = document.querySelector('.score-screen');


var header         = document.querySelector('.welcome-screen');
var scoreAndTimer  = document.querySelector('.high-score-timer-bar');
var outerContainer = document.querySelector('.outer-container');
var innerContainer = document.querySelector('.inner-container');

// button

var submit         = document.querySelector('.submit');
var scoreBoard     = document.querySelector('.highscore-button');
var backButton     = document.querySelector('.backbutton');
var startButton    = document.querySelector('.start-quiz-button');

// Choices and Question

var questions      = document.querySelector('.question-content');
var question       = document.querySelector('#question');
var choices        = document.querySelector('.choices'); 
var choice1        = document.querySelector('#choice1');
var choice2        = document.querySelector('#choice2');
var choice3        = document.querySelector('#choice3');
var choice4        = document.querySelector('#choice4');
var currentIndex   = 0;
var score          = 0;

// timer var

var timeLeft       = 60;
var timer          
var countDown      = document.querySelector('#countdown');

// Functions

function startQuiz (){
    header.style.display="none"
    questions.style.display='block'
    scoreBoard.style.display='none'
    startTimer()
    changeQuestion()
};

function highScoreButton(){
    header.style.display='none'
    question.style.display='none'
    choices.style.display='none'
    scoreScreen.style.display='block'
};


function backToQuiz (){
    startQuiz()
    scoreScreen.style.display='none'
    question.style.display='block'
    choices.style.display='flex-direction'

};

function endOfQuiz (){
    questions.style.display='none'
    finishLine.style.display='block'
    clearInterval(timer)
 
};

// function wrongMinus5 (){
//     timeLeft -- 
// }



function clickAnswer(event){
    var userAnswer    = (event.target.textContent)
    var correctAnswer = quizContent[currentIndex].answer
    if (userAnswer == correctAnswer){
        alert('correct')
        
    }
    else {
        alert('wrong')
    }
    currentIndex++
    if (currentIndex == 4){
        endOfQuiz()
    }
    else{
    changeQuestion()
    }
    // if ( countDown == 0){
    //     setTimeout((,) => {
            
    //     }, timeout);
    // }
};

    function startTimer (){
    timer = setInterval(function(){
    timeLeft--
    countDown.textContent='Timer: '+ timeLeft}, 1000)
    // if (userAnswer == wrong){
    //     timeLeft -- 
    // }
};
    function changeQuestion (){
    question.textContent=quizContent[currentIndex].question
    choice1.textContent=quizContent[currentIndex].choices[0]
    choice2.textContent=quizContent[currentIndex].choices[1]
    choice3.textContent=quizContent[currentIndex].choices[2]
    choice4.textContent=quizContent[currentIndex].choices[3]
};

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
        choices: [ "a styling language","a mark up language", "a programming language", "an art language"]
    }
 
];

startButton.addEventListener("click", startQuiz);
scoreBoard.addEventListener('click', highScoreButton);
backButton.addEventListener('click',backToQuiz);
choice1.addEventListener('click',clickAnswer);
choice2.addEventListener('click',clickAnswer);
choice3.addEventListener('click',clickAnswer);
choice4.addEventListener('click',clickAnswer);

