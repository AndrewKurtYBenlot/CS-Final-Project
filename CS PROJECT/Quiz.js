// Quiz Data
const quizData = [
    {
        question: "What does SDG 3 focus on?",
        choices: ["Quality Education", "Good Health and Well-being", "Clean Water", "Climate Action"],
        correct: 1
    },
    {
        question: "Which disease is a major cause of death worldwide?",
        choices: ["Diabetes", "Heart Disease", "Flu", "Allergies"],
        correct: 1
    },
    {
        question: "How can we promote good health?",
        choices: ["Eating junk food", "Skipping vaccinations", "Regular exercise and a balanced diet", "Ignoring mental health"],
        correct: 2
    },
    {
        question: "What is a key target of SDG 3?",
        choices: ["Reduce child mortality", "Increase pollution", "Ban hospitals", "Decrease water sanitation"],
        correct: 0
    },
    {
        question: "Which organization focuses on global health?",
        choices: ["NASA", "WHO", "UNESCO", "IMF"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

// loading the first question
function loadQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");

    questionElement.innerText = quizData[currentQuestion].question;
    choicesElement.innerHTML = ""; 

    quizData[currentQuestion].choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.innerText = choice;
        button.classList.add("choice");
        button.onclick = () => checkAnswer(index, button);
        choicesElement.appendChild(button);
    });

    updateButtons();
}

// Check answer
function checkAnswer(choiceIndex, button) {
    const correctIndex = quizData[currentQuestion].correct;

    if (choiceIndex === correctIndex) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }

    document.querySelectorAll(".choice").forEach(btn => btn.disabled = true);
}

// Move to next question
function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

// Submit the quiz
function submitQuiz() {
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("result-container").classList.remove("hidden");
    document.getElementById("score").innerText = "Your Score: " +score+ " out of " +quizData.length;
}

// Restart the quiz
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("quiz-container").classList.remove("hidden");
    document.getElementById("result-container").classList.add("hidden");
    loadQuestion();
}

// Update button visibility
function updateButtons() {
    document.getElementById("nextButton").style.display = currentQuestion < quizData.length - 1 ? "inline-block" : "none";
    document.getElementById("submitButton").style.display = currentQuestion === quizData.length - 1 ? "inline-block" : "none";
}

// this  starts the quiz when the page loads
window.onload = loadQuestion;
