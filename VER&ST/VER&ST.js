const regForm = document.getElementById('regForm');
const regError = document.getElementById('regError');
const quizSection = document.getElementById('quiz-section');
const quizQuestionsDiv = document.getElementById('quizQuestions');
const submitQuizBtn = document.getElementById('submitQuiz');
const resultSection = document.getElementById('result-section');
const scoreDisplay = document.getElementById('scoreDisplay');
const jsonDisplay = document.getElementById('jsonDisplay');

// All quiz questions
const quizData = [
  {question: 'Capital of India?', options: ['Delhi', 'Mumbai', 'Bangalore'], answer: 'Delhi'},
  {question: '5 + 7 = ?', options: ['10', '12', '11'], answer: '12'},
  {question: 'Largest planet?', options: ['Earth', 'Mars', 'Jupiter'], answer: 'Jupiter'},
  {question: 'Highest population?', options: ['China', 'America', 'India'], answer: 'India'},
  {question: 'Highest GDP nation?', options: ['Usa', 'India', 'China'], answer: 'India'},
  {question: 'What is 1 + 1?', options: ['2', '5', '7'], answer: '2'},
  {question: 'What is 1 * 1?', options: ['3', '2', '1'], answer: '1'},
  {question: 'What is 2 squared?', options: ['3', '4', '16'], answer: '4'},
  {question: 'What is 10 % 2?', options: ['0', '5', '2'], answer: '0'},
  {question: 'What is 10 * 10?', options: ['100', '1000', '10'], answer: '100'},
  {question: 'What is 15 + 15?', options: ['10', '30', '15'], answer: '30'},
  {question: 'What is 70 + 30?', options: ['70', '30', '100'], answer: '100'},
  {question: 'What is 1 - 1?', options: ['0', '2', '-1'], answer: '0'},
  {question: 'What is 10 - 20?', options: ['10', '-10', '20'], answer: '-10'},
  {question: 'What is 15 - 10?', options: ['5', '10', '20'], answer: '5'},
  {question: 'What is 70 - 30?', options: ['40', '20', '10'], answer: '40'},
  {question: 'What is your name?', options: ['u', 'me', 'others'], answer: 'me'},
  {question: 'What is 10 - 5?', options: ['5', '-5', '2'], answer: '5'},
  {question: 'What is 100 - 99?', options: ['1', '-1', '99'], answer: '1'}
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

// Function to show ONLY 5 random questions
function showQuiz(){
  quizSection.style.display = 'block';
  quizQuestionsDiv.innerHTML = '';

  // Shuffle the array randomly
  const shuffled = [...quizData].sort(() => Math.random() - 0.5);

  // Pick only 5 random questions
  const selectedQuestions = shuffled.slice(0, 5);

  // Store globally to use while checking answers
  window.currentQuiz = selectedQuestions;

  // Display 5 questions
  selectedQuestions.forEach((q, index) => {
    const div = document.createElement('div');
    div.classList.add('quiz-question');
    div.innerHTML = `
      <p>${index + 1}. ${q.question}</p>
      ${q.options.map(opt => `
        <label><input type='radio' name='q${index}' value='${opt}'> ${opt}</label>
      `).join('')}
    `;
    quizQuestionsDiv.appendChild(div);
  });
}

// Submit quiz and show result
submitQuizBtn.addEventListener('click', function(){
  new Promise((resolve) => {
    setTimeout(() => {
      let score = 0;
      currentQuiz.forEach((q, index) => {
        const selected = document.querySelector(`input[name='q${index}']:checked`);
        if(selected && selected.value === q.answer){
          score++;
        }
      });
      resolve(score);
    }, 1000);
  }).then(score => {
    const total = currentQuiz.length;
    const percentage = (score / total) * 100;
    let grade;
    if(percentage >= 80) grade = 'A';
    else if(percentage >= 60) grade = 'B';
    else if(percentage >= 40) grade = 'C';
    else grade = 'F';

    const timestamp = new Date().toLocaleString();
    const resultJSON = {
      score: score,
      total: total,
      percentage: percentage,
      grade: grade,
      timestamp: timestamp
    };

    scoreDisplay.innerHTML = `
      Score: ${score}/${total}<br>
      Percentage: ${percentage.toFixed(2)}%<br>
      Grade: ${grade}<br>
      Time: ${timestamp}
    `;

    jsonDisplay.textContent = JSON.stringify(resultJSON, null, 2);
    resultSection.style.display = 'block';
  });
});
