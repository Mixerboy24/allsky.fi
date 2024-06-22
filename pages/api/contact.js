import nodemailer from 'nodemailer';

const contact = async (req, res) => {
    if (req.method === 'POST') {
        const { name, email, message, captcha } = req.body;

        // Verify CAPTCHA
        const secretKey = process.env.RECAPTCHA_SECRET_KEY;
        const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}`;

        const captchaResponse = await fetch(verificationUrl, { method: 'POST' });
        const captchaData = await captchaResponse.json();

        if (!captchaData.success) {
            return res.status(400).json({ error: 'CAPTCHA verification failed' });
        }

        // Create a transporter object using SMTP server details
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        try {
            await transporter.sendMail({
                from: email, // Use the email from the form
                to: 'contact@allsky.fi',
                subject: `New contact form submission from ${name}`,
                text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
            });
            res.status(200).json({ success: 'Message sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Error sending email' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};

export default contact;
