# Cursor AI Prompt - Portfolio & EmailJS Integration Package

## 📋 What This Folder Contains

This folder contains a complete portfolio showcase system and EmailJS contact form integration from the Shyara Digital website. It includes:

1. **Portfolio Component** (`Portfolio.js`) - A fully-featured portfolio gallery with:
   - 6 service categories (Social Media, Websites, Apps, Videos, Ads, Festive Posts)
   - 54+ portfolio samples (images and videos)
   - Modal gallery with navigation
   - Lazy loading and performance optimizations
   - Responsive design

2. **EmailJS Integration** (`emailjs-integration/`) - Contact form email handling:
   - Email service configuration
   - Contact form component
   - Error handling and validation

3. **Portfolio Assets** (`portfolio-assets/`) - All images, videos, and website mockups

4. **Supporting Components** (`components/`) - Reusable UI components

---

## 🎯 What You Need to Do

### For Portfolio Integration:

1. **Copy the files** to your React project:
   - `Portfolio.js` → `src/pages/Portfolio.js`
   - `components/` → `src/components/`
   - `portfolio-assets/` → `public/portfolio-assets/`

2. **Install dependencies**:
   ```bash
   npm install lucide-react
   ```

3. **Update image paths** in `Portfolio.js` if your asset structure differs:
   - Current: `process.env.PUBLIC_URL + '/pics/SMM/...'`
   - Update to match your folder structure

4. **Add route** in your router:
   ```jsx
   import Portfolio from './pages/Portfolio';
   <Route path="/portfolio" element={<Portfolio />} />
   ```

5. **Add CSS variables** to your stylesheet:
   ```css
   :root {
     --color-primary: #a259f7;
     --color-text-primary: #e7e7e7;
     --color-text-secondary: #a7a7a7;
   }
   ```

### For EmailJS Integration:

1. **Set up EmailJS account**:
   - Go to emailjs.com and create account
   - Create email service (Gmail/Outlook)
   - Create email template with variables: `{{name}}`, `{{from_email}}`, `{{phone}}`, `{{message}}`
   - Get Service ID, Template ID, and Public Key

2. **Update configuration** in `emailjs-integration/emailService.js`:
   ```javascript
   export const EMAIL_CONFIG = {
     SERVICE_ID: 'your_service_id',
     TEMPLATE_ID: 'your_template_id',
     PUBLIC_KEY: 'your_public_key'
   };
   ```

3. **Add EmailJS script** to `public/index.html`:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
   <script>
     emailjs.init({ publicKey: "your_public_key" });
   </script>
   ```

4. **Copy Contact component**:
   - `Contact.js` → `src/pages/Contact.js`
   - `emailjs-integration/emailService.js` → `src/services/emailService.js`

5. **Add route**:
   ```jsx
   import Contact from './pages/Contact';
   <Route path="/contact" element={<Contact />} />
   ```

---

## 📁 File Structure Overview

```
shyara-portfolio-emailjs/
│
├── README.md                    # Comprehensive documentation (READ THIS FIRST)
├── QUICK-START.md              # 5-minute setup guide
├── CURSOR-PROMPT.md            # This file
│
├── Portfolio.js                # Main portfolio page component
├── Contact.js                  # Contact form with EmailJS
│
├── components/
│   ├── FancyText.js           # Text component with primary color
│   └── AnimatedHeading.js     # Animated typing heading
│
├── emailjs-integration/
│   ├── emailService.js        # EmailJS service configuration
│   └── SETUP-GUIDE.md         # Detailed EmailJS setup instructions
│
└── portfolio-assets/
    ├── pics/
    │   ├── SMM/               # 21 social media images
    │   ├── App Dev/           # 13 app screenshots
    │   ├── Reels/             # 4 video reels (MP4)
    │   ├── ads/               # 10 ad campaign images
    │   └── Festive Posts/     # 6 festive design images
    └── mockups/               # Website preview HTML files
```

---

## 🔑 Key Features

### Portfolio Component:
- ✅ Lazy loading with Intersection Observer
- ✅ Modal gallery with image/video viewer
- ✅ Thumbnail navigation
- ✅ Responsive design (mobile/tablet/desktop)
- ✅ Performance optimized (prefetching, background loading)
- ✅ Supports both images and videos
- ✅ Interactive website mockup previews

### EmailJS Integration:
- ✅ No backend server required
- ✅ Form validation
- ✅ Error handling
- ✅ Success/error feedback
- ✅ Free tier: 100 emails/month

---

## ⚠️ Important Notes

1. **Image Paths**: The portfolio uses `process.env.PUBLIC_URL` for asset paths. Ensure your build tool supports this (Create React App does by default).

2. **EmailJS Credentials**: The current credentials in `emailService.js` are from the original Shyara website. You MUST replace them with your own EmailJS credentials.

3. **Dependencies**: Requires React 19+, React Router (for routing), and lucide-react (for icons).

4. **CSS Variables**: The components rely on CSS variables for theming. Make sure to define them in your stylesheet.

5. **Asset Sizes**: Portfolio assets total ~20-30 MB. Consider optimizing images/videos for production.

---

## 🚀 Quick Integration Checklist

- [ ] Read README.md for full documentation
- [ ] Copy Portfolio.js to your project
- [ ] Copy Contact.js to your project
- [ ] Copy components/ folder
- [ ] Copy portfolio-assets/ to public/
- [ ] Install lucide-react
- [ ] Set up EmailJS account
- [ ] Update EmailJS credentials
- [ ] Add EmailJS script to index.html
- [ ] Add routes to your router
- [ ] Add CSS variables
- [ ] Update image paths if needed
- [ ] Test portfolio page
- [ ] Test contact form

---

## 📚 Documentation Files

- **README.md** - Complete documentation with all details
- **QUICK-START.md** - Fast setup guide
- **emailjs-integration/SETUP-GUIDE.md** - Detailed EmailJS setup
- **CURSOR-PROMPT.md** - This file (overview for AI assistants)

---

## 💡 Usage Example

```jsx
// In your App.js or router file:
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
```

---

## 🐛 Common Issues

**Images not loading?**
- Check file paths match your folder structure
- Verify files exist in public/ directory
- Check browser console for 404 errors

**EmailJS not working?**
- Verify script is loaded in HTML
- Check credentials are correct
- Check EmailJS dashboard for logs
- Ensure template variables match

**Styling broken?**
- Add CSS variables to your stylesheet
- Check if CSS is being loaded
- Verify component styles are not overridden

---

## 📞 Need More Help?

1. Check README.md for detailed documentation
2. Review QUICK-START.md for step-by-step setup
3. See emailjs-integration/SETUP-GUIDE.md for EmailJS help
4. Check browser console for JavaScript errors
5. Verify all dependencies are installed

---

**Ready to integrate?** Start with QUICK-START.md for the fastest setup, or README.md for comprehensive details.

