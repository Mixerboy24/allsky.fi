import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message, recaptchaValue } = req.body;

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaValue}`, {
      method: 'POST',
    });
    const data = await response.json();

    if (data.success) {
      const mailOptions = {
        from: email,
        to: 'contact@allsky.fi',
        subject: `New message from ${name}`,
        text: message,
      };

      try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Message sent successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Error sending email' });
      }
    } else {
      res.status(400).json({ error: 'reCAPTCHA verification failed' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
