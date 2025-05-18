import React, { useState, useEffect } from 'react';

const CARD_EMOJIS = ['🍕', '🍔', '🍟', '🌮', '🍩', '🍦'];

function shuffleArray(array) {
  return [...array, ...array] // duplicate for pairs
    .sort(() => Math.random() - 0.5)
    .map((emoji, index) => ({
      id: index,
      emoji,
      isFlipped: false,
      isMatched: false,
    }));
}

const MemoryMatch = () => {
  const [cards, setCards] = useState(shuffleArray(CARD_EMOJIS));
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [isChecking, setIsChecking] = useState(false);
  const [matchedCount, setMatchedCount] = useState(0);

  const handleCardClick = (card) => {
    if (isChecking || card.isFlipped || card.isMatched) return;

    const flippedCard = { ...card, isFlipped: true };
    const newCards = cards.map((c) =>
      c.id === card.id ? flippedCard : c
    );

    setCards(newCards);

    if (!firstCard) {
      setFirstCard(flippedCard);
    } else {
      setSecondCard(flippedCard);
      setIsChecking(true);
    }
  };

  useEffect(() => {
    if (firstCard && secondCard) {
      if (firstCard.emoji === secondCard.emoji) {
        setCards((prev) =>
          prev.map((card) =>
            card.emoji === firstCard.emoji
              ? { ...card, isMatched: true }
              : card
          )
        );
        setMatchedCount((count) => count + 1);
        resetTurn();
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) =>
              card.id === firstCard.id || card.id === secondCard.id
                ? { ...card, isFlipped: false }
                : card
            )
          );
          resetTurn();
        }, 800);
      }
    }
  }, [firstCard, secondCard]);

  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setIsChecking(false);
  };

  const restartGame = () => {
    setCards(shuffleArray(CARD_EMOJIS));
    setFirstCard(null);
    setSecondCard(null);
    setIsChecking(false);
    setMatchedCount(0);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 to-white p-6">
      <h1 className="text-4xl font-extrabold text-yellow-500 mb-6">🧠 Memory Match</h1>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mb-6">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card)}
            className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-2xl sm:text-3xl font-semibold cursor-pointer rounded-lg shadow-md transition-transform duration-300 ${
              card.isFlipped || card.isMatched ? 'bg-yellow-300' : 'bg-gray-300'
            } hover:scale-105`}
          >
            {(card.isFlipped || card.isMatched) ? card.emoji : '❓'}
          </div>
        ))}
      </div>

      <button
        onClick={restartGame}
        className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition"
      >
        🔁 Restart Game
      </button>

      {matchedCount === CARD_EMOJIS.length && (
        <p className="mt-6 text-xl font-semibold text-green-600 animate-bounce">
          🎉 You matched all cards!
        </p>
      )}
    </div>
  );
};

export default MemoryMatch;
