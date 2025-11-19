# Shyara Digital - Portfolio & EmailJS Integration Package

This folder contains all portfolio content and EmailJS integration code from the Shyara Digital website. Use this package to integrate portfolio functionality and contact form email handling into your new website.

---

## 📁 Folder Structure

```
shyara-portfolio-emailjs/
├── README.md                          # This file - comprehensive documentation
├── Portfolio.js                       # Main portfolio page component
├── Contact.js                         # Contact form page with EmailJS integration
├── components/
│   ├── FancyText.js                  # Reusable text component with primary color styling
│   └── AnimatedHeading.js            # Animated typing effect heading component
├── emailjs-integration/
│   └── emailService.js               # EmailJS service configuration and functions
└── portfolio-assets/
    ├── pics/
    │   ├── SMM/                      # Social Media Management portfolio images (21 files)
    │   ├── App Dev/                  # App Development portfolio images (13 files)
    │   ├── Reels/                    # Video Reels portfolio videos (4 MP4 files)
    │   ├── ads/                      # Ad Campaign Management portfolio images (10 files)
    │   └── Festive Posts/            # Festive Posts portfolio images (6 files)
    └── mockups/
        └── [Website mockup HTML files and PNGs]  # Interactive website previews
```

---

## 🎨 Portfolio Component Overview

### **Portfolio.js** - Main Portfolio Page

The portfolio page displays 6 service categories with their respective work samples:

1. **Social Media Management** - 21 image samples
2. **Website Development** - 4 website mockups (with interactive HTML previews)
3. **App Development** - 13 mobile app screenshots
4. **Video Editing & Reels** - 4 video reels (MP4 format)
5. **Ad Campaign Management** - 10 ad design images
6. **Festive Posts** - 6 festive/seasonal design images

### Key Features:

- **Lazy Loading**: Images and videos load only when in viewport using Intersection Observer
- **Optimized Media**: Supports both optimized (WebP) and fallback (PNG/JPEG) images
- **Modal Gallery**: Click any service card to open a full-screen modal with:
  - Image/video viewer with navigation arrows
  - Thumbnail navigation strip
  - Image counter (e.g., "3 / 21")
  - Interactive website previews (for website development samples)
  - Responsive design for mobile/tablet/desktop
- **Loading Screen**: Shows progress bar while prefetching initial media assets
- **Performance Optimized**: Prefetches first 6 samples, then lazy-loads remaining in background

### Dependencies Required:

```json
{
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "lucide-react": "^0.525.0"
}
```

### Usage Example:

```jsx
import Portfolio from './Portfolio';

function App() {
  return (
    <div>
      <Portfolio />
    </div>
  );
}
```

### Important Notes:

- **Image Paths**: The component uses `process.env.PUBLIC_URL` for asset paths. Ensure your build tool supports this.
- **Media Types**: The component automatically detects image vs video based on file extension (.png, .jpg, .jpeg = image; .mp4 = video)
- **Responsive**: Includes mobile-first responsive design with breakpoints at 480px, 768px, 1024px
- **Accessibility**: Includes ARIA labels, keyboard navigation, and focus management

---

## 📧 EmailJS Integration Overview

### **emailService.js** - Email Sending Service

