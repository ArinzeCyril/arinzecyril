// Centralized email configuration
export const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'arinzecyril1234@gmail.com';

// Email configuration for nodemailer
export const EMAIL_CONFIG = {
  // For production, these should be stored as environment variables
  service: 'gmail', // You can change this to your email service
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
};

export default {
  CONTACT_EMAIL,
  EMAIL_CONFIG
};