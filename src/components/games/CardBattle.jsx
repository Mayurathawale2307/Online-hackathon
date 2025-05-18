import React, { useState } from 'react';

const CardBattle = () => {
  const [player, setPlayer] = useState(null);
  const [cpu, setCpu] = useState(null);
  const [result, setResult] = useState('');

  const drawCard = () => Math.floor(Math.random() * 13) + 1;

  const battle = () => {
    const p = drawCard();
    const c = drawCard();
    setPlayer(p);
    setCpu(c);
    if (p > c) setResult('🎉 You Win!');
    else if (p < c) setResult('😢 You Lose!');
    else setResult('🤝 Draw!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-indigo-100 to-white flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-4xl font-extrabold text-purple-700 mb-8 animate-pulse">⚔️ Card Battle</h1>

      <div className="flex gap-10 mb-8">
        {/* Player Card */}
        <Card label="You" value={player} color="from-pink-400 to-red-500" />
        {/* CPU Card */}
        <Card label="CPU" value={cpu} color="from-blue-400 to-indigo-500" />
      </div>

      <button
        onClick={battle}
        className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition duration-300"
      >
        Draw Cards
      </button>

      {result && (
        <p className="mt-6 text-2xl font-semibold text-gray-800 transition duration-500">{result}</p>
      )}
    </div>
  );
};

const Card = ({ label, value, color }) => (
  <div className="flex flex-col items-center">
    <p className="mb-2 font-medium text-lg text-gray-700">{label}</p>
    <div
      className={`w-32 h-48 bg-gradient-to-br ${color} rounded-xl shadow-xl flex items-center justify-center text-white text-4xl font-bold transition-all duration-300 transform hover:scale-105`}
    >
      {value !== null ? value : "?"}
    </div>
  </div>
);

export default CardBattle;
