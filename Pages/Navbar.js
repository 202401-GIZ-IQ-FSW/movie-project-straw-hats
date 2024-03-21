
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <Link href="/">
            <a className={styles.navbarLink}>Home</a>
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/about">
            <a className={styles.navbarLink}>About</a>
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/contact">
            <a className={styles.navbarLink}>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
