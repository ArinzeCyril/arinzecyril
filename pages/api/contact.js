import nodemailer from 'nodemailer';
import { EMAIL_CONFIG, CONTACT_EMAIL } from '../../config/emailConfig';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed' 
    });
  }

  try {
    const { name, email, contactEmail, canContactAtProvidedEmail, message } = req.body;
    
    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, email, and message are required fields' 
      });
    }
    
    // Email validation using a simple regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide a valid email address' 
      });
    }
    
    // If user specified a different contact email, validate it
    if (canContactAtProvidedEmail === 'no' && contactEmail) {
      if (!emailRegex.test(contactEmail)) {
        return res.status(400).json({ 
          success: false, 
          message: 'Please provide a valid contact email address' 
        });
      }
    }
    
    // Log environment variables for debugging (without exposing passwords)
    console.log('Email configuration check:');
    console.log('- CONTACT_EMAIL:', CONTACT_EMAIL);
    console.log('- EMAIL_CONFIG.service:', EMAIL_CONFIG.service);
    console.log('- EMAIL_CONFIG.host:', EMAIL_CONFIG.host);
    console.log('- EMAIL_CONFIG.port:', EMAIL_CONFIG.port);
    console.log('- EMAIL_CONFIG.secure:', EMAIL_CONFIG.secure);
    console.log('- EMAIL_CONFIG.auth.user:', EMAIL_CONFIG.auth.user ? 'SET' : 'NOT SET');
    console.log('- EMAIL_CONFIG.auth.pass:', EMAIL_CONFIG.auth.pass ? 'SET' : 'NOT SET');
    
    // Create transporter for nodemailer
    const transporter = nodemailer.createTransport({
      service: EMAIL_CONFIG.service,
      host: EMAIL_CONFIG.host,
      port: EMAIL_CONFIG.port,
      secure: EMAIL_CONFIG.secure,
      auth: {
        user: EMAIL_CONFIG.auth.user,
        pass: EMAIL_CONFIG.auth.pass
      }
    });
    
    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('SMTP server connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP server verification failed:', verifyError.message);
      console.error('Full error details:', verifyError);
      
      // Provide specific guidance based on common issues
      if (verifyError.message.includes('Username and Password not accepted') || 
          verifyError.code === 'EAUTH') {
        return res.status(500).json({ 
          success: false, 
          message: 'Authentication failed. For Gmail, you must use an App Password (not your regular password) with 2-Step Verification enabled. Visit https://myaccount.google.com/apppasswords to generate one. Alternatively, you can use a different email service like Outlook or Yahoo that may not require this setup.' 
        });
      } else if (verifyError.code === 'ECONNREFUSED') {
        return res.status(500).json({ 
          success: false, 
          message: 'Connection to email server refused. Please check your email configuration (host, port).' 
        });
      } else if (verifyError.code === 'ENOTFOUND') {
        return res.status(500).json({ 
          success: false, 
          message: 'Email server not found. Please check your email configuration (host).' 
        });
      } else {
        return res.status(500).json({ 
          success: false, 
          message: `Email server configuration error: ${verifyError.message}. Please check your email settings in the .env.local file.` 
        });
      }
    }
    
    // Prepare email content
    const contactPreference = canContactAtProvidedEmail === 'yes' 
      ? `Can contact at provided email (${email})` 
      : `Please contact at: ${contactEmail}`;
      
    const emailContent = `
      New Contact Form Submission
      
      Name: ${name}
      Email: ${email}
      Contact Preference: ${contactPreference}
      Message: ${message}
    `;
    
    // Send email
    await transporter.sendMail({
      from: `"Portfolio Website" <${EMAIL_CONFIG.auth.user}>`,
      to: CONTACT_EMAIL,
      subject: 'New Contact Form Submission',
      text: emailContent
    });
    
    res.status(200).json({ 
      success: true, 
      message: 'Thank you for your message! We will get back to you soon.' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    // Provide more specific error messages based on the error type
    if (error.code === 'EAUTH') {
      res.status(500).json({ 
        success: false, 
        message: 'Authentication failed. For Gmail, you must use an App Password (not your regular password) with 2-Step Verification enabled. Alternatively, you can use a different email service like Outlook or Yahoo.' 
      });
    } else if (error.code === 'ECONNREFUSED') {
      res.status(500).json({ 
        success: false, 
        message: 'Connection to email server refused. Please check email configuration.' 
      });
    } else if (error.code === 'ENOTFOUND') {
      res.status(500).json({ 
        success: false, 
        message: 'Email server not found. Please check email configuration.' 
      });
    } else {
      res.status(500).json({ 
        success: false, 
        message: `Failed to send message: ${error.message}. Please try again later.` 
      });
    }
  }
}