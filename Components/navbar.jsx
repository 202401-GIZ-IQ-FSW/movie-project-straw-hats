import React, { useState } from 'react';

const Navbar = () => {
  const [isMoviesDropdownOpen, setIsMoviesDropdownOpen] = useState(false);
  const [isTvShowsDropdownOpen, setIsTvShowsDropdownOpen] = useState(false);
  const [isActorsDropdownOpen, setIsActorsDropdownOpen] = useState(false);

  const openMoviesDropdown = () => {
    setIsMoviesDropdownOpen(true);
  };

  const closeMoviesDropdown = () => {
    setIsMoviesDropdownOpen(false);
  };

  const openTvShowsDropdown = () => {
    setIsTvShowsDropdownOpen(true);
  };

  const closeTvShowsDropdown = () => {
    setIsTvShowsDropdownOpen(false);
  };

  const openActorsDropdown = () => {
    setIsActorsDropdownOpen(true);
  };

  const closeActorsDropdown = () => {
    setIsActorsDropdownOpen(false);
  };

  return (
    <nav className="bg-gray-900 text-white flex justify-between items-center px-4 py-6">
      <ul className="flex space-x-12">
        <li><a className="hover:text-gray-200" href="#">Home</a></li>
        <DropdownCategory
          category="Movies"
          isOpen={isMoviesDropdownOpen}
          onOpen={openMoviesDropdown}
          onClose={closeMoviesDropdown}
        >
        </DropdownCategory>
        <DropdownCategory
          category="TV Shows"
          isOpen={isTvShowsDropdownOpen}
          onOpen={openTvShowsDropdown}
          onClose={closeTvShowsDropdown}
        >
        </DropdownCategory>
        <DropdownCategory
          category="Actors"
          isOpen={isActorsDropdownOpen}
          onOpen={openActorsDropdown}
          onClose={closeActorsDropdown}
        >
        </DropdownCategory>
      </ul>
      <img src="/Users/rafeefthamer/Development/code/Front-End-Project/movie-project-straw-hats/Components/Straw-Hat-Logo.png" alt="Logo" className="h-8" />
    </nav>
  );
};

const DropdownCategory = ({ category, isOpen, onOpen, onClose, children }) => {
  return (
    <li className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <a className="hover:text-gray-200" href="#">{category}</a>
      {isOpen && (
        <div className="absolute mt-2 bg-white border border-gray-300 rounded shadow-md" style={{ left: "0", top: "100%" }} onMouseEnter={onOpen} onMouseLeave={onClose}>
          {children}
        </div>
      )}
    </li>
  );
};

export default Navbar;
