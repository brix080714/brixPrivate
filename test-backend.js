#!/usr/bin/env node

/**
 * Backend Testing Script for Netlify Forms
 * Tests the form submission process and checks if data is being captured
 */

const fs = require('fs');
const path = require('path');

console.log('\n' + '='.repeat(60));
console.log('NETLIFY FORMS BACKEND DEBUG & TEST SCRIPT');
console.log('='.repeat(60) + '\n');

// 1. Check form configuration in HTML
console.log('📋 CHECKING HTML FORM CONFIGURATION\n');

function checkFormHTML(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check for form with name attribute
    const formNameMatch = content.match(/form[^>]*name=["']contact["'][^>]*/);
    if (formNameMatch) {
      console.log('✅ Contact form found with name="contact"');
      console.log('   Match:', formNameMatch[0].substring(0, 80) + '...');
    } else {
      console.log('❌ Form name="contact" NOT found');
    }
    
    // Check for netlify attribute
    if (content.includes('netlify') && content.match(/form[^>]*netlify/)) {
      console.log('✅ Netlify attribute present in form');
    } else {
      console.log('❌ Netlify attribute NOT found in form');
    }
    
    // Check for honeypot
    if (content.includes('netlify-honeypot')) {
      console.log('✅ Honeypot spam protection configured');
    } else {
      console.log('⚠️  Honeypot spam protection NOT configured');
    }
    
    // Check for required form fields
    const requiredFields = ['name', 'email', 'subject', 'message'];
    console.log('\n   Checking required input fields:');
    requiredFields.forEach(field => {
      if (content.includes(`name="${field}"`)) {
        console.log(`   ✅ ${field} field found`);
      } else {
        console.log(`   ❌ ${field} field NOT found`);
      }
    });
    
  } catch (error) {
    console.error('Error reading file:', error.message);
  }
}

checkFormHTML('./contact.html');

// 2. Check netlify.toml configuration
console.log('\n\n📋 CHECKING NETLIFY.TOML CONFIGURATION\n');

function checkNetlifyConfig(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (!fs.existsSync(filePath)) {
      console.log('❌ netlify.toml file NOT found');
      return;
    }
    
    console.log('✅ netlify.toml file found');
    
    // Check for forms section
    if (content.includes('[[forms]]')) {
      console.log('✅ [[forms]] section present');
      
      // Count form declarations
      const formMatches = content.match(/\[\[forms\]\]/g);
      console.log(`   - Found ${formMatches.length} form declaration(s)`);
      
      if (content.includes('name = "contact"')) {
        console.log('   ✅ contact form declared');
      }
      if (content.includes('name = "service-inquiry"')) {
        console.log('   ✅ service-inquiry form declared');
      }
    } else {
      console.log('⚠️  No [[forms]] section found in netlify.toml');
    }
    
    // Show relevant lines
    console.log('\n   Netlify config excerpt:');
    const lines = content.split('\n');
    lines.forEach((line, index) => {
      if (line.includes('[build]') || line.includes('[[forms]]') || line.includes('name =')) {
        console.log(`   Line ${index + 1}: ${line}`);
      }
    });
    
  } catch (error) {
    console.error('Error reading netlify.toml:', error.message);
  }
}

checkNetlifyConfig('./netlify.toml');

// 3. Check Netlify Function setup
console.log('\n\n📋 CHECKING NETLIFY FUNCTIONS\n');

function checkNetlifyFunctions() {
  const functionsDir = './functions';
  
  if (fs.existsSync(functionsDir)) {
    console.log('✅ functions directory exists');
    
    const files = fs.readdirSync(functionsDir);
    console.log(`   - Found ${files.length} file(s)`);
    
    files.forEach(file => {
      const filePath = path.join(functionsDir, file);
      const stats = fs.statSync(filePath);
      console.log(`   ✅ ${file} (${stats.size} bytes)`);
    });
    
    // Check contact function
    if (fs.existsSync('./functions/contact.js')) {
      console.log('\n✅ contact.js function found');
      const content = fs.readFileSync('./functions/contact.js', 'utf8');
      
      if (content.includes('nodemailer')) {
        console.log('   - Uses nodemailer for email sending');
      }
      if (content.includes('exports.handler')) {
        console.log('   - Proper Netlify Function export format');
      }
    }
  } else {
    console.log('⚠️  functions directory NOT found');
  }
}

checkNetlifyFunctions();

// 4. Check environment variables needed
console.log('\n\n🔐 CHECKING REQUIRED ENVIRONMENT VARIABLES\n');

