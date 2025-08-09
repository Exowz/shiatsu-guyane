# Contact Form Setup Guide - Shiatsu Guyane

This guide provides step-by-step instructions to set up the working contact form with email functionality for your Next.js Shiatsu website.

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install resend zod @react-email/components @upstash/ratelimit @upstash/redis
   ```

2. **Configure Environment Variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your actual values
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

## 📧 Email Service Setup (Resend - Recommended)

### Why Resend?
- **Cost-effective**: 3,000 emails/month FREE (perfect for your 2K-2.5K monthly visitors)
- **Developer-friendly**: Excellent Next.js integration
- **GDPR compliant**: EU-based infrastructure
- **High deliverability**: Modern email infrastructure
- **No PHI concerns**: Safe for healthcare appointment requests

### Setup Steps:

1. **Create Resend Account**
   - Go to [resend.com](https://resend.com)
   - Sign up with your email
   - Verify your account

2. **Get API Key**
   - Navigate to [API Keys](https://resend.com/api-keys)
   - Click "Create API Key"
   - Name: "Shiatsu Guyane Contact Form"
   - Copy the key (starts with `re_`)

3. **Add Domain (Production Only)**
   - Go to [Domains](https://resend.com/domains)
   - Add your domain: `shiatsu-guyane.com`
   - Follow DNS configuration instructions
   - Verify domain ownership

4. **Configure Environment Variables**
   ```env
   # Required
   RESEND_API_KEY=re_your_api_key_here
   PRACTITIONER_EMAIL=nathalie@shiatsu-guyane.com
   
   # Optional (only for production with custom domain)
   EMAIL_DOMAIN=shiatsu-guyane.com
   ```

## 🔧 Environment Configuration

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `RESEND_API_KEY` | Your Resend API key | `re_AbCdEf...` |
| `PRACTITIONER_EMAIL` | Where notifications go | `nathalie@shiatsu-guyane.com` |

### Optional Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `EMAIL_DOMAIN` | Custom domain (production) | Uses Resend default |
| `UPSTASH_REDIS_REST_URL` | Redis for rate limiting | In-memory fallback |
| `UPSTASH_REDIS_REST_TOKEN` | Redis authentication | - |

### Development vs Production

**Development (.env.local):**
```env
RESEND_API_KEY=re_your_api_key_here
PRACTITIONER_EMAIL=your-test-email@gmail.com
# No need for EMAIL_DOMAIN in development
```

**Production (.env):**
```env
RESEND_API_KEY=re_your_production_api_key_here
PRACTITIONER_EMAIL=nathalie@shiatsu-guyane.com
EMAIL_DOMAIN=shiatsu-guyane.com
UPSTASH_REDIS_REST_URL=https://your-redis.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_redis_token
```

## 🧪 Testing Guide

### Local Testing

1. **Start Development Server**
   ```bash
   npm run dev
   ```

2. **Navigate to Contact Page**
   - Go to `http://localhost:3000/fr/contact`
   - Or `http://localhost:3000/en/contact` for English

3. **Test Form Submission**
   - Fill out all required fields
   - Click "Envoyer" (Send)
   - Check for success message
   - Verify email delivery

### Testing Checklist

- [ ] Form displays correctly in all languages
- [ ] All input fields are functional
- [ ] Form validation works (try submitting empty fields)
- [ ] Loading state shows during submission
- [ ] Success message displays after submission
- [ ] Error handling works (try with invalid email)
- [ ] Rate limiting prevents spam (try submitting 6+ times quickly)
- [ ] Practitioner receives notification email
- [ ] Client receives confirmation email
- [ ] Emails display correctly on mobile and desktop

### Email Testing

1. **Test Practitioner Notification**
   - Submit form with test data
   - Check your practitioner email inbox
   - Verify email formatting and content
   - Test "Reply" functionality

2. **Test Client Confirmation**
   - Use your personal email in the form
   - Check your inbox for confirmation
   - Verify multilingual content (based on form language)
   - Check mobile email display

### Multilingual Testing

Test the form in all supported languages:
- French: `http://localhost:3000/fr/contact`
- English: `http://localhost:3000/en/contact`
- Spanish: `http://localhost:3000/es/contact`
- Portuguese: `http://localhost:3000/pt-BR/contact`
- Chinese: `http://localhost:3000/zh-cn/contact`
- Hmong: `http://localhost:3000/hmn/contact`

## 🛡️ Security Features

### Rate Limiting
- **5 submissions per minute** per IP address
- Prevents spam and abuse
- Uses Redis in production, memory in development

### Input Validation
- **Client-side**: Real-time form validation
- **Server-side**: Zod schema validation
- **Sanitization**: Automatic input cleaning

