# 🧪 Comprehensive Testing Strategy - Shiatsu Guyane Website

## 📋 **EXECUTIVE SUMMARY**

This document outlines a complete testing strategy for the Next.js 15 multilingual Shiatsu website before production deployment on IONOS VPS. The strategy covers all critical aspects from local development testing to post-deployment monitoring.

**Target Environment:**
- Next.js 15 with 6 languages (FR, EN, ES, PT-BR, ZH-CN, HMN)
- IONOS VPS deployment with Dokploy
- Expected traffic: 2K-2.5K monthly visitors
- Critical features: Contact form, Certificate gallery, GDPR compliance

---

## 🎯 **1. LOCAL DEVELOPMENT TESTING**

### **1.1 Development Environment Setup**

```bash
# Install testing dependencies
npm install -D @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom
npm install -D @playwright/test
npm install -D @lhci/cli @next/bundle-analyzer
npm install -D eslint-plugin-testing-library eslint-plugin-jest-dom

# Create testing configuration files
touch jest.config.js playwright.config.ts .lighthouserc.js
```

### **1.2 Local Testing Commands**

```bash
# Development testing suite
npm run dev          # Start development server
npm run build        # Test production build
npm run start        # Test production server locally
npm run lint         # Code quality checks
npm run test         # Unit tests
npm run test:e2e     # End-to-end tests
npm run test:perf    # Performance tests
```

### **1.3 Critical Functionality Checklist**

**✅ CORE FEATURES:**
- [ ] Homepage loads in all 6 languages
- [ ] Language switcher functions correctly
- [ ] Navigation menu responsive on all devices
- [ ] Contact form validation and submission
- [ ] Certificate gallery modal functionality
- [ ] GDPR cookie banner and privacy policy
- [ ] Footer disclaimers display properly
- [ ] Theme switching (light/dark) works

**✅ CONTACT FORM TESTING:**
```javascript
// Test scenarios to verify
const contactFormTests = [
  'Valid form submission with all fields',
  'Email field validation (format checking)',
  'Required field validation messages',
  'Form submission success feedback',
  'Form submission error handling',
  'Character limits respected',
  'GDPR consent recording',
  'Spam protection functionality'
];
```

**✅ MULTILINGUAL TESTING:**
- [ ] All content translates correctly
- [ ] No text overflow in any language
- [ ] Date/time formats appropriate per locale
- [ ] Contact form emails sent in user's language
- [ ] SEO metadata correct for each language
- [ ] URL routing works for all language codes

---

## 🖥️ **2. CROSS-BROWSER & DEVICE TESTING**

### **2.1 Browser Compatibility Matrix**

| Browser | Desktop | Mobile | Testing Priority |
|---------|---------|---------|-----------------|
| Chrome | ✅ Latest + 2 prev | ✅ Android | **Critical** |
| Safari | ✅ Latest + 1 prev | ✅ iOS | **Critical** |
| Firefox | ✅ Latest + 1 prev | ✅ Android | **High** |
| Edge | ✅ Latest | ❌ N/A | **Medium** |

### **2.2 Device Testing Matrix**

**Desktop Resolutions:**
- 1920x1080 (Full HD)
- 1366x768 (Common laptop)
- 2560x1440 (2K monitors)

**Tablet Testing:**
- iPad (768x1024)
- Android tablets (800x1280)

**Mobile Testing:**
- iPhone SE (375x667)
- iPhone 12 (390x844)
- Android phones (360x640)

### **2.3 Responsive Design Testing**

```javascript
// Playwright responsive testing script
const devices = [
  'iPhone 12',
  'iPad',
  'Desktop Chrome',
  'Desktop Safari'
];

for (const device of devices) {
  await test(`Contact form works on ${device}`, async ({ page }) => {
    // Test contact form submission on each device
  });
}
```

---

## ⚡ **3. PERFORMANCE TESTING & OPTIMIZATION**

### **3.1 Performance Benchmarks**

**Target Metrics (Lighthouse):**
- ✅ **First Contentful Paint**: < 1.5s
- ✅ **Largest Contentful Paint**: < 2.5s  
- ✅ **Cumulative Layout Shift**: < 0.1
- ✅ **Time to Interactive**: < 3s
- ✅ **Performance Score**: > 90
- ✅ **Accessibility Score**: > 95

### **3.2 Performance Testing Setup**

```javascript
// .lighthouserc.js
module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:3000',
        'http://localhost:3000/fr',
        'http://localhost:3000/en',
        'http://localhost:3000/contact',
      ],
      startServerCommand: 'npm run start',
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['warn', { minScore: 0.9 }],
      },
    },
  },
};
```

### **3.3 Bundle Analysis & Optimization**

```bash
# Analyze bundle size
npm run analyze

# Performance testing commands
npm run lighthouse
npm run test:perf
npm run test:load
```

---

## 🔐 **4. SECURITY TESTING**

### **4.1 Security Checklist**

**✅ CONTACT FORM SECURITY:**
- [ ] XSS protection implemented
- [ ] CSRF protection active
- [ ] SQL injection prevention
- [ ] Rate limiting configured
- [ ] Input sanitization working
- [ ] File upload restrictions (if applicable)

**✅ GDPR COMPLIANCE TESTING:**
- [ ] Cookie consent banner functions
- [ ] Privacy policy accessible
- [ ] Data processing consent recorded
- [ ] Right to erasure functionality
- [ ] Data portability features
- [ ] Consent withdrawal mechanism

**✅ GENERAL SECURITY:**
- [ ] HTTPS enforced
- [ ] Security headers configured
- [ ] Environment variables secured
- [ ] API endpoints protected
- [ ] Error messages don't expose sensitive info

### **4.2 Security Testing Scripts**

```javascript
// Security test examples
test('Contact form prevents XSS attacks', async () => {
  const maliciousInput = '<script>alert("xss")</script>';
  // Test form handles malicious input safely
});

test('Rate limiting prevents spam', async () => {
  // Test multiple rapid submissions are blocked
});
```

---

## 🎭 **5. AUTOMATED TESTING IMPLEMENTATION**

### **5.1 Unit Testing Setup**

```javascript
// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
```

### **5.2 Component Testing Examples**

```javascript
// __tests__/ContactForm.test.js
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import ContactForm from '@/components/ContactForm'

describe('ContactForm', () => {
  test('renders form fields correctly', () => {
    render(<ContactForm dictionary={mockDictionary} />)
    
    expect(screen.getByLabelText(/prénom/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/nom/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })

  test('submits form with valid data', async () => {
    const mockSubmit = jest.fn()
    render(<ContactForm onSubmit={mockSubmit} dictionary={mockDictionary} />)
    
    fireEvent.change(screen.getByLabelText(/prénom/i), {
      target: { value: 'Test' }
    })
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'test@example.com' }
    })
    
    fireEvent.click(screen.getByRole('button', { name: /envoyer/i }))
    
    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith({
        firstname: 'Test',
        email: 'test@example.com',
        // ... other fields
      })
    })
  })

  test('displays validation errors for empty required fields', async () => {
    render(<ContactForm dictionary={mockDictionary} />)
    
    fireEvent.click(screen.getByRole('button', { name: /envoyer/i }))
    
    await waitFor(() => {
      expect(screen.getByText(/ce champ est requis/i)).toBeInTheDocument()
    })
  })
})
```

### **5.3 End-to-End Testing**

```javascript
// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
```

### **5.4 Critical User Journey Tests**

