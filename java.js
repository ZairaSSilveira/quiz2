const questionText = document.getElementById('question-text');
const options = document.querySelectorAll('.option');
const submitAnswerButton = document.getElementById('submit-answer');
const message = document.getElementById('message');
const scoreElement = document.getElementById('score');


// PERGUNTAS E RESPOSTAS



const questions = [
    {
        question: 'De quem é a famosa frase “Penso, logo existo”?',
        options: [' a) Platão', ' b) Galileu Galilei', ' c) Sócrates ', 'd) Descartes '],
        correctAnswer: 2,
        points: 10
    },
    {
        question: 'De onde é a invenção do chuveiro elétrico?',
        options: [' a) França', ' b) Inglaterra', 'c) Brasil', ' d) Austrália'],
        correctAnswer: 2,
        points: 10
    }, 
    {
        question: 'Qual o nome do presidente do Brasil que ficou conhecido como Jango?',
        options: [' a) Jânio Quadros', ' b)  Jacinto Anjos', ' c) João Goulart', ' d) Getúlio Vargas'],
        correctAnswer: 2,
        points: 10
    }, 
    {
        question: 'Quanto tempo a luz do Sol demora para chegar à Terra?',
        options: [' a) 12 minutos', ' b) 1 dia', ' c) 8 minutos', ' d) 12 segundos'],
        correctAnswer: 2,
        points: 10
    },
    {
        question: 'AQual o maior animal terrestre?',
        options: [' a) Baleia Azul', ' b) Dinossauro', ' c) Elefante africano', ' d) Girafa'],
        correctAnswer: 2,
        points: 10
    }, 
];

let currentQuestionIndex = 0;
let chances = 2;
let score = 0;

// MUDANÇA DA PERGUNTAS


function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = `Pergunta ${currentQuestionIndex + 1}: ${currentQuestion.question}`;

    options.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
    });
}
// PONTUAÇÃO
function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswer) {
        score += currentQuestion.points;
        scoreElement.textContent = `Pontuação: ${score}`;
        message.textContent = 'Resposta correta!';
        currentQuestionIndex++;

// FIM DO QUIZ


        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            questionText.textContent = 'Parabéns, você completou o quiz!';
            options.forEach(option => option.style.display = 'none');
            submitAnswerButton.style.display = 'none';
        }
    } else {
        chances--;

        if (chances === 0) {
            questionText.textContent = 'Você errou todas as chances. Recomece o quiz.';
            options.forEach(option => option.style.display = 'none');
            submitAnswerButton.style.display = 'none';
        } else {
            message.textContent = 'Resposta incorreta. Tente novamente.';
        }
    }
}

displayQuestion();

// SEM ESCOLHA DA RESPOSTA APARECE ISSO

submitAnswerButton.addEventListener('click', () => {
    const selectedOptionIndex = Array.from(options).findIndex(option => option.classList.contains('selected'));
    if (selectedOptionIndex !== -1) {
        checkAnswer(selectedOptionIndex);
    } else {
        message.textContent = 'Selecione uma opção antes de responder.';
    }
});

options.forEach((option, index) => {
    option.addEventListener('click', () => {
        options.forEach(option => option.classList.remove('selected'));
        option.classList.add('selected');
    });
});