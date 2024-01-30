import React, { Component } from 'react';
import axios from 'axios';
import Header from '../component/quizheader';

class QuizApp extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isLoggedIn: false,
      id: "",
      post_id: "",
      config: {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      },
      questions: [
        {
          question: ' What does the term "online privacy" mean?',
          options: ['(A) Sharing everything online',
           '(B) Keeping personal information secret and safe',
            '(C) Asking for likes and comments on social media', 
            '(D) Deleting all online accounts'],
          correctAnswer: '(B) Keeping personal information secret and safe',
        },
        {
          question: ' What should you do if you receive a suspicious email or message?',
          options: ['(A) Click on the links or download attachments',
           '(B) Reply with your personal information',
            '(C) Ignore it', 
            '(D) Report it to a trusted adult'],
          correctAnswer: '(D) Report it to a trusted adult',
        },
        {
          question: ' What should you do if a stranger online asks for your personal information?',
          options: ['(A) Share it with them',
           '(B) Ignore them',
            '(C) Ask a friend for advice', 
            '(D) Tell them everything'],
          correctAnswer: '(B) Ignore them',
        },
        {
          question: ' Which of the following is a safe way to share information online?',
          options: ['(A) Post everything on social media',
           '(B) Share only with close friends',
            '(C) Share with strangers', 
            '(D) Share with everyone you know'],
          correctAnswer: '(B) Share only with close friends',
        },
        {
          question: ' What does the term "Phishing" mean in the context of cybersecurity?',
          options: ['(A) A way to catch fish',
           '(B) A type of computer virus',
            '(C) Trying to trick someone into giving away their sensitive information', 
            '(D) A type of online game'],
          correctAnswer: '(C) Trying to trick someone into giving away their sensitive information',
        },
        {
          question: ' What is a strong and secure password?',
          options: ['(A) Password123',
           '(B) YourName123',
            '(C) 123456', 
            '(D) P@ssw0rd!'],
          correctAnswer: '(D) P@ssw0rd!',
        },
        {
          question: ' Why is it important to log out of your accounts when you are done using them?',
          options: ['(A) To save your progress',
           '(B) To protect your personal information',
            '(C) To show you are done', 
            '(D) Logging out is not necessary'],
          correctAnswer: '(B) To protect your personal information',
        },

      ],
      currentQuestion: 0,
      score: 0,
      showScore: false,
    };
  
    if (this.props.post) {
      this.setState({
        id: this.props.post.user_id?.id || "",
        post_id: this.props.post._id || ""
      });
    }
  
    console.log(this.props.post);
  }
  handleAnswerClick = (selectedOption) => {
    const { currentQuestion, score, questions } = this.state;

    if (selectedOption === questions[currentQuestion].correctAnswer) {
      this.setState({
        score: score + 1,
      });
    }

    if (currentQuestion < questions.length - 1) {
      this.setState({
        currentQuestion: currentQuestion + 1,
      });
    } else {
      this.setState({
        showScore: true,
      });
    }
  };

  restartQuiz = () => {
    this.setState({
      currentQuestion: 0,
      score: 0,
      showScore: false,
    });
  };

  componentDidMount() {
    axios.get('http://localhost:3000/logincheck', this.state.config)
      .then((response) => {
        this.setState({
          user: response.data,
          id: response.data._id
        });
      })
      .catch((error) => {
        console.error('Error checking login status:', error);
        // Handle error or redirect to login page
      });
  }
  
  saveScore = (e) => {
    e.preventDefault();
    
    // Make sure id is available before proceeding
    const id = this.state.id;
  
    if (!id) {
      console.error('User ID is undefined. Cannot save score.');
      return;
    }
  
    const data = {
      user_id: id,
      score: this.state.score,
      post_id: this.state.post_id
    };
  
    axios.post('http://localhost:3000/quiz', data, this.state.config)
      .then(response => {
        console.log(response.data.successmsg);
        this.setState({
          success: response.data.successmsg,
        });
        setTimeout(function () {
          window.location.reload();
        }, 1000);
      })
      .catch(error => {
        this.setState({
          error: "Something went wrong. Try again!"
        });
        console.log(error.response.data.errmsg);
      });
  };
  
 

  render() {
    const { currentQuestion, score, showScore, questions, } = this.state;

    return (
      <div>
        <Header />
        <div className="quiz-container">
          {showScore ? (
            <div className="score-section">
              <img src="../img/ccc.png" alt="" className="imgcons" />
              <h1 className="score">{score}</h1>
              <div className="scorebox">
                <h2>Your Score: {score} out of {questions.length}</h2>
                <button className="restart" onClick={this.restartQuiz}>
                  Restart Quiz
                </button>
                <button className="savescore" onClick={this.saveScore}>
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
                  <button key={index} onClick={() => this.handleAnswerClick(option)}>
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
       
        </div>
      </div>
    );
  }
}

export default QuizApp;