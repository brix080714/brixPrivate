# Configuration Templates & Examples
## For Implementing Tech Industry Standards

---

## 1. ENVIRONMENT VARIABLES TEMPLATE

### Create `.env.example` (commit to repo - NO secrets!)

```bash
# Email Configuration
RECIPIENT_EMAIL=your-email@gmail.com
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx

# Site Configuration
SITE_NAME=Brix Briongos
SITE_URL=https://brixbriongos.netlify.app
SITE_DESCRIPTION=Full-stack developer and computer science student

# Social Media
SOCIAL_TWITTER=https://twitter.com/yourhandle
SOCIAL_LINKEDIN=https://www.linkedin.com/in/yourprofile
SOCIAL_GITHUB=https://github.com/brixbriongos
SOCIAL_INSTAGRAM=https://instagram.com/yourhandle
SOCIAL_FACEBOOK=https://www.facebook.com/yourprofile

# Analytics
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# Feature Flags
ENABLE_BLOG=false
ENABLE_DARKMODE=false
ENABLE_ANALYTICS=true
```

### How to Use on Netlify

1. Go to **Site Settings → Environment**
2. Add environment variables manually OR
3. Connect GitHub and use `.env.example` as reference
4. Create actual `.env` file locally (Add to .gitignore)

---

## 2. CONFIG.JS TEMPLATE

### Create `assets/js/config.js`

```javascript
/**
 * Portfolio Configuration
 * Centralized configuration for easy maintenance
 * Loading from environment variables in production
 */

const CONFIG = {
  // Site Information
  site: {
    name: 'Brix Briongos',
    title: 'Full-Stack Developer & Computer Science Student',
    description: 'Computer Science student with expertise in full-stack development, database management, and system design.',
    url: window.location.origin,
    year: new Date().getFullYear()
  },

  // Contact Information
  contact: {
    email: process.env.RECIPIENT_EMAIL || 'contact@example.com',
    phone: '+63 9451842028',
    location: 'Philippines',
    timeZone: 'Philippines/Manila'
  },

  // Social Media Links
  social: {
    twitter: process.env.SOCIAL_TWITTER || '#',
    linkedin: process.env.SOCIAL_LINKEDIN || '#',
    github: process.env.SOCIAL_GITHUB || '#',
    instagram: process.env.SOCIAL_INSTAGRAM || '#',
    facebook: process.env.SOCIAL_FACEBOOK || '#',
    twitter_x: process.env.SOCIAL_TWITTER || '#' // X (formerly Twitter)
  },

  // Analytics
  analytics: {
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID || '',
    enabled: process.env.ENABLE_ANALYTICS === 'true'
  },

  // Portfolio Settings
  portfolio: {
    itemsPerPage: 12,
    filterCategories: ['Web Development', 'Database Design', 'API Development', 'System Design'],
    enableSearch: true,
    enableFilters: true
  },

  // Form Settings
  form: {
    recipientEmail: process.env.RECIPIENT_EMAIL || 'contact@example.com',
    submitTimeout: 5000,
    enableCaptcha: false,
    enableRateLimit: true
  },

  // Features
  features: {
    blog: process.env.ENABLE_BLOG === 'true' || false,
    darkMode: process.env.ENABLE_DARKMODE === 'true' || false,
    newsletter: false,
    search: true
  }
};

// Freeze configuration to prevent accidental modifications
Object.freeze(CONFIG);

export default CONFIG;
```

### How to Use in HTML

```html
<!-- In head or before main scripts -->
<script src="assets/js/config.js"></script>

<!-- Then in other scripts -->
<script>
  console.log(CONFIG.contact.email);
  document.querySelector('a.linkedin').href = CONFIG.social.linkedin;
</script>
```

---

## 3. UPDATED HTML HEADER TEMPLATE

