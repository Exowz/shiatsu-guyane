import { getDictionary } from '@/lib/dictionary';
import { i18n, Locale } from '@/lib/i18n-config';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({
    lang: locale,
  }));
}
import { ContactForm } from '@/components/ContactForm';
import { Mail, MessageCircle, Send, Phone, MapPin, Clock } from 'lucide-react';

export default async function ContactPage(props: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);
  const t = dictionary.contactPage;
  
  return (
    <div className="bg-background text-foreground relative overflow-hidden min-h-screen">
      {/* Sophisticated background elements using natural palette */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Warm connection glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[rgb(var(--color-primary))]/8 rounded-full blur-3xl animate-pulse"></div>
        {/* Communication warmth */}
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[rgb(var(--color-secondary))]/6 rounded-full blur-3xl animate-pulse delay-1000"></div>
        {/* Peaceful dialogue */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[rgb(var(--color-tertiary))]/4 to-[rgb(var(--color-primary))]/3 rounded-full blur-3xl"></div>
      </div>

      {/* Enhanced Header Section */}
      <section className="min-h-screen justify-center flex flex-col items-center py-20 md:py-32 relative bg-secondary/30 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-surface))]/40 to-transparent"></div>
        <div className="container mx-auto px-6 pt-32 pb-24 text-center relative z-10">
          {/* Contact badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card/80 backdrop-blur-md rounded-full mb-8 hover:bg-card/90 transition-all duration-300 shadow-lg hover:shadow-xl">
            <MessageCircle className="w-5 h-5 text-[rgb(var(--color-primary))]" />
            <span className="text-sm font-semibold text-card-foreground tracking-wide">{dictionary.contactPage.enhanced.badge}</span>
          </div>
          
          {/* Main title with warm gradient */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 max-w-5xl mx-auto">
            <span className="bg-gradient-to-r from-[rgb(var(--color-primary))] via-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))] bg-clip-text text-transparent">
              {t.title}
            </span>
          </h1>
          
          {/* Enhanced subtitle */}
          <p className="text-xl text-[rgb(var(--color-text-secondary))] max-w-4xl mx-auto leading-relaxed mb-12">
            {t.subtitle}
          </p>

          {/* Contact quick info */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-3 bg-card/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Phone className="w-4 h-4 text-[rgb(var(--color-primary))]" />
              <span className="text-[rgb(var(--color-text-secondary))] font-medium">{dictionary.contactPage.enhanced.quickInfo.rapidResponse}</span>
            </div>
            <div className="flex items-center gap-3 bg-card/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Mail className="w-4 h-4 text-[rgb(var(--color-secondary))]" />
              <span className="text-[rgb(var(--color-text-secondary))] font-medium">{dictionary.contactPage.enhanced.quickInfo.personalizedExchange}</span>
            </div>
            <div className="flex items-center gap-3 bg-card/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Clock className="w-4 h-4 text-[rgb(var(--color-tertiary))]" />
              <span className="text-[rgb(var(--color-text-secondary))] font-medium">{dictionary.contactPage.enhanced.quickInfo.maxTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Main Content */}
      <main className="relative z-10 py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 max-w-7xl mx-auto">
            
            {/* Left column - Contact info and encouragement */}
            <div className="lg:col-span-2 space-y-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(var(--color-secondary))]/10 to-[rgb(var(--color-tertiary))]/10 backdrop-blur-sm px-5 py-2 rounded-full text-[rgb(var(--color-secondary))] font-semibold text-sm shadow-lg">
                <Send className="w-4 h-4" />
                {dictionary.contactPage.enhanced.leftColumn.badge}
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                {dictionary.contactPage.enhanced.leftColumn.title}
              </h2>
              
              <p className="text-lg text-[rgb(var(--color-text-secondary))] leading-relaxed">
                {dictionary.contactPage.enhanced.leftColumn.description}
              </p>

              {/* Contact benefits */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[rgb(var(--color-primary))] rounded-full"></div>
                  <span className="text-[rgb(var(--color-text-secondary))]">{dictionary.contactPage.enhanced.leftColumn.benefits.freeConsultation}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[rgb(var(--color-secondary))] rounded-full"></div>
                  <span className="text-[rgb(var(--color-text-secondary))]">{dictionary.contactPage.enhanced.leftColumn.benefits.personalizedAdvice}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[rgb(var(--color-tertiary))] rounded-full"></div>
                  <span className="text-[rgb(var(--color-text-secondary))]">{dictionary.contactPage.enhanced.leftColumn.benefits.kindApproach}</span>
                </div>
              </div>

              {/* Additional contact options */}
              <div className="bg-card/60 backdrop-blur-md rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-card-foreground mb-4">{dictionary.contactPage.enhanced.leftColumn.otherContact.title}</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[rgb(var(--color-primary))]" />
                    <span className="text-[rgb(var(--color-text-secondary))]">{dictionary.contactPage.enhanced.leftColumn.otherContact.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[rgb(var(--color-secondary))]" />
                    <span className="text-[rgb(var(--color-text-secondary))]">{dictionary.contactPage.enhanced.leftColumn.otherContact.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[rgb(var(--color-tertiary))]" />
                    <span className="text-[rgb(var(--color-text-secondary))]">{dictionary.contactPage.enhanced.leftColumn.otherContact.office}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Contact form */}
            <div className="lg:col-span-3">
              <div className="bg-card/70 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-primary))]/5 via-[rgb(var(--color-secondary))]/3 to-transparent rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <Send className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-2">{dictionary.contactPage.enhanced.rightColumn.formTitle}</h3>
                    <p className="text-[rgb(var(--color-text-secondary))]">{dictionary.contactPage.enhanced.rightColumn.formSubtitle}</p>
                  </div>
                  
                  <ContactForm dictionary={dictionary.contactPage} language={lang} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}