const questions = [

    //first question
    {
        question: "Which of the following is a CSS preprocessor?",
        answers: [
            { text: "React", correct: false},
            { text: "Sass", correct: true},
            { text: "Angular", correct: false},
            { text: "Vue", correct: false},
        ]
    },
    

    //second question
    {
        question: "In JavaScript, what does DOM stand for?",
        answers: [
            { text: "Document Object Model", correct: true},
            { text: "Data Object Model", correct: false},
            { text: "Design Object Model", correct: false},
            { text: "Document Oriented Mode", correct: false},
        ]
    },

    // third question
    {
        question: "What is the purpose of the HTML <meta> tag with the viewport attribute?",
        answers: [
            { text: "To set the background color of the webpage", correct: false},
            { text: "To define the character set of the webpage", correct: false},
            { text: "To control the layout on different screen sizes", correct: true},
            { text: "To include external stylesheets", correct: false},
        ]
    },

    //4th Question
    {
        question: "Which of the following is NOT a valid type of CSS positioning?",
        answers: [
            { text: "Relative", correct: false},
            { text: "Circular", correct: true},
            { text: "Fixed", correct: false},
            { text: "Absolute", correct: false},
        ]
    }, 

    //5th question
    {
        question: "What does the acronym AJAX stand for?",
        answers: [
            { text: "Advanced JavaScript and XML", correct: false},
            { text: "Asynchronous JavaScript and XML", correct: true},
            { text: "Asynchronous JSON and XHTML", correct: false},
            { text: "All-JavaScript and XML", correct: false},
        ]
    },

    // 6th question
    {
        question: "What is the difference between display: none; and visibility: hidden; in CSS?",
        answers: [
            { text: "They are identical and can be used interchangeably.", correct: false},
            { text: "display: none; removes the element from the layout, while visibility: hidden; hides the element but still occupies space.", correct: true},
            { text: "visibility: hidden; removes the element from the layout, while display: none; hides the element but still occupies space", correct: false},
            { text: "Both properties perform the same function but are used in different CSS versions.", correct: false},
        ]
    },

    // 7th question
    {
        question: "Explain the CSS Box Model and its components.",
        answers: [
            { text: "The CSS Box Model only includes margin, padding, and content.", correct: false},
            { text: "The CSS Box Model includes content, padding, border, and margin.", correct: true},
            { text: "The CSS Box Model consists of content, border, and margin, excluding padding.", correct: false},
            { text: "The CSS Box Model comprises only content, border, and padding, excluding margin.", correct: false},
        ]
    },

    // 8th question
    {
        question: "What is the purpose of CSS Flexbox and when would you choose it over CSS Grid?",
        answers: [
            { text: "Flexbox is for two-dimensional layout, while Grid is for one-dimensional layout.", correct: false},
            { text: "Flexbox is suitable for both one-dimensional and two-dimensional layout.", correct: false},
            { text: "Grid is suitable for both one-dimensional and two-dimensional layout.", correct: false},
            { text: "Flexbox is for one-dimensional layout, while Grid is for two-dimensional layout.", correct: true},
        ]
    },

    // 9th question
    {
        question: "Explain the differences between the <div> and <span> elements in HTML and when you might use one over the other.",
        answers: [
            { text: "<div> is an inline element, and <span> is a block element.", correct: false},
            { text: "<div> is a block element, and <span> is an inline element.", correct: false},
            { text: "<div> is used for grouping block-level elements, while <span> is used for grouping inline elements.", correct: true},
            { text: "<div> and <span> are interchangeable and can be used in any context.", correct: false},
        ]
    }
];


const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
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
    // reset state is for not showing the answer 1 answer 2 etc buttons
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let  questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    })
}


function resetState(){
    nextButton.style.display = 'none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++
    }else{
        selectedBtn.classList.add('incorrect');
    }


    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add('correct')
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}


function showScore(){
    resetState();
    questionElement.innerHTML = ` You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        StartQuiz()
    }
})


StartQuiz(); 