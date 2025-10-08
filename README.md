# Shiatsu Guyane

A professional website for a Shiatsu therapy practice in French Guiana, built with Next.js.

## 🌿 About

Shiatsu Guyane is a modern, responsive website showcasing Shiatsu therapy services in French Guiana. The site provides information about Shiatsu treatments, practitioner details, booking options, and wellness resources for clients seeking holistic health solutions.

## ✨ Features

- **Service Information**: Detailed descriptions of Shiatsu treatments and benefits
- **Practitioner Profile**: About the therapist, qualifications, and experience
- **Contact Information**: Multiple ways to reach the practice
- **Blog/Resources**: Wellness tips and Shiatsu education
- **Responsive Design**: Optimized for all devices
- **Multilingual Support**: French primary language with potential English support
- **SEO Optimized**: Better visibility for local searches
- **Fast Performance**: Optimized with Next.js 14

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS / CSS Modules
- **Font**: Geist Font Family
- **Deployment**: Vercel
- **Form Handling**: Contact and booking forms
- **SEO**: Next.js metadata API

## 📋 Prerequisites

- Node.js 18+
- npm / yarn / pnpm / bun

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Exowz/shiatsu-guyane.git
cd shiatsu-guyane
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Environment Variables (Optional)

Create a `.env.local` file for configuration:

```env
# Email service for contact forms
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASSWORD=your-password

# Booking system integration (if applicable)
BOOKING_API_KEY=your-booking-api-key

# Google Maps API (for location)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-maps-api-key

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
shiatsu-guyane/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── services/          # Services/treatments page
│   ├── booking/           # Appointment booking
│   ├── blog/              # Wellness blog
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── forms/            # Contact and booking forms
│   ├── navigation/       # Header and footer
│   └── sections/         # Page sections
├── lib/                  # Utility functions
│   ├── api.ts            # API calls
│   └── utils.ts          # Helper functions
├── public/               # Static assets
│   ├── images/          # Photos and illustrations
│   └── icons/           # SVG icons
├── styles/              # Global styles
└── content/             # Content data (services, testimonials)
```

## 🎨 Key Sections

### Home Page
- Hero section with practice introduction
- Overview of Shiatsu benefits
- Call-to-action for booking
- Testimonials
- Contact information

### Services
- Detailed treatment descriptions
- Session duration and pricing
- Benefits of each service
- Treatment process explanation

### About
- Practitioner biography
- Qualifications and certifications
- Philosophy and approach
- Practice location and hours

### Blog/Resources
- Wellness articles
- Shiatsu education
- Self-care tips
- News and updates

## 🌐 Customization

### Content Updates
Edit the content files in `/content` or directly in page components.

### Styling
Customize colors, fonts, and layouts in:
- `tailwind.config.ts` - Tailwind configuration
- `app/globals.css` - Global styles
- Component-specific styles

### Images
Replace images in `/public/images` with your own practice photos.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔍 SEO Optimization

- Semantic HTML structure
- Meta tags and Open Graph
- Structured data for local business
- Optimized images with alt text
- Fast loading times
- Mobile-friendly design

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)

## 🚢 Deployment

### Deploy on Vercel

The easiest deployment method:

1. Push code to GitHub
2. Import to [Vercel](https://vercel.com/new)
3. Add environment variables (if any)
4. Deploy!

```bash
# Or using Vercel CLI
npm install -g vercel
vercel
```

### Custom Domain

1. Add your domain in Vercel dashboard
2. Update DNS records
3. Enable HTTPS

## 🧪 Testing

```bash
# Run linting
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

## 📈 Analytics & Monitoring

Consider adding:
- Google Analytics for visitor tracking
- Google Search Console for SEO monitoring
- Performance monitoring tools

## 🔒 Security

- Regular dependency updates
- Secure form handling
- HTTPS enabled
- Privacy policy compliance

## 🤝 Contributing

For bug reports or feature requests, please open an issue.

## 👤 Author

**Exowz**
- GitHub: [@Exowz](https://github.com/Exowz)

## 📄 License

This project is proprietary. All rights reserved.

## 📞 Contact

For questions about the website or Shiatsu services:
- Visit: https://www.shiatsu-guyane.com/fr
- Email: contact@shiatsu-guyane.com
- Phone: +594 (0) 6 94 00 70 97
- Location: French Guiana

## 🙏 Acknowledgments

- Built with Next.js and React
- Hosted on Vercel
- Design inspired by wellness and holistic health aesthetics

---

*Promoting wellness and balance through Shiatsu therapy* 🌿✨
