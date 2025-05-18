import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const games = [
    { title: "Rock Paper Scissors", image: "/images/rock-paper.jpg", link: "/rock-paper-scissors" },
    { title: "Number Guess", image: "/images/number-guess.jpg", link: "/number-guess" },
    { title: "Dice Roller", image: "/images/dice.jpg", link: "/dice-roller" },
    { title: "Memory Match", image: "/images/memory.jpg", link: "/memory-match" },
    { title: "Trivia Quiz", image: "/images/trivia.jpg", link: "/trivia-quiz" },
    { title: "Word Unscramble", image: "/images/unscramble.jpg", link: "/word-unscramble" },
    { title: "Grid Puzzle", image: "/images/grid.jpg", link: "/grid-puzzle" },
    { title: "Idle Clicker", image: "/images/clicker.jpg", link: "/idle-clicker" },
    { title: "Card Battle", image: "/images/cards.jpg", link: "/card-battle" },
    { title: "Reaction Speed", image: "/images/reaction.jpg", link: "/reaction-speed" },
  ];

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-grow px-6 py-12">
        {/* Hero Animation Section */}
        <section className="text-center mb-16" data-aos="zoom-in">
          <h1 className="text-5xl font-extrabold text-indigo-700 mb-4">🎮 Welcome to Game Hub</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Dive into a world of interactive games built with React! Boost your logic, speed, and memory while having fun.
          </p>
        </section>

        {/* Info Section */}
        <section className="mb-16" data-aos="fade-up">
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6 text-gray-800">
            <Feature text="🧠 Rock-paper-scissors game vs computer with basic outcome logic." />
            <Feature text="🎯 Number guessing game with hints and win message." />
            <Feature text="🎲 Dice roller with image output and animation." />
            <Feature text="🃏 Memory matching game with score tracker and level up." />
            <Feature text="⏱ Trivia quiz with timed rounds and score summary." />
            <Feature text="🔤 Word unscramble puzzle with hint button and points." />
            <Feature text="🧩 Grid-based puzzle game with tile state and win detection." />
            <Feature text="🔥 Idle clicker with upgrades and click/second logic." />
            <Feature text="⚔️ Card battle game with health bars and turn logic." />
            <Feature text="⚡ Reaction speed game with ghost replay of top score." />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-indigo-700 text-white py-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Game Hub. All rights reserved.</p>
        <p className="text-xs mt-1">Made with 💙 using React, Tailwind CSS & AOS</p>
      </footer>
    </div>
  );
};

const Feature = ({ text }) => (
  <div className="bg-white shadow-md p-4 rounded-lg hover:shadow-xl transition">
    {text}
  </div>
);

export default Home;
