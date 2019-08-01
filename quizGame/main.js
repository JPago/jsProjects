//Variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

//Questions
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

function buildQuiz(){
    const output = [];
    
    myQuestions.forEach(
    currentQuestion, questionNumber) {
        const answers = [];
        
        for(letter in currentQuestion.answers) {
            answers.push(
            <label>
                <input type="radio" name="question${questionNumber}" value="${letter}"
            ${letterr} : ${currentQuestion.answers[letter]}
            </label>
            );
        }
    }
    
    output.push(
    <div class="question"> ${currentQuestion.question}</div>
    <div class="answers"> ${answers.join('')}</div>
            );
    quizContainer.innerHTML = output.join('');
}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);