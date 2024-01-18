// src/App.js

import React from 'react';
import Quiz from '../component/quiz';

const Quiz1 = () => {
  const questions = [
    {
      question: 'Why is it important to log out of your accounts when you are done using them?',
      options: [
        { text: 'To save your progress', isCorrect: false },
        { text: 'To protect your personal information', isCorrect: true },
        { text: ' To show you are done', isCorrect: false },
        { text: 'Logging out is not necessary', isCorrect: false },
      ],
    },
    {
        question: 'What does the term "online privacy" mean?What is the capital of France?',
        options: [
          { text: 'Sharing everything online', isCorrect: false },
          { text: ' Keeping personal information secret and safe', isCorrect: true },
          { text: 'Asking for likes and comments on social media', isCorrect: false },
          { text: 'Deleting all online accounts', isCorrect: false },
        ],
      },
    // Add more questions as needed
  ];

  return (
    <div className="app">
      <h1>Quiz</h1>
      <Quiz questions={questions} />
    </div>
  );
};

export default Quiz1;