### GDPR Compliance
- Data is only used for contact purposes
- No third-party data sharing
- EU-based infrastructure (Resend)
- Clear privacy notice on form

### Spam Protection
- Rate limiting per IP
- Input validation and sanitization
- No publicly exposed endpoints
- Server-side error handling

## 🚀 IONOS VPS Deployment

### Environment Setup on IONOS

1. **SSH into your VPS**
   ```bash
   ssh root@your-vps-ip
   ```

2. **Navigate to your project**
   ```bash
   cd /var/www/shiatsu-guyane
   ```

3. **Create production environment file**
   ```bash
   nano .env.production
   # Add your production environment variables
   ```

4. **Install dependencies**
   ```bash
   npm ci --production
   ```

5. **Build application**
   ```bash
   npm run build
   ```

6. **Start with PM2**
   ```bash
   pm2 start ecosystem.config.js
   pm2 save
   ```

### Production Environment Variables

Set these in your IONOS VPS environment:

```bash
# Create .env.production
cat > .env.production << EOF
NODE_ENV=production
RESEND_API_KEY=re_your_production_key
PRACTITIONER_EMAIL=nathalie@shiatsu-guyane.com
EMAIL_DOMAIN=shiatsu-guyane.com
UPSTASH_REDIS_REST_URL=https://your-redis.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_redis_token
NEXT_PUBLIC_SITE_URL=https://shiatsu-guyane.com
EOF
```

## 📊 Monitoring & Analytics

### Form Analytics
Track these metrics:
- Form submission rate
- Error rate by type
- Language distribution
- Time to respond to inquiries

### Email Delivery
Monitor with Resend dashboard:
- Delivery rate
- Bounce rate
- Open rate (confirmation emails)
- Spam reports

### Error Monitoring
Check application logs for:
- API endpoint errors
- Email sending failures
- Rate limit hits
- Validation errors

## 🔧 Troubleshooting

### Common Issues

1. **"RESEND_API_KEY is not configured" Error**
   - Check `.env.local` file exists
   - Verify API key format starts with `re_`
   - Restart development server

2. **Emails Not Sending**
   - Verify API key is valid in Resend dashboard
   - Check practitioner email is correctly formatted
   - Review server logs for detailed errors

3. **Form Not Submitting**
   - Open browser developer tools
   - Check console for JavaScript errors
   - Verify API route is accessible

4. **Rate Limiting Too Strict**
   - Default: 5 submissions per minute
   - Modify in `src/lib/ratelimit.ts`
   - Consider using Redis for production

### Debug Mode

Enable detailed logging:

```env
DEBUG=true
NODE_ENV=development
```

Check logs:
```bash
# Development
npm run dev

# Production (PM2)
pm2 logs shiatsu-guyane
```

## 📞 Support

### Email Service Issues
- **Resend Support**: [support@resend.com](mailto:support@resend.com)
- **Resend Documentation**: [resend.com/docs](https://resend.com/docs)

### IONOS VPS Issues
- **IONOS Support**: Available through IONOS Control Panel
- **Technical Documentation**: [ionos.com/help](https://www.ionos.com/help)

## 🎯 Production Checklist

Before going live:

- [ ] Resend API key configured for production
- [ ] Domain verified in Resend (if using custom domain)
- [ ] Practitioner email tested and monitored
- [ ] Rate limiting configured with Redis
- [ ] All environment variables set on IONOS VPS
- [ ] SSL certificate installed and working
- [ ] Form tested in all supported languages
- [ ] Email templates reviewed for professional appearance
- [ ] GDPR privacy notice updated
- [ ] Monitoring and alerting configured
- [ ] Backup strategy for form submissions

## 📈 Cost Estimation

### Monthly Costs (2K-2.5K visitors)

| Service | Cost | Notes |
|---------|------|-------|
| Resend | €0 | Up to 3,000 emails/month |
| Upstash Redis | €0-3 | Optional, for better rate limiting |
| **Total** | **€0-3** | Very cost-effective |

### Scale Planning

- **5K visitors/month**: Still free with Resend
- **10K visitors/month**: ~€8/month for Resend Pro
- **25K+ visitors/month**: Consider Redis Pro for rate limiting

## 🎉 Success!

Your contact form is now ready to:
- ✅ Send professional emails to clients and practitioner
- ✅ Handle multiple languages automatically
- ✅ Protect against spam and abuse
- ✅ Scale with your growing business
- ✅ Comply with GDPR requirements
- ✅ Provide excellent user experience

For questions or issues, refer to this guide or check the troubleshooting section.