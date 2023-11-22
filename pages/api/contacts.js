// pages/api/contacts.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, country, email } = req.body;

      // Создаем транспорт для отправки почты (замените данными вашего почтового сервера)
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // Хост для Gmail SMTP
        port: 465, // Порт для SSL
        secure: true, // Использовать SSL
        auth: {
          user: 'academgo.info@gmail.com', // Ваш адрес электронной почты Gmail
          pass: 'qlsyftzkktpyypgj', // Ваш пароль приложения Gmail
        },
      });

      // Опции для отправки письма
      const mailOptions = {
        from: email,
        to: 'academgo.info@gmail.com',
        subject: `Новое сообщение от ${name} - Academgo`,
        text: `Contact Details:\nName: ${name}\nCountry: ${country}\nEmail: ${email}`,
      };

      // Отправляем письмо
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}