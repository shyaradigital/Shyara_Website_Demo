# Shyara Website Demo

A production-grade website for Shyara, a Social Media Management Agency, built with Next.js 14, TypeScript, Tailwind CSS, ShadCN UI, and Framer Motion.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **ShadCN UI**
- **Framer Motion**
- **EmailJS** (ready for integration)

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Copy the environment variables:

```bash
cp .env.local.example .env.local
```

3. Update `.env.local` with your EmailJS keys (when provided).

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── admin/             # Admin dashboard pages
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── portfolio/         # Portfolio page
│   ├── faq/               # FAQ page
│   ├── contact/           # Contact page
│   ├── terms/             # Terms of Service page
│   ├── privacy/           # Privacy Policy page
│   └── layout.tsx         # Root layout
├── components/
│   ├── admin/             # Admin dashboard components
│   ├── layout/            # Navbar, Footer
│   ├── sections/          # Home page sections
│   └── ui/                # ShadCN UI components
├── lib/
│   ├── auth.ts            # Authentication utilities (placeholder)
│   ├── rate-limit.ts      # Rate limiting utilities (placeholder)
│   ├── utils.ts           # Utility functions
│   └── validation/        # Zod schemas
├── data/                  # Data files
└── styles/                # Global styles
```

## Routes

### Public Routes
- `/` - Home page
- `/about` - About page
- `/services` - Services page
- `/portfolio` - Portfolio page
- `/faq` - FAQ page
- `/contact` - Contact page
- `/terms` - Terms of Service
- `/privacy` - Privacy Policy

### Admin Routes
- `/admin` - Admin dashboard
- `/admin/login` - Admin login page
- `/admin/services` - Services management
- `/admin/portfolio` - Portfolio management
- `/admin/faq` - FAQ management

## Features

- ✅ Dark theme with purple accent
- ✅ Fully responsive design
- ✅ SEO optimized
- ✅ Contact form with EmailJS ready structure
- ✅ Admin dashboard skeleton
- ✅ Page transitions with Framer Motion
- ✅ Type-safe with TypeScript
- ✅ Accessible UI components

## TODO

- EmailJS keys configuration
- Authentication implementation
- Backend integration
- Database setup
- Content management system

## License

Private - All rights reserved
