module.exports = {
  ci: {
    collect: {
      // Test multiple critical pages
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/fr',
        'http://localhost:3000/en', 
        'http://localhost:3000/fr/about',
        'http://localhost:3000/fr/contact',
        'http://localhost:3000/fr/le-shiatsu',
        'http://localhost:3000/fr/pour-qui',
        'http://localhost:3000/fr/services-pricing',
      ],
      startServerCommand: 'npm run start',
      startServerReadyPattern: 'Ready on',
      startServerReadyTimeout: 30000,
      numberOfRuns: 3, // Run 3 times and take average
    },
    assert: {
      assertions: {
        // Performance thresholds
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['warn', { minScore: 0.9 }],

        // Core Web Vitals thresholds
        'first-contentful-paint': ['warn', { maxNumericValue: 1500 }],
        'largest-contentful-paint': ['warn', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['warn', { maxNumericValue: 200 }],

        // Other important metrics
        'speed-index': ['warn', { maxNumericValue: 2000 }],
        'interactive': ['warn', { maxNumericValue: 3000 }],
        'uses-responsive-images': 'off', // Next.js handles this
        'uses-rel-preconnect': 'off', // May not be applicable
      },
    },
    upload: {
      // Optional: Upload results to Lighthouse CI server
      target: 'temporary-public-storage',
    },
  },
};