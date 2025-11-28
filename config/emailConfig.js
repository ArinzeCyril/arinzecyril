// Centralized email configuration
//
// Gmail Configuration (requires 2-Step Verification and App Password):
// CONTACT_EMAIL=your-contact-email@gmail.com
// EMAIL_SERVICE=gmail
// EMAIL_HOST=smtp.gmail.com
// EMAIL_PORT=587
// EMAIL_SECURE=false
// EMAIL_USER=your-email@gmail.com
// EMAIL_PASS=your-16-character-app-password
//
// Outlook/Hotmail Configuration:
// CONTACT_EMAIL=your-contact-email@hotmail.com
// EMAIL_SERVICE=hotmail
// EMAIL_HOST=smtp-mail.outlook.com
// EMAIL_PORT=587
// EMAIL_SECURE=false
// EMAIL_USER=your-email@hotmail.com
// EMAIL_PASS=your-password
//
// Yahoo Mail Configuration:
// CONTACT_EMAIL=your-contact-email@yahoo.com
// EMAIL_SERVICE=yahoo
// EMAIL_HOST=smtp.mail.yahoo.com
// EMAIL_PORT=587
// EMAIL_SECURE=true
// EMAIL_USER=your-email@yahoo.com
// EMAIL_PASS=your-password

export const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "Dev.ArinzeCyril@gmail.com"

// Email configuration for nodemailer
export const EMAIL_CONFIG = {
  // For production, these should be stored as environment variables
  service: process.env.EMAIL_SERVICE || 'gmail',
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT) || 587,
  secure: process.env.EMAIL_SECURE === 'true' || false,
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
};

export default {
  CONTACT_EMAIL,
  EMAIL_CONFIG
};