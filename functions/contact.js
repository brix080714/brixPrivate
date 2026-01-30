// Netlify Function to handle form submissions and send email notification
// This function is triggered when the contact form is submitted

const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    // Parse form data
    const params = new URLSearchParams(event.body);
    const name = params.get('name');
    const email = params.get('email');
    const subject = params.get('subject');
    const message = params.get('message');
    const botField = params.get('bot-field');

    // Honeypot check - if bot-field is filled, it's spam
    if (botField) {
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true }) // Pretend to accept spam
      };
    }

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Check for Gmail SMTP credentials in environment variables
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'brixbriongos14@gmail.com';

    // If Gmail credentials are not set, just log and return success
    // (Netlify Forms will still capture the submission in the dashboard)
    if (!gmailUser || !gmailPass) {
      console.log('Gmail credentials not configured. Submission will be available in Netlify Forms dashboard.');
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, note: 'Check Netlify dashboard for submissions' })
      };
    }

    // Create transporter for sending email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass
      }
    });

    // Email to site owner
    const ownerMailOptions = {
      from: gmailUser,
      to: recipientEmail,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    // Send email to site owner
    await transporter.sendMail(ownerMailOptions);

    // Auto-reply email to user
    const userMailOptions = {
      from: gmailUser,
      to: email,
      subject: 'Thank you for contacting me',
      html: `
        <h2>Thank You</h2>
        <p>Hi ${name},</p>
        <p>Thank you for reaching out. I've received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>Brix Briongos</p>
      `
    };

    // Send auto-reply to user
    await transporter.sendMail(userMailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Form submitted successfully' })
    };

  } catch (error) {
    console.error('Error processing form:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to process form submission', details: error.message })
    };
  }
};
