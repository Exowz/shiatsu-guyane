'use client';

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from '@/lib/utils';
import { Send, User, Mail, MessageSquare, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';

interface ContactFormProps {
  dictionary: {
    labels: {
      firstname: string;
      lastname: string;
      email: string;
      message: string;
    };
    placeholders: {
      firstname: string;
      lastname: string;
      email: string;
      message: string;
    };
    button: string;
    form: {
      submitting: string;
      success: {
        title: string;
        description: string;
        sendAnother: string;
      };
      error: {
        title: string;
        description: string;
        tryAgain: string;
      };
      privacy: {
        title: string;
        description: string;
      };
    };
  };
  language?: string;
}

export function ContactForm({ dictionary: t, language = 'fr' }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          language
        }),
      });

      // Check if response has JSON content type
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error(`Le serveur a renvoyé une réponse invalide (${response.status})`);
      }

      // Parse JSON with proper error handling
      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        console.error('JSON parsing error:', jsonError);
        throw new Error('Erreur de parsing de la réponse du serveur');
      }

      // Check response status after we have the data
      if (!response.ok) {
        const errorMessage = data?.error || `Erreur ${response.status}: ${response.statusText}`;
        throw new Error(errorMessage);
      }

      // Success - data is guaranteed to be parsed correctly here
      setIsSubmitted(true);
      setFormData({ firstname: '', lastname: '', email: '', message: '' });
      
    } catch (err) {
      console.error('Contact form error:', err);
      setError(err instanceof Error ? err.message : 'Une erreur est survenue lors de l\'envoi de votre message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-gradient-to-br from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-primary))] rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg animate-pulse">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-card-foreground mb-4">{t.form.success.title}</h3>
        <p className="text-[rgb(var(--color-text-secondary))] leading-relaxed mb-6">
          {t.form.success.description}
        </p>
        <button 
          onClick={() => {
            setIsSubmitted(false);
            setError(null);
          }}
          className="inline-flex items-center gap-2 text-[rgb(var(--color-primary))] font-semibold hover:text-[rgb(var(--color-secondary))] transition-colors duration-300"
        >
          <Mail className="w-4 h-4" />
          {t.form.success.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Error display */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <AlertCircle className="w-4 h-4 text-red-600" />
            </div>
            <div>
              <h4 className="font-semibold text-red-800 mb-1">{t.form.error?.title || 'Erreur'}</h4>
              <p className="text-sm text-red-600 mb-2">{error}</p>
              <button 
                type="button"
                onClick={() => setError(null)}
                className="text-sm text-red-600 hover:text-red-700 font-medium"
              >
                {t.form.error?.tryAgain || 'Réessayer'}
              </button>
            </div>
          </div>
        </div>
      )}

      <form className="space-y-8" onSubmit={handleSubmit}>
        {/* Name fields with enhanced styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <EnhancedLabelInputContainer>
            <Label className="text-card-foreground font-semibold flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] flex items-center justify-center">
                <User className="w-3 h-3 text-white" />
              </div>
              {t.labels.firstname}
            </Label>
            <Input 
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleInputChange}
              placeholder={t.placeholders.firstname} 
              type="text" 
              className="h-12 text-base bg-card/80 text-card-foreground placeholder:text-muted-foreground"
              required
              disabled={isSubmitting}
            />
          </EnhancedLabelInputContainer>
          
          <EnhancedLabelInputContainer>
            <Label className="text-card-foreground font-semibold flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))] flex items-center justify-center">
                <User className="w-3 h-3 text-white" />
              </div>
              {t.labels.lastname}
            </Label>
            <Input 
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleInputChange}
              placeholder={t.placeholders.lastname} 
              type="text" 
              className="h-12 text-base bg-card/80 text-card-foreground placeholder:text-muted-foreground"
              required
              disabled={isSubmitting}
            />
          </EnhancedLabelInputContainer>
        </div>

        {/* Email field */}
        <EnhancedLabelInputContainer>
          <Label className="text-card-foreground font-semibold flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-primary))] flex items-center justify-center">
              <Mail className="w-3 h-3 text-white" />
            </div>
            {t.labels.email}
          </Label>
          <Input 
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder={t.placeholders.email} 
            type="email" 
            className="h-12 text-base bg-card/80 text-card-foreground placeholder:text-muted-foreground"
            required
            disabled={isSubmitting}
          />
        </EnhancedLabelInputContainer>

        {/* Message field */}
        <EnhancedLabelInputContainer>
          <Label className="text-card-foreground font-semibold flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] flex items-center justify-center">
              <MessageSquare className="w-3 h-3 text-white" />
            </div>
            {t.labels.message}
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder={t.placeholders.message}
            className="min-h-32 text-base bg-card/80 text-card-foreground placeholder:text-muted-foreground resize-none"
            required
            disabled={isSubmitting}
          />
        </EnhancedLabelInputContainer>

        {/* Enhanced submit button */}
        <div className="pt-4">
          <button
            className={`relative group w-full bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] text-white rounded-xl px-8 py-4 font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden ${
              isSubmitting ? 'cursor-wait' : ''
            }`}
            type="submit"
            disabled={isSubmitting}
          >
            {/* Button background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative flex items-center justify-center gap-3">
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>{t.form.submitting}</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>{t.button}</span>
                </>
              )}
            </div>
            <EnhancedBottomGradient />
          </button>
        </div>
      </form>

      {/* Privacy notice */}
      <div className="mt-8 p-6 bg-card/40 backdrop-blur-sm rounded-2xl">
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-[rgb(var(--color-tertiary))]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
            <CheckCircle className="w-4 h-4 text-[rgb(var(--color-tertiary))]" />
          </div>
          <div>
            <h4 className="font-semibold text-card-foreground mb-1">{t.form.privacy.title}</h4>
            <p className="text-sm text-[rgb(var(--color-text-secondary))] leading-relaxed">
              {t.form.privacy.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const EnhancedBottomGradient = () => {
  return (
    <>
      <span className="group-hover:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-[rgb(var(--color-primary))]/80 to-transparent" />
      <span className="group-hover:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-[rgb(var(--color-secondary))]/60 to-transparent" />
    </>
  );
};

const EnhancedLabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col w-full", className)}>
      {children}
    </div>
  );
};