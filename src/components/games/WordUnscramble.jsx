import React, { useState, useEffect } from 'react';

const words = ['planet', 'python', 'react', 'guitar', 'memory'];

const shuffleWord = (word) => word.split('').sort(() => Math.random() - 0.5).join('');

const WordUnscramble = () => {
  const [original, setOriginal] = useState('');
  const [scrambled, setScrambled] = useState('');
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);

  const generateWord = () => {
    const word = words[Math.floor(Math.random() * words.length)];
    setOriginal(word);
    setScrambled(shuffleWord(word));
    setGuess('');
    setResult('');
    setShowAnswer(false);
  };

  useEffect(() => {
    generateWord();
  }, []);

  const checkAnswer = () => {
    if (guess.toLowerCase() === original) {
      setResult('✅ Correct!');
      setShowAnswer(true);
    } else {
      setResult('❌ Try Again!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-pink-100 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-pink-600 mb-6">🔀 Word Unscramble</h1>

        <p className="text-xl font-mono text-gray-700 mb-4">
          Unscramble this word: <span className="font-semibold text-blue-600">{scrambled}</span>
        </p>

        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Type your guess"
          className="w-full border rounded-md px-4 py-2 mb-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={checkAnswer}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition mb-3"
        >
          Submit
        </button>

        {result && (
          <p className={`text-lg font-medium mt-2 ${
            result.includes('Correct') ? 'text-green-600' : 'text-red-500'
          }`}>
            {result}
          </p>
        )}

        {showAnswer && (
          <button
            onClick={generateWord}
            className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
          >
            Next Word
          </button>
        )}
      </div>
    </div>
  );
};

export default WordUnscramble;
