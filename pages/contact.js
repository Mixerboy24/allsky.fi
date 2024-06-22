import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from '../styles/Layout.module.css';  // Import global styles

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic
    };

    return (
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
                onChange={(value) => console.log('Captcha value:', value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Contact;
