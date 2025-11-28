# Setup Guide

This document provides detailed instructions for setting up and running the portfolio website locally and deploying it to various platforms.

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Git

## Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/ArinzeCyril/arinzecyril.git
cd arinzecyril
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory with your email configuration:

```env
# Email Configuration
CONTACT_EMAIL=your-contact-email@example.com
EMAIL_SERVICE=your-email-service # e.g., gmail, hotmail
EMAIL_HOST=your-smtp-host # e.g., smtp.gmail.com
EMAIL_PORT=your-smtp-port # e.g., 587
EMAIL_SECURE=false # or true for SSL
EMAIL_USER=your-email-username
EMAIL_PASS=your-email-password
```

### 4. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

## Running Production Server

To start the production server:

```bash
npm start
# or
yarn start
```

## Deployment

### Deploy to Render

1. Fork this repository
2. Create a new Web Service on Render
3. Connect your forked repository
4. Configure the environment variables in the Render dashboard:
   - `CONTACT_EMAIL`
   - `EMAIL_SERVICE`
   - `EMAIL_HOST`
   - `EMAIL_PORT`
   - `EMAIL_SECURE`
   - `EMAIL_USER`
   - `EMAIL_PASS`
5. The build and start commands are automatically detected

### Deploy to Vercel

1. Push your code to GitHub
2. Create a new project on Vercel
3. Connect your repository
4. Configure the environment variables in the Vercel dashboard
5. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Create a new site on Netlify
3. Connect your repository
4. Set the build command to `npm run build`
5. Set the publish directory to `.next/dist/`
6. Configure the environment variables in the Netlify dashboard
7. Deploy!

## Environment Variables

The following environment variables are required for the contact form to work:

- `CONTACT_EMAIL`: The email address where contact form submissions will be sent
- `EMAIL_SERVICE`: The email service provider (e.g., gmail, hotmail)
- `EMAIL_HOST`: The SMTP host for your email service
- `EMAIL_PORT`: The SMTP port for your email service
- `EMAIL_SECURE`: Whether to use SSL/TLS (true/false)
- `EMAIL_USER`: Your email username
- `EMAIL_PASS`: Your email password or app password

## Troubleshooting

### Email Not Sending

If the contact form is not sending emails:

1. Check that all environment variables are correctly set
2. If using Gmail, ensure you're using an App Password, not your regular password
3. Verify that your email service settings are correct (host, port, etc.)
4. Check the server logs for error messages

### Build Errors

If you encounter build errors:

1. Ensure you're using Node.js version 16 or higher
2. Try deleting `node_modules` and `package-lock.json` and reinstalling dependencies
3. Check that all required dependencies are installed

## Support

For any issues or questions, please open an issue on GitHub or contact me directly at [arinzecyril123@gmail.com](mailto:arinzecyril123@gmail.com).