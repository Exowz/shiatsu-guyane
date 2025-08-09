import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { getRateLimiter } from '@/lib/ratelimit';
import { ClientConfirmationEmail } from '@/components/emails/ClientConfirmationEmail';
import { PractitionerNotificationEmail } from '@/components/emails/PractitionerNotificationEmail';

// Validation schema
const contactSchema = z.object({
  firstname: z.string().min(1, 'Le prénom est requis').max(50, 'Le prénom est trop long'),
  lastname: z.string().min(1, 'Le nom est requis').max(50, 'Le nom est trop long'),
  email: z.string().email('Email invalide').max(100, 'Email trop long'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères').max(1000, 'Le message est trop long'),
  language: z.string().optional().default('fr'),
});

// Initialize Resend with error handling
function getResendClient() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not configured in environment variables');
  }
  return new Resend(process.env.RESEND_API_KEY);
}

// Environment validation function
function validateEnvironment() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not configured');
  }
  if (!process.env.PRACTITIONER_EMAIL) {
    throw new Error('PRACTITIONER_EMAIL is not configured');
  }
}

export async function POST(request: NextRequest) {
  try {
    // Validate environment first
    validateEnvironment();
    
    // Initialize Resend client
    const resend = getResendClient();
    
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               '127.0.0.1';
    const rateLimiter = getRateLimiter();
    const { success, limit, reset, remaining } = await rateLimiter.limit(ip);

    if (!success) {
      return NextResponse.json(
        { 
          error: 'Trop de tentatives. Veuillez réessayer plus tard.',
          retryAfter: Math.round((reset - Date.now()) / 1000)
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': limit.toString(),
            'X-RateLimit-Remaining': remaining.toString(),
            'X-RateLimit-Reset': reset.toString(),
          }
        }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactSchema.parse(body);
    
    const { firstname, lastname, email, message, language } = validatedData;

    // Sanitize inputs (additional layer of protection)
    const sanitizedData = {
      firstname: firstname.trim(),
      lastname: lastname.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      language: language || 'fr'
    };

    // Get current timestamp for tracking
    const timestamp = new Date().toLocaleString('fr-FR', {
      timeZone: 'America/Cayenne', // French Guiana timezone
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const emailPromises = [];

    // Send confirmation email to client
    try {
      const clientEmailPromise = resend.emails.send({
        from: `Shiatsu Guyane <noreply@${process.env.EMAIL_DOMAIN || 'shiatsu-guyane.com'}>`,
        to: [sanitizedData.email],
        subject: language === 'fr' ? 
          'Confirmation de votre message - Shiatsu Guyane' : 
          'Message confirmation - Shiatsu Guyane',
        react: ClientConfirmationEmail({
          firstname: sanitizedData.firstname,
          language: sanitizedData.language
        }),
      });

      emailPromises.push(clientEmailPromise);
    } catch (error) {
      console.error('Error preparing client confirmation email:', error);
    }

    // Send notification email to practitioner
    try {
      const practitionerEmailPromise = resend.emails.send({
        from: `Contact Form <contact@${process.env.EMAIL_DOMAIN || 'shiatsu-guyane.com'}>`,
        to: [process.env.PRACTITIONER_EMAIL!],
        subject: `Nouveau message de contact - ${sanitizedData.firstname} ${sanitizedData.lastname}`,
        react: PractitionerNotificationEmail({
          firstname: sanitizedData.firstname,
          lastname: sanitizedData.lastname,
          email: sanitizedData.email,
          message: sanitizedData.message,
          timestamp,
          language: sanitizedData.language
        }),
        // Set reply-to to client's email for easy response
        replyTo: sanitizedData.email,
      });

      emailPromises.push(practitionerEmailPromise);
    } catch (error) {
      console.error('Error preparing practitioner notification email:', error);
    }

    // Send both emails concurrently
    const emailResults = await Promise.allSettled(emailPromises);
    
    // Check if at least the practitioner email was sent successfully
    const practitionerEmailResult = emailResults[1];
    const clientEmailResult = emailResults[0];
    
    if (practitionerEmailResult?.status === 'rejected') {
      console.error('Failed to send practitioner notification:', practitionerEmailResult.reason);
      throw new Error('Failed to send notification email');
    }

    // Log results for monitoring
    console.log('Contact form submission processed:', {
      timestamp,
      client: `${sanitizedData.firstname} ${sanitizedData.lastname}`,
      email: sanitizedData.email,
      language: sanitizedData.language,
      practitionerEmailSent: practitionerEmailResult?.status === 'fulfilled',
      clientEmailSent: clientEmailResult?.status === 'fulfilled',
      ip
    });

    // Return success response
    return NextResponse.json({
      success: true,
      message: language === 'fr' ? 
        'Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.' :
        'Your message has been sent successfully. We will respond as soon as possible.',
      timestamp
    }, {
      status: 200,
      headers: {
        'X-RateLimit-Limit': limit.toString(),
        'X-RateLimit-Remaining': (remaining - 1).toString(),
        'X-RateLimit-Reset': reset.toString(),
      }
    });

  } catch (error: unknown) {
    console.error('Contact form error:', error);

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        error: 'Données invalides',
        details: error.errors.map((err: any) => ({
          field: err.path.join('.'),
          message: err.message
        }))
      }, { status: 400 });
    }

    // Handle rate limiting errors (already handled above, but just in case)
    if (error instanceof Error && error.message.includes('rate limit')) {
      return NextResponse.json({
        error: 'Trop de tentatives. Veuillez réessayer plus tard.'
      }, { status: 429 });
    }

    // Generic server error
    return NextResponse.json({
      error: 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer plus tard.',
      code: 'INTERNAL_SERVER_ERROR'
    }, { status: 500 });
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json({ 
    error: 'Method not allowed' 
  }, { status: 405 });
}