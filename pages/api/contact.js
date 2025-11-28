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
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    });
  }
}