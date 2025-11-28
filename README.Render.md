# Render Deployment Instructions

This document provides specific instructions for deploying this Next.js portfolio to Render.

## Deployment Steps

1. Fork this repository to your GitHub account
2. Create a new Web Service on Render
3. Connect your forked repository
4. Configure the following settings in Render:
   - Build Command: `npm run build`
   - Start Command: `npm start`
   - Environment Variables (all required):
     - `CONTACT_EMAIL` - Your contact email address
     - `EMAIL_SERVICE` - Email service (e.g., gmail, hotmail)
     - `EMAIL_HOST` - SMTP host (e.g., smtp.gmail.com)
     - `EMAIL_PORT` - SMTP port (e.g., 587)
     - `EMAIL_SECURE` - SSL/TLS setting (true/false)
     - `EMAIL_USER` - Your email address
     - `EMAIL_PASS` - Your email password or app password

## Environment Variables

All environment variables must be set in the Render dashboard. These cannot be committed to version control for security reasons.

### Required Environment Variables

1. `CONTACT_EMAIL` - The email address where contact form submissions will be sent
2. `EMAIL_SERVICE` - The email service provider (e.g., gmail, hotmail)
3. `EMAIL_HOST` - The SMTP host for your email service
4. `EMAIL_PORT` - The SMTP port for your email service
5. `EMAIL_SECURE` - Whether to use SSL/TLS (true/false)
6. `EMAIL_USER` - Your email username
7. `EMAIL_PASS` - Your email password or app password

## Common Issues and Solutions

### React JSX Runtime Error

If you encounter an error like:
```
Uncaught TypeError: {imported module [externals]/react/jsx-dev-runtime}.jsxDEV is not a function
```

This is typically caused by:
1. Using incompatible React versions
2. Mixing development and production dependencies

Our package.json is configured with compatible versions:
- React 18.3.1
- React DOM 18.3.1
- Next.js 14.2.22

Ensure these versions are used and not newer experimental versions.

### Build Failures

If the build fails:
1. Check that all dependencies are properly listed in package.json
2. Ensure there are no syntax errors in the code
3. Verify that all import paths are correct
4. Confirm that all required files are present

### Email Not Working

If the contact form is not sending emails:
1. Double-check all email environment variables
2. If using Gmail, ensure you're using an App Password, not your regular password
3. Verify that your email service settings are correct (host, port, etc.)

## Support

For any deployment issues, please open an issue on GitHub or contact me directly at [arinzecyril123@gmail.com](mailto:arinzecyril123@gmail.com).