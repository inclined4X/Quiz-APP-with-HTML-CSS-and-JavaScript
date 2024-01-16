const questions = [

    //first question
    {
        question: "which is largest animal in the world?",
        answers: [
            { text: "shark", correct: false},
            { text: "Blue Whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    },
    

    //second question
    {
        question: "which is smallest country in the world?",
        answers: [
            { text: "Vatican", correct: true},
            { text: "Bhutan", correct: false},
            { text: "Nepal", correct: false},
            { text: "Shri Lnaka", correct: false},
        ]
    },

    // third question
    {
        question: "which is largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false},
            { text: "Gobi", correct: false},
            { text: "Sahara", correct: false},
            { text: "Antarctica", correct: true},
        ]
    },

    //4th Question
    {
        question: "which is smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false},
            { text: "Australia", correct: true},
            { text: "Arctic", correct: false},
            { text: "Africa", correct: false},
        ]
    }  
];


const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-buttom');
const nextButton = document.getElementById('next-btn');


let currentQuestionIndex = 0;
let score = 0;


function StartQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}



function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let  questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);
    })
}