This service handles all email functionality for the contact form using EmailJS (a third-party email service that doesn't require a backend server).

### EmailJS Configuration:

```javascript
{
  SERVICE_ID: 'service_xxbj3sv',
  TEMPLATE_ID: 'template_l1wo2lg',
  PUBLIC_KEY: '61WpC-MTI2cvq-BE_'
}
```

### Setup Instructions:

#### 1. **EmailJS Account Setup** (if using new account):

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Create a free account (100 emails/month free tier)
3. Create an Email Service (Gmail, Outlook, etc.)
4. Create an Email Template with these variables:
   - `{{name}}` - User's name
   - `{{from_name}}` - User's name (duplicate)
   - `{{from_email}}` - User's email
   - `{{phone}}` - User's phone number
   - `{{message}}` - User's message
   - `{{title}}` - Message subject/title
   - `{{to_name}}` - Recipient name (default: "Shyara Team")
   - `{{reply_to}}` - Reply-to email (user's email)

5. Get your Service ID, Template ID, and Public Key from EmailJS dashboard
6. Update `emailService.js` with your credentials

#### 2. **HTML Setup** (Required):

Add EmailJS script to your `public/index.html` or main HTML file:

```html
<!-- EmailJS Script -->
<script 
  type="text/javascript" 
  src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
</script>
<script type="text/javascript">
  (function() {
    emailjs.init({
      publicKey: "YOUR_PUBLIC_KEY_HERE",  // Replace with your public key
    });
  })();
</script>
```

#### 3. **React Component Integration**:

```jsx
import emailService from './services/emailService';

// In your contact form component:
const handleSubmit = async (formData) => {
  const result = await emailService.sendContactForm({
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    message: formData.message
  });
  
  if (result.success) {
    console.log('Email sent!');
  } else {
    console.error('Error:', result.message);
  }
};
```

### EmailJS Service Functions:

#### `sendContactForm(formData)`

Sends a contact form email via EmailJS.

**Parameters:**
- `formData` (object):
  - `name` (string) - User's full name
  - `email` (string) - User's email address
  - `phone` (string) - User's phone number
  - `message` (string) - User's message

**Returns:**
- `{ success: boolean, message: string }`

**Error Handling:**
- Checks if EmailJS is loaded
- Handles HTTP status codes (400, 401, 403, 500)
- Returns user-friendly error messages

### Contact.js - Complete Contact Form Implementation

The `Contact.js` file includes:
- Full contact form with validation
- EmailJS integration
- Success/error message display
- Cart integration (optional - can be removed)
- Responsive design
- Form field validation (email format, phone format, message length)

### Dependencies Required:

```json
{
  "react": "^19.1.0",
  "react-router-dom": "^6.23.0",
  "lucide-react": "^0.525.0"
}
```

---

## 🚀 Integration Steps for New Website

### Step 1: Copy Files

1. Copy `Portfolio.js` to your `src/pages/` or `src/components/` directory
2. Copy `Contact.js` to your `src/pages/` directory
3. Copy `components/` folder to your `src/components/` directory
4. Copy `emailjs-integration/emailService.js` to your `src/services/` directory
5. Copy `portfolio-assets/` folder to your `public/` directory (or your static assets folder)

### Step 2: Install Dependencies

```bash
npm install react react-dom lucide-react
# or
yarn add react react-dom lucide-react
```

### Step 3: Update EmailJS Configuration

1. Open `src/services/emailService.js`
2. Replace the `EMAIL_CONFIG` object with your EmailJS credentials:
   ```javascript
   export const EMAIL_CONFIG = {
     SERVICE_ID: 'your_service_id',
     TEMPLATE_ID: 'your_template_id',
     PUBLIC_KEY: 'your_public_key'
   };
   ```

### Step 4: Add EmailJS Script to HTML

Add the EmailJS script to your `public/index.html` (see EmailJS Setup section above).

### Step 5: Update Image Paths (if needed)

If your asset structure differs, update paths in `Portfolio.js`:

```javascript
// Current structure:
process.env.PUBLIC_URL + '/pics/SMM/image.png'

// If your structure is different, update accordingly:
process.env.PUBLIC_URL + '/assets/portfolio/SMM/image.png'
```

### Step 6: Add Routes (if using React Router)

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### Step 7: Style Variables

The components use CSS variables. Ensure your CSS includes:

```css
:root {
  --color-primary: #a259f7;        /* Purple primary color */
  --color-text-primary: #e7e7e7;   /* Light text */
  --color-text-secondary: #a7a7a7; /* Secondary text */
}
```

---

## 📝 Portfolio Data Structure

The portfolio data is defined in `Portfolio.js` as `rawPortfolioServices` array. Each service object has:

```javascript
{
  service: 'Service Name',           // Display name
  description: 'Service description', // Short description
  samples: [                         // Array of work samples
    {
      img: '/path/to/image.png',     // Image/video path
      title: 'Sample Title',         // Sample title
      description: 'Sample desc',    // Sample description
      mockup: '/path/to/mockup.html' // Optional: interactive preview
    }
  ],
  results: 'Performance metrics'     // Results/metrics text
}
```

### Adding New Portfolio Items:

1. Add images/videos to appropriate folder in `portfolio-assets/pics/`
2. Update the `rawPortfolioServices` array in `Portfolio.js`
3. Add new sample objects with correct paths

---

## 🎯 Key Features Explained

### 1. **Lazy Loading with Intersection Observer**

Images and videos only load when they enter the viewport, improving initial page load time.

### 2. **Optimized Media Support**

The component automatically tries to load WebP optimized versions first, falling back to original formats if WebP fails.

### 3. **Modal Gallery**

- Full-screen modal with backdrop
- Keyboard navigation (arrow keys, Escape to close)
- Touch/swipe support on mobile
- Image counter and thumbnail navigation

### 4. **Performance Optimizations**

- Prefetches first 6 samples for instant viewing
- Uses `requestIdleCallback` for background prefetching
- Minimum loader duration (800ms) for smooth UX
- AbortController for cancellation on unmount

### 5. **Responsive Design**

- Mobile-first approach
- Breakpoints: 480px, 768px, 1024px
- Adaptive grid layout
- Touch-friendly controls

---

## 🔧 Customization

### Changing Colors:

Update CSS variables or inline styles in components:
- Primary color: `#a259f7` (purple)
- Background: `rgba(30,30,40,0.95)` (dark)
- Text: `#e7e7e7` (light)

### Changing Layout:

Modify grid layout in `Portfolio.js`:
```javascript
gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
```

### Adding New Service Categories:

1. Add folder in `portfolio-assets/pics/`
2. Add service object to `rawPortfolioServices` array
3. Add samples with correct paths

---

## 📦 File Sizes & Optimization

### Current Asset Sizes (approximate):

- **SMM Images**: ~2-5 MB total (21 PNG files)
- **App Dev Images**: ~3-6 MB total (13 JPEG files)
- **Reels Videos**: ~10-20 MB total (4 MP4 files)
- **Ad Images**: ~1-3 MB total (10 PNG files)
- **Festive Posts**: ~1-2 MB total (6 PNG files)
- **Mockups**: ~500 KB - 2 MB each (HTML + PNG)

### Optimization Recommendations:

1. **Convert images to WebP** format (already supported in code)
2. **Compress videos** using tools like HandBrake or FFmpeg
3. **Lazy load videos** (already implemented)
4. **Use CDN** for static assets in production
5. **Implement image optimization** in build process

---

## 🐛 Troubleshooting

### Portfolio Images Not Loading:

1. Check file paths match `process.env.PUBLIC_URL` structure
2. Verify files exist in `public/pics/` directory
3. Check browser console for 404 errors
4. Ensure `PUBLIC_URL` is set correctly in build

### EmailJS Not Working:

1. Verify EmailJS script is loaded in HTML
2. Check browser console for errors
3. Verify Service ID, Template ID, and Public Key are correct
4. Check EmailJS dashboard for email logs
5. Ensure template variables match in EmailJS dashboard

### Modal Not Opening:

1. Check if `isModalOpen` state is being set
2. Verify z-index values (modal uses 10000)
3. Check for JavaScript errors in console
4. Ensure React state updates are working

---

## 📚 Additional Resources

- **EmailJS Documentation**: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- **React Router**: [https://reactrouter.com/](https://reactrouter.com/)
- **Lucide Icons**: [https://lucide.dev/](https://lucide.dev/)

---

## 📄 License & Credits

This code is from the Shyara Digital website. All portfolio assets (images, videos, mockups) are property of Shyara Digital and their respective clients.

---

## 💡 Quick Start Checklist

- [ ] Copy all files to your project
- [ ] Install required npm packages
- [ ] Set up EmailJS account and get credentials
- [ ] Update EmailJS configuration in `emailService.js`
- [ ] Add EmailJS script to `index.html`
- [ ] Update image paths if needed
- [ ] Add routes to your router
- [ ] Test portfolio page loads correctly
- [ ] Test contact form sends emails
- [ ] Customize colors and styling
- [ ] Optimize images/videos for production

---

## 🆘 Support

If you encounter issues:
1. Check the Troubleshooting section above
2. Review browser console for errors
3. Verify all dependencies are installed
4. Ensure file paths are correct
5. Test EmailJS configuration separately

---

**Last Updated**: November 2025
**Version**: 1.0.0

