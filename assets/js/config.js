/**
 * Portfolio Configuration - Centralized Configuration File
 * All social media links and configuration in one place
 * Easy to maintain and update across all pages
 */

const CONFIG = {
  // Site Information
  site: {
    name: 'Brix Briongos',
    title: 'Full-Stack Developer & Computer Science Student',
    description: 'Computer Science student with expertise in full-stack development, database management, and system design.',
    url: 'https://brixbriongos.netlify.app',
    year: new Date().getFullYear(),
    email: 'brixbriongos14@gmail.com'
  },

  // Contact Information
  contact: {
    email: 'brixbriongos14@gmail.com',
    phone: '+63 9451842028',
    location: 'Philippines',
    timeZone: 'Philippines/Manila'
  },

  // Social Media Links - UPDATE THESE WITH YOUR ACTUAL URLs
  social: {
    twitter: 'https://twitter.com/brixbriongos',         // Update with your Twitter profile
    linkedin: 'https://www.linkedin.com/in/brix-briongos', // Update with your LinkedIn profile
    github: 'https://github.com/brixbriongos',
    instagram: 'https://instagram.com/brixbriongos',      // Update with your Instagram profile
    facebook: 'https://www.facebook.com/brixbriongos',    // Update with your Facebook profile
  },

  // Portfolio Settings
  portfolio: {
    itemsPerPage: 12,
    filterCategories: ['Web Development', 'Database Design', 'API Development', 'System Design'],
    enableSearch: false,
    enableFilters: true,
    resumeUrl: 'assets/docs/brix resume.pdf'  // TODO: Add link to your resume PDF (e.g., 'assets/docs/resume.pdf')
  },

  // Form Settings
  form: {
    recipientEmail: 'brixbriongos14@gmail.com',
    submitTimeout: 5000,
    enableSpamProtection: true,
    enableRateLimit: true
  },

  // Analytics
  analytics: {
    googleAnalyticsId: 'G-XXXXXXXXXX',  // TODO: Replace with actual Google Analytics ID (format: G-XXXXXXXXXX)
    enabled: false  // Set to true after adding Google Analytics ID
  },

  // Features
  features: {
    blog: false,
    darkMode: false,
    newsletter: false,
    search: false,
    testimonials: false
  }
};

/**
 * Update Social Links in the DOM
 * Call this function after page load to update all social media links
 */
function initializeSocialLinks() {
  // Update all social links with proper attributes
  document.querySelectorAll('a.twitter').forEach(el => {
    el.href = CONFIG.social.twitter;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
    el.title = 'Visit me on Twitter';
  });

  document.querySelectorAll('a.linkedin').forEach(el => {
    el.href = CONFIG.social.linkedin;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
    el.title = 'Visit me on LinkedIn';
  });

  document.querySelectorAll('a.github').forEach(el => {
    el.href = CONFIG.social.github;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
    el.title = 'View my GitHub profile';
  });

  document.querySelectorAll('a.instagram').forEach(el => {
    el.href = CONFIG.social.instagram;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
    el.title = 'Visit me on Instagram';
  });

  document.querySelectorAll('a.facebook').forEach(el => {
    el.href = CONFIG.social.facebook;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
    el.title = 'Visit me on Facebook';
  });

  // Update year in footer
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = CONFIG.site.year;
  }

  // Update contact email link
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
  emailLinks.forEach(el => {
    el.href = `mailto:${CONFIG.contact.email}`;
  });
}

/**
 * Initialize Resume Download
 */
function initializeResumeDownload() {
  const downloadBtn = document.getElementById('downloadResume');
  if (!downloadBtn) return;

  if (!CONFIG.portfolio.resumeUrl) {
    downloadBtn.disabled = true;
    downloadBtn.style.opacity = '0.5';
    downloadBtn.title = 'Resume URL not configured. Add it to config.js';
    downloadBtn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Resume URL not configured. Please ask the developer to set it up.');
    });
    return;
  }

  downloadBtn.href = CONFIG.portfolio.resumeUrl;
  downloadBtn.addEventListener('click', () => {
    console.log('Resume download initiated:', CONFIG.portfolio.resumeUrl);
  });
}

/**
 * Initialize Google Analytics
 */
function initializeGoogleAnalytics() {
  if (!CONFIG.analytics.enabled || !CONFIG.analytics.googleAnalyticsId) {
    console.log('Google Analytics not configured. Add ID in config.js and set enabled to true.');
    return;
  }

  // Load Google Analytics Script
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', CONFIG.analytics.googleAnalyticsId, {
    'page_path': window.location.pathname,
    'page_title': document.title
  });

  // Dynamically load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${CONFIG.analytics.googleAnalyticsId}`;
  document.head.appendChild(script);

  console.log('Google Analytics initialized with ID:', CONFIG.analytics.googleAnalyticsId);
}

/**
 * Enhance form feedback UX
 */
function enhanceFormFeedback() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const sentMsg = form.querySelector('.sent-message');
  const errorMsg = form.querySelector('.error-message');

  // Add CSS classes for better UX
  if (sentMsg) {
    sentMsg.className = 'sent-message alert alert-success alert-dismissible fade show mt-3';
    sentMsg.role = 'alert';
    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'btn-close';
    closeBtn.setAttribute('data-bs-dismiss', 'alert');
    sentMsg.appendChild(closeBtn);
  }

  if (errorMsg) {
    errorMsg.className = 'error-message alert alert-danger alert-dismissible fade show mt-3';
    errorMsg.role = 'alert';
  }
}

/**
 * Add lazy loading to images
 */
function initializeLazyLoading() {
  // Add loading="lazy" attribute to images that don't have it
  document.querySelectorAll('img:not([loading])').forEach(img => {
    // Skip profile images and critical images
    if (!img.classList.contains('profile-photo') && !img.classList.contains('logo')) {
      img.loading = 'lazy';
    }
  });

  console.log('Lazy loading initialized for images.');
}

// Initialize all features when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    initializeSocialLinks();
    initializeResumeDownload();
    initializeGoogleAnalytics();
    enhanceFormFeedback();
    initializeLazyLoading();
  });
} else {
  initializeSocialLinks();
  initializeResumeDownload();
  initializeGoogleAnalytics();
  enhanceFormFeedback();
  initializeLazyLoading();
}

// Freeze configuration to prevent accidental modifications
Object.freeze(CONFIG);
