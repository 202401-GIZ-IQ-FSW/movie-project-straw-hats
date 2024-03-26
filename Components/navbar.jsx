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
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-6">
        <ul className="flex space-x-12">
          <li><a className="hover:text-gray-200" href="#">Home</a></li>
          <DropdownCategory
            category="Movies"
            isOpen={isMoviesDropdownOpen}
            onOpen={openMoviesDropdown}
            onClose={closeMoviesDropdown}
          >
            <ul>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Action</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Comedy</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Drama</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Thriller</a></li>
            </ul>
          </DropdownCategory>
          <DropdownCategory
            category="TV Shows"
            isOpen={isTvShowsDropdownOpen}
            onOpen={openTvShowsDropdown}
            onClose={closeTvShowsDropdown}
          >
            <ul>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Sci-Fi</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Fantasy</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Crime</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Horror</a></li>
            </ul>
          </DropdownCategory>
          <DropdownCategory
            category="Actors"
            isOpen={isActorsDropdownOpen}
            onOpen={openActorsDropdown}
            onClose={closeActorsDropdown}
          >
            <ul>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Action</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Comedy</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Drama</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Thriller</a></li>
            </ul>
          </DropdownCategory>
        </ul>
      </div>
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
