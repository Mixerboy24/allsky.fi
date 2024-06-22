import Link from 'next/link';
import styles from '../styles/Layout.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
