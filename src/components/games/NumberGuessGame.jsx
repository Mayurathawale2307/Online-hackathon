import React, { useState } from 'react';

function NumberGuessGame() {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleGuess = () => {
    const numericGuess = Number(guess);
    if (!numericGuess || numericGuess < 1 || numericGuess > 100) {
      setMessage('⚠️ Enter a number between 1 and 100.');
      return;
    }

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (numericGuess === targetNumber) {
      setMessage(`🎉 Correct! You guessed it in ${newAttempts} tries.`);
    } else if (numericGuess < targetNumber) {
      setMessage('🔻 Too low. Try again!');
    } else {
      setMessage('🔺 Too high. Try again!');
    }
  };

  const handleRestart = () => {
    setTargetNumber(generateRandomNumber());
    setGuess('');
    setMessage('');
    setAttempts(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white p-6">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-extrabold text-blue-600 mb-4">
          🎯 Number Guessing Game
        </h2>
        <p className="mb-6 text-gray-700 text-lg">Guess a number between 1 and 100</p>
        
        <div className="flex gap-3 items-center justify-center mb-6">
          <input
            type="number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            className="w-2/3 px-4 py-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-center"
            placeholder="Enter your guess"
          />
          <button
            onClick={handleGuess}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Guess
          </button>
        </div>

        <p className="text-md font-medium text-gray-800 min-h-[2rem]">{message}</p>

        <button
          onClick={handleRestart}
          className="mt-4 text-blue-500 hover:underline text-sm"
        >
          🔄 Restart Game
        </button>
      </div>
    </div>
  );
}

export default NumberGuessGame;
