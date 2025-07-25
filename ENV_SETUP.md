# Environment Variables Setup Guide

## Quick Start

1. **Copy the example file:**
   ```bash
   cp .env.example .env.local
   ```

2. **Update the required variables:**
   - `GOOGLE_API_KEY` - Your Google Places API key
   - `GOOGLE_PLACE_ID` - Your business location ID
   - `NEXT_PUBLIC_SITE_URL` - Your site URL (for production)

## Required Environment Variables

### Google Places API Setup

To fetch business reviews, you need to set up Google Places API:

1. **Create a Google Cloud Project:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one

2. **Enable Google Places API:**
   - Go to APIs & Services → Library
   - Search for "Places API (New)"
   - Enable the API

3. **Create API Key:**
   - Go to APIs & Services → Credentials
   - Click "Create Credentials" → API Key
   - Copy the API key to `GOOGLE_API_KEY`

4. **Find Your Place ID:**
   - Use [Google Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id#find-id)
   - Search for your business
   - Copy the Place ID to `GOOGLE_PLACE_ID`

## Environment Variables Reference

### Public Variables (Client-Side)
These variables are exposed to the browser:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_PRACTITIONER_NAME="Nathalie JEAN"
NEXT_PUBLIC_BUSINESS_NAME="Shiatsu Guyane"
NEXT_PUBLIC_DEFAULT_LOCALE=fr
NEXT_PUBLIC_SUPPORTED_LOCALES=fr,en,pt
```

### Private Variables (Server-Side Only)
These variables are only available on the server:

```bash
GOOGLE_API_KEY=your_google_places_api_key
GOOGLE_PLACE_ID=your_google_place_id
NEXTAUTH_SECRET=your_secure_random_string
```

## Development vs Production

### Development (.env.local)
```bash
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
DEBUG=true
```

### Production
```bash
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
DEBUG=false
```

## Security Best Practices

1. **Never commit `.env.local`** - It's already in `.gitignore`
2. **Use different API keys** for development and production
3. **Rotate API keys regularly**
4. **Use `NEXT_PUBLIC_` prefix** only for values safe to expose
5. **Generate secure random strings** for secrets

## Feature Flags

Control which features are enabled:

```bash
NEXT_PUBLIC_ENABLE_REVIEWS=true         # Google Reviews integration
NEXT_PUBLIC_ENABLE_BOOKING=false        # Booking system (future)
NEXT_PUBLIC_ENABLE_BLOG=false           # Blog functionality (future)
NEXT_PUBLIC_ENABLE_TESTIMONIALS=true    # Testimonials section
```

## Deployment

### Vercel
Set environment variables in your Vercel dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add each variable with appropriate values

### Other Platforms
- **Netlify**: Use site settings → Environment variables
- **Railway**: Use project settings → Variables
- **Heroku**: Use config vars in dashboard

## Troubleshooting

### Common Issues

1. **Reviews not loading:**
   - Check `GOOGLE_API_KEY` is valid
   - Verify `GOOGLE_PLACE_ID` is correct
   - Ensure Google Places API is enabled

2. **Site URL issues:**
   - Make sure `NEXT_PUBLIC_SITE_URL` matches your domain
   - Include protocol (https://) in production

3. **Environment not loading:**
   - Restart your development server after changes
   - Check file is named `.env.local` exactly
   - Verify no syntax errors in the file

### Testing Environment Variables

```bash
# Check if variables are loaded
console.log('Site URL:', process.env.NEXT_PUBLIC_SITE_URL);
console.log('API Key exists:', !!process.env.GOOGLE_API_KEY);
```

## Current Project Status

✅ **Configured:**
- Google Places API for reviews
- Internationalization (French, English, Portuguese)
- Basic site configuration
- Feature flags

🔧 **TODO for Production:**
- Real contact information
- Email service configuration
- Google Analytics setup
- Social media links
- Security headers and CSP