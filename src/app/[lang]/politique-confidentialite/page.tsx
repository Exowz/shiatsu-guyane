import { getDictionary } from '@/lib/dictionary';
import { i18n } from '@/lib/i18n-config';
import { Locale } from '@/types/dictionary';
import { ArrowLeft, Shield, Lock, Eye, Users, Database, Clock, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({
    lang: locale,
  }));
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const t = dictionary.legal?.privacyPolicy;

  if (!t) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Privacy policy not available for this language.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[rgb(var(--color-background))] via-[rgb(var(--color-surface))] to-[rgb(var(--color-background))]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-[rgb(var(--color-primary))]/6 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-[rgb(var(--color-tertiary))]/4 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="container mx-auto px-6 pt-12 pb-8">
            <Link
              href={`/${lang}`}
              className="inline-flex items-center gap-2 text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-primary))] transition-colors duration-300 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {dictionary.common?.buttons?.close || 'Back to Home'}
            </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 bg-card/70 backdrop-blur-md rounded-full px-6 py-3 shadow-lg mb-6">
              <Shield className="w-6 h-6 text-[rgb(var(--color-primary))]" />
              <span className="font-semibold text-card-foreground">{t.badge || 'Privacy Policy'}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-[rgb(var(--color-text))] mb-4">
              {t.title || 'Privacy Policy'}
            </h1>
            
            <p className="text-xl text-[rgb(var(--color-text-secondary))] leading-relaxed">
              {t.subtitle || 'Information about how we handle your data'}
            </p>
            
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 text-[rgb(var(--color-secondary))]" />
                <span className="text-sm text-[rgb(var(--color-text-secondary))]">{t.lastUpdated || 'Updated regularly'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 pb-20">
          <div className="max-w-4xl">
            <div className="bg-card/80 backdrop-blur-md rounded-3xl shadow-2xl border border-[rgb(var(--color-primary))]/20 p-8 md:p-12">
              
              {/* Section 1: Data Controller */}
              <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[rgb(var(--color-text))]">{t.controller?.title || 'Data Controller'}</h2>
                </div>
                
                <div className="bg-[rgb(var(--color-primary))]/5 rounded-2xl p-6 border border-[rgb(var(--color-primary))]/20">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-[rgb(var(--color-primary))] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[rgb(var(--color-text))]">{t.controller?.name || 'Nathalie Jean'}</p>
                        <p className="text-[rgb(var(--color-text-secondary))] text-sm">{t.controller?.description || 'Certified Shiatsu Practitioner'}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[rgb(var(--color-secondary))] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[rgb(var(--color-text))]">{t.controller?.contact?.email || 'Email'}</p>
                        <p className="text-[rgb(var(--color-text-secondary))] text-sm">nathalie.jean@shiatsu-guyane.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[rgb(var(--color-tertiary))] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[rgb(var(--color-text))]">{t.controller?.contact?.phone || 'Phone'}</p>
                        <p className="text-[rgb(var(--color-text-secondary))] text-sm">+594 (0) 6 94 00 70 97</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: Data Collection */}
              <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))] rounded-xl flex items-center justify-center">
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[rgb(var(--color-text))]">{t.dataCollection?.title || 'Data Collection'}</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-[rgb(var(--color-secondary))]/5 rounded-2xl p-6 border border-[rgb(var(--color-secondary))]/20">
                    <h3 className="text-lg font-semibold text-[rgb(var(--color-text))] mb-4">{t.dataCollection?.personalData?.title || 'Personal Data'}</h3>
                    <ul className="space-y-2 text-[rgb(var(--color-text-secondary))]">
                      {(t.dataCollection?.personalData?.types || []).map((type: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-[rgb(var(--color-secondary))] rounded-full mt-2 flex-shrink-0"></span>
                          {type}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-[rgb(var(--color-tertiary))]/5 rounded-2xl p-6 border border-[rgb(var(--color-tertiary))]/20">
                    <h3 className="text-lg font-semibold text-[rgb(var(--color-text))] mb-4">{t.dataCollection?.automaticData?.title || 'Automatic Data'}</h3>
                    <ul className="space-y-2 text-[rgb(var(--color-text-secondary))]">
                      {(t.dataCollection?.automaticData?.types || []).map((type: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-[rgb(var(--color-tertiary))] rounded-full mt-2 flex-shrink-0"></span>
                          {type}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 3: Legal Basis */}
              <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-primary))] rounded-xl flex items-center justify-center">
                    <Lock className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[rgb(var(--color-text))]">{t.legalBasis?.title || 'Legal Basis'}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {(t.legalBasis?.purposes || []).map((purpose: { purpose: string; basis: string; description: string }, index: number) => (
                    <div key={index} className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-[rgb(var(--color-primary))]/10">
                      <h3 className="text-lg font-semibold text-[rgb(var(--color-text))] mb-3">{purpose.purpose}</h3>
                      <p className="text-[rgb(var(--color-text-secondary))] text-sm mb-2"><strong>{t.legalBasis?.basisLabel || 'Legal Basis'}:</strong> {purpose.basis}</p>
                      <p className="text-[rgb(var(--color-text-secondary))] text-sm">{purpose.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4: Your Rights */}
              <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-tertiary))] rounded-xl flex items-center justify-center">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[rgb(var(--color-text))]">{t.yourRights?.title || 'Your Rights'}</h2>
                </div>
                
                <div className="bg-gradient-to-br from-[rgb(var(--color-primary))]/5 to-[rgb(var(--color-secondary))]/5 rounded-2xl p-8 border border-[rgb(var(--color-primary))]/20">
                  <p className="text-[rgb(var(--color-text-secondary))] mb-6">{t.yourRights?.description || 'You have the following rights regarding your personal data.'}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {(t.yourRights?.rights || []).map((right: { name: string; description: string }, index: number) => (
                      <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <h3 className="font-semibold text-[rgb(var(--color-text))] mb-2">{right.name}</h3>
                        <p className="text-[rgb(var(--color-text-secondary))] text-sm">{right.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-white/30">
                    <p className="text-[rgb(var(--color-text-secondary))] text-sm">
                      <strong>{t.yourRights?.contact?.title || 'Contact us'}:</strong> {t.yourRights?.contact?.description || 'To exercise your rights, please contact us.'}
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: Data Security */}
              <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-[rgb(var(--color-secondary))] to-[rgb(var(--color-primary))] rounded-xl flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[rgb(var(--color-text))]">{t.dataSecurity?.title || 'Data Security'}</h2>
                </div>
                
                <div className="bg-[rgb(var(--color-secondary))]/5 rounded-2xl p-6 border border-[rgb(var(--color-secondary))]/20">
                  <p className="text-[rgb(var(--color-text-secondary))] mb-4">{t.dataSecurity?.description || 'We implement appropriate security measures to protect your data.'}</p>
                  
                  <ul className="space-y-3">
                    {(t.dataSecurity?.measures || []).map((measure: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-[rgb(var(--color-secondary))] to-[rgb(var(--color-primary))] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Shield className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-[rgb(var(--color-text-secondary))]">{measure}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Section 6: Cookies */}
              <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-secondary))] rounded-xl flex items-center justify-center">
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[rgb(var(--color-text))]">{t.cookies?.title || 'Cookies Policy'}</h2>
                </div>
                
                <div className="bg-[rgb(var(--color-tertiary))]/5 rounded-2xl p-6 border border-[rgb(var(--color-tertiary))]/20">
                  <p className="text-[rgb(var(--color-text-secondary))] mb-4">{t.cookies?.description || 'This site uses cookies to improve your browsing experience.'}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {(t.cookies?.types || []).map((cookie: { name: string; description: string; duration: string }, index: number) => (
                      <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <h3 className="font-semibold text-[rgb(var(--color-text))] mb-2">{cookie.name}</h3>
                        <p className="text-[rgb(var(--color-text-secondary))] text-sm mb-2">{cookie.description}</p>
                        <p className="text-xs text-[rgb(var(--color-text-secondary))] opacity-75">
                          <strong>{t.cookies?.duration || 'Duration'}:</strong> {cookie.duration}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 7: Contact */}
              <section className="bg-gradient-to-br from-[rgb(var(--color-primary))]/8 to-[rgb(var(--color-secondary))]/8 rounded-2xl p-8 border border-[rgb(var(--color-primary))]/20">
                <h2 className="text-2xl font-bold text-[rgb(var(--color-text))] mb-6">{t.contact?.title || 'Contact Us'}</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[rgb(var(--color-secondary))] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[rgb(var(--color-text))]">{t.contact?.email || 'Email'}</p>
                        <p className="text-[rgb(var(--color-text-secondary))] text-sm">nathalie.jean@shiatsu-guyane.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[rgb(var(--color-tertiary))] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[rgb(var(--color-text))]">{t.contact?.phone || 'Phone'}</p>
                        <p className="text-[rgb(var(--color-text-secondary))] text-sm">+594 (0) 6 94 00 70 97</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <h3 className="font-semibold text-[rgb(var(--color-text))] mb-2">{t.contact?.cnil?.title || 'Data Protection Authority'}</h3>
                    <p className="text-[rgb(var(--color-text-secondary))] text-sm mb-2">{t.contact?.cnil?.description || 'You can also file a complaint with the data protection authority.'}</p>
                    <p className="text-[rgb(var(--color-text-secondary))] text-sm">
                      <strong>CNIL:</strong> 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}