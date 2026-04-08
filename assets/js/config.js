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
    twitter: 'https://twitter.com/yourhandle',        // TODO: Replace with actual Twitter URL
    linkedin: 'https://www.linkedin.com/in/yourprofile', // TODO: Replace with actual LinkedIn URL
    github: 'https://github.com/brixbriongos',
    instagram: 'https://instagram.com/yourhandle',     // TODO: Replace with actual Instagram URL
    facebook: 'https://www.facebook.com/yourprofile',  // TODO: Replace with actual Facebook URL
  },

  // Portfolio Settings
  portfolio: {
    itemsPerPage: 12,
    filterCategories: ['Web Development', 'Database Design', 'API Development', 'System Design'],
    enableSearch: false,
    enableFilters: true
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
    googleAnalyticsId: '',  // TODO: Add your Google Analytics ID
    enabled: false
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

// Initialize social links when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeSocialLinks);
} else {
  initializeSocialLinks();
}

// Freeze configuration to prevent accidental modifications
Object.freeze(CONFIG);
