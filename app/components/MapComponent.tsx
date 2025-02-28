import dynamic from 'next/dynamic';
import { FC, useEffect, useState } from 'react';
import L from 'leaflet';
import CameraMarker from './CameraMarker';
import Popup from './Popup';
import AuroraNotification from './AuroraNotification';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });

interface Camera {
  location: string;
  latitude: string;
  longitude: string;
  imageUrl: string;
  cameraUrl: string;
  author: string;
  authorUrl: string;
}

const MapComponent: FC = () => {
  const [cameras, setCameras] = useState<Camera[]>([]);
  const [cameraIcon, setCameraIcon] = useState<L.Icon | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string>('');

  useEffect(() => {
    const fetchCameras = async () => {
      try {
        const res = await fetch('/api/kamerat');
        const data = await res.json();
    
        const updatedCameras = data.map((camera: Camera) => ({
          ...camera,
          imageUrl: `${camera.imageUrl}?t=${Date.now()}`
        }));
    
        setCameras(updatedCameras);
      } catch (error) {
        console.error('Error fetching cameras:', error);
      }
    };
    
    fetchCameras();
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const icon = new L.Icon({
        iconUrl: '/img/camera-icon.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });
      setCameraIcon(icon);
    }
  }, []);

  const handleImageClick = (imageUrl: string, location: string) => {
    setSelectedImage(imageUrl);
    setSelectedLocation(location);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setSelectedLocation('');
  };

  return (
    <>
      {typeof window !== 'undefined' && (
        <MapContainer center={[64.00, 26.00]} zoom={6} style={{ height: '100vh', width: '100%' }} zoomControl={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {cameras.map((camera, idx) => (
            <CameraMarker 
              key={idx} 
              camera={camera} 
              cameraIcon={cameraIcon} 
              onImageClick={handleImageClick} 
            />
          ))}
        </MapContainer>
      )}
      {selectedImage && <Popup imageUrl={selectedImage} location={selectedLocation} onClose={handleCloseModal} />}
      <AuroraNotification />
    </>
  );
};

export default MapComponent;
