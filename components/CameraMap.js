import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

const CameraMap = () => {
    const [cameras, setCameras] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        fetch('/cameras.json')
            .then(response => response.json())
            .then(data => setCameras(data))
            .catch(error => console.error('Error loading camera data:', error));
    }, []);

    const icon = new L.Icon({
        iconUrl: '/camera-icon.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    const getCachedImageUrl = (url) => {
        return `${url}?_ts=${new Date().getTime()}`;
    };

    return (
        <div className="mapContainer">
            <MapContainer 
                center={[64.0, 26.0]} 
                zoom={6} 
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={false}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {cameras.map((camera, index) => (
                    camera.latitude && camera.longitude ? (
                        <Marker 
                            key={index} 
                            position={[camera.latitude, camera.longitude]}
                            icon={icon}
                        >
                            <Popup>
                                <h2>
                                    <a href={camera.cameraUrl} target="_blank" rel="noopener noreferrer">
                                        {camera.location}
                                    </a>
                                </h2>
                                <img 
                                    src={getCachedImageUrl(camera.imageUrl)} 
                                    alt={camera.location} 
                                    className="popupImage"
                                    onClick={() => handleImageClick(camera.imageUrl)}
                                />
                                <p>
                                    Author: 
                                    <a href={camera.authorUrl} target="_blank" rel="noopener noreferrer">
                                        {camera.author}
                                    </a>
                                </p>
                            </Popup>
                        </Marker>
                    ) : null
                ))}
            </MapContainer>

            {selectedImage && (
                <div className="modalOverlay">
                    <div style={{ position: 'relative' }}>
                        <span 
                            className="modalClose"
                            onClick={handleCloseModal}
                        >&times;</span>
                        <img 
                            src={getCachedImageUrl(selectedImage)} 
                            alt="Selected" 
                            className="modalImage"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CameraMap;
