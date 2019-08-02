(function(){
//Variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

//Questions array
const myQuestions = [
  {
    question: "What planet is closest to the Sun?",
    answers: {
      a: "Venus",
      b: "Mercury",
      c: "Earth",
      d: "Mars"
    },
    correctAnswer: "b"
  },
  {
    question: "What is the furthest planet from the Sun?",
    answers: {
      a: "Neptune",
      b: "Saturn",
      c: "Uranus",
      d: "Jupiter"
    },
    correctAnswer: "a"
  },
  {
    question: "How many planets have rings?",
    answers: {
      a: "1",
      b: "2",
      c: "4",
      d: "5"
    },
    correctAnswer: "c"
  }
];

//Init function
function buildQuiz(){
    //Stores output
    const output = [];
    
    myQuestions.forEach(
    (currentQuestion, questionNumber) => {
        
        //Answer choices
        const answers = [];
        
        //For each available answer...
        for(letter in currentQuestion.answers){
            
            //Adds HTML radio button to each answer
            answers.push(
            `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} : ${currentQuestion.answers[letter]}
            </label>`
            );
        }
    //Adds question and its answers to output
    output.push(
    `<div class="question"> ${currentQuestion.question}</div>
    <div class="answers"> ${answers.join('')}</div>`
            );
        }
    );
    
        //Combines output lists
        quizContainer.innerHTML = output.join('');
    }

function showResults(){
    
    //Gather answers from quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
    
    //Keep track of answers
    let numCorrect = 0;
    
    //For each question...
    myQuestions.forEach((currrentQuestion, questionNumber) => {
        
        //Find answer that is selected
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        
        //If else
        if(userAnswer===currentQuestion.correctAnswer){
            
            //Add to number of correct
            numCorrect++;
            
            //Colors the answer green
            answerContainers[questionNumber].style.color = 'green';
        } else{
            
            //If answer is wrong, colors the answers red
            answerContainers[questionNumber].style.color = 'red';
        }
    });
    
    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);
    })();