import React, { useState } from 'react';

const GridPuzzle = () => {
  const initial = [1, 2, 3, 4, 5, 6, 7, 8, null];
  const [tiles, setTiles] = useState(initial.sort(() => Math.random() - 0.5));

  const moveTile = (index) => {
    const empty = tiles.indexOf(null);
    const row = Math.floor(index / 3);
    const col = index % 3;
    const emptyRow = Math.floor(empty / 3);
    const emptyCol = empty % 3;

    const isAdjacent =
      (row === emptyRow && Math.abs(col - emptyCol) === 1) ||
      (col === emptyCol && Math.abs(row - emptyRow) === 1);

    if (isAdjacent) {
      const newTiles = [...tiles];
      [newTiles[index], newTiles[empty]] = [newTiles[empty], newTiles[index]];
      setTiles(newTiles);
    }
  };

  const isSolved = tiles.every((val, idx) => val === (idx < 8 ? idx + 1 : null));

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-6">🧩 Grid Puzzle</h1>

      <div className="grid grid-cols-3 gap-3 bg-white p-4 rounded-xl shadow-md">
        {tiles.map((val, i) => (
          <div
            key={i}
            onClick={() => moveTile(i)}
            className={`w-24 h-24 flex items-center justify-center text-2xl font-bold rounded-lg border-2 border-blue-300 transition-all duration-200 cursor-pointer ${
              val
                ? 'bg-blue-100 hover:bg-blue-200 text-blue-800'
                : 'bg-gray-300 cursor-default'
            }`}
          >
            {val}
          </div>
        ))}
      </div>

      {isSolved && (
        <p className="mt-6 text-xl text-green-600 font-semibold animate-bounce">
          🎉 Puzzle Solved!
        </p>
      )}
    </div>
  );
};

export default GridPuzzle;
