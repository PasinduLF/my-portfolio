# Pasindu Lakshan - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and professional journey as a Software Engineering undergraduate. Built with React, Vite, and Tailwind CSS, featuring a beautiful dark theme, smooth animations, and interactive elements.

## 🌟 Live Demo

Visit the live website: [https://my-portfolio-rho-seven-75.vercel.app/](https://my-portfolio-rho-seven-75.vercel.app/)

## ✨ Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Dark Theme**: Beautiful dark mode with smooth theme switching
- **Interactive Animations**: Smooth fade-in animations and hover effects
- **Star Background**: Dynamic animated starfield background with meteors
- **Contact Form**: Functional contact form powered by EmailJS
- **Project Showcase**: Interactive project gallery with live demos and GitHub links
- **Skills Visualization**: Animated skill bars with categorized technologies
- **CV Download**: Direct download link for resume
- **Social Links**: Integration with LinkedIn, GitHub, and other social platforms

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - Modern React with latest features
- **Vite 7.0.0** - Fast build tool and development server
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **React Router DOM 7.6.3** - Client-side routing
- **Lucide React 0.525.0** - Beautiful icon library

### UI Components & Styling
- **Radix UI Toast** - Accessible toast notifications
- **Class Variance Authority** - Component variant management
- **Tailwind Merge** - Utility for merging Tailwind classes
- **CLSX** - Utility for constructing className strings

### External Services
- **EmailJS** - Contact form email service
- **React Icons** - Additional icon library

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript Types** - Type definitions for React and React DOM

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Base UI components (toast, toaster)
│   ├── AboutSection.jsx # About me section
│   ├── ContactSection.jsx # Contact form and info
│   ├── Footer.jsx       # Site footer
│   ├── HeroSection.jsx  # Landing hero section
│   ├── Navbar.jsx       # Navigation bar
│   ├── ProjectsSection.jsx # Project showcase
│   ├── SkillsSection.jsx # Skills visualization
│   ├── StarBackground.jsx # Animated background
│   └── ThemeToggle.jsx  # Dark/light mode toggle
├── hooks/               # Custom React hooks
│   └── use-toast.js     # Toast notification hook
├── lib/                 # Utility functions
│   └── utils.js         # Helper utilities
├── pages/               # Page components
│   ├── Home.jsx         # Main portfolio page
│   └── NotFound.jsx     # 404 error page
├── App.jsx              # Main app component
├── main.jsx             # App entry point
└── index.css            # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PasinduLF/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📱 Sections Overview

### 🏠 Hero Section
- Personal introduction with animated text
- Call-to-action button to view projects
- Scroll indicator with smooth animations

### 👨‍💻 About Section
- Professional background and skills overview
- Three key focus areas: Web Development, UI/UX Design, Project Management
- Download CV button and contact call-to-action

### 🛠️ Skills Section
- Categorized skill sets (Frontend, Backend, Tools)
- Interactive skill bars with proficiency percentages
- Filterable by category

### 🚀 Projects Section
- Featured project showcase with images
- Technology tags for each project
- Live demo and GitHub repository links
- Currently featuring:
  - Portfolio Website (this project)
  - CashBuddy - Personal Finance Tracker App
  - Staff Management System

### 📞 Contact Section
- Contact information (email, phone, location)
- Functional contact form with EmailJS integration
- Social media links (LinkedIn, GitHub)
- Toast notifications for form submissions

## 🎨 Design Features

- **Modern UI**: Clean, professional design with excellent typography
- **Smooth Animations**: Fade-in effects, hover animations, and transitions
- **Interactive Elements**: Hover effects on cards, buttons, and links
- **Responsive Layout**: Mobile-first design approach
- **Accessibility**: Proper semantic HTML and ARIA labels

## 🔧 Configuration

### EmailJS Setup
To enable the contact form functionality, you'll need to configure EmailJS:

1. Create an EmailJS account at [emailjs.com](https://www.emailjs.com/)
2. Set up a service and template
3. Update the configuration in `src/components/ContactSection.jsx`:
   ```javascript
   emailjs.sendForm(
     "YOUR_SERVICE_ID",
     "YOUR_TEMPLATE_ID", 
     formRef.current,
     "YOUR_PUBLIC_KEY"
   )
   ```

### Customization
- Update personal information in component files
- Modify the color scheme in `src/index.css`
- Add or remove projects in `src/components/ProjectsSection.jsx`
- Update skills in `src/components/SkillsSection.jsx`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page or create a pull request.

## 📧 Contact

**Pasindu Lakshan**
- Email: lpasindu30@gmail.com
- Phone: +94 (71) 993-0179
- Location: Wattala, Sri Lanka
- LinkedIn: [Pasindu Lakshan](https://www.linkedin.com/in/pasindu-lakshan-823909279/)
- GitHub: [PasinduLF](https://github.com/PasinduLF)

---

⭐ If you found this project helpful, please give it a star on GitHub!