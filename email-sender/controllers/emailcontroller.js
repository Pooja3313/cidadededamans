const nodemailer = require("nodemailer");

exports.sendEmail = async (req, res) => {
  const { phone } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Subscription Form" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: "New Subscription",
      html: `
        <h3>New Phone Subscription</h3>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
};

exports.sendContactForm = async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: subject,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    res.status(200).json({ message: "Contact form sent successfully" });
  } catch (error) {
    console.error("Contact email error:", error);
    res.status(500).json({ error: "Failed to send contact form" });
  }
};

exports.sendReview = async (req, res) => {
  const { rating, title, review, name, email } = req.body;
  console.log(req.body);

  try {
    const transporter = require("nodemailer").createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Review Submission - ${title}`,
      html: `
        <h2>New Review Received</h2>
        <p><strong>Rating:</strong> ${rating} ?</p>
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Review:</strong><br/>${review}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    res.status(200).json({ message: "Review sent successfully!" });
  } catch (error) {
    console.error("Review email error:", error);
    res.status(500).json({ error: "Failed to send review." });
  }
};

