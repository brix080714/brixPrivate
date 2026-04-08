# 🎯 Brix Briongos - Portfolio & Resume Website

![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![Version](https://img.shields.io/badge/Version-1.0-blue)
![License](https://img.shields.io/badge/License-Personal%20Use-orange)

A modern, professional portfolio and resume website showcasing full-stack development projects, technical skills, and services. Built with HTML5, CSS3, Bootstrap 5, and vanilla JavaScript.

**🌐 Live Site:** [https://brixbriongos.netlify.app](https://brixbriongos.netlify.app)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [Configuration](#-configuration)
- [Deployment](#-deployment)
- [Form Handling](#-form-handling)
- [SEO & Performance](#-seo--performance)
- [Security Features](#-security-features)
- [Development](#-development)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## ✨ Features

### Core Features
- ✅ **Fully Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- ✅ **Modern UI/UX** - Clean, professional design with smooth animations
- ✅ **Contact Form** - Netlify Forms integration with email notifications
- ✅ **Portfolio Showcase** - Display your projects with detailed descriptions
- ✅ **Resume/CV Section** - Highlight education, skills, and experience
- ✅ **Services** - Showcase services you offer
- ✅ **Mobile Navigation** - Fully functional mobile menu toggle

### Technical Features
- ✅ **SEO Optimized** - Meta tags, keywords, Open Graph support
- ✅ **Performance Optimized** - Fast loading with CDN resources
- ✅ **Accessibility (WCAG 2.1 AA)** - Semantic HTML, ARIA labels
- ✅ **Security Headers** - X-Frame-Options, X-Content-Type-Options, CSP ready
- ✅ **Email Notifications** - Netlify Forms with automatic email alerts
- ✅ **Spam Protection** - Honeypot field anti-spam mechanism
- ✅ **Configuration Management** - Centralized config.js for easy updates

---

## 🛠 Tech Stack

**Frontend:**
- HTML5
- CSS3 (with CSS variables for theming)
- JavaScript (Vanilla - No Framework)
- Bootstrap 5.3.7
- jQuery 3.6.0

**Libraries & Plugins:**
- AOS (Animate On Scroll) - Scroll animations
- Swiper - Carousel functionality
- GLightbox - Image lightbox
- Typed.js - Text typing animation
- Isotope - Portfolio filtering/sorting
- Waypoints - Scroll trigger animations

**Backend & Deployment:**
- Netlify Forms - Form submissions
- Netlify Functions - Serverless email handling (optional)
- Netlify Hosting - Static site hosting with HTTPS

**Tools & Services:**
- Netlify - Hosting & deployment
- GitHub - Version control
- Google Analytics - Traffic monitoring (optional)

---

## 📁 Project Structure

```
FolioOne/
├── index.html                 # Homepage
├── about.html                 # About/Bio page
├── portfolio.html             # Portfolio/Projects page
├── services.html              # Services offered
├── resume.html                # Resume/CV page
├── contact.html               # Contact form page
├── starter-page.html          # Template starter page
├── service-details.html       # Service detail pages
├── portfolio-details.html     # Portfolio detail pages
│
├── assets/
│   ├── css/
│   │   └── main.css           # Main stylesheet
│   ├── js/
│   │   ├── main.js            # Main JavaScript
│   │   ├── config.js          # Configuration (social links, etc.)
│   │   └── debug-forms.js     # Form debugging script
│   ├── img/
│   │   ├── profile/           # Profile images
│   │   ├── portfolio/         # Portfolio project images
│   │   ├── services/          # Service icons/images
│   │   └── person/            # Additional images
│   ├── scss/                  # SCSS source files (optional)
│   └── vendor/                # Third-party libraries
│       ├── bootstrap/
│       ├── aos/
│       ├── typed.js/
│       └── ...other vendors...
│
├── forms/
│   ├── contact.php            # PHP form handler
│   └── messages.json          # Saved form messages
│
├── functions/
│   └── contact.js             # Netlify Function (optional)
│
├── netlify.toml               # Netlify configuration
├── .gitignore                 # Git ignore rules
├── .env.example               # Environment variable template
├── robots.txt                 # SEO robots configuration
├── sitemap.xml                # XML sitemap for search engines
├── Readme.txt                 # Original template readme
│
├── PRODUCTION_READINESS_CHECKLIST.md    # Comprehensive checklist
├── CONFIG_TEMPLATES_AND_EXAMPLES.md     # Code examples & templates
├── QUICK_WINS.md                        # Quick implementation guide
├── FORM_TESTING_GUIDE.md                # Form testing guide
├── DEBUGGING_PROTOCOL.md                # Debugging procedures
│
├── test-backend.js            # Backend form testing
├── test-form.js               # Frontend form testing
├── deploy.bat                 # Windows deployment script
└── setup.bat                  # Windows setup script
```

---

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor or IDE (VS Code recommended)
- Node.js 18+ (optional, for future enhancements)
- Git (for version control)

### Local Development

1. **Clone the Repository**
   ```bash
   git clone https://github.com/brixbriongos/portfolio.git
   cd portfolio
   ```

2. **Set Up Environment Variables**
   ```bash
   # Copy the template
   cp .env.example .env.local
   
   # Edit with your actual values
   # Update social media URLs, email addresses, etc.
   ```

3. **Start Local Server** (Python)
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Or use any other local server
   # Then visit: http://localhost:8000
   ```

4. **Start Local Server** (Node.js)
   ```bash
   npx http-server -p 8000
   # Visit: http://localhost:8000
   ```

5. **Test Form Locally**
   - Open `test-form.js` for frontend testing
   - Use provided test data
   - Check browser console for logs

---

## ⚙️ Configuration

### Social Media Links
Edit `assets/js/config.js` to update your social media profiles:

```javascript
CONFIG.social = {
  twitter: 'https://twitter.com/yourhandle',
  linkedin: 'https://www.linkedin.com/in/yourprofile',
  github: 'https://github.com/brixbriongos',
  instagram: 'https://instagram.com/yourhandle',
  facebook: 'https://www.facebook.com/yourprofile'
};
```

### Email Configuration
Create `.env.local` file with your email settings:

```bash
RECIPIENT_EMAIL=your-email@gmail.com
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
```

### Site Information
Update `CONFIG.site` in `assets/js/config.js`:

```javascript
CONFIG.site = {
  name: 'Brix Briongos',
  email: 'brixbriongos14@gmail.com',
  url: 'https://brixbriongos.netlify.app'
};
```

### Contact Information
Update `CONFIG.contact` for your contact details:

```javascript
CONFIG.contact = {
  email: 'brixbriongos14@gmail.com',
  phone: '+63 9451842028',
  location: 'Philippines'
};
```

---

## 🚀 Deployment

### Deploy to Netlify

1. **Connect GitHub Repository**
   - Go to [Netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select GitHub repository
   - Authorize Netlify

2. **Configure Build Settings**
   - Build command: `echo 'Static HTML site'` (already configured)
   - Publish directory: `.` (root)
   - Click "Deploy site"

3. **Set Environment Variables**
   - Go to Site Settings → Environment
   - Add variables from `.env.example`:
     - `RECIPIENT_EMAIL`
     - `GMAIL_USER`
     - `GMAIL_APP_PASSWORD`
     - Social media URLs
     - Analytics ID (optional)

4. **Configure Domain** (Optional)
   - Domain settings → Add custom domain
   - Update DNS records (CNAME)
   - SSL certificate auto-configured

5. **Set Up Form Notifications**
   - Site Settings → Forms
   - Contact form → Manage notifications
   - Add email address for notifications

### Deploy Locally

Using batch files (Windows):
```cmd
# Setup
setup.bat

# Deploy
deploy.bat
```

---

## 📧 Form Handling

### How It Works

1. **Frontend** - Form submitted via HTML with Netlify attributes
2. **Netlify Forms** - Captures form data in dashboard
3. **Serverless Function** (optional) - Sends email notification
4. **Email Backend** - PHP or Node.js handler sends emails

### Contact Form Configuration

The form uses Netlify Forms for easy integration:

```html
<form name="contact" method="POST" netlify netlify-honeypot="bot-field">
  <!-- Your form fields -->
</form>
```

### Testing Form Locally

See `FORM_TESTING_GUIDE.md` for detailed instructions:

1. Submit test message via contact form
2. Check Netlify Forms dashboard
3. Verify email notifications working
4. Test spam protection (honeypot field)

### Using Netlify Functions

Optional: Deploy serverless functions for advanced email handling:

```bash
# Deploy function
netlify functions:create contact

# Add email sending logic
# Configure environment variables
```

---

## 🔍 SEO & Performance

### SEO Optimizations Implemented

✅ **Meta Tags** - Descriptions, keywords, author tags on all pages  
✅ **Open Graph** - Social media sharing optimization  
✅ **JSON-LD Schema** - Structured data for search engines  
✅ **XML Sitemap** - `sitemap.xml` for search engine crawling  
✅ **Robots.txt** - Crawler directives configured  
✅ **Mobile Responsive** - Mobile-first design approach  
✅ **Fast Loading** - CDN resources, minified code  

### Performance Tips

- Images optimized and lazy-loaded
- CSS organized and modular
- JavaScript bundled efficiently
- Gzip compression enabled
- Caching headers configured

### Check Performance

1. **Google PageSpeed Insights**
   - https://pagespeed.web.dev
   - Test lighthouse scores

2. **Lighthouse Audit** (Chrome DevTools)
   - F12 → Lighthouse tab
   - Run report
   - Fix issues, target > 80 score

3. **Mobile Responsiveness Test**
   - F12 → Toggle device toolbar
   - Test all screen sizes

---

## 🔒 Security Features

### Headers Configured

```
X-Content-Type-Options: nosniff          (Prevent MIME sniffing)
X-Frame-Options: SAMEORIGIN              (Clickjacking protection)
X-XSS-Protection: 1; mode=block          (XSS protection)
Referrer-Policy: strict-origin-when-cross-origin  (Privacy)
Permissions-Policy: geolocation=(), ... (API restrictions)
```

### Best Practices

✅ Input validation and sanitization  
✅ No hardcoded secrets in code (use .env)  
✅ HTTPS enforced (Netlify default)  
✅ Honeypot spam protection active  
✅ CORS headers ready  
✅ CSP headers prepared  

---

## 💻 Development

### Code Standards

- **JavaScript** - Vanilla JS with JSDoc comments
- **CSS** - CSS3 with custom properties
- **HTML** - Semantic HTML5, accessible markup
- **Comments** - Well-documented, explain the why

### File Size Guidelines

- HTML pages: < 100KB
- CSS: < 50KB combined
- JavaScript: < 100KB combined
- Images: Optimized, < 500KB per

### Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Android)

---

## 🐛 Troubleshooting

### Form Not Submitting

**Problem:** Form submission fails  
**Solution:**
1. Check form `name` attribute matches netlify.toml
2. Verify Netlify Forms enabled in dashboard
3. Check browser console for errors
4. See `FORM_TESTING_GUIDE.md`

### Links Not Working

**Problem:** Social media links show "undefined"  
**Solution:**
1. Update `config.js` with actual URLs
2. Check `assets/js/config.js` is loaded
3. Verify link classes match (twitter, linkedin, etc.)
4. Refresh browser cache (Ctrl+Shift+R)

### Styles Not Loading

**Problem:** Page looks unstyled  
**Solution:**
1. Check `assets/css/main.css` exists
2. Verify `assets/vendor/bootstrap/` loaded
3. Check for 404 errors in console
4. Clear browser cache
5. Check CDN availability

### Animations Not Working

**Problem:** Scroll animations not firing  
**Solution:**
1. Check AOS library loaded
2. Verify `data-aos` attributes present
3. Scroll down to trigger animations
4. Check browser console for errors

---

## 📝 Contributing

To contribute improvements:

1. **Fork** the repository
2. **Create** feature branch (`git checkout -b feature/improvement`)
3. **Commit** changes (`git commit -m 'Add improvement'`)
4. **Push** to branch (`git push origin feature/improvement`)
5. **Open** Pull Request

### Commit Message Convention

```
feat: add new feature
fix: fix bug in component
docs: update documentation
style: format code
refactor: reorganize code
perf: improve performance
test: add tests
```

---

## 📄 License

**For OJT/Personal Use Only**

This portfolio is designed specifically for On-the-Job Training (OJT) and personal portfolio purposes. 

- ✅ Do: Use as your personal portfolio
- ✅ Do: Customize and deploy your version
- ✅ Do: Learn and improve the code
- ❌ Don't: Claim as your own work
- ❌ Don't: Commercial redistribution
- ❌ Don't: Remove attribution

---

## 📞 Contact

**Brix Briongos**

- 📧 Email: [brixbriongos14@gmail.com](mailto:brixbriongos14@gmail.com)
- 📱 Phone: +63 9451842028
- 📍 Location: Philippines
- 🔗 Portfolio: [https://brixbriongos.netlify.app](https://brixbriongos.netlify.app)
- 💼 LinkedIn: [Your LinkedIn URL]
- 🐙 GitHub: [https://github.com/brixbriongos](https://github.com/brixbriongos)

---

## 📚 Additional Documentation

- `PRODUCTION_READINESS_CHECKLIST.md` - Comprehensive quality checklist
- `CONFIG_TEMPLATES_AND_EXAMPLES.md` - Code examples and templates
- `QUICK_WINS.md` - Quick implementation guide
- `FORM_TESTING_GUIDE.md` - Form testing procedures
- `DEBUGGING_PROTOCOL.md` - Debugging guide
- `.env.example` - Environment variables template

---

## 🎯 Project Status

**Current Version:** 1.0  
**Status:** Production Ready ✅  
**Last Updated:** April 2026  
**Next Review:** May 2026  

### Completed
- ✅ Core portfolio functionality
- ✅ Contact form with Netlify Forms
- ✅ SEO optimization
- ✅ Security headers
- ✅ Responsive design
- ✅ Documentation

### Planned
- ⏳ Blog section (optional)
- ⏳ Dark mode toggle (optional)
- ⏳ Analytics dashboard (optional)
- ⏳ Newsletter signup (optional)

---

## 🙏 Acknowledgments

**Template:** FolioOne by BootstrapMade.com  
**Libraries Used:**
- Bootstrap 5.3.7
- AOS (Animate On Scroll)
- Swiper
- GLightbox
- Typed.js
- Isotope
- Waypoints

**Thanks to:** Netlify for hosting & forms support

---

**Made with ❤️ by Brix Briongos**

*"Building solutions, learning continuously, making impact."*