```javascript
// e2e/user-journey.spec.ts
import { test, expect } from '@playwright/test';

test('Complete user journey - French user contacts practitioner', async ({ page }) => {
  // 1. Navigate to homepage
  await page.goto('/');
  
  // 2. Verify French is default language
  await expect(page.locator('h1')).toContainText('Nathalie JEAN');
  
  // 3. Navigate to about page
  await page.click('text=À Propos');
  await expect(page).toHaveURL('/fr/about');
  
  // 4. View certificate gallery
  await page.click('[data-testid="certificate-gallery"]');
  await expect(page.locator('[data-testid="certificate-modal"]')).toBeVisible();
  
  // 5. Close modal and navigate to contact
  await page.press('Escape');
  await page.click('text=Contact');
  
  // 6. Fill and submit contact form
  await page.fill('[name="firstname"]', 'Marie');
  await page.fill('[name="lastname"]', 'Dupont');
  await page.fill('[name="email"]', 'marie.dupont@test.fr');
  await page.fill('[name="message"]', 'Bonjour, je souhaiterais prendre rendez-vous.');
  
  await page.click('button[type="submit"]');
  
  // 7. Verify success message
  await expect(page.locator('[data-testid="success-message"]')).toBeVisible();
  await expect(page.locator('[data-testid="success-message"]')).toContainText('Message envoyé');
});

test('Language switching maintains context', async ({ page }) => {
  await page.goto('/fr/about');
  
  // Switch to English
  await page.click('[data-testid="language-switcher"]');
  await page.click('text=English');
  
  // Verify we're on English about page
  await expect(page).toHaveURL('/en/about');
  await expect(page.locator('h1')).toContainText('About');
});

test('GDPR cookie banner compliance', async ({ page }) => {
  // Clear storage to simulate new visitor
  await page.context().clearCookies();
  await page.goto('/');
  
  // Verify cookie banner appears
  await expect(page.locator('[data-testid="cookie-banner"]')).toBeVisible();
  
  // Test customize preferences
  await page.click('text=Personnaliser');
  await expect(page.locator('[data-testid="cookie-preferences"]')).toBeVisible();
  
  // Toggle analytics cookies off
  await page.click('[data-testid="analytics-toggle"]');
  await page.click('text=Accepter la sélection');
  
  // Verify banner is hidden and preferences saved
  await expect(page.locator('[data-testid="cookie-banner"]')).not.toBeVisible();
});
```

---

## 🏗️ **6. STAGING ENVIRONMENT SETUP**

### **6.1 IONOS VPS Staging Configuration**

```bash
# Staging environment setup
STAGING_DOMAIN="staging.shiatsu-guyane.fr"
STAGING_SERVER="your-ionos-server-ip"

# 1. Create staging subdomain DNS record
# A record: staging -> Your IONOS VPS IP

# 2. Configure Dokploy for staging
# Create new project in Dokploy
# Set environment variables for staging
```

### **6.2 Environment Variables for Staging**

```env
# .env.staging
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://staging.shiatsu-guyane.fr
RESEND_API_KEY=your_staging_resend_key
NEXT_PUBLIC_CONTACT_EMAIL=staging@shiatsu-guyane.fr

# Use Mailtrap for staging email testing
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=your_mailtrap_user
SMTP_PASS=your_mailtrap_pass
```

### **6.3 Staging Deployment Script**

```bash
#!/bin/bash
# deploy-staging.sh

echo "🚀 Deploying to staging environment..."

# Build production bundle
npm run build

# Run tests before deployment
npm run test
npm run test:e2e

# Deploy to staging via Dokploy
# (Configure Dokploy webhook or manual deployment)

echo "✅ Staging deployment complete"
echo "🌐 Staging URL: https://staging.shiatsu-guyane.fr"
```

---

## 📊 **7. LOAD TESTING STRATEGY**

### **7.1 Traffic Simulation**

```javascript
// load-test.js - Using Artillery.js
module.exports = {
  config: {
    target: 'https://staging.shiatsu-guyane.fr',
    phases: [
      { duration: '2m', arrivalRate: 10 }, // Warm up
      { duration: '5m', arrivalRate: 25 }, // Normal load (2K-2.5K monthly)
      { duration: '2m', arrivalRate: 100 }, // Peak load (10x normal)
      { duration: '5m', arrivalRate: 50 }, // Sustained peak
    ],
  },
  scenarios: [
    {
      name: 'Homepage visit',
      weight: 40,
      flow: [
        { get: { url: '/' } },
        { think: 5 },
        { get: { url: '/fr/about' } },
      ],
    },
    {
      name: 'Contact form submission',
      weight: 20,
      flow: [
        { get: { url: '/fr/contact' } },
        { think: 10 },
        {
          post: {
            url: '/api/contact',
            json: {
              firstname: 'Load Test',
              lastname: 'User {{ $randomString() }}',
              email: 'test{{ $randomInt(1, 1000) }}@test.com',
              message: 'Load testing message',
            },
          },
        },
      ],
    },
    {
      name: 'Certificate gallery',
      weight: 25,
      flow: [
        { get: { url: '/fr/about' } },
        { think: 3 },
        { get: { url: '/_next/image?url=/images/diplomas/diploma1.jpg&w=800&q=75' } },
      ],
    },
  ],
};
```

### **7.2 Load Testing Commands**

```bash
# Install load testing tools
npm install -g artillery

# Run load tests
artillery run load-test.js --output staging-load-test.json
artillery report staging-load-test.json
```

---

## ✅ **8. PRE-DEPLOYMENT CHECKLIST**

### **8.1 Functional Testing Checklist**

**🎯 CRITICAL FUNCTIONALITY:**
- [ ] All pages load without JavaScript errors
- [ ] Contact form sends emails successfully
- [ ] Certificate gallery modals open and close correctly
- [ ] Language switching works on all pages
- [ ] Mobile navigation menu functions properly
- [ ] GDPR cookie banner displays and functions
- [ ] Footer disclaimers are visible
- [ ] Theme switching (light/dark) works

**📱 MOBILE EXPERIENCE:**
- [ ] Touch interactions work on all devices
- [ ] Text is readable without zooming
- [ ] Buttons are appropriately sized for touch
- [ ] Images load and display correctly
- [ ] Contact form is usable on mobile
- [ ] Certificate gallery works on mobile

**🌍 MULTILINGUAL VERIFICATION:**
- [ ] All 6 languages display correctly
- [ ] No missing translations
- [ ] Text doesn't overflow containers
- [ ] Contact form emails sent in correct language
- [ ] SEO metadata correct for each language
- [ ] URL structure works for all languages

### **8.2 Performance Verification**

```bash
# Performance testing before deployment
npm run build
npm run start

# Run Lighthouse audits
npm run lighthouse

# Check bundle size
npm run analyze

# Verify Core Web Vitals
# Target scores:
# - Performance: > 90
# - Accessibility: > 95
# - Best Practices: > 90
# - SEO: > 90
```

### **8.3 Security Pre-Deployment Check**

- [ ] HTTPS enforced on all pages
- [ ] Security headers configured
- [ ] Contact form rate limiting active
- [ ] Environment variables secure
- [ ] API endpoints protected
- [ ] GDPR compliance verified
- [ ] Cookie consent properly implemented
- [ ] Privacy policy accessible

---

## 🚀 **9. DEPLOYMENT & ROLLBACK STRATEGY**

### **9.1 Production Deployment Process**

```bash
#!/bin/bash
# production-deploy.sh

echo "🚀 Starting production deployment..."

# 1. Final testing on staging
echo "📊 Running final tests on staging..."
npm run test:staging

# 2. Backup current production (if applicable)
echo "💾 Creating backup..."
# Add backup commands specific to your setup

# 3. Deploy to production
echo "🌐 Deploying to production..."
# Configure Dokploy production deployment

# 4. Verify deployment
echo "✅ Verifying deployment..."
curl -f https://shiatsu-guyane.fr || exit 1

# 5. Run smoke tests
echo "🔍 Running smoke tests..."
npm run test:production-smoke

echo "🎉 Production deployment complete!"
```

### **9.2 Rollback Procedure**

```bash
#!/bin/bash
# rollback.sh

echo "⚠️  Initiating rollback procedure..."

# 1. Stop current deployment
echo "🛑 Stopping current deployment..."

# 2. Restore previous version
echo "🔄 Restoring previous version..."

# 3. Verify rollback success
echo "✅ Verifying rollback..."
curl -f https://shiatsu-guyane.fr || exit 1

echo "✅ Rollback completed successfully"
```

### **9.3 Post-Deployment Monitoring**

```javascript
// monitoring.js - Basic health checks
const checkEndpoints = [
  'https://shiatsu-guyane.fr',
  'https://shiatsu-guyane.fr/fr/contact',
  'https://shiatsu-guyane.fr/en/about',
  'https://shiatsu-guyane.fr/api/health' // If implemented
];

async function healthCheck() {
  for (const url of checkEndpoints) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.error(`❌ ${url} returned ${response.status}`);
      } else {
        console.log(`✅ ${url} is healthy`);
      }
    } catch (error) {
      console.error(`❌ ${url} failed: ${error.message}`);
    }
  }
}

// Run health check every 5 minutes for first hour after deployment
setInterval(healthCheck, 5 * 60 * 1000);
```

---

## 📋 **10. TESTING AUTOMATION SCRIPTS**

