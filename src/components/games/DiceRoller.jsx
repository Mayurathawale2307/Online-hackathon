import React, { useState } from 'react';

const DiceRoller = () => {
  const [diceNumber, setDiceNumber] = useState(null);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    setRolling(true);
    setTimeout(() => {
      const random = Math.floor(Math.random() * 6) + 1;
      setDiceNumber(random);
      setRolling(false);
    }, 500); // simulate rolling delay
  };

  const getDiceEmoji = (number) => {
    const diceEmojis = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
    return diceEmojis[number - 1] || '';
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-yellow-100 to-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-extrabold text-purple-700 mb-6 animate-pulse">🎲 Dice Roller</h1>

      <div
        className={`text-[8rem] mb-6 transition-transform duration-300 ${
          rolling ? 'animate-bounce' : ''
        }`}
      >
        {diceNumber ? getDiceEmoji(diceNumber) : '🎲'}
      </div>

      <button
        onClick={rollDice}
        disabled={rolling}
        className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition disabled:opacity-50"
      >
        {rolling ? 'Rolling...' : 'Roll Dice'}
      </button>

      {diceNumber && !rolling && (
        <p className="mt-6 text-lg font-semibold text-gray-700">
          You rolled a <span className="text-indigo-700">{diceNumber}</span>!
        </p>
      )}
    </div>
  );
};

export default DiceRoller;
