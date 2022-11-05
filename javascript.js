var questionTextElm = document.querySelector('question-text');
var previousButton = document.querySelector('#previus=button');
var nextButton = document.querySelector('next-button');
var answerChoiceList = document.querySelector('#answer-choices');



var quiz = {
	question: [
	{
		question: "What is html",
		answers: "a mark up language",
		choices: ['a programming language', 'a mark up language', 'a styling language']


	},
	{
		question: "What is CSS",
		answers: "a styling language",
		choices: ['a programming language', 'a mark up language', 'a styling language']


	},
	{	
		question: "What is JavaScrpt",
		answers: "a programming language",
		choices: ['a programming language', 'a mark up language', 'a styling language']

	}


	]


}

function displayQuestion(question) {
	questionTextElm.textContent = question.question 
}

displayQuestion(quiz.question[0]);