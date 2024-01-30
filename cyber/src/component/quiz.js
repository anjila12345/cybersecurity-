import React, { useState } from 'react';
import axios from 'axios';
import Header from '../component/header2';

const QuizApp = () => {
  const [userName, setUserName] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question: ' What does the term "online privacy" mean?',
      options: ['(A) Sharing everything online', '(B) Keeping personal information secret and safe', '(C) Asking for likes and comments on social media', '(D) Deleting all online accounts'],
      correctAnswer: '(B) Keeping personal information secret and safe',
    },
    {
      question: ' What should you do if you receive a suspicious email or message?',
      options: ['(A) Click on the links or download attachments', '(B) Reply with your personal information', '(C) Ignore it', '(D) Report it to a trusted adult'],
      correctAnswer: '(D) Report it to a trusted adult',
    },
    {
      question: ' What should you do if a stranger online asks for your personal information?',
      options: ['(A) Share it with them', '(B) Ignore them', '(C) Ask a friend for advice', '(D) Tell them everything'],
      correctAnswer: '(B) Ignore them',
    },
    {
      question: ' Which of the following is a safe way to share information online?',
      options: ['(A) Post everything on social media', '(B) Share only with close friends', '(C) Share with strangers', '(D) Share with everyone you know'],
      correctAnswer: '(B) Share only with close friends',
    },
    {
      question: ' What does the term "Phishing" mean in the context of cybersecurity?',
      options: ['(A) A way to catch fish', '(B) A type of computer virus', '(C) Trying to trick someone into giving away their sensitive information', '(D) A type of online game'],
      correctAnswer: '(C) Trying to trick someone into giving away their sensitive information',
    },
    {
      question: ' What is a strong and secure password?',
      options: ['(A) Password123', '(B) YourName123', '(C) 123456', '(D) P@ssw0rd!'],
      correctAnswer: '(D) P@ssw0rd!',
    },
    {
      question: ' Why is it important to log out of your accounts when you are done using them?',
      options: ['(A) To save your progress', '(B) To protect your personal information', '(C) To show you are done', '(D) Logging out is not necessary'],
      correctAnswer: '(B) To protect your personal information',
    },
  ];

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setUserName('');
  };

  const saveScore = async () => {
    try {
      await axios.post('http://localhost:3000/quiz', { userName, score });
      console.log('Score saved successfully');
    } catch (error) {
      console.error('Error saving score:', error);
    }
  };

  return (
    <div>
      <Header />
      <div className="quiz-container">
        {showScore ? (
          <div className="score-section">
            <img src="../img/cons.png" alt="" className="imgcons" />
            <h1 className="score">{score}</h1>
            <div className="scorebox">
              <h2>Your Score: {score} out of {questions.length}</h2>
              <button className="restart" onClick={restartQuiz}>
                Restart Quiz
              </button>
              <button className="savescore" onClick={saveScore}>
                Save Score
              </button>
            </div>
          </div>
        ) : (
          <div className="question-section">
            <img src="../img/pp.png" alt="" className="imgquiz" />
            <div className="question">
              <h2>Question {currentQuestion + 1}</h2>
              <p>{questions[currentQuestion].question}</p>
            </div>
            <img src="../img/qq.png" alt="" className="imgqq" />
            <div className="answer-options">
              {questions[currentQuestion].options.map((option, index) => (
                <button key={index} onClick={() => handleAnswerClick(option)}>
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
        {!showScore && (
          <div className="user-name-input">
            <label htmlFor="userName">Enter your name:</label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizApp;
