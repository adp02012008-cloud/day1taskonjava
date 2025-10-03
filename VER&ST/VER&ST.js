// script.js
const regForm = document.getElementById('regForm');
const regError = document.getElementById('regError');
const quizSection = document.getElementById('quiz-section');
const quizQuestionsDiv = document.getElementById('quizQuestions');
const submitQuizBtn = document.getElementById('submitQuiz');
const resultSection = document.getElementById('result-section');
const scoreDisplay = document.getElementById('scoreDisplay');
const jsonDisplay = document.getElementById('jsonDisplay');

// Simple quiz questions
const quizData = [
  {question: 'Capital of India?', options: ['Delhi', 'Mumbai', 'Bangalore'], answer: 'Delhi'},
  {question: '5 + 7 = ?', options: ['10', '12', '11'], answer: '12'},
  {question: 'Largest planet?', options: ['Earth', 'Mars', 'Jupiter'], answer: 'Jupiter'},
  {question: 'highest population?', options: ['China', 'America', 'India'], answer: 'India'}
];

// Registration form validation
regForm.addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const age = parseInt(document.getElementById('age').value, 10);

  if(name === '' || email === '' || isNaN(age)){
    alert('All fields are required');
    return;
  }

  if(age < 12){
    alert('Age must be 12 or older');
    return;
  }

  regError.textContent = '';
  alert('Registration successful!');
  regForm.reset();
  showQuiz();
});

// Display quiz questions
function showQuiz(){
  quizSection.style.display = 'block';
  quizQuestionsDiv.innerHTML = '';

  quizData.forEach((q, index) => {
    const div = document.createElement('div');
    div.classList.add('quiz-question');
    div.innerHTML = `<p>${index+1}. ${q.question}</p>` +
                    q.options.map(opt =>
                      `<label><input type='radio' name='q${index}' value='${opt}'> ${opt}</label>`
                    ).join('');
    quizQuestionsDiv.appendChild(div);
  });
}

// Submit quiz and show results
submitQuizBtn.addEventListener('click', function(){
  // Simulate server delay with Promise and setTimeout
  new Promise((resolve) => {
    setTimeout(() => {
      let score = 0;
      quizData.forEach((q, index) => {
        const selected = document.querySelector(`input[name='q${index}']:checked`);
        if(selected && selected.value === q.answer){
          score++;
        }
      });
      resolve(score);
    }, 2000);
  }).then(score => {
    const percentage = (score/quizData.length)*100;
    let grade;
    if(percentage >= 80) grade = 'A';
    else if(percentage >= 60) grade = 'B';
    else if(percentage >= 40) grade = 'C';
    else grade = 'F';

    const timestamp = new Date().toLocaleString();
    const resultJSON = {
      score: score,
      total: quizData.length,
      percentage: percentage,
      grade: grade,
      timestamp: timestamp
    };

    scoreDisplay.innerHTML = `Score: ${score}/${quizData.length}<br>Percentage: ${percentage}%<br>Grade: ${grade}<br>Time: ${timestamp}`;
    jsonDisplay.textContent = JSON.stringify(resultJSON, null, 2);
    resultSection.style.display = 'block';
  });
});