### **10.1 Package.json Scripts**

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "test:perf": "lhci autorun",
    "test:load": "artillery run load-test.js",
    "test:staging": "NEXT_PUBLIC_SITE_URL=https://staging.shiatsu-guyane.fr npm run test:e2e",
    "test:production-smoke": "playwright test smoke-tests.spec.ts",
    "analyze": "ANALYZE=true npm run build",
    "lighthouse": "lhci autorun --collect.url=http://localhost:3000",
    "deploy:staging": "./deploy-staging.sh",
    "deploy:production": "./production-deploy.sh",
    "rollback": "./rollback.sh"
  }
}
```

### **10.2 GitHub Actions CI/CD** (Optional)

```yaml
# .github/workflows/test.yml
name: Testing Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run linting
      run: npm run lint
    
    - name: Run unit tests
      run: npm run test
    
    - name: Build application
      run: npm run build
    
    - name: Install Playwright
      run: npx playwright install
    
    - name: Run E2E tests
      run: npm run test:e2e
    
    - name: Run performance tests
      run: npm run test:perf
```

---

## 📊 **11. SUCCESS CRITERIA & METRICS**

### **11.1 Testing Success Criteria**

**✅ FUNCTIONALITY:**
- All critical user journeys complete successfully
- Contact form delivers emails in all 6 languages
- Certificate gallery functions on all devices
- GDPR compliance features work correctly

**✅ PERFORMANCE:**
- Lighthouse Performance Score > 90
- First Contentful Paint < 1.5s
- Largest Contentful Paint < 2.5s
- Cumulative Layout Shift < 0.1

**✅ COMPATIBILITY:**
- Works on all target browsers and devices
- Responsive design verified across all breakpoints
- Touch interactions function properly on mobile

**✅ SECURITY:**
- All security tests pass
- GDPR compliance verified
- No security vulnerabilities detected

### **11.2 Performance Monitoring Dashboard**

```javascript
// performance-metrics.js
const performanceMetrics = {
  // Core Web Vitals targets
  LCP: { target: 2500, current: null },
  FID: { target: 100, current: null },
  CLS: { target: 0.1, current: null },
  
  // Custom metrics
  contactFormSubmissionTime: { target: 1000, current: null },
  imageGalleryLoadTime: { target: 2000, current: null },
  languageSwitchTime: { target: 500, current: null },
  
  // Server metrics (to monitor on IONOS VPS)
  serverResponseTime: { target: 200, current: null },
  serverMemoryUsage: { target: 80, current: null }, // percentage
  serverCPUUsage: { target: 70, current: null }, // percentage
};
```

---

## 🎯 **IMMEDIATE ACTION ITEMS**

### **Priority 1 (Critical - Do First):**

1. **Set up basic testing framework**
   ```bash
   npm install -D @testing-library/react @testing-library/jest-dom jest
   npm install -D @playwright/test
   ```

2. **Test contact form functionality locally**
   ```bash
   npm run dev
   # Test form submission and email delivery
   ```

3. **Verify multilingual content**
   - Check all 6 languages display correctly
   - Test language switching functionality

4. **Test certificate gallery**
   - Verify modal functionality
   - Test image loading and navigation

### **Priority 2 (High - Do Next):**

1. **Set up staging environment on IONOS VPS**
   - Configure staging.shiatsu-guyane.fr subdomain
   - Set up Dokploy staging deployment
   - Configure test email service

2. **Implement performance testing**
   ```bash
   npm install -D @lhci/cli
   npm run lighthouse
   ```

3. **Cross-browser testing**
   - Test on Chrome, Safari, Firefox, Edge
   - Test mobile browsers (iOS Safari, Chrome Mobile)

### **Priority 3 (Medium - Do Later):**

1. **Set up automated testing pipeline**
2. **Implement load testing**
3. **Create deployment and rollback scripts**
4. **Set up monitoring and alerting**

---

## 📞 **SUPPORT & TROUBLESHOOTING**

### **Common Issues & Solutions:**

**Issue:** Contact form not sending emails
**Solution:** Check RESEND_API_KEY and email configuration

**Issue:** Certificate gallery images not loading
**Solution:** Verify image paths and Next.js Image optimization settings

**Issue:** Language switching not working
**Solution:** Check routing configuration and dictionary loading

**Issue:** Poor mobile performance
**Solution:** Optimize images and implement lazy loading

### **Testing Resources:**

- **Playwright Documentation:** https://playwright.dev/
- **Testing Library:** https://testing-library.com/
- **Lighthouse CI:** https://github.com/GoogleChrome/lighthouse-ci
- **Artillery Load Testing:** https://artillery.io/

---

**📝 Document Version:** 1.0  
**Last Updated:** January 2025  
**Next Review:** Before production deployment