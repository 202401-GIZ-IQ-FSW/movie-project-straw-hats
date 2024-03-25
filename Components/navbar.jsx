import React, { useState } from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
  const [isGenresDropdownOpen, setIsGenresDropdownOpen] = useState(false);
  const [isMoviesDropdownOpen, setIsMoviesDropdownOpen] = useState(false);

  const toggleGenresDropdown = () => {
    setIsGenresDropdownOpen(!isGenresDropdownOpen);
  };

  const toggleMoviesDropdown = () => {
    setIsMoviesDropdownOpen(!isMoviesDropdownOpen);
  };

  return (
    <nav className={`${styles.navbar}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-white font-bold">Straw Hats</span>
          </div>
          {/* Navigation Links */}
          <div className="hidden md:block">
            <ul className={`${styles.navbarList}`}>
              {/* Search Button */}
              <li className={`${styles.navbarItem}`}>
                <button className={`${styles.navbarLink}`}>Find Something to Watch</button>
              </li>
              {/* Genres Dropdown */}
              <li className={`${styles.navbarItem} ${styles.dropdown}`} onMouseEnter={toggleGenresDropdown} onMouseLeave={toggleGenresDropdown}>
                {/* Apply the custom class to the dropdown button */}
                <button className={`${styles.navbarLink} ${styles.dropdownButton}`}>Genres</button>
                {/* Genres Dropdown Content */}
                {isGenresDropdownOpen && (
                  <div className={`${styles.dropdownContent}`}>
                    {/* Genres Dropdown Items */}
                    <a href="#" className={`${styles.dropdownItem}`}>Action</a>
                    <a href="#" className={`${styles.dropdownItem}`}>Comedy</a>
                    <a href="#" className={`${styles.dropdownItem}`}>Drama</a>
                    <a href="#" className={`${styles.dropdownItem}`}>Thriller</a>
                    {/* Add more genre links as needed */}
                  </div>
                )}
              </li>
              {/* Movies Dropdown */}
              <li className={`${styles.navbarItem} ${styles.dropdown}`} onMouseEnter={toggleMoviesDropdown} onMouseLeave={toggleMoviesDropdown}>
                {/* Apply the custom class to the dropdown button */}
                <button className={`${styles.navbarLink} ${styles.dropdownButton}`}>Movies</button>
                {/* Movies Dropdown Content */}
                {isMoviesDropdownOpen && (
                  <div className={`${styles.dropdownContent}`}>
                    {/* Movies Dropdown Items */}
                    <a href="#" className={`${styles.dropdownItem}`}>Action</a>
                    <a href="#" className={`${styles.dropdownItem}`}>Comedy</a>
                    <a href="#" className={`${styles.dropdownItem}`}>Drama</a>
                    <a href="#" className={`${styles.dropdownItem}`}>Thriller</a>
                    {/* Add more movie links as needed */}
                  </div>
                )}
              </li>
              {/* Add more navigation links and dropdowns as needed */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
