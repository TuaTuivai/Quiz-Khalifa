var finishLine     = document.querySelector('.finish-line');
var scoreBoard     = document.querySelector('.score-screen');
var questions      = document.querySelector('.questions');
var header         = document.querySelector('.header');
var scoreAndTimer  = document.querySelector('.high-score-timer-bar');
var outerContainer = document.querySelector('.outer-container');
var innerContainer = document.querySelector('.inner-container');
var submit         = document.querySelector('.submit');
var choices        = document.querySelector('.choices'); 
var startButton    = document.querySelector('.start-quiz');


// break 

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
 
]