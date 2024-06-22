import axios from 'axios';
import nodemailer from 'nodemailer';
import config from '../../config.json';

export default async function handler(req, res) {
  const { name, email, message, recaptcha } = req.body;

  if (!name || !email || !message || !recaptcha) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  try {
    const recaptchaResponse = await axios.post(`https://www.google.com/recaptcha/api/siteverify`, null, {
      params: {
        secret: config.recaptcha.secretKey,
        response: recaptcha
      }
    });

    const { success } = recaptchaResponse.data;

    if (success) {
      // Konfiguroi Nodemailer käyttämään custom SMTP-palvelinta
      const transporter = nodemailer.createTransport(config.smtp);

      // Sähköpostin tiedot
      const mailOptions = {
        from: email,
        to: 'contact@allsky.fi',
        subject: `New message from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Message: ${message}
        `
      };

      // Lähetä sähköposti
      await transporter.sendMail(mailOptions);

      return res.status(200).json({ success: true, message: 'Message sent successfully' });
    } else {
      return res.status(400).json({ success: false, message: 'Captcha verification failed' });
    }
  } catch (error) {
    console.error('Error verifying reCAPTCHA or sending email:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
}
