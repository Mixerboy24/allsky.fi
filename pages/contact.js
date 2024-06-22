import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Contact.module.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [captcha, setCaptcha] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!captcha) {
            alert('Please complete the CAPTCHA');
            return;
        }

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...formData, captcha })
            });

            if (res.ok) {
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert('Error sending message.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Error sending message.');
        }
    };

    return (
        <div className="container">
            <Header />
            <main className={styles.main}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
                    </div>
                    <ReCAPTCHA
                        sitekey="your-site-key"
                        onChange={value => setCaptcha(value)}
                    />
                    <button type="submit">Submit</button>
                </form>
                <div className={styles.contactInfo}>
                    <p>Website contact: contact@allsky.fi</p>
                    <p>Webmaster: Atte Oksanen / Mixerboy24</p>
                    <p>Email: atte.oksanen@mixerboy24.fi</p>
                    <p>Website hosting: <a href="https://localghost.fi" target="_blank" rel="noopener noreferrer">LocalghostFI</a></p>
                    <h3>How to add a new camera to the Map:</h3>
                    <p>To add your camera to our map, please send the following details via email or create an issue on <a href="https://github.com/Mixerboy24/allsky.fi/issues">Github</a> and include the details:</p>
                    <pre>{`
    {
        "location": "Camera City",
        "latitude": "Camera Location",
        "longitude": "Camera Location",
        "imageUrl": "Camera jpg url",
        "cameraUrl": "Camera public site",
        "author": "Camera Owner",
        "authorUrl": "Author homepage"
    }
                    `}</pre>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
