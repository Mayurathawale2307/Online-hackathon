import React, { useState } from 'react';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: "Mars",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "J.K. Rowling"],
    answer: "William Shakespeare",
  },
];

const TriviaQuiz = () => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[currentQIndex];

  const handleAnswer = (option) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);
    if (option === currentQuestion.answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQIndex + 1 < questions.length) {
      setCurrentQIndex(currentQIndex + 1);
      setSelectedOption('');
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQIndex(0);
    setSelectedOption('');
    setScore(0);
    setIsAnswered(false);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-purple-100 p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-xl w-full">
        <h1 className="text-3xl font-bold text-purple-700 text-center mb-6">🧠 Trivia Quiz</h1>

        {showResult ? (
          <div className="text-center">
            <p className="text-xl font-medium mb-4 text-gray-700">
              🎉 You scored <span className="font-bold text-purple-600">{score}</span> out of {questions.length}!
            </p>
            <button
              onClick={restartQuiz}
              className="mt-2 bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition"
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <>
            <p className="text-lg font-medium text-gray-800 mb-4">
              {currentQuestion.question}
            </p>
            <div className="grid grid-cols-1 gap-3 mb-6">
              {currentQuestion.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  className={`w-full px-4 py-2 rounded-md border text-left transition duration-200 ${
                    isAnswered
                      ? option === currentQuestion.answer
                        ? 'bg-green-500 text-white'
                        : option === selectedOption
                        ? 'bg-red-400 text-white'
                        : 'bg-gray-100 text-gray-600'
                      : 'hover:bg-gray-100 bg-white text-gray-800'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            {isAnswered && (
              <div className="text-center">
                <button
                  onClick={handleNext}
                  className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
                >
                  {currentQIndex + 1 < questions.length ? 'Next Question' : 'See Results'}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TriviaQuiz;
