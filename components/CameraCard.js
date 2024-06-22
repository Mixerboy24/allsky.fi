import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/CameraCard.module.css';

const CameraCard = ({ camera }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.card}>
      <h2>
        <a href={camera.cameraUrl} target="_blank" rel="noopener noreferrer">{camera.location}</a>
      </h2>
      <div onClick={handleOpenModal}>
        <img src={camera.imageUrl} alt={camera.location} className={styles.image} />
      </div>
      <p>
        Author: <a href={camera.authorUrl} target="_blank" rel="noopener noreferrer">
          {camera.author}
        </a>
      </p>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={handleCloseModal}>&times;</span>
            <img src={camera.imageUrl} alt={camera.location} className={styles.modalImage} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CameraCard;