### For All Pages (use this structure)

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  
  <!-- Replace with actual page title and description -->
  <title>Page Title - Brix Briongos</title>
  <meta name="description" content="152-character description goes here for SEO optimization.">
  <meta name="keywords" content="full-stack developer, web development, computer science">
  <meta name="author" content="Brix Briongos">
  
  <!-- Open Graph for Social Sharing -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://brixbriongos.netlify.app">
  <meta property="og:title" content="Page Title - Brix Briongos">
  <meta property="og:description" content="152-character description goes here.">
  <meta property="og:image" content="https://brixbriongos.netlify.app/assets/img/og-image.png">
  
  <!-- Favicons -->
  <link href="assets/img/favicon.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">
  
  <!-- Fonts with preload for performance -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

  <!-- CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="assets/css/main.css" rel="stylesheet">

  <!-- JSON-LD Schema Markup -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org/",
    "@type": "Person",
    "name": "Brix Briongos",
    "url": "https://brixbriongos.netlify.app",
    "image": "https://brixbriongos.netlify.app/assets/img/profile/profile.png",
    "sameAs": [
      "https://www.linkedin.com/in/yourprofile",
      "https://github.com/brixbriongos",
      "https://twitter.com/yourhandle"
    ],
    "jobTitle": "Full-Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Self-Employed/Freelance"
    }
  }
  </script>
</head>

<body>
  <!-- Content -->
</body>

</html>
```

---

## 4. SEO META TAGS FOR EACH PAGE

### index.html (Homepage)
```html
<title>Brix Briongos — Full-Stack Developer & Computer Science Student</title>
<meta name="description" content="Full-stack developer and 3rd-year computer science student specializing in web development, database design, and system architecture. Available for freelance projects and on-the-job training.">
<meta name="keywords" content="full-stack developer, web development, computer science, freelance developer, OJT">
```

### about.html
```html
<title>About Me - Brix Briongos | Full-Stack Developer</title>
<meta name="description" content="Learn about Brix Briongos, a passionate full-stack developer and computer science student at Mabini Colleges. Expertise in web development, database management, and innovative problem-solving.">
<meta name="keywords" content="about developer, computer science student, full-stack developer profile, developer portfolio">
```

### portfolio.html
```html
<title>My Projects Portfolio - Brix Briongos</title>
<meta name="description" content="Explore my portfolio showcasing clinic management systems, point-of-sale applications, IoT solutions, and full-stack web development projects with detailed case studies.">
<meta name="keywords" content="web projects, portfolio projects, development portfolio, clinic management system, point-of-sale, IoT projects">
```

### services.html
```html
<title>Services - Brix Briongos | Development & Consulting</title>
<meta name="description" content="Specialized services in full-stack web development, database design & optimization, RESTful API development, and technical consulting for startups and businesses.">
<meta name="keywords" content="web development services, database design, API development, technical consulting, freelance developer services">
```

### resume.html
```html
<title>Resume - Brix Briongos | Computer Science Student</title>
<meta name="description" content="Professional resume of Brix Briongos - listing education, technical skills, hands-on experience in web development, databases, and system design. Bachelor of Science in Computer Science.">
<meta name="keywords" content="resume, CV, developer resume, computer science graduate, technical skills, education background">
```

### contact.html
```html
<title>Contact Me - Brix Briongos</title>
<meta name="description" content="Get in touch with Brix Briongos for collaboration, project inquiries, or career opportunities. Open to freelance work, projects, and on-the-job training positions.">
<meta name="keywords" content="contact developer, hire developer, freelance opportunities, collaboration, get in touch">
```

---

## 5. NETLIFY.TOML UPDATED (with security headers)

```toml
[build]
  publish = "."
  command = "echo 'Static HTML site'"

# Form configuration
[[forms]]
  name = "contact"
  method = "POST"
  
[[forms]]
  name = "service-inquiry"
  method = "POST"

# Redirects
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# Security Headers
[[headers]]
  for = "/*"
  [headers.values]
    # Prevent clickjacking
    X-Frame-Options = "SAMEORIGIN"
    # Prevent MIME type sniffing
    X-Content-Type-Options = "nosniff"
    # Enable XSS protection
    X-XSS-Protection = "1; mode=block"
    # Referrer Policy
    Referrer-Policy = "strict-origin-when-cross-origin"
    # Permissions Policy
    Permissions-Policy = "geolocation=(), microphone=(), camera=()"

# CSP Header (adjust as needed)
[[headers]]
  for = "/*"
  [headers.values]
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline' https://code.jquery.com https://fonts.googleapis.com https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self'"

# Cache Control
[[headers]]
  for = "/*"
  [headers.values]
    Cache-Control = "public, max-age=3600"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

---

## 6. .ENV.LOCAL SETUP (For Local Development)

Create `.env.local` in your project root:

