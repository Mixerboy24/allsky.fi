import useAuroraForecast from '../hooks/useAuroraForecast';
import styles from './AuroraNotification.module.css';

const AuroraNotification = () => {
    const { kpIndex, error } = useAuroraForecast();

    if (error) {
        return <div className={styles.notification}>{error}</div>;
    }

    if (kpIndex >= 4) { // Threshold for displaying the notification
        return (
            <div className={styles.notification}>
                Aurora activity expected! Kp index: {kpIndex}
            </div>
        );
    }

    return null;
};

export default AuroraNotification;
