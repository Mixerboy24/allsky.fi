import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AuroraNotification from '../components/AuroraNotification';

const CameraMap = dynamic(() => import('../components/CameraMap'), { ssr: false });

export default function Home() {
  return (
    <div className="container">
      <Header />
      <AuroraNotification />
      <main>
        <div className="mapContainer">
          <CameraMap />
        </div>
      </main>
      <Footer />
    </div>
  );
}
