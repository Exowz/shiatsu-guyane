// Form validation schemas (using Zod if needed in the future)
// This file is prepared for future form validation needs

export const contactFormSchema = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  phone: {
    required: false,
    pattern: /^[\+]?[0-9\s\-\(\)]{10,}$/,
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 500,
  },
} as const;