import React, { useState, useEffect } from 'react';

const ReactionSpeed = () => {
  const [waiting, setWaiting] = useState(false);
  const [start, setStart] = useState(null);
  const [time, setTime] = useState(null);

  const startGame = () => {
    setTime(null);
    setWaiting(true);
    const delay = Math.random() * 2000 + 2000;
    setTimeout(() => {
      setStart(Date.now());
      setWaiting(false);
    }, delay);
  };

  const stopGame = () => {
    if (start) {
      setTime(Date.now() - start);
      setStart(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <h1 className="text-3xl font-bold mb-6">⚡ Reaction Speed</h1>
      <button
        onClick={start ? stopGame : startGame}
        className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600"
      >
        {start ? 'Click Now!' : waiting ? 'Wait...' : 'Start'}
      </button>
      {time && <p className="mt-4 text-xl">⏱️ Your reaction time: {time}ms</p>}
    </div>
  );
};

export default ReactionSpeed;
