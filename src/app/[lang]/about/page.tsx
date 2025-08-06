import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/lib/i18n-config';
import { CtaSection } from '@/components/sections/CtaSection';
import { Timeline } from '@/components/ui/timeline';
import Image from 'next/image';
import { User, Heart, Star, Award, Calendar, Sparkles, BookOpen, Users, Target, ArrowDown } from 'lucide-react';

export default async function AboutPage(props: { params: { lang: Locale } }) {
  const { lang } = props.params;
  const dictionary = await getDictionary(lang);
  const t = dictionary.aboutPage;

  // Enhanced timeline data with better content structure
  const timelineData = t.timeline.events.map((event: any, index: number) => ({
    title: event.year,
    content: (
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 ${
            index % 3 === 0 ? 'bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]' :
            index % 3 === 1 ? 'bg-gradient-to-br from-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))]' :
            'bg-gradient-to-br from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-primary))]'
          }`}>
            {index % 3 === 0 ? <Award className="w-6 h-6 text-white" /> :
             index % 3 === 1 ? <Star className="w-6 h-6 text-white" /> :
             <Sparkles className="w-6 h-6 text-white" />}
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-2xl text-card-foreground mb-3 tracking-tight">{event.title}</h3>
            <p className="text-[rgb(var(--color-text-secondary))] text-lg leading-relaxed">{event.description}</p>
          </div>
        </div>
        
        {event.highlight && (
          <div className="bg-card/40 backdrop-blur-sm rounded-2xl p-4 border-l-4 border-[rgb(var(--color-primary))]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-lg flex items-center justify-center">
                <Award className="w-4 h-4 text-white" />
              </div>
              <span className="text-[rgb(var(--color-primary))] font-semibold">{event.highlight}</span>
            </div>
          </div>
        )}
        
        {event.achievements && (
          <div className="grid sm:grid-cols-2 gap-3 mt-4">
            {event.achievements.map((achievement: string, i: number) => (
              <div key={i} className="flex items-center gap-2 text-sm text-[rgb(var(--color-text-secondary))]">
                <div className="w-1.5 h-1.5 bg-[rgb(var(--color-primary))] rounded-full"></div>
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
      {/* Enhanced background elements matching website aesthetic */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[rgb(var(--color-primary))]/6 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[rgb(var(--color-secondary))]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-[rgb(var(--color-tertiary))]/3 to-[rgb(var(--color-primary))]/2 rounded-full blur-3xl"></div>
      </div>

      {/* Enhanced Page Header matching your other pages */}
      <section className="min-h-screen justify-center flex flex-col items-center py-20 md:py-32 relative bg-secondary/30 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-surface))]/40 to-transparent"></div>
        <div className="container mx-auto px-6 pt-32 pb-24 text-center relative z-10">
          {/* Hero badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card/80 backdrop-blur-md rounded-full mb-8 hover:bg-card/90 transition-all duration-300 shadow-lg hover:shadow-xl">
            <User className="w-5 h-5 text-[rgb(var(--color-secondary))]" />
            <span className="text-sm font-semibold text-card-foreground tracking-wide">Mon Parcours</span>
          </div>
          
          {/* Main title with gradient matching your style */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 max-w-5xl mx-auto">
            <span className="bg-gradient-to-r from-[rgb(var(--color-secondary))] via-[rgb(var(--color-primary))] to-[rgb(var(--color-tertiary))] bg-clip-text text-transparent">
              {t.title}
            </span>
          </h1>
          
          {/* Enhanced subtitle */}
          <p className="text-xl text-[rgb(var(--color-text-secondary))] max-w-4xl mx-auto leading-relaxed mb-12">
            {t.subtitle}
          </p>
          
          {/* Visual separator with animation */}
          <div className="w-32 h-1 bg-gradient-to-r from-[rgb(var(--color-secondary))] via-[rgb(var(--color-primary))] to-[rgb(var(--color-tertiary))] rounded-full mx-auto mb-8"></div>

          {/* Professional credentials with glassmorphism */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-3 bg-card/60 backdrop-blur-md px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-card/70">
              <Award className="w-4 h-4 text-[rgb(var(--color-primary))]" />
              <span className="text-card-foreground font-medium">Instructeur Certifié Ohashiatsu®</span>
            </div>
            <div className="flex items-center gap-3 bg-card/60 backdrop-blur-md px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-card/70">
              <Star className="w-4 h-4 text-[rgb(var(--color-secondary))]" />
              <span className="text-card-foreground font-medium">18+ années d'expérience</span>
            </div>
            <div className="flex items-center gap-3 bg-card/60 backdrop-blur-md px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-card/70">
              <Sparkles className="w-4 h-4 text-[rgb(var(--color-tertiary))]" />
              <span className="text-card-foreground font-medium">Sophrologue Certifiée RNCP</span>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="inline-flex items-center gap-2 text-[rgb(var(--color-text-secondary))] animate-bounce mt-12">
            <span className="text-sm font-medium">Découvrez mon histoire</span>
            <ArrowDown className="w-4 h-4" />
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-20 lg:py-32 space-y-32 relative z-10">

        {/* Enhanced Personal Introduction Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced image presentation with glassmorphism */}
          <div className="relative group order-2 lg:order-1">
            {/* Layered decorative backgrounds */}
            <div className="absolute -inset-8 bg-gradient-to-br from-[rgb(var(--color-secondary))]/15 to-[rgb(var(--color-primary))]/10 rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform duration-700 blur-sm"></div>
            <div className="absolute -inset-4 bg-gradient-to-br from-[rgb(var(--color-tertiary))]/10 to-[rgb(var(--color-secondary))]/8 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-500"></div>
            
            {/* Main image container with enhanced glassmorphism */}
            <div className="relative bg-card/70 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 transform group-hover:scale-[1.02] border border-[rgb(var(--color-primary))]/10">
              <Image
                src="/images/practitioner-photo.jpg"
                alt="Photo de Nathalie Jean"
                width={600}
                height={700}
                className="object-cover w-full h-full"
              />
              
              {/* Enhanced overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-secondary))]/20 via-transparent to-transparent"></div>
              
              {/* Professional credentials overlay with glassmorphism */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-card/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-[rgb(var(--color-primary))]/20">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[rgb(var(--color-secondary))] to-[rgb(var(--color-primary))] rounded-xl flex items-center justify-center shadow-lg">
                      <Heart className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-card-foreground">Nathalie Jean</p>
                      <p className="text-sm text-[rgb(var(--color-text-secondary))]">Praticienne Shiatsu Certifiée</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced content section */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(var(--color-secondary))]/10 to-[rgb(var(--color-tertiary))]/10 backdrop-blur-sm px-5 py-2 rounded-full text-[rgb(var(--color-secondary))] font-semibold text-sm shadow-lg">
              <BookOpen className="w-4 h-4" />
              Mon Histoire
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight">{t.intro.heading}</h2>
            
            <div className="space-y-6">
              <p className="text-lg text-[rgb(var(--color-text-secondary))] leading-relaxed">{t.intro.p1}</p>
              <p className="text-lg text-[rgb(var(--color-text-secondary))] leading-relaxed">{t.intro.p2}</p>
            </div>

            {/* Enhanced personal values with glassmorphism */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              <div className="flex items-center gap-4 p-6 bg-card/60 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-card/70 border border-[rgb(var(--color-primary))]/10">
                <div className="w-12 h-12 bg-gradient-to-br from-[rgb(var(--color-secondary))] to-[rgb(var(--color-primary))] rounded-xl flex items-center justify-center shadow-lg">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-card-foreground">Bienveillance</p>
                  <p className="text-sm text-[rgb(var(--color-text-secondary))]">Écoute et respect profonds</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-6 bg-card/60 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-card/70 border border-[rgb(var(--color-primary))]/10">
                <div className="w-12 h-12 bg-gradient-to-br from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-secondary))] rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-card-foreground">Excellence</p>
                  <p className="text-sm text-[rgb(var(--color-text-secondary))]">Formation continue</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Timeline Section */}
        <section className="pt-20">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(var(--color-tertiary))]/10 to-[rgb(var(--color-primary))]/10 backdrop-blur-sm px-5 py-2 rounded-full text-[rgb(var(--color-tertiary))] font-semibold text-sm mb-8 shadow-lg">
              <Calendar className="w-4 h-4" />
              Parcours Professionnel
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">{t.timeline.heading}</h2>
            <p className="text-lg text-[rgb(var(--color-text-secondary))] max-w-3xl mx-auto leading-relaxed">
              Découvrez les étapes clés qui ont façonné mon expertise et ma passion pour le Shiatsu.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-[rgb(var(--color-tertiary))] via-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-full mx-auto mt-8"></div>
          </div>
          
          <Timeline data={timelineData} />
        </section>

        {/* Enhanced Mission Statement Section */}
        <section className="text-center py-20">
          <div className="bg-card/70 backdrop-blur-xl rounded-3xl p-12 lg:p-16 shadow-2xl hover:shadow-3xl transition-all duration-700 max-w-5xl mx-auto relative overflow-hidden border border-[rgb(var(--color-primary))]/10 group">
            {/* Enhanced background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-primary))]/8 via-[rgb(var(--color-secondary))]/5 to-transparent rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            
            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[rgb(var(--color-primary))]/10 to-transparent rounded-tr-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[rgb(var(--color-tertiary))]/8 to-transparent rounded-bl-3xl"></div>
            
            <div className="relative z-10">
              <div className="w-24 h-24 bg-gradient-to-br from-[rgb(var(--color-secondary))] to-[rgb(var(--color-primary))] rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <Heart className="w-12 h-12 text-white" />
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-card-foreground mb-8 tracking-tight">Ma Mission</h3>
              <blockquote className="text-xl lg:text-2xl text-[rgb(var(--color-text-secondary))] leading-relaxed mb-10 italic max-w-4xl mx-auto">
                "Accompagner chaque personne vers un mieux-être durable en harmonisant corps, esprit et énergie vitale. 
                Le Shiatsu n'est pas seulement une technique, c'est un art de vivre qui transforme profondément."
              </blockquote>
              
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[rgb(var(--color-primary))]"></div>
                <div className="text-[rgb(var(--color-primary))] font-bold text-lg">— Nathalie Jean —</div>
                <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[rgb(var(--color-primary))]"></div>
              </div>

              {/* Enhanced philosophy points */}
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-lg text-card-foreground">Approche Humaine</h4>
                  <p className="text-[rgb(var(--color-text-secondary))] text-sm">Chaque personne est unique et mérite une attention personnalisée</p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))] rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-lg text-card-foreground">Résultats Durables</h4>
                  <p className="text-[rgb(var(--color-text-secondary))] text-sm">Des solutions qui s'inscrivent dans la durée pour un bien-être optimal</p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-primary))] rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-lg text-card-foreground">Innovation Continue</h4>
                  <p className="text-[rgb(var(--color-text-secondary))] text-sm">Intégration des dernières techniques pour une efficacité maximale</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Certifications & Achievements Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(var(--color-primary))]/10 to-[rgb(var(--color-secondary))]/10 backdrop-blur-sm px-5 py-2 rounded-full text-[rgb(var(--color-primary))] font-semibold text-sm mb-8 shadow-lg">
              <Award className="w-4 h-4" />
              Certifications & Reconnaissances
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">Excellence Reconnue</h2>
            <p className="text-lg text-[rgb(var(--color-text-secondary))] max-w-3xl mx-auto leading-relaxed">
              Des certifications et formations qui garantissent la qualité de mes soins
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Actual certifications based on provided documents */}
            {[
              {
                icon: <Award className="w-6 h-6 text-white" />,
                title: "Shiatsu Professionnel",
                organization: "École André Nahum",
                year: "2006",
                gradient: "from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]",
                details: "Formation complète - Aromathérapie & Shiatsu"
              },
              {
                icon: <Star className="w-6 h-6 text-white" />,
                title: "Advanced Ohashiatsu® Program",
                organization: "The Ohashi Institute",
                year: "2008",
                gradient: "from-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))]",
                details: "Certification internationale avancée"
              },
              {
                icon: <Users className="w-6 h-6 text-white" />,
                title: "Instructeur Certifié Ohashiatsu®",
                organization: "The Ohashi Institute",
                year: "2012",
                gradient: "from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-primary))]",
                details: "Habilitation à l'enseignement"
              },
              {
                icon: <Sparkles className="w-6 h-6 text-white" />,
                title: "Seiki Shiatsu",
                organization: "Seiki Meridian Shiatsu International",
                year: "2022-2024",
                gradient: "from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]",
                details: "83h avec Maître Tzvika Calisar"
              },
              {
                icon: <Heart className="w-6 h-6 text-white" />,
                title: "Sophrologue Certifiée",
                organization: "Académie de Sophrologie de Paris",
                year: "2023",
                gradient: "from-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))]",
                details: "RNCP Niveau 5 - Code NSF 330p"
              },
              {
                icon: <Target className="w-6 h-6 text-white" />,
                title: "Formations Spécialisées",
                organization: "Formation Continue",
                year: "2022-2024",
                gradient: "from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-primary))]",
                details: "Kata & traitements spécifiques"
              }
            ].map((cert, index) => (
              <div key={index} className="bg-card/60 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-[1.02] group border border-[rgb(var(--color-primary))]/10">
                <div className={`w-16 h-16 bg-gradient-to-br ${cert.gradient} rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {cert.icon}
                </div>
                
                <h3 className="font-bold text-xl text-card-foreground mb-2">{cert.title}</h3>
                <p className="text-[rgb(var(--color-text-secondary))] mb-1 text-sm">{cert.organization}</p>
                <p className="text-[rgb(var(--color-primary))] font-semibold mb-2">{cert.year}</p>
                <p className="text-[rgb(var(--color-text-secondary))] text-xs">{cert.details}</p>
                
                {/* Decorative accent */}
                <div className={`w-full h-1 bg-gradient-to-r ${cert.gradient} rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
            ))}
          </div>
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