import { getDictionary } from '@/lib/dictionary';
import { i18n, Locale } from '@/lib/i18n-config';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({
    lang: locale,
  }));
}
import { CtaSection } from '@/components/sections/CtaSection';
import { Timeline } from '@/components/ui/timeline';
import Image from 'next/image';
import { User, Heart, Star, Award, Calendar, Sparkles, BookOpen, Users, Target, ArrowDown } from 'lucide-react';
import CertificationGallery from '@/components/CertificationGallery';

export default async function AboutPage(props: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);
  const t = dictionary.aboutPage;

  // Enhanced timeline data with better content structure
  const timelineData = t.timeline.events.map((event: { year: string; title: string; description: string; highlight?: string; achievements?: string[] }, index: number) => ({
    title: event.year,
    content: (
      <div className="space-y-4 sm:space-y-6">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 ${
            index % 3 === 0 ? 'bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]' :
            index % 3 === 1 ? 'bg-gradient-to-br from-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))]' :
            'bg-gradient-to-br from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-primary))]'
          }`}>
            {index % 3 === 0 ? <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> :
             index % 3 === 1 ? <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> :
             <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />}
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-card-foreground mb-2 sm:mb-3 tracking-tight">{event.title}</h3>
            <p className="text-[rgb(var(--color-text-secondary))] text-sm sm:text-base md:text-lg leading-relaxed">{event.description}</p>
          </div>
        </div>
        
        {event.highlight && (
          <div className="bg-card/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border-l-4 border-[rgb(var(--color-primary))]">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-md sm:rounded-lg flex items-center justify-center">
                <Award className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
              <span className="text-[rgb(var(--color-primary))] font-semibold text-sm sm:text-base">{event.highlight}</span>
            </div>
          </div>
        )}
        
        {event.achievements && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mt-3 sm:mt-4">
            {event.achievements.map((achievement: string, i: number) => (
              <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[rgb(var(--color-text-secondary))]">
                <div className="w-1.5 h-1.5 bg-[rgb(var(--color-primary))] rounded-full flex-shrink-0"></div>
                <span>{achievement}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    ),
  }));

  return (
    <div className="bg-background text-foreground relative overflow-hidden min-h-screen">
      {/* Mobile-optimized background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/6 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-[rgb(var(--color-primary))]/6 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/6 w-40 sm:w-56 md:w-72 lg:w-80 h-40 sm:h-56 md:h-72 lg:h-80 bg-[rgb(var(--color-secondary))]/5 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 md:w-[500px] lg:w-[700px] h-80 sm:h-96 md:h-[500px] lg:h-[700px] bg-gradient-to-r from-[rgb(var(--color-tertiary))]/3 to-[rgb(var(--color-primary))]/2 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      {/* Mobile-Enhanced Page Header */}
      <section className="min-h-screen justify-center flex flex-col items-center py-12 sm:py-16 md:py-20 lg:py-32 relative bg-secondary/30 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-surface))]/40 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 text-center relative z-10">
          {/* Mobile-optimized hero badge */}
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-card/80 backdrop-blur-md rounded-full mb-6 sm:mb-8 hover:bg-card/90 transition-all duration-300 shadow-lg hover:shadow-xl">
            <User className="w-4 h-4 sm:w-5 sm:h-5 text-[rgb(var(--color-secondary))]" />
            <span className="text-xs sm:text-sm font-semibold text-card-foreground tracking-wide">{t.hardcodedStrings.badges.myJourney}</span>
          </div>
          
          {/* Mobile-responsive main title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 sm:mb-8 max-w-5xl mx-auto px-2">
            <span className="bg-gradient-to-r from-[rgb(var(--color-secondary))] via-[rgb(var(--color-primary))] to-[rgb(var(--color-tertiary))] bg-clip-text text-transparent">
              {t.title}
            </span>
          </h1>
          
          {/* Mobile-optimized subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[rgb(var(--color-text-secondary))] max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
            {t.subtitle}
          </p>
          
          {/* Mobile-friendly visual separator */}
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[rgb(var(--color-secondary))] via-[rgb(var(--color-primary))] to-[rgb(var(--color-tertiary))] rounded-full mx-auto mb-6 sm:mb-8"></div>

          {/* Mobile-stacked professional credentials */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm px-4">
            <div className="flex items-center gap-2 sm:gap-3 bg-card/60 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-card/70">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 text-[rgb(var(--color-primary))] flex-shrink-0" />
              <span className="text-card-foreground font-medium">{t.hardcodedStrings.credentials.ohashiatsuInstructor}</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 bg-card/60 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-card/70">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-[rgb(var(--color-secondary))] flex-shrink-0" />
              <span className="text-card-foreground font-medium">{t.hardcodedStrings.credentials.experience}</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 bg-card/60 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-card/70">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[rgb(var(--color-tertiary))] flex-shrink-0" />
              <span className="text-card-foreground font-medium">{t.hardcodedStrings.credentials.certifiedSophrologist}</span>
            </div>
          </div>
          
          {/* Mobile scroll indicator */}
          <div className="inline-flex items-center gap-2 text-[rgb(var(--color-text-secondary))] animate-bounce mt-8 sm:mt-12">
            <span className="text-xs sm:text-sm font-medium">{t.hardcodedStrings.navigation.discoverMyStory}</span>
            <ArrowDown className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-32 space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32 relative z-10">

        {/* Mobile-Enhanced Personal Introduction Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Mobile-optimized image presentation */}
          <div className="relative group order-2 lg:order-1">
            {/* Layered decorative backgrounds - smaller on mobile */}
            <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 bg-gradient-to-br from-[rgb(var(--color-secondary))]/15 to-[rgb(var(--color-primary))]/10 rounded-2xl sm:rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform duration-700 blur-sm"></div>
            <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-br from-[rgb(var(--color-tertiary))]/10 to-[rgb(var(--color-secondary))]/8 rounded-xl sm:rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-500"></div>
            
            {/* Mobile-optimized main image container */}
            <div className="relative bg-card/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-700 transform group-hover:scale-[1.02] border border-[rgb(var(--color-primary))]/10">
              <Image
                src="/images/practitioner-photo.jpg"
                alt="Photo de Nathalie Jean"
                width={600}
                height={700}
                className="object-cover w-full h-full"
              />
              
              {/* Enhanced overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-secondary))]/20 via-transparent to-transparent"></div>
              
              {/* Mobile-optimized credentials overlay */}
              <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 right-3 sm:right-4 md:right-6">
                <div className="bg-card/90 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-xl sm:shadow-2xl border border-[rgb(var(--color-primary))]/20">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-[rgb(var(--color-secondary))] to-[rgb(var(--color-primary))] rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                      <Heart className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-sm sm:text-base md:text-lg text-card-foreground">Nathalie Jean</p>
                      <p className="text-xs sm:text-sm text-[rgb(var(--color-text-secondary))]">{t.hardcodedStrings.credentials.practitionerTitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-enhanced content section */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(var(--color-secondary))]/10 to-[rgb(var(--color-tertiary))]/10 backdrop-blur-sm px-3 sm:px-4 md:px-5 py-2 rounded-full text-[rgb(var(--color-secondary))] font-semibold text-xs sm:text-sm shadow-lg">
              <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
              {t.hardcodedStrings.badges.myStory}
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">{t.intro.heading}</h2>
            
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base md:text-lg text-[rgb(var(--color-text-secondary))] leading-relaxed">{t.intro.p1}</p>
              <p className="text-sm sm:text-base md:text-lg text-[rgb(var(--color-text-secondary))] leading-relaxed">{t.intro.p2}</p>
            </div>

            {/* Mobile-stacked personal values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-10">
              <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 bg-card/60 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-card/70 border border-[rgb(var(--color-primary))]/10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[rgb(var(--color-secondary))] to-[rgb(var(--color-primary))] rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-base sm:text-lg text-card-foreground">{t.hardcodedStrings.values.kindness}</p>
                  <p className="text-xs sm:text-sm text-[rgb(var(--color-text-secondary))]">{t.hardcodedStrings.values.kindnessDesc}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 bg-card/60 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-card/70 border border-[rgb(var(--color-primary))]/10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-secondary))] rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-base sm:text-lg text-card-foreground">{t.hardcodedStrings.values.excellence}</p>
                  <p className="text-xs sm:text-sm text-[rgb(var(--color-text-secondary))]">{t.hardcodedStrings.values.excellenceDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile-Enhanced Timeline Section */}
        <section className="pt-12 sm:pt-16 md:pt-20">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(var(--color-tertiary))]/10 to-[rgb(var(--color-primary))]/10 backdrop-blur-sm px-3 sm:px-4 md:px-5 py-2 rounded-full text-[rgb(var(--color-tertiary))] font-semibold text-xs sm:text-sm mb-6 sm:mb-8 shadow-lg">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
              {t.hardcodedStrings.badges.professionalPath}
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 tracking-tight px-4">{t.timeline.heading}</h2>
            <p className="text-sm sm:text-base md:text-lg text-[rgb(var(--color-text-secondary))] max-w-3xl mx-auto leading-relaxed px-4">
              {t.hardcodedStrings.navigation.discoverSteps}
            </p>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[rgb(var(--color-tertiary))] via-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-full mx-auto mt-6 sm:mt-8"></div>
          </div>
          
          <Timeline data={timelineData} />
        </section>

        {/* Mobile-Enhanced Mission Statement Section */}
        <section className="text-center py-12 sm:py-16 md:py-20">
          <div className="bg-card/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 shadow-xl sm:shadow-2xl hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-700 max-w-5xl mx-auto relative overflow-hidden border border-[rgb(var(--color-primary))]/10 group">
            {/* Enhanced background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-primary))]/8 via-[rgb(var(--color-secondary))]/5 to-transparent rounded-2xl sm:rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            
            {/* Mobile-optimized decorative elements */}
            <div className="absolute top-0 right-0 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-gradient-to-bl from-[rgb(var(--color-primary))]/10 to-transparent rounded-tr-2xl sm:rounded-tr-3xl"></div>
            <div className="absolute bottom-0 left-0 w-20 sm:w-28 md:w-40 h-20 sm:h-28 md:h-40 bg-gradient-to-tr from-[rgb(var(--color-tertiary))]/8 to-transparent rounded-bl-2xl sm:rounded-bl-3xl"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-[rgb(var(--color-secondary))] to-[rgb(var(--color-primary))] rounded-2xl sm:rounded-3xl mx-auto mb-6 sm:mb-8 flex items-center justify-center shadow-xl sm:shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
              </div>
              
              <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-card-foreground mb-6 sm:mb-8 tracking-tight">{t.hardcodedStrings.mission.title}</h3>
              <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl text-[rgb(var(--color-text-secondary))] leading-relaxed mb-8 sm:mb-10 italic max-w-4xl mx-auto px-4">
                &ldquo;{t.hardcodedStrings.mission.quote}&rdquo;
              </blockquote>
              
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent to-[rgb(var(--color-primary))]"></div>
                <div className="text-[rgb(var(--color-primary))] font-bold text-sm sm:text-base md:text-lg">— Nathalie Jean —</div>
                <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-l from-transparent to-[rgb(var(--color-primary))]"></div>
              </div>

              {/* Mobile-stacked philosophy points */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
                <div className="text-center space-y-3 sm:space-y-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-xl sm:rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                    <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-base sm:text-lg text-card-foreground">{t.hardcodedStrings.values.humanApproach}</h4>
                  <p className="text-[rgb(var(--color-text-secondary))] text-xs sm:text-sm">{t.hardcodedStrings.values.humanApproachDesc}</p>
                </div>

                <div className="text-center space-y-3 sm:space-y-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))] rounded-xl sm:rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                    <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-base sm:text-lg text-card-foreground">{t.hardcodedStrings.values.durableResults}</h4>
                  <p className="text-[rgb(var(--color-text-secondary))] text-xs sm:text-sm">{t.hardcodedStrings.values.durableResultsDesc}</p>
                </div>

                <div className="text-center space-y-3 sm:space-y-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-primary))] rounded-xl sm:rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                    <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-base sm:text-lg text-card-foreground">{t.hardcodedStrings.values.continuousInnovation}</h4>
                  <p className="text-[rgb(var(--color-text-secondary))] text-xs sm:text-sm">{t.hardcodedStrings.values.continuousInnovationDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ENHANCED Certifications Section with Images */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(var(--color-primary))]/10 to-[rgb(var(--color-secondary))]/10 backdrop-blur-sm px-3 sm:px-4 md:px-5 py-2 rounded-full text-[rgb(var(--color-primary))] font-semibold text-xs sm:text-sm mb-6 sm:mb-8 shadow-lg">
              <Award className="w-3 h-3 sm:w-4 sm:h-4" />
              {t.hardcodedStrings.badges.recognitions}
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 tracking-tight px-4">{t.hardcodedStrings.certifications.sectionTitle}</h2>
            <p className="text-sm sm:text-base md:text-lg text-[rgb(var(--color-text-secondary))] max-w-3xl mx-auto leading-relaxed px-4">
              {t.hardcodedStrings.certifications.sectionDesc}
            </p>
          </div>

          <CertificationGallery dictionary={dictionary} />
        </section>

      </main>

      {/* Enhanced CTA Section */}
      <section className="relative bg-gradient-to-br from-secondary/20 via-[rgb(var(--color-surface))]/30 to-secondary/20 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--color-primary))]/3 via-transparent to-[rgb(var(--color-tertiary))]/3"></div>
        <div className="relative z-10">
          <CtaSection dictionary={dictionary} lang={lang} />
        </div>
      </section>
    </div>
  );
}