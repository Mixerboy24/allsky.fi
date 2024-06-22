import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../styles/Layout.module.css';
import cameras from '../../public/cameras.json';

const CameraPage = () => {
  const router = useRouter();
  const { location } = router.query;
  const camera = cameras.find(cam => cam.location === location);

  if (!camera) {
    return <p>Camera not found</p>;
  }

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1>{camera.location}</h1>
        <img src={camera.imageUrl} alt={camera.location} className={styles.cameraImage} />
        <p>
          Author: <a href={`https://${camera.author.replace(/\s+/g, '').toLowerCase()}.fi`} target="_blank" rel="noopener noreferrer">
            {camera.author}
          </a>
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default CameraPage;
