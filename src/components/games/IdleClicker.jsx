import React, { useState, useEffect } from 'react';

const IdleClicker = () => {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPoints((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-white p-6">
      <h1 className="text-4xl font-extrabold text-green-600 mb-6">🖱️ Idle Clicker</h1>

      <div className="bg-white shadow-xl p-8 rounded-xl text-center">
        <p className="text-2xl font-semibold text-gray-800 mb-2">
          Points: <span className="text-green-600">{points}</span>
        </p>

        <button
          onClick={() => setPoints(points + 10)}
          className="mt-4 bg-green-500 hover:bg-green-600 transition text-white text-lg font-medium px-6 py-3 rounded-lg shadow-md"
        >
          Click for +10 points
        </button>
      </div>
    </div>
  );
};

export default IdleClicker;

