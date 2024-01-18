import React, { useState } from 'react';
import axios from 'axios'

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = async (isCorrect, optionText) => {
    if (isCorrect) {
      // Increment the score for correct answers
      setScore(prevScore => prevScore + 1);
    }

    // Check if there are more questions
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      // Move to the next question
      setCurrentQuestion(nextQuestion);
    } else {
      // Show the score and send all answers to the backend
      setShowScore(true);

      try {
        // Create an array to store all answers
        const answers = questions.map(question => ({
          isCorrect: question.options.find(option => option.text === optionText)?.isCorrect || false,
          optionText,
        }));

        console.log('Sending scores to backend:', answers);

        // Send all answers to the backend
        await axios.post('http://localhost:3000/quiz', { answers });

        // Add any additional API requests or logic here
      } catch (error) {
        console.error('Error submitting scores:', error);
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h2>Your Score: {score}</h2>
          <button onClick={resetQuiz}>Try Again</button>
        </div>
      ) : (
        <div className="question-section">
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].question}</p>
          <div className="answer-options">
          {questions[currentQuestion].options.map((option, index) => (
  <button
    key={option.text}
    onClick={() => handleAnswerClick(option.isCorrect, option.text)}
  >
    {option.text}
  </button>
))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;



