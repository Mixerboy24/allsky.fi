import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AuroraNotification from '../components/AuroraNotification';
import styles from '../styles/Layout.module.css';

const CameraMap = dynamic(() => import('../components/CameraMap'), { ssr: false });

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <AuroraNotification />
      <main className={styles.main}>
        <CameraMap />
      </main>
      <Footer />
    </div>
  );
}
