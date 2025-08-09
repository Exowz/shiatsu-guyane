// Artillery.js helper functions for load testing

module.exports = {
  // Generate random contact form data
  generateContactData: (requestParams, context, ee, next) => {
    const firstNames = ['Marie', 'Pierre', 'Sophie', 'Jean', 'Claire', 'Michel', 'Anne', 'David', 'Julie', 'Laurent'];
    const lastNames = ['Dupont', 'Martin', 'Bernard', 'Thomas', 'Robert', 'Richard', 'Petit', 'Durand', 'Leroy', 'Moreau'];
    const messages = [
      'Bonjour, je souhaiterais prendre rendez-vous pour une séance de Shiatsu.',
      'Hello, I would like to book a Shiatsu session.',
      'Hola, me gustaría reservar una sesión de Shiatsu.',
      'Je suis intéressé par vos services de thérapie manuelle.',
      'Pouvez-vous me donner plus d\'informations sur vos tarifs?',
      'I have chronic back pain and would like to try Shiatsu therapy.'
    ];

    context.vars.randomFirstname = firstNames[Math.floor(Math.random() * firstNames.length)];
    context.vars.randomLastname = lastNames[Math.floor(Math.random() * lastNames.length)];
    context.vars.randomEmail = `${context.vars.randomFirstname.toLowerCase()}.${context.vars.randomLastname.toLowerCase()}${Math.floor(Math.random() * 1000)}@test.fr`;
    context.vars.randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    return next();
  },

  // Log successful contact form submissions
  logContactSuccess: (requestParams, response, context, ee, next) => {
    if (response.body && JSON.parse(response.body).success) {
      console.log(`✅ Contact form submitted successfully for ${context.vars.randomEmail}`);
    } else {
      console.log(`❌ Contact form failed for ${context.vars.randomEmail}`);
    }
    return next();
  },

  // Check response times and log slow requests
  checkResponseTime: (requestParams, response, context, ee, next) => {
    const responseTime = response.timings.response;
    
    if (responseTime > 2000) {
      console.log(`⚠️  Slow response: ${requestParams.url} took ${responseTime}ms`);
      ee.emit('counter', 'slow_responses', 1);
    }
    
    if (responseTime > 5000) {
      console.log(`🐌 Very slow response: ${requestParams.url} took ${responseTime}ms`);
      ee.emit('counter', 'very_slow_responses', 1);
    }
    
    return next();
  },

  // Monitor server errors
  checkServerErrors: (requestParams, response, context, ee, next) => {
    if (response.statusCode >= 500) {
      console.log(`🚨 Server error: ${response.statusCode} for ${requestParams.url}`);
      ee.emit('counter', 'server_errors', 1);
    } else if (response.statusCode >= 400) {
      console.log(`⚠️  Client error: ${response.statusCode} for ${requestParams.url}`);
      ee.emit('counter', 'client_errors', 1);
    }
    
    return next();
  },

  // Validate critical content is present
  validatePageContent: (requestParams, response, context, ee, next) => {
    const body = response.body;
    const url = requestParams.url;
    
    // Check for critical content based on page
    if (url === '/' || url.includes('/fr')) {
      if (!body.includes('Nathalie JEAN')) {
        console.log(`❌ Missing critical content on ${url}: Practitioner name not found`);
        ee.emit('counter', 'content_validation_failures', 1);
      }
    }
    
    if (url.includes('/contact')) {
      if (!body.includes('form') && !body.includes('contact')) {
        console.log(`❌ Missing contact form on ${url}`);
        ee.emit('counter', 'content_validation_failures', 1);
      }
    }
    
    // Check for JavaScript errors in HTML
    if (body.includes('error') && body.includes('script')) {
      console.log(`⚠️  Possible JavaScript error detected on ${url}`);
      ee.emit('counter', 'js_error_indicators', 1);
    }
    
    return next();
  },

  // Generate performance report data
  generatePerformanceMetrics: (stats, done) => {
    const timestamp = new Date().toISOString();
    const report = {
      timestamp,
      summary: {
        total_requests: stats.requestsCompleted,
        successful_requests: stats.requestsCompleted - (stats.errors || 0),
        failed_requests: stats.errors || 0,
        success_rate: ((stats.requestsCompleted - (stats.errors || 0)) / stats.requestsCompleted * 100).toFixed(2) + '%',
        average_response_time: stats.latency ? stats.latency.mean : 'N/A',
        p95_response_time: stats.latency ? stats.latency.p95 : 'N/A',
        p99_response_time: stats.latency ? stats.latency.p99 : 'N/A',
      },
      scenarios: stats.scenariosCompleted,
      phases_completed: stats.phasesCompleted,
    };

    console.log('\n📊 LOAD TEST PERFORMANCE REPORT');
    console.log('================================');
    console.log(`🕐 Timestamp: ${report.timestamp}`);
    console.log(`📈 Total Requests: ${report.summary.total_requests}`);
    console.log(`✅ Successful: ${report.summary.successful_requests}`);
    console.log(`❌ Failed: ${report.summary.failed_requests}`);
    console.log(`📊 Success Rate: ${report.summary.success_rate}`);
    console.log(`⚡ Avg Response Time: ${report.summary.average_response_time}ms`);
    console.log(`🎯 95th Percentile: ${report.summary.p95_response_time}ms`);
    console.log(`🔥 99th Percentile: ${report.summary.p99_response_time}ms`);
    console.log('================================\n');

    // Performance validation
    const p95 = stats.latency ? stats.latency.p95 : 0;
    const errorRate = stats.errors ? (stats.errors / stats.requestsCompleted * 100) : 0;

    if (p95 > 2000) {
      console.log('🚨 WARNING: 95th percentile response time exceeds 2000ms');
    }
    
    if (errorRate > 1) {
      console.log('🚨 WARNING: Error rate exceeds 1%');
    }
    
    if (errorRate === 0 && p95 < 1000) {
      console.log('🎉 EXCELLENT: All requests successful with great response times!');
    }

    done();
  }
};