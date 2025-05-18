import React, { useState } from 'react';

const choices = ['rock', 'paper', 'scissors'];
const emojis = {
  rock: '🪨',
  paper: '📄',
  scissors: '✂️',
};

const getResult = (player, computer) => {
  if (player === computer) return 'draw';
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'win';
  }
  return 'lose';
};

const RockPaperScissors = () => {
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);

  const handleClick = (choice) => {
    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    const gameResult = getResult(choice, compChoice);

    setPlayerChoice(choice);
    setComputerChoice(compChoice);
    setResult(gameResult);

    if (gameResult === 'win') setScore(score + 1);
    else if (gameResult === 'lose') setScore(score - 1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 to-white p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">✊ Rock Paper Scissors</h1>

        <div className="flex justify-center space-x-4 mb-6">
          {choices.map((choice) => (
            <button
              key={choice}
              onClick={() => handleClick(choice)}
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg transition"
            >
              {emojis[choice]} {choice.charAt(0).toUpperCase() + choice.slice(1)}
            </button>
          ))}
        </div>

        {result && (
          <div className="mt-6">
            <p className="text-lg text-gray-700 mb-2">
              You chose <strong>{emojis[playerChoice]}</strong>, Computer chose <strong>{emojis[computerChoice]}</strong>.
            </p>
            <p className={`text-2xl font-bold mb-2 ${result === 'win' ? 'text-green-600' : result === 'lose' ? 'text-red-600' : 'text-yellow-600'}`}>
              {result === 'win' && '🎉 You Win!'}
              {result === 'lose' && '😞 You Lose!'}
              {result === 'draw' && "😐 It's a Draw!"}
            </p>
            <p className="text-lg text-indigo-700 font-medium">Score: {score}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RockPaperScissors;
