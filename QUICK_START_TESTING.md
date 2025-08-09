# 🚀 Quick Start Testing Guide

## **1. Install Testing Dependencies**

```bash
# Install all testing frameworks and tools
npm install -D @testing-library/react @testing-library/jest-dom @testing-library/user-event
npm install -D @playwright/test
npm install -D @lhci/cli @next/bundle-analyzer
npm install -D jest jest-environment-jsdom
npm install -D cross-env

# Install global tools
npm install -g artillery  # For load testing
```

## **2. Initialize Playwright** 

```bash
npx playwright install
```

## **3. Run Quick Local Tests**

```bash
# Start development server
npm run dev

# In another terminal - run basic tests
npm run test           # Unit tests
npm run test:e2e       # End-to-end tests  
npm run lighthouse     # Performance tests
```

## **4. Critical Pre-Deployment Testing**

```bash
# Full test suite before deployment
npm run test:all

# Test production build locally
npm run build
npm run start
npm run lighthouse
```

## **5. Load Testing**

```bash
# Test with simulated traffic
npm run test:load
```

## **6. Key Test Commands**

```bash
npm run test              # Unit tests
npm run test:watch        # Watch mode for development
npm run test:e2e          # End-to-end tests
npm run test:e2e:ui       # Interactive E2E testing
npm run test:perf         # Performance audit
npm run test:load         # Load testing
npm run analyze           # Bundle size analysis
```

## **🎯 Essential Tests to Run Before Deployment:**

1. **Contact Form**: Test form submission and email delivery
2. **Languages**: Switch between all 6 languages  
3. **Mobile**: Test on mobile viewport (375x667)
4. **Gallery**: Open and close certificate modals
5. **Performance**: Lighthouse score > 90
6. **GDPR**: Cookie banner functionality

## **📱 Quick Mobile Test**

```javascript
// In browser dev tools, set mobile viewport and test:
// - Navigation menu
// - Contact form submission  
// - Certificate gallery
// - Language switching
```

## **⚡ Performance Targets**

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s  
- **Cumulative Layout Shift**: < 0.1
- **Performance Score**: > 90

## **🚨 If Tests Fail**

1. **Contact form fails**: Check RESEND_API_KEY environment variable
2. **Images not loading**: Verify paths in public/images/ directory
3. **Language switching fails**: Check dictionary files in src/dictionaries/
4. **Performance issues**: Run `npm run analyze` to check bundle size

---

**Quick checklist before deployment:**
- [ ] All tests pass locally
- [ ] Contact form sends emails
- [ ] All languages work
- [ ] Mobile responsive
- [ ] Performance score > 90
- [ ] No console errors