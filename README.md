# 🚀 PortfolioCraft - Modern Personal Portfolio

<div align="center">

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

**A modern, responsive portfolio website built with cutting-edge technologies**

[🌐 Live Demo](https://your-portfolio-url.com) • [📱 Features](#-features) • [🛠️ Tech Stack](#️-tech-stack) • [🚀 Getting Started](#-getting-started)

</div>

---

## 📖 About

PortfolioCraft is a modern, responsive portfolio website that showcases professional work, skills, and achievements. Built with the latest web technologies, it provides a seamless user experience across all devices while maintaining excellent performance and accessibility.

### 🎯 Key Highlights

- **🎨 Modern Design** - Clean, professional UI with smooth animations
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **⚡ Lightning Fast** - Optimized performance with lazy loading and code splitting
- **🔒 Secure** - Protected contact form with proper validation
- **♿ Accessible** - WCAG compliant with keyboard navigation support

---

## ✨ Features

### 🏠 **Homepage Sections**

- **Hero Section** - Compelling introduction with animated background
- **About Me** - Personal story and academic background
- **Skills & Technologies** - Comprehensive tech stack showcase
- **Certifications** - Professional credentials and achievements
- **Featured Projects** - Highlighted portfolio pieces
- **Experience** - Professional journey and milestones
- **Contact** - Interactive contact form and social links

### 🎨 **Design Features**

- **Dark/Light Mode** - Toggle between themes with persistent preference
- **Smooth Animations** - Framer Motion powered transitions
- **Interactive Elements** - Hover effects and micro-interactions
- **Professional Typography** - Modern font combinations
- **Gradient Backgrounds** - Eye-catching visual elements

### 🛡️ **Technical Features**

- **TypeScript** - Type-safe development
- **Component Architecture** - Reusable, maintainable components
- **Form Validation** - Client and server-side validation
- **Email Integration** - Automated contact form submissions
- **Resume Download** - Direct PDF download functionality
- **SEO Optimized** - Meta tags and structured data

---

## 🛠️ Tech Stack

### **Frontend**

- ![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-3178C6?logo=typescript&logoColor=white)
- ![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?logo=vite&logoColor=white)
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?logo=tailwind-css&logoColor=white)

### **Backend**

- ![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)
- ![Express.js](https://img.shields.io/badge/Express.js-4.21.2-000000?logo=express&logoColor=white)
- ![Nodemailer](https://img.shields.io/badge/Nodemailer-7.0.6-FF6600?logo=nodemailer&logoColor=white)

### **UI Components**

- ![Radix UI](https://img.shields.io/badge/Radix_UI-Primitives-161618?logo=radix-ui&logoColor=white)
- ![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-0.453.0-000000?logo=lucide&logoColor=white)
- ![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.13.1-0055FF?logo=framer&logoColor=white)

### **Development Tools**

- ![ESLint](https://img.shields.io/badge/ESLint-Code_Quality-4B32C3?logo=eslint&logoColor=white)
- ![Prettier](https://img.shields.io/badge/Prettier-Code_Formatting-F7B93E?logo=prettier&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/TypeScript-Checker-3178C6?logo=typescript&logoColor=white)

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/MuhammadMuazAhmed/PortfolioCraft.git
   cd PortfolioCraft
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**

   ```bash
   cp .env.example .env.local
   ```

   Configure your environment variables:

   ```env
   # Email Configuration
   SMTP_HOST=your-smtp-host
   SMTP_PORT=587
   SMTP_USER=your-email
   SMTP_PASSWORD=your-password
   CONTACT_EMAIL=your-contact-email
   MAIL_FROM=your-from-email

   # Server Configuration
   PORT=5000
   NODE_ENV=development
   ```

4. **Start Development Server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5000`

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run check        # Run TypeScript checks
npm run lint         # Run ESLint
```

---

## 📁 Project Structure

```
PortfolioCraft/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utilities and data
│   │   ├── hooks/         # Custom React hooks
│   │   └── index.css      # Global styles
│   └── index.html         # HTML template
├── server/                # Backend Express server
│   ├── routes.ts          # API routes
│   ├── index.ts           # Server entry point
│   └── public/            # Static files
├── shared/                # Shared schemas
├── components/            # Shared UI components
└── dist/                  # Build output
```

---

## 🎨 Customization

### Personal Information

Update your personal details in:

- `client/src/components/hero-section.tsx` - Name, title, description
- `client/src/lib/certifications.ts` - Your certifications
- `client/src/lib/projects.ts` - Your projects
- `client/src/components/about-section.tsx` - About section
- `client/src/components/experience-section.tsx` - Experience details

### Styling

- Modify `tailwind.config.ts` for theme customization
- Update `client/src/index.css` for global styles
- Customize component styles in individual component files

### Contact Form

Configure email settings in your `.env.local` file for the contact form functionality.

---

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

---

## 🔧 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on every push

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure environment variables

### Traditional Hosting

1. Build the project: `npm run build`
2. Upload the `dist` folder to your server
3. Configure your web server to serve the static files

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Muhammad Muaz Ahmed**

- GitHub: [@MuhammadMuazAhmed](https://github.com/MuhammadMuazAhmed)
- LinkedIn: [Muhammad Muaz Ahmed](https://www.linkedin.com/in/muhammad-muaz-ahmed/)
- Email: muhammadmuazahmed@gmail.com

---

## 🙏 Acknowledgments

- [Radix UI](https://www.radix-ui.com/) for accessible component primitives
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lucide](https://lucide.dev/) for beautiful icons
- [Framer Motion](https://www.framer.com/motion/) for smooth animations

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Muhammad Muaz Ahmed](https://github.com/MuhammadMuazAhmed)

</div>
