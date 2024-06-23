import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Form submission logic with SMTP and reCAPTCHA
  };

  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Header />
      <div className={styles['contact-container']}>
        <div className={styles['contact-info']}>
          <h2>Contact Us</h2>
          <p>Website Contact: contact@allsky.fi</p>
          <p>Webmaster: Atte Oksanen / Mixerboy24</p>
          <p>Email: atte.oksanen@mixerboy24.fi</p>
          <p>Website hosting: LocalghostFI</p>
          <h3>How to add a new camera to the Map:</h3>
          <p>
            To add your camera to our map, please send the following details via
            email or create an issue on Github and include the details:
          </p>
          <pre>
            {`{
  "location": "Camera City",
  "latitude": "Camera Location",
  "longitude": "Camera Location",
  "imageUrl": "Camera jpg url",
  "cameraUrl": "Camera public site",
  "author": "Camera Owner",
  "authorUrl": "Author homepage"
}`}
          </pre>
        </div>
        <form className={styles['contact-form']} onSubmit={handleSubmit}>
          <h2>Contact Us</h2>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
