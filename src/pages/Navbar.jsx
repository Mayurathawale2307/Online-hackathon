import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        {/* Brand / Logo */}
        <Link to="/" className="text-2xl font-bold text-yellow-400">
          🎮 Game Hub
        </Link>

        {/* Always visible navigation links */}
        <div className="flex flex-col sm:flex-row gap-4 text-center sm:text-left">
          <Link to="/" className="hover:text-yellow-300 text-lg">Home</Link>
          <Link to="/about" className="hover:text-yellow-300 text-lg">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
