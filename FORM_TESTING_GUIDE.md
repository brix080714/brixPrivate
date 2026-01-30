# Contact Form Testing Guide

## ✅ Current Status

Your portfolio contact form is now **fully configured** and ready to receive submissions!

## 📝 How to Test the Contact Form

### Manual Testing (Recommended)

1. **Open the contact page:**
   - Visit: https://brixbriongos.netlify.app/contact.html

2. **Fill out the form with test data:**
   - Name: "Test User"
   - Email: "your-email@gmail.com" (use your actual email to receive the auto-reply)
   - Subject: "Testing Contact Form"
   - Message: "This is a test message to verify the form is working"

3. **Click "Send Message"**

4. **Check Netlify Dashboard:**
   - Go to: https://app.netlify.com
   - Select your "brixbriongos" site
   - Click "Forms" tab
   - You should see your submission in the "contact" form!

### Expected Behavior

**What happens when you submit:**
- Form shows "Loading..." while submitting
- On success: Shows "Your message has been sent. Thank you!"
- Form resets automatically
- Submission appears in Netlify Forms dashboard within seconds

## 📧 To Receive Email Notifications

### Option 1: Enable Netlify Built-in Notifications (EASIEST)

1. Go to https://app.netlify.com
2. Select "brixbriongos" site
3. Click "Forms" tab
4. Click the "contact" form
5. Click "Manage notifications" or "Create notification"
6. Choose "Email notification"
7. Enter: **brixbriongos14@gmail.com**
8. Save

✅ **Done!** Now you'll receive an email for every form submission.

### Option 2: Gmail Integration (Advanced)

If you want to set up the serverless function for Gmail sending:

1. Go to https://app.netlify.com
2. Site Settings → Build & Deploy → Environment
3. Add these environment variables:
   - `GMAIL_USER`: brixbriongos14@gmail.com
   - `GMAIL_APP_PASSWORD`: [Generate from Gmail app passwords]
   - `RECIPIENT_EMAIL`: brixbriongos14@gmail.com

**To generate Gmail app password:**
1. Go to https://myaccount.google.com/security
2. Enable "2-Step Verification" if not enabled
3. Search for "App passwords"
4. Select: Mail, Windows Computer (or your OS)
5. Copy the 16-character password
6. Paste into Netlify environment variable

## 🔧 Form Configuration Files

- **contact.html** - Main contact form (name="contact")
- **service-details.html** - Service inquiry form (name="service-inquiry")
- **netlify.toml** - Netlify configuration with form declarations
- **functions/contact.js** - Optional serverless function for advanced email handling

## ✨ Features Enabled

✅ Honeypot spam protection
✅ Mobile responsive
✅ Client-side validation
✅ Success/error messages
✅ Netlify Forms dashboard tracking
✅ Optional email notifications
✅ Auto-reply capability (via function)

## 📍 Form Names

Make sure these match in HTML forms:
- **contact** - contact.html form
- **service-inquiry** - service-details.html form

## 🐛 Troubleshooting

**Form not submitting?**
- Check form name matches HTML (name="contact")
- Clear browser cache and try again
- Check browser console for JavaScript errors

**Not seeing submissions in Netlify?**
- Wait 10-20 seconds after submission
- Refresh the page
- Check if form name is correct in HTML and netlify.toml
- Verify you're in the correct site in Netlify dashboard

**Not receiving emails?**
- First enable notifications in Netlify Forms section
- Check spam folder in Gmail
- Verify email address in notification settings

## 📊 Monitoring

Check form submissions anytime at:
https://app.netlify.com → Your Site → Forms → contact

Each submission shows:
- Submitter's name & email
- Subject line
- Message content
- Submission date & time
- Spam status
