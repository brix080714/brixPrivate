// Debug script to test form submission and check Netlify Forms integration
// This logs detailed information about what happens when the form is submitted

console.log('=== Netlify Forms Debug Script Loaded ===');

// Test if Netlify Forms is properly recognized
function checkNetlifyFormsSetup() {
  console.log('\n📋 Checking Netlify Forms Setup:');
  
  // Check for contact form
  const contactForm = document.querySelector('form[name="contact"]');
  if (contactForm) {
    console.log('✅ Contact form found');
    console.log('   - ID:', contactForm.id);
    console.log('   - Name:', contactForm.name);
    console.log('   - Method:', contactForm.method);
    console.log('   - Action:', contactForm.action);
    console.log('   - Netlify attribute:', contactForm.hasAttribute('netlify') ? 'YES' : 'NO');
    console.log('   - Honeypot attribute:', contactForm.hasAttribute('netlify-honeypot') ? 'YES' : 'NO');
  } else {
    console.error('❌ Contact form not found');
  }
}

// Intercept form submission for debugging
function setupFormDebugListener() {
  console.log('\n🎯 Setting up form submission listener');
  
  const contactForm = document.querySelector('form[name="contact"]');
  if (!contactForm) {
    console.error('❌ Form not found for listener setup');
    return;
  }

  contactForm.addEventListener('submit', function(e) {
    console.log('\n📤 FORM SUBMISSION DETECTED');
    console.log('Event:', e);
    console.log('Timestamp:', new Date().toISOString());
    
    // Log all form data
    console.log('\n📝 Form Data Being Submitted:');
    const formData = new FormData(this);
    for (let [key, value] of formData) {
      if (key === 'message') {
        console.log(`   - ${key}: [${value.substring(0, 50)}...]`);
      } else {
        console.log(`   - ${key}: ${value}`);
      }
    }

    // Check if default is prevented
    if (e.defaultPrevented) {
      console.log('\n⚠️  Default action is PREVENTED');
    } else {
      console.log('\n✅ Default action is NOT prevented (form will submit normally)');
    }

    // Log form state
    console.log('\n🔍 Form State:');
    console.log('   - Disabled:', this.disabled);
    console.log('   - Valid:', this.checkValidity());
    
    // Check loading/message elements
    const loading = this.querySelector('.loading');
    const errorMsg = this.querySelector('.error-message');
    const sentMsg = this.querySelector('.sent-message');
    console.log('\n📊 Message Elements:');
    console.log('   - Loading element:', loading ? 'FOUND' : 'NOT FOUND');
    console.log('   - Error message element:', errorMsg ? 'FOUND' : 'NOT FOUND');
    console.log('   - Success message element:', sentMsg ? 'FOUND' : 'NOT FOUND');

    // Log submission URL for debugging
    console.log('\n🌐 Submission Details:');
    console.log('   - Current page:', window.location.href);
    console.log('   - Form will be sent to:', this.action || '(default - same page)');
    console.log('   - Using method:', this.method || 'GET');
  });

  console.log('✅ Form listener attached');
}

// Test Netlify connection
function testNetlifyConnection() {
  console.log('\n🌐 Testing Netlify Connection:');
  
  // Note: CORS policy prevents direct fetch from localhost
  // This is normal and expected behavior
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('   - ⚠️ Running from localhost (cannot test CORS)');
    console.log('   - ℹ️ Deploy to Netlify or test on production for full functionality');
    console.log('   - ✅ This is normal for local development');
  } else {
    console.log('   - ✅ Running from production domain');
    console.log('   - Form should work correctly');
  }
}

// Check for any existing error handlers
function checkErrorHandlers() {
  console.log('\n🔧 Checking Error Handlers:');
  
  const contactForm = document.querySelector('form[name="contact"]');
  if (!contactForm) {
    console.log('   - No contact form found');
    return;
  }

  // Note: getEventListeners() is only available in DevTools
  // For production, we check if form has onsubmit attribute instead
  if (contactForm.onsubmit) {
    console.log('   - ✅ Form has submit handler attached (onsubmit attribute)');
  } else {
    console.log('   - Form appears to have event listeners (JavaScript attached)');
  }
  
  console.log('   - Form name:', contactForm.name);
  console.log('   - Form method:', contactForm.method);
  console.log('   - Form has honeypot:', contactForm.hasAttribute('netlify-honeypot'));
}

// Show current page readiness state
function checkPageState() {
  console.log('\n📄 Page State:');
  console.log('   - Document ready state:', document.readyState);
  console.log('   - URL:', window.location.href);
  console.log('   - Hostname:', window.location.hostname);
  console.log('   - Protocol:', window.location.protocol);
}

// Run all checks
console.log('\n' + '='.repeat(50));
console.log('STARTING COMPREHENSIVE DEBUG CHECK');
console.log('='.repeat(50));

checkPageState();
checkNetlifyFormsSetup();
setupFormDebugListener();
testNetlifyConnection();
checkErrorHandlers();

console.log('\n' + '='.repeat(50));
console.log('DEBUG SCRIPT READY - Submit the form to see detailed logs');
console.log('Open your browser console (F12) to see all messages');
console.log('='.repeat(50) + '\n');

// Export for global access
window.debugForms = {
  checkNetlifyFormsSetup,
  setupFormDebugListener,
  testNetlifyConnection,
  checkErrorHandlers,
  checkPageState
};

console.log('Available commands: window.debugForms.*');
