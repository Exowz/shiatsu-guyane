import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Create a new ratelimiter that allows 5 requests per 60 seconds for contact form
export const ratelimit = new Ratelimit({
  redis: process.env.UPSTASH_REDIS_REST_URL ? 
    Redis.fromEnv() : 
    // Fallback to in-memory store for development
    new Map() as any,
  limiter: Ratelimit.slidingWindow(5, "60 s"),
  analytics: true,
  /**
   * Optional prefix for the keys used in Redis. This is useful if you want to
   * share a redis instance with other applications and want to avoid key
   * collisions. The default prefix is "@upstash/ratelimit"
   */
  prefix: "@upstash/ratelimit/contact-form",
});

// Alternative simple rate limiter for development without Redis
export const simpleRateLimit = (() => {
  const requests = new Map<string, number[]>();

  return {
    limit: async (identifier: string) => {
      const now = Date.now();
      const windowMs = 60 * 1000; // 1 minute
      const maxRequests = 5;

      if (!requests.has(identifier)) {
        requests.set(identifier, []);
      }

      const userRequests = requests.get(identifier)!;
      
      // Remove old requests outside the window
      const validRequests = userRequests.filter(time => now - time < windowMs);
      requests.set(identifier, validRequests);

      if (validRequests.length >= maxRequests) {
        return {
          success: false,
          limit: maxRequests,
          reset: Math.min(...validRequests) + windowMs,
          remaining: 0
        };
      }

      // Add current request
      validRequests.push(now);
      requests.set(identifier, validRequests);

      return {
        success: true,
        limit: maxRequests,
        reset: now + windowMs,
        remaining: maxRequests - validRequests.length
      };
    }
  };
})();

// Use Redis rate limiting in production, simple rate limiting in development
export const getRateLimiter = () => {
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.NODE_ENV === 'production') {
    return ratelimit;
  }
  return simpleRateLimit;
};