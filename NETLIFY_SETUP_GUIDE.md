# Netlify Setup Guide - Contact Form Email Notifications

This guide walks you through setting up email notifications for your Netlify contact form so you receive member submissions directly in your inbox.

---

## 📋 Prerequisites

- ✅ Portfolio deployed on Netlify (you already have this)
- ✅ Contact form with Netlify Forms enabled (you already have this)
- ✅ Active email account to receive notifications

---

## 🔧 Step-by-Step Setup

### **Step 1: Log in to Netlify Dashboard**

1. Open [netlify.com](https://www.netlify.com) in your browser
2. Click **Log In** at the top right
3. Log in with your credentials (email/password, GitHub, GitLab, or Bitbucket)

---

### **Step 2: Select Your Site**

1. Once logged in, you'll see your **Sites** dashboard
2. Click on your portfolio site: **brixbriongos.netlify.app**
3. You'll be taken to your site's overview page

---

### **Step 3: Access Forms Settings**

1. From the left sidebar, look for **Forms** section (if not visible, scroll down)
2. Click **Forms**
3. You'll see a list of all forms on your site
4. Look for the **"contact"** form (your contact form)
5. Click on it to open the form settings

---

### **Step 4: Configure Email Notifications**

#### **Method 1: Using Netlify UI (Easiest)**

1. In the contact form details page, look for **"Form notifications"** section
2. Click **"Add notification"** or the **"+"** button
3. Select **"Email notification"** from the dropdown
4. Enter your email address where you want to receive submissions
   - Example: `brixbriongos14@gmail.com`
5. You can optionally customize the email subject/body
6. Click **Save**

#### **Method 2: Using netlify.toml (Alternative)**

If you prefer to configure in code, add this to your `netlify.toml`:

```toml
[[forms]]
  name = "contact"
  
  [[forms.notification]]
    recipient = "brixbriongos14@gmail.com"
    subject = "New Contact Form Submission"
```

Then commit and push to GitHub (auto-deploys to Netlify).

---

### **Step 5: Test the Form**

1. Go to your portfolio: [brixbriongos.netlify.app/contact.html](https://brixbriongos.netlify.app/contact.html)
2. Fill out the contact form with test data:
   - **Name**: Test User
   - **Email**: your-test-email@gmail.com
   - **Subject**: Test Message
   - **Message**: This is a test submission
3. Click **"Send Message"**
4. You should see a success message on the page

---

### **Step 6: Verify Email Received**

1. Check your email inbox (and spam folder just in case)
2. You should receive an email from Netlify with:
   - The form submission details
   - Sender's name, email, subject, and message
3. This confirms everything is working! ✅

---

## ✨ Additional Configuration Options

### **A. Multiple Email Recipients**

If you want to send notifications to multiple emails:

**In Netlify UI:**
- Add multiple email notifications (click "Add notification" again)

**In netlify.toml:**
```toml
[[forms]]
  name = "contact"
  
  [[forms.notification]]
    recipient = "brixbriongos14@gmail.com"
    subject = "New Contact Form Submission"
    
  [[forms.notification]]
    recipient = "backup@email.com"
    subject = "New Contact Form Submission"
```

### **B. Custom Email Subject**

Default subject: `"New submission from your [Form Name] form"`

To customize, in the notification settings, edit the **Subject** field.

### **C. Email Confirmation to Sender**

If you want to automatically send a confirmation email to the person who filled the form:

1. In the form notification settings, look for **"Auto-reply"** option
2. Toggle it ON
3. Enter your confirmation message

---

## 🐛 Troubleshooting

### **❌ Not receiving emails?**

**Problem**: Submitted form but no email arrives

**Solutions**:
1. Check your spam/junk folder
2. Verify the email address in Netlify settings is correct
3. Make sure the contact form actually submitted (check Netlify Forms dashboard for submissions)
4. Check if Netlify Forms is detecting form submissions:
   - Go to Netlify Dashboard → Forms
   - If you see "0 submissions", the form isn't being detected
   - Ensure your form has `name="contact"` and `method="POST" netlify`

### **❌ Form doesn't submit?**

**Problem**: Click send but nothing happens

**Solutions**:
1. Check browser console (F12 → Console tab) for errors
2. Ensure all required fields are filled
3. Clear browser cache and refresh page
4. Test on a different browser

### **❌ Netlify not detecting form?**

**Problem**: Form settings show "0 submissions ever"

**Solutions**:
1. Verify form tag in HTML:
   ```html
   <form name="contact" method="POST" netlify netlify-honeypot="bot-field">
   ```
2. Must have `netlify` attribute in form tag
3. Redeploy site after adding/changing form attributes
4. Wait a few minutes for Netlify to detect the form

---

## 📊 Monitoring Form Submissions

To see all form submissions:

1. Log in to Netlify Dashboard
2. Select your site
3. Go to **Forms** section
4. Click on **contact** form
5. You'll see:
   - Total number of submissions
   - List of all submissions with timestamps
   - Ability to view/export submission data
   - Mark submissions as spam or delete

---

## 🔒 Security Notes

- **Spam Protection**: Your form includes `netlify-honeypot` attribute which helps block spam bots
- **No CSRF**: Netlify handles CSRF protection automatically
- **Email Privacy**: Your email address receiving notifications is not visible to form submitters

---

## 📝 Quick Reference

| Setting | Value |
|---------|-------|
| Form Name | `contact` |
| Recipient Email | `brixbriongos14@gmail.com` |
| Notification Type | Email |
| Auto-Reply | Optional |
| Spam Filter | Enabled (honeypot) |

---

## ✅ Final Checklist

- [ ] Logged into Netlify Dashboard
- [ ] Found your site (brixbriongos.netlify.app)
- [ ] Located the contact form in Forms section
- [ ] Added email notification
- [ ] Entered correct recipient email
- [ ] Tested form submission
- [ ] Received test email in inbox
- [ ] Checked Netlify Forms dashboard for submission

---

## 🆘 Need Help?

- **Netlify Forms Documentation**: https://docs.netlify.com/forms/overview/
- **Netlify Support**: https://support.netlify.com
- **Contact Me**: brixbriongos14@gmail.com

---

**Status**: ✅ Form notifications = **READY TO ENABLE**

Next step: Follow Steps 1-6 above to activate email notifications on your Netlify account.
