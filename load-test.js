// Load testing configuration for Artillery.js
// npm install -g artillery
// Run with: artillery run load-test.js

module.exports = {
  config: {
    target: 'http://localhost:3000', // Change to staging URL when testing staging
    phases: [
      // Gradual load increase to simulate real traffic patterns
      { 
        duration: '1m', 
        arrivalRate: 5, 
        name: 'Warm-up phase' 
      },
      { 
        duration: '3m', 
        arrivalRate: 15, 
        name: 'Normal traffic (2K-2.5K monthly)' 
      },
      { 
        duration: '2m', 
        arrivalRate: 50, 
        name: 'Peak traffic (5x normal)' 
      },
      { 
        duration: '1m', 
        arrivalRate: 100, 
        name: 'Stress test (10x normal)' 
      },
      { 
        duration: '2m', 
        arrivalRate: 30, 
        name: 'Cool-down phase' 
      },
    ],
    // Global configuration
    processor: './load-test-functions.js',
  },
  scenarios: [
    // Scenario 1: Homepage visitor (40% of traffic)
    {
      name: 'Homepage and navigation',
      weight: 40,
      flow: [
        {
          get: {
            url: '/',
            capture: {
              header: 'content-type',
              as: 'contentType'
            }
          }
        },
        { think: '{{ $randomInt(3, 10) }}' }, // Random think time 3-10 seconds
        {
          get: {
            url: '/fr/about'
          }
        },
        { think: '{{ $randomInt(5, 15) }}' },
        {
          get: {
            url: '/fr/le-shiatsu'
          }
        }
      ]
    },

    // Scenario 2: Contact form interaction (25% of traffic)
    {
      name: 'Contact form submission',
      weight: 25,
      flow: [
        {
          get: {
            url: '/fr/contact'
          }
        },
        { think: '{{ $randomInt(10, 30) }}' }, // User reads and fills form
        {
          post: {
            url: '/api/contact',
            json: {
              firstname: 'LoadTest{{ $randomInt(1, 1000) }}',
              lastname: 'User{{ $randomInt(1, 1000) }}',
              email: 'loadtest{{ $randomInt(1, 10000) }}@example.com',
              message: 'This is a load testing message {{ $timestamp }}',
              language: 'fr'
            },
            capture: {
              json: '$.success',
              as: 'contactSuccess'
            }
          }
        }
      ]
    },

    // Scenario 3: Certificate gallery viewing (20% of traffic) 
    {
      name: 'Certificate gallery interaction',
      weight: 20,
      flow: [
        {
          get: {
            url: '/fr/about'
          }
        },
        { think: '{{ $randomInt(5, 10) }}' },
        // Simulate image loading from gallery
        {
          get: {
            url: '/_next/image?url=/images/diplomas/diploma1.jpg&w=800&q=75'
          }
        },
        { think: '{{ $randomInt(2, 8) }}' },
        {
          get: {
            url: '/_next/image?url=/images/diplomas/diploma2.jpg&w=800&q=75'
          }
        }
      ]
    },

    // Scenario 4: Multi-language browsing (10% of traffic)
    {
      name: 'Language switching',
      weight: 10,
      flow: [
        {
          get: {
            url: '/fr'
          }
        },
        { think: '{{ $randomInt(3, 8) }}' },
        {
          get: {
            url: '/en'
          }
        },
        { think: '{{ $randomInt(3, 8) }}' },
        {
          get: {
            url: '/en/about'
          }
        },
        { think: '{{ $randomInt(2, 5) }}' },
        {
          get: {
            url: '/es'
          }
        }
      ]
    },

    // Scenario 5: Services and pricing page (5% of traffic)
    {
      name: 'Services exploration',
      weight: 5,
      flow: [
        {
          get: {
            url: '/fr/services-pricing'
          }
        },
        { think: '{{ $randomInt(10, 20) }}' },
        {
          get: {
            url: '/fr/pour-qui'
          }
        },
        { think: '{{ $randomInt(5, 15) }}' },
        {
          get: {
            url: '/fr/infos-pratiques'
          }
        }
      ]
    }
  ]
};

// Expected performance benchmarks to monitor:
// - Response time p95 < 1000ms for page loads
// - Response time p95 < 2000ms for API calls
// - Error rate < 1%
// - Successful responses > 99%
// - Memory usage stable (no leaks)
// - CPU usage manageable on server