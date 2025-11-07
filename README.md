# Pasindu Lakshan - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and professional journey as a Software Engineering undergraduate. Built with React, Vite, and Tailwind CSS, featuring a beautiful liquid glass (glassmorphism) theme, smooth animations, and interactive elements.

## 🌟 Live Demo

Visit the live website: [https://my-portfolio-rho-seven-75.vercel.app/](https://my-portfolio-rho-seven-75.vercel.app/)

## ✨ Features

- **Liquid Glass Theme**: Beautiful glassmorphism design with frosted glass effects, backdrop blur, and semi-transparent elements
- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Dark Theme**: Beautiful dark mode with smooth theme switching
- **Interactive Animations**: Smooth fade-in animations, hover effects, and scroll-triggered animations
- **Star Background**: Dynamic animated starfield background with meteors
- **Contact Form**: Functional contact form powered by EmailJS
- **Project Showcase**: Interactive project gallery with filtering, live demos, and GitHub links
- **Enhanced Skills Section**: Interactive skills with icons, tooltips, animated progress bars, and skill tags
- **Timeline Section**: Education and experience timeline with visual timeline design
- **Blog Section**: Technical blog posts with category filtering and modal view
- **Certifications Section**: Showcase of certifications and achievements with verification links
- **CV Download**: Direct download link for resume
- **Social Links**: Integration with LinkedIn, GitHub, and other social platforms
- **Performance Optimizations**: Code splitting, lazy loading, and image optimization for fast load times
- **Accessibility**: WCAG 2.1 compliant with keyboard navigation, ARIA labels, screen reader support, and focus management

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
│   ├── ui/              # Base UI components
│   │   ├── toast.jsx    # Toast notification component
│   │   ├── toaster.jsx  # Toast container
│   │   ├── tooltip.jsx  # Tooltip component
│   │   ├── skeleton.jsx # Loading skeleton components
│   │   └── loading-fallback.jsx # Loading fallback components
│   ├── AboutSection.jsx # About me section
│   ├── BlogSection.jsx  # Technical blog section
│   ├── CertificationsSection.jsx # Certifications showcase
│   ├── ContactSection.jsx # Contact form and info
│   ├── Footer.jsx       # Site footer
│   ├── GoogleAnalytics.jsx # Google Analytics integration
│   ├── HeroSection.jsx  # Landing hero section with typing animation
│   ├── Navbar.jsx       # Navigation bar with active section highlighting
│   ├── OptimizedImage.jsx # Optimized image component
│   ├── ProjectsSection.jsx # Project showcase with filtering
│   ├── ScrollProgress.jsx # Scroll progress indicator
│   ├── SkillsSection.jsx # Enhanced skills visualization
│   ├── SkipToContent.jsx # Skip to content link
│   ├── StarBackground.jsx # Animated background
│   ├── ThemeToggle.jsx  # Dark/light mode toggle
│   └── TimelineSection.jsx # Education and experience timeline
├── hooks/               # Custom React hooks
│   ├── use-toast.js     # Toast notification hook
│   ├── useTypingAnimation.js # Typing animation hook
│   ├── useIntersectionObserver.js # Intersection Observer hook
│   └── useMemoizedCallback.js # Memoized callback hook
├── lib/                 # Utility functions
│   ├── utils.js         # Helper utilities
│   └── analytics.js     # Google Analytics utilities
├── pages/               # Page components
│   ├── Home.jsx         # Main portfolio page
│   └── NotFound.jsx     # 404 error page
├── App.jsx              # Main app component
├── main.jsx             # App entry point
└── index.css            # Global styles with glassmorphism utilities
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

## ⚡ Performance Optimizations

This portfolio is optimized for performance with several techniques:

### Code Splitting
- **Route-level splitting**: Routes are lazy-loaded using `React.lazy()` and `Suspense`
- **Component-level splitting**: Below-the-fold sections are lazy-loaded to reduce initial bundle size
- **Manual chunking**: Vendor libraries, UI components, and analytics are split into separate chunks

### Lazy Loading
- **Progressive section loading**: Sections below the fold load only when needed
- **Intersection Observer**: Components load when they're about to enter the viewport
- **Suspense boundaries**: Loading fallbacks provide smooth user experience during code loading

### Image Optimization
- **Lazy loading**: Images use native `loading="lazy"` attribute
- **Responsive images**: Support for `srcset` and `sizes` attributes (when enabled)
- **Placeholder skeletons**: Smooth loading experience with animated placeholders
- **Fetch priority**: Critical images use `fetchPriority="high"` for faster loading

### Build Optimizations
- **Minification**: Production builds use esbuild for fast minification
- **Tree shaking**: Unused code is automatically removed
- **Console removal**: `console.log` statements are removed in production builds
- **Chunk size limits**: Warnings for large chunks to maintain performance

### Resource Hints
- **DNS prefetch**: External domains (Google Analytics, fonts) are prefetched
- **Preconnect**: Critical third-party resources are preconnected

### Performance Benefits
- **Faster initial load**: Only critical above-the-fold content loads initially
- **Reduced bundle size**: Code splitting reduces main bundle size
- **Better Core Web Vitals**: Optimized for LCP, FID, and CLS metrics
- **Improved user experience**: Progressive loading with smooth transitions

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
- **Icons**: Visual icons for each skill with color coding
- **Animated Progress Bars**: Progress bars animate on scroll with Intersection Observer
- **Hover Tooltips**: Detailed descriptions and tags appear on hover
- **Skill Tags**: Badges showing key technologies and concepts
- **Enhanced Cards**: Glassmorphism cards with improved hover effects
- Filterable by category with smooth transitions

### 🚀 Projects Section
- Featured project showcase with images
- Technology tags for each project with filtering
- Live demo and GitHub repository links
- Optimized images with lazy loading
- Currently featuring:
  - Portfolio Website (this project)
  - CashBuddy - Personal Finance Tracker App
  - Staff Management System

### 📚 Timeline Section
- Education and experience timeline
- Visual timeline design with alternating layout
- Icons and detailed information for each entry
- Responsive design for mobile and desktop

### 🎓 Certifications Section
- Showcase of professional certifications
- Category badges and verification links
- Issued dates and credential IDs
- Glassmorphism card design

### 📝 Blog Section
- Technical blog posts with categories
- Category filtering functionality
- Modal view for full post content
- Featured posts highlighting
- Reading time and publication dates

### 📞 Contact Section
- Contact information (email, phone, location)
- Functional contact form with EmailJS integration
- Social media links (LinkedIn, GitHub)
- Toast notifications for form submissions
- Loading states during form submission

## 🎨 Design Features

### Liquid Glass (Glassmorphism) Theme
- **Frosted Glass Effects**: All cards and components use glassmorphism design
- **Backdrop Blur**: 10px-30px blur effects for depth and visual appeal
- **Semi-Transparent Backgrounds**: Elegant transparency with backdrop filters
- **Subtle Borders**: Light borders with opacity for definition
- **Layered Shadows**: Soft shadows for depth and elevation
- **Dark Mode Support**: Optimized glass effects for both light and dark themes

### Interactive Elements
- **Smooth Animations**: Fade-in effects, hover animations, and transitions
- **Scroll-Triggered Animations**: Progress bars and elements animate on scroll
- **Hover Effects**: Enhanced hover states on cards, buttons, and links
- **Typing Animation**: Hero section features smooth typing animation
- **Loading States**: Skeleton loaders and loading spinners for better UX

### Responsive Design
- **Mobile-First Approach**: Optimized for all screen sizes
- **Responsive Grids**: Adaptive layouts for different viewports
- **Touch-Friendly**: Large touch targets and mobile navigation
- **Flexible Typography**: Scalable text that adapts to screen size

## ♿ Accessibility Features

This portfolio is built with accessibility as a priority:

- **WCAG 2.1 Compliance**: Meets Web Content Accessibility Guidelines
- **Keyboard Navigation**: Full keyboard support with visible focus indicators
- **Screen Reader Support**: Comprehensive ARIA labels and semantic HTML
- **Focus Management**: Proper focus trapping in modals and menus
- **Skip to Content**: Skip link for keyboard users
- **Color Contrast**: High contrast ratios for readability
- **Semantic HTML**: Proper use of HTML5 semantic elements
- **ARIA Attributes**: Roles, labels, and live regions for assistive technologies
- **Alternative Text**: Descriptive alt text for all images
- **Form Labels**: Properly associated labels for all form inputs

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

### Google Analytics Setup
To enable visitor tracking with Google Analytics:

1. Create a Google Analytics 4 (GA4) property at [analytics.google.com](https://analytics.google.com/)
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Create a `.env` file in the root directory:
   ```env
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
4. Replace `G-XXXXXXXXXX` with your actual Measurement ID
5. Restart your development server

The analytics will automatically track:
- Page views
- Button clicks (filters, CTAs)
- Project views (demo and GitHub links)
- Contact form submissions
- CV downloads
- External link clicks (social media, GitHub)

**Note:** Analytics only works in production or when the environment variable is set. It won't track in development mode without the variable.

### Customization

#### Personal Information
- Update personal details in component files
- Modify contact information in `src/components/ContactSection.jsx`
- Update social links throughout components

#### Styling
- Modify color scheme in `src/index.css` (CSS variables)
- Adjust glassmorphism effects in `src/index.css` (glass utilities)
- Customize animations and transitions

#### Content
- Add or remove projects in `src/components/ProjectsSection.jsx`
- Update skills in `src/components/SkillsSection.jsx` (includes icons, descriptions, tags)
- Add blog posts in `src/components/BlogSection.jsx`
- Update certifications in `src/components/CertificationsSection.jsx`
- Modify timeline entries in `src/components/TimelineSection.jsx`

#### Glassmorphism Theme
The liquid glass theme can be customized in `src/index.css`:
- Adjust blur intensity in `@utility glass-*` classes
- Modify transparency levels (rgba values)
- Change border opacity and colors
- Update shadow effects

## 🎯 Key Highlights

- **Modern Tech Stack**: Built with the latest React 19, Vite 7, and Tailwind CSS 4
- **Performance Optimized**: Code splitting, lazy loading, and optimized images for fast load times
- **Accessible**: WCAG 2.1 compliant with full keyboard and screen reader support
- **Beautiful Design**: Liquid glass (glassmorphism) theme with frosted glass effects
- **Interactive**: Smooth animations, hover effects, and scroll-triggered animations
- **Feature-Rich**: Timeline, blog, certifications, and enhanced skills section with tooltips
- **Production Ready**: Optimized build configuration and deployment ready

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page or create a pull request.

## 🙏 Acknowledgments

- Icons from [Lucide React](https://lucide.dev/)
- UI components inspired by modern design systems
- Glassmorphism design patterns from contemporary web design

## 📧 Contact

**Pasindu Lakshan**
- Email: lpasindu30@gmail.com
- Phone: +94 (71) 993-0179
- Location: Wattala, Sri Lanka
- LinkedIn: [Pasindu Lakshan](https://www.linkedin.com/in/pasindu-lakshan-fernando)
- GitHub: [PasinduLF](https://github.com/PasinduLF)

---

⭐ If you found this project helpful, please give it a star on GitHub!
