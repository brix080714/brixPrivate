#!/usr/bin/env node

/**
 * Test Netlify Forms submission
 * This script simulates submitting the contact form to Netlify
 */

const http = require('http');
const https = require('https');
const querystring = require('querystring');

const formData = querystring.stringify({
  name: 'Test User',
  email: 'testuser@example.com',
  subject: 'Test Contact Form Submission',
  message: 'This is a test message to verify the contact form is working properly. Please confirm if this email was received.'
});

const options = {
  hostname: 'brixbriongos.netlify.app',
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(formData),
    'Referer': 'https://brixbriongos.netlify.app/contact.html'
  }
};

console.log('Testing Netlify Forms submission...');
console.log('URL: https://brixbriongos.netlify.app/');
console.log('Form Name: contact');
console.log('Data:', {
  name: 'Test User',
  email: 'testuser@example.com',
  subject: 'Test Contact Form Submission',
  message: 'This is a test message...'
});
console.log('---\n');

const req = https.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log('Headers:', res.headers);
  
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    if (res.statusCode === 200 || res.statusCode === 303 || res.statusCode === 302) {
      console.log('\n✅ Form submission successful!');
      console.log('The form data has been sent to Netlify.');
      console.log('\nNext steps:');
      console.log('1. Check your Netlify dashboard (app.netlify.com)');
      console.log('2. Go to your site → Forms → contact');
      console.log('3. You should see the test submission there');
      console.log('\nTo enable email notifications:');
      console.log('1. Click "Manage notifications"');
      console.log('2. Add email: brixbriongos14@gmail.com');
      console.log('3. All future submissions will be emailed to you');
    } else {
      console.log('\n❌ Unexpected status code');
      console.log('Response:', data);
    }
  });
});

req.on('error', (e) => {
  console.error('❌ Error during form submission:', e.message);
  console.log('\nTroubleshooting:');
  console.log('1. Check your internet connection');
  console.log('2. Verify the site is deployed: https://brixbriongos.netlify.app');
  console.log('3. Check that the form name matches "contact" in contact.html');
});

req.write(formData);
req.end();