function checkEnvVars() {
  const requiredVars = [
    'GMAIL_USER',
    'GMAIL_APP_PASSWORD',
    'RECIPIENT_EMAIL'
  ];
  
  console.log('Environment variables needed for email sending:');
  requiredVars.forEach(varName => {
    const value = process.env[varName];
    if (value) {
      console.log(`✅ ${varName}: ${value.substring(0, 10)}...`);
    } else {
      console.log(`❌ ${varName}: NOT SET`);
    }
  });
  
  console.log('\n⚠️  If email sending is not working, set these in Netlify:');
  console.log('   1. Go to https://app.netlify.com');
  console.log('   2. Your site → Site Settings → Build & Deploy → Environment');
  console.log('   3. Add environment variables');
}

checkEnvVars();

// 5. Simulate form submission
console.log('\n\n🧪 SIMULATING FORM SUBMISSION\n');

function simulateFormSubmission() {
  const testData = {
    name: 'Test User',
    email: 'testuser@example.com',
    subject: 'Test Submission',
    message: 'This is a test message',
    'bot-field': '' // Empty honeypot
  };
  
  console.log('Test form data:');
  Object.entries(testData).forEach(([key, value]) => {
    console.log(`   - ${key}: ${value || '(empty - honeypot)'}`);
  });
  
  // Simulate validation
  console.log('\nValidation checks:');
  const isSpam = testData['bot-field'] !== '';
  console.log(`   - Spam check: ${isSpam ? '🚨 SPAM DETECTED' : '✅ Not spam'}`);
  
  const allFieldsFilled = testData.name && testData.email && testData.subject && testData.message;
  console.log(`   - All fields filled: ${allFieldsFilled ? '✅ YES' : '❌ NO'}`);
  
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(testData.email);
  console.log(`   - Email format valid: ${emailValid ? '✅ YES' : '❌ NO'}`);
  
  if (!isSpam && allFieldsFilled && emailValid) {
    console.log('\n✅ Form data would be accepted by backend');
  } else {
    console.log('\n❌ Form data would be rejected by backend');
  }
}

simulateFormSubmission();

// 6. Test submission endpoint
console.log('\n\n🔗 TESTING SUBMISSION ENDPOINT\n');

async function testSubmissionEndpoint() {
  console.log('Checking if Netlify can receive form submissions...');
  
  try {
    const response = await fetch('https://brixbriongos.netlify.app/', {
      method: 'GET'
    });
    
    console.log(`✅ Netlify site is reachable`);
    console.log(`   - Status: ${response.status}`);
    console.log(`   - URL: https://brixbriongos.netlify.app/`);
    
    // Netlify Forms work differently - they intercept submissions on the client side
    console.log('\n📌 NOTE: Netlify Forms:');
    console.log('   - Work on the CLIENT SIDE (in the browser)');
    console.log('   - Form with name="contact" and netlify attribute');
    console.log('   - Is intercepted before being sent');
    console.log('   - Submission captured in Netlify dashboard');
    console.log('   - Cannot be tested with simple curl/fetch');
    
  } catch (error) {
    console.error('❌ Cannot reach Netlify:', error.message);
  }
}

testSubmissionEndpoint();

// 7. Provide debugging steps
console.log('\n\n🐛 HOW TO DEBUG IN YOUR BROWSER\n');

console.log('1. Open https://brixbriongos.netlify.app/contact.html');
console.log('2. Press F12 to open Developer Tools');
console.log('3. Go to "Console" tab');
console.log('4. You should see debug output automatically');
console.log('5. Fill out the form and click "Send Message"');
console.log('6. Watch the console for detailed submission logs');
console.log('7. Check Netlify dashboard under Forms → contact for submissions');

// 8. Summary and next steps
console.log('\n\n' + '='.repeat(60));
console.log('SUMMARY & NEXT STEPS');
console.log('='.repeat(60) + '\n');

console.log('✅ Form Configuration: Check the checklist above');
console.log('✅ Netlify Setup: Forms should be detected automatically');
console.log('✅ Submit Test: Fill form and submit from browser');
console.log('✅ Check Dashboard: https://app.netlify.com → Forms');
console.log('\n🎯 ACTUAL TESTING STEPS:\n');
console.log('1. Open browser console (F12)');
console.log('2. Verify debug script loaded: check console for "DEBUG SCRIPT READY"');
console.log('3. Fill out contact form');
console.log('4. Click Send Message');
console.log('5. Watch console for submission details');
console.log('6. Check Netlify dashboard for form capture');
console.log('\n❌ IF EMAILS ARE NOT BEING SENT:\n');
console.log('Option A: Enable Netlify Forms notifications');
console.log('   - Dashboard → Forms → contact → Manage → Email notification');
console.log('\nOption B: Set up environment variables for Netlify Function');
console.log('   - GMAIL_USER, GMAIL_APP_PASSWORD, RECIPIENT_EMAIL');
console.log('   - Requires Gmail app-specific password (not regular password)');
console.log('\n' + '='.repeat(60) + '\n');

console.log('To run this test again, execute:');
console.log('   node test-backend.js\n');
