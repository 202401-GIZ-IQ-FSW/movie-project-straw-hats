// Navbar.js

import React from 'react';
import styles from './navbar.module.css'; // Import CSS module

const Navbar = () => {
  return (
    <nav className={styles.navbar}> {/* Apply navbar class from CSS module */}
      <ul className={styles.navbarList}> {/* Apply navbarList class from CSS module */}
        <li className={styles.navbarItem}> {/* Apply navbarItem class from CSS module */}
          <a href="/" className={styles.navbarLink}>Home</a> {/* Apply navbarLink class from CSS module */}
        </li>
        <li className={`${styles.navbarItem} ${styles.dropdown}`}> {/* Apply dropdown class from CSS module */}
          <a href="#" className={styles.navbarLink}>Genres</a> {/* Apply navbarLink class from CSS module */}
          <div className={styles.dropdownContent}> {/* Apply dropdownContent class from CSS module */}
            <a href="#" className={styles.dropdownItem}>Action</a> {/* Apply dropdownItem class from CSS module */}
            <a href="#" className={styles.dropdownItem}>Comedy</a> 
            <a href="#" className={styles.dropdownItem}>Drama</a> 
            <a href="#" className={styles.dropdownItem}>Kids</a> 


            {/* Add more dropdown items as needed */}
          </div>
        </li>
        {/* Add more list items for other navigation links with dropdowns */}
      </ul>
    </nav>
  );
};

export default Navbar;
