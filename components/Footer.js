import styles from '../styles/Layout.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Developer: <a href="https://mixerboy24.fi" className={styles.link}>Mixerboy24</a>
      </p>
      <p>
        Hosted by: <a href="https://localghost.fi" className={styles.link}>LocalghostFI</a>
      </p>
    </footer>
  );
};

export default Footer;