```bash
# Only for local development - DO NOT COMMIT
# Copy from .env.example and add your actual values

RECIPIENT_EMAIL=your-email@gmail.com
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password-here

SOCIAL_TWITTER=https://twitter.com/yourhandle
SOCIAL_LINKEDIN=https://www.linkedin.com/in/yourprofile
SOCIAL_GITHUB=https://github.com/brixbriongos
SOCIAL_INSTAGRAM=https://instagram.com/yourhandle
SOCIAL_FACEBOOK=https://www.facebook.com/yourprofile

GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

ENABLE_ANALYTICS=true
```

---

## 7. PACKAGE.JSON TEMPLATE (For Build Process)

```json
{
  "name": "brix-briongos-portfolio",
  "version": "1.0.0",
  "description": "Full-stack developer portfolio and resume website",
  "author": "Brix Briongos",
  "type": "module",
  "scripts": {
    "dev": "echo 'No build process configured yet'",
    "build": "echo 'Building portfolio...'",
    "test": "jest",
    "lint": "eslint assets/js/**/*.js",
    "format": "prettier --write .",
    "security": "npm audit"
  },
  "devDependencies": {
    "eslint": "^8.0.0",
    "prettier": "^3.0.0",
    "jest": "^29.0.0"
  },
  "dependencies": {
    "bootstrap": "^5.3.7"
  }
}
```

---

## 8. FORM SUBMISSION HANDLER UPDATE

### Updated `forms/contact.php` (use environment variable)

```php
<?php
error_reporting(0);
ini_set('display_errors', 0);
header('Content-Type: application/json; charset=utf-8');

// Check if form was submitted
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
    exit;
}

// Get and sanitize input
$name = isset($_POST['name']) ? trim(strip_tags($_POST['name'])) : '';
$email = isset($_POST['email']) ? trim(strip_tags($_POST['email'])) : '';
$subject = isset($_POST['subject']) ? trim(strip_tags($_POST['subject'])) : '';
$message = isset($_POST['message']) ? trim(strip_tags($_POST['message'])) : '';

// Validate
if (empty($name)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Name is required']);
    exit;
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Valid email is required']);
    exit;
}

if (empty($subject)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Subject is required']);
    exit;
}

if (empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Message is required']);
    exit;
}

// IMPORTANT: Use environment variable instead of hardcoded email
$to = getenv('RECIPIENT_EMAIL') ?: 'contact@example.com';

// ... rest of the code remains the same
```

---

## 9. GITHUB LINKS HELPER

### Update all pages with this helper script

```html
<!-- Add this before closing </body> tag -->
<script>
  // Social Links Configuration
  const socialLinks = {
    twitter: 'https://twitter.com/yourhandle',
    facebook: 'https://www.facebook.com/yourprofile',
    instagram: 'https://instagram.com/yourhandle',
    linkedin: 'https://www.linkedin.com/in/yourprofile',
    github: 'https://github.com/brixbriongos'
  };

  // Update all social links on the page
  document.querySelectorAll('a.twitter').forEach(el => {
    el.href = socialLinks.twitter;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
  });

  document.querySelectorAll('a.facebook').forEach(el => {
    el.href = socialLinks.facebook;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
  });

  document.querySelectorAll('a.instagram').forEach(el => {
    el.href = socialLinks.instagram;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
  });

  document.querySelectorAll('a.linkedin').forEach(el => {
    el.href = socialLinks.linkedin;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
  });

  // Add GitHub link to footer if needed
  if (document.querySelector('.social-links')) {
    // Implementation depends on your structure
  }
</script>
```

---

## 10. QUICK START IMPLEMENTATION GUIDE

### Week 1 - Critical Fixes
```bash
# 1. Create environment file
cp .env.example .env.local

# 2. Update .env.local with your actual values
# - Email addresses
# - Social media URLs
# - Analytics ID

# 3. Update HTML pages
# - Add meta descriptions
# - Add social media links

# 4. Test form submission
# - Fill out contact form
# - Check browser console for logs
# - Verify email received
```

### Week 2 - Code Quality
```bash
# 1. Create config.js (centralize configuration)
# 2. Add ESLint configuration
# 3. Add Prettier configuration
# 4. Update package.json with scripts
# 5. Run lint and format checks
```

### Week 3 - Advanced
```bash
# 1. Set up GitHub Actions for CI/CD
# 2. Add automated testing
# 3. Add security scanning
# 4. Set up monitoring
```

---

