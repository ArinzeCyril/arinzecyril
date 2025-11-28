# Arinze Cyril - Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Fast loading times with Next.js optimizations
- Modern UI with glassmorphism effects
- Contact form with email handling
- Single Page Application (SPA) navigation

## Technology Stack

- Next.js 14+
- React 18+
- Tailwind CSS
- Nodemailer for email handling

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ArinzeCyril/arinzecyril.git
   ```

2. Navigate to the project directory:
   ```bash
   cd arinzecyril
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Configure email settings:
   Create a `.env.local` file in the root directory with your email configuration:

### Email Configuration Options

#### Gmail (with 2-Step Verification - Recommended)
```
CONTACT_EMAIL=your-contact-email@gmail.com
EMAIL_SERVICE=gmail
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
```

#### Outlook/Hotmail
```
CONTACT_EMAIL=your-contact-email@hotmail.com
EMAIL_SERVICE=hotmail
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@hotmail.com
EMAIL_PASS=your-password
```

#### Yahoo Mail
```
CONTACT_EMAIL=your-contact-email@yahoo.com
EMAIL_SERVICE=yahoo
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
EMAIL_SECURE=true
EMAIL_USER=your-email@yahoo.com
EMAIL_PASS=your-password
```

#### Other SMTP Providers
```
CONTACT_EMAIL=your-contact-email@yourdomain.com
EMAIL_SERVICE=
EMAIL_HOST=your-smtp-host.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-smtp-username
EMAIL_PASS=your-smtp-password
```

### Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production

To build for production:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm start
# or
yarn start
```

## Deployment

This application can be deployed to various platforms including:

- Vercel (recommended)
- Netlify
- Heroku

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please reach out to [arinzecyril123@gmail.com](mailto:arinzecyril123@gmail.com).










<!-- React -->
# Arinze Cyril - Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, featuring a beautiful glassmorphism design.

## 🚀 Quick Start

### Development
```bash
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) to see your website

### Production Build
```bash
npm run build
```
Build files will be generated in the `dist/` folder

### Preview Production Build
```bash
npm run preview
```

### Run Production Server
```bash
npm start
```
Runs the production-ready Express server

## 📁 Project Structure

```
src/
├── App.jsx              # Main app component
├── main.jsx             # React entry point
├── index.css            # Global styles
├── pages/               # Additional pages
└── components/
    ├── Navigation.jsx   # Header navigation
    ├── HeroSection.jsx  # Hero section with CTA
    ├── ServicesSection.jsx    # Services grid
    ├── BenefitsSection.jsx    # Benefits checklist
    ├── ProcessSection.jsx     # Process steps
    ├── CTASection.jsx        # Call to action
    └── Footer.jsx           # Footer with contact
```

## ✨ Features

- **Responsive Design** - Works perfectly on all devices
- **Modern UI** - Glassmorphism effects and smooth animations
- **Interactive Elements** - Hover effects and smooth transitions
- **SEO Optimized** - Proper meta tags and structure
- **Fast Loading** - Optimized with Vite build system
- **SPA Routing** - Multi-page navigation with React Router

## 🎨 Design Elements

- Dark gradient background (slate-900 → purple-900)
- Animated floating orbs with pulsing effects
- Glassmorphism cards with backdrop blur
- Purple to blue gradient accents
- Custom animations and transitions

## 🔧 Technologies Used

- React 18
- Vite (Build tool)
- Tailwind CSS (Styling)
- Express.js (Backend server)
- React Router DOM (Navigation)
- Lucide React (Icons)

## 📧 Contact

- Email: [arinzecyril123@gmail.com](mailto:arinzecyril123@gmail.com)
- GitHub: [ArinzeCyril](https://github.com/ArinzeCyril)

---

Built with ❤️ by [Arinze Cyril](https://github.com/ArinzeCyril)