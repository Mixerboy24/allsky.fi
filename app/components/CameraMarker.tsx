import dynamic from 'next/dynamic';
import { FC } from 'react';
import L from 'leaflet';

const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

interface CameraProps {
  camera: {
    location: string;
    latitude: string;
    longitude: string;
    imageUrl: string;
    cameraUrl: string;
    author: string;
    authorUrl: string;
  };
  onImageClick: (imageUrl: string, location: string) => void;
  cameraIcon: L.Icon | null;
}

const CameraMarker: FC<CameraProps> = ({ camera, onImageClick, cameraIcon }) => {
  return (
    <Marker 
      position={[parseFloat(camera.latitude), parseFloat(camera.longitude)]} 
      icon={cameraIcon ? cameraIcon : undefined}
    >
      <Popup>
        <div style={{ textAlign: 'center' }}>
          <h3>
            <a href={camera.cameraUrl} target="_blank" rel="noopener noreferrer">
              {camera.location}
            </a>
          </h3>
          <img 
            src={camera.imageUrl} 
            alt={camera.location} 
            width="200" 
            style={{ cursor: 'pointer' }}
            onClick={() => onImageClick(camera.imageUrl, camera.location)}
          />
          <p>Author: <a href={camera.authorUrl} target="_blank" rel="noopener noreferrer">{camera.author}</a></p>
        </div>
      </Popup>
    </Marker>
  );
};

export default CameraMarker;
