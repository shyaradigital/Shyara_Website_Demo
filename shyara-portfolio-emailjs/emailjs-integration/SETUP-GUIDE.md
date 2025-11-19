# EmailJS Setup Guide

## Complete EmailJS Integration Instructions

### Prerequisites
- EmailJS account (free tier: 100 emails/month)
- Email account (Gmail, Outlook, etc.) to receive form submissions

---

## Step 1: Create EmailJS Account

1. Visit [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

---

## Step 2: Create Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for beginners)
   - **Outlook**
   - **Custom SMTP**
4. Follow the connection steps:
   - For Gmail: Authorize EmailJS to access your Gmail
   - For Outlook: Sign in with Microsoft account
5. **Save your Service ID** (e.g., `service_xxbj3sv`)

---

## Step 3: Create Email Template

1. Go to **Email Templates** in dashboard
2. Click **Create New Template**
3. Use this template structure:

**Template Name:** Contact Form Submission

**Subject:**
```
New Contact Form Submission from {{name}}
```

**Content (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #a259f7; color: white; padding: 20px; text-align: center; }
    .content { background: #f9f9f9; padding: 20px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #555; }
    .value { color: #333; }
    .message-box { background: white; padding: 15px; border-left: 4px solid #a259f7; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Contact Form Submission</h2>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name:</div>
        <div class="value">{{name}}</div>
      </div>
      <div class="field">
        <div class="label">Email:</div>
        <div class="value">{{from_email}}</div>
      </div>
      <div class="field">
        <div class="label">Phone:</div>
        <div class="value">{{phone}}</div>
      </div>
      <div class="field">
        <div class="label">Message:</div>
        <div class="message-box">{{message}}</div>
      </div>
    </div>
  </div>
</body>
</html>
```

**Content (Plain Text - Alternative):**
```
New Contact Form Submission

Name: {{name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

4. **Save your Template ID** (e.g., `template_l1wo2lg`)

---

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find **Public Key** section
3. **Copy your Public Key** (e.g., `61WpC-MTI2cvq-BE_`)

---

## Step 5: Update emailService.js

Open `emailjs-integration/emailService.js` and update:

```javascript
export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_xxbj3sv',      // ← Your Service ID
  TEMPLATE_ID: 'template_l1wo2lg',    // ← Your Template ID
  PUBLIC_KEY: '61WpC-MTI2cvq-BE_'     // ← Your Public Key
};
```

---

## Step 6: Add EmailJS Script to HTML

Add to your `public/index.html` (or main HTML file):

```html
<!DOCTYPE html>
<html>
<head>
  <!-- ... other head content ... -->
  
  <!-- EmailJS Script -->
  <script 
    type="text/javascript" 
    src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
  </script>
  <script type="text/javascript">
    (function() {
      emailjs.init({
        publicKey: "YOUR_PUBLIC_KEY_HERE",  // ← Replace with your Public Key
      });
    })();
  </script>
</head>
<body>
  <!-- ... body content ... -->
</body>
</html>
```

---

## Step 7: Test the Integration

### Option A: Use Contact Form
1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox
4. You should receive the form submission

### Option B: Test in Browser Console
```javascript
// Open browser console and run:
emailjs.send(
  'your_service_id',
  'your_template_id',
  {
    name: 'Test User',
    from_email: 'test@example.com',
    phone: '+1234567890',
    message: 'This is a test message',
    reply_to: 'test@example.com'
  },
  'your_public_key'
).then(
  (response) => console.log('SUCCESS!', response.status, response.text),
  (error) => console.log('FAILED...', error)
);
```

---

## Template Variables Reference

The following variables are sent from the contact form:

| Variable | Description | Example |
|----------|-------------|---------|
| `{{name}}` | User's full name | "John Doe" |
| `{{from_name}}` | User's name (duplicate) | "John Doe" |
| `{{from_email}}` | User's email address | "john@example.com" |
| `{{phone}}` | User's phone number | "+91 9584661610" |
| `{{message}}` | User's message | "I'm interested in..." |
| `{{title}}` | Message title/subject | Same as message |
| `{{to_name}}` | Recipient name | "Shyara Team" |
| `{{reply_to}}` | Reply-to email | "john@example.com" |

---

## Troubleshooting

### Email Not Received

1. **Check EmailJS Dashboard**:
   - Go to EmailJS dashboard → **Logs**
   - Check if email was sent successfully
   - Look for error messages

2. **Check Spam Folder**:
   - Emails might go to spam initially
   - Mark as "Not Spam" to whitelist

3. **Verify Service Connection**:
   - Go to Email Services
   - Ensure service is "Active"
   - Reconnect if needed

4. **Check Template Variables**:
   - Ensure all variables in template match exactly
   - Variable names are case-sensitive

### JavaScript Errors

1. **EmailJS Not Loaded**:
   - Check if script tag is in HTML
   - Verify script URL is correct
   - Check browser console for 404 errors

2. **Public Key Error**:
   - Verify public key is correct
   - Ensure no extra spaces or quotes
   - Check if key is active in EmailJS dashboard

3. **Service/Template ID Error**:
   - Verify IDs are correct
   - Check for typos
   - Ensure service and template are active

### Rate Limiting

- Free tier: 100 emails/month
- If limit reached, upgrade plan or wait for reset
- Check usage in EmailJS dashboard

---

## Security Best Practices

1. **Public Key is Safe**: The public key is meant to be public (in client-side code)
2. **Don't Share Private Keys**: Never expose private keys or API secrets
3. **Rate Limiting**: EmailJS has built-in rate limiting
4. **Template Validation**: Validate form inputs before sending
5. **Spam Protection**: Consider adding CAPTCHA for production

---

## Production Checklist

- [ ] EmailJS account created and verified
- [ ] Email service connected and tested
- [ ] Email template created with all variables
- [ ] Public Key, Service ID, Template ID copied
- [ ] emailService.js updated with credentials
- [ ] EmailJS script added to index.html
- [ ] Test email sent successfully
- [ ] Form validation working
- [ ] Error handling tested
- [ ] Mobile responsiveness checked

---

## Support Resources

- **EmailJS Documentation**: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- **EmailJS Support**: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)
- **EmailJS Community**: [https://github.com/emailjs-com/emailjs-sdk](https://github.com/emailjs-com/emailjs-sdk)

---

**Need Help?** Check the main README.md for more details or troubleshooting steps.

