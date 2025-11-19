# Quick Start Guide - Portfolio & EmailJS Integration

## 🚀 5-Minute Setup

### 1. Copy Files to Your Project

```
Your Project/
├── src/
│   ├── pages/
│   │   ├── Portfolio.js          ← Copy from here
│   │   └── Contact.js            ← Copy from here
│   ├── components/
│   │   ├── FancyText.js          ← Copy from here
│   │   └── AnimatedHeading.js    ← Copy from here
│   └── services/
│       └── emailService.js       ← Copy from here
└── public/
    ├── pics/                     ← Copy entire portfolio-assets/pics/ folder
    └── mockups/                  ← Copy entire portfolio-assets/mockups/ folder
```

### 2. Install Dependencies

```bash
npm install lucide-react
```

### 3. Set Up EmailJS (3 steps)

#### Step A: Get EmailJS Credentials
1. Go to [emailjs.com](https://www.emailjs.com) and sign up
2. Create an Email Service (connect Gmail/Outlook)
3. Create an Email Template with variables: `{{name}}`, `{{from_email}}`, `{{phone}}`, `{{message}}`
4. Copy your Service ID, Template ID, and Public Key

#### Step B: Update emailService.js
```javascript
export const EMAIL_CONFIG = {
  SERVICE_ID: 'your_service_id_here',      // ← Replace
  TEMPLATE_ID: 'your_template_id_here',    // ← Replace
  PUBLIC_KEY: 'your_public_key_here'       // ← Replace
};
```

#### Step C: Add Script to index.html
```html
<!-- Add before </head> tag -->
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
<script>
  emailjs.init({ publicKey: "your_public_key_here" });
</script>
```

### 4. Add Routes

```jsx
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

<Route path="/portfolio" element={<Portfolio />} />
<Route path="/contact" element={<Contact />} />
```

### 5. Test It!

1. Visit `/portfolio` - should show portfolio grid
2. Click a service card - modal should open
3. Visit `/contact` - fill form and submit
4. Check your email - should receive the message

---

## ⚡ Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| Images not loading | Check paths match `process.env.PUBLIC_URL + '/pics/...'` |
| EmailJS error | Verify script is in HTML and credentials are correct |
| Modal won't open | Check browser console for JavaScript errors |
| Styling looks broken | Add CSS variables: `--color-primary: #a259f7` |

---

## 📝 EmailJS Template Variables

Your EmailJS template must include these variables:

```
Subject: New Contact Form Submission from {{name}}

Body:
Name: {{name}}
Email: {{from_email}}
Phone: {{phone}}
Message: {{message}}

Reply to: {{reply_to}}
```

---

## 🎨 CSS Variables Needed

Add to your main CSS file:

```css
:root {
  --color-primary: #a259f7;
  --color-text-primary: #e7e7e7;
  --color-text-secondary: #a7a7a7;
}
```

---

That's it! You're ready to go! 🎉

