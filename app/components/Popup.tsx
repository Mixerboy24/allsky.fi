import { FC } from 'react';

interface PopupProps {
  imageUrl: string;
  location: string;
  onClose: () => void;
}

const Popup: FC<PopupProps> = ({ imageUrl, location, onClose }) => {
  return (
    <div style={modalOverlayStyle}>
      <div style={modalContentStyle}>
        <span style={closeButtonStyle} onClick={onClose}>&times;</span>
        <h3 style={modalTitleStyle}>
          <strong>{location}</strong> {/* Boldaa location-teksti */}
        </h3>
        <img
          src={imageUrl}
          alt="Larger view"
          style={modalImageStyle}
        />
      </div>
    </div>
  );
};

// Tyylit
const modalOverlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalContentStyle: React.CSSProperties = {
  position: 'relative',
  maxWidth: '90%',
  maxHeight: '90%',
  overflow: 'hidden',
};

const closeButtonStyle: React.CSSProperties = {
  position: 'absolute',
  top: 10,
  right: 10,
  color: 'white',
  fontSize: '30px',
  cursor: 'pointer',
};

const modalTitleStyle: React.CSSProperties = {
  color: 'white',
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center',
  margin: '10px 0',
};

const modalImageStyle: React.CSSProperties = {
  maxWidth: '90%',
  maxHeight: '80vh',
  display: 'block',
  margin: '0 auto',
};

export default Popup;
