import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(prev => !prev);

  return (
    <div className="relative min-h-screen pt-2">
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="bg-gray-900 text-white fixed top-4 left-4 z-50 h-9 w-9 shadow-lg hover:bg-gray-700 transition"
      >
        {isOpen ? '✕' : '☰ '}
      </button>

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40 shadow-lg`}
      >
        <div className="p-6">
          <h2 className="text-2xl pl-4 font-bold text-yellow-400 mb-6">🎮 Game Hub</h2>

          <nav className="flex flex-col gap-4">
            <SidebarLink to="/rock-paper-scissors" label="Rock Paper Scissors" />
            <SidebarLink to="/number-guess" label="Number Guess" />
            <SidebarLink to="/dice-roller" label="Dice Roller" />
            <SidebarLink to="/memory-match" label="Memory Match" />
            <SidebarLink to="/trivia-quiz" label="Trivia Quiz" />
            <SidebarLink to="/word-unscramble" label="Word Unscramble" />
            <SidebarLink to="/grid-puzzle" label="Grid Puzzle" />
            <SidebarLink to="/idle-clicker" label="Idle Clicker" />
            <SidebarLink to="/card-battle" label="Card Battle" />
            <SidebarLink to="/reaction-speed" label="Reaction Speed" />
          </nav>
        </div>
      </div>

      {/* Optional overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-30"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

const SidebarLink = ({ to, label }) => (
  <Link
    to={to}
    className="text-lg hover:text-yellow-300 transition"
    onClick={() => window.scrollTo(0, 0)}
  >
    {label}
  </Link>
);

export default SidebarMenu;
