import  { useState } from 'react';
import '../css/quiz.css';

const Quiz = () => {
  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'Berlin', isCorrect: false },
        { answerText: 'Madrid', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Lisbon', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is the CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the largest planet in our solar system?',
      answerOptions: [
        { answerText: 'Earth', isCorrect: false },
        { answerText: 'Mars', isCorrect: false },
        { answerText: 'Jupiter', isCorrect: true },
        { answerText: 'Saturn', isCorrect: false },
      ],
    },
    {
      questionText: 'What year was JavaScript created?',
      answerOptions: [
        { answerText: '1995', isCorrect: true },
        { answerText: '2005', isCorrect: false },
        { answerText: '2015', isCorrect: false },
        { answerText: '1990', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          Score: {score} out of {questions.length}
          <div className="=reset">
            <button className='resetBtn' onClick={handleResetQuiz}>Reset quiz</button>
          </div>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].questionText}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
