import 'server-only';

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
} from '@react-email/components';
import * as React from 'react';

interface ClientConfirmationEmailProps {
  firstname: string;
  language: string;
}

const translations = {
  fr: {
    preview: "Confirmation de votre message - Shiatsu Guyane",
    badge: "Message reçu",
    greeting: (name: string) => `Bonjour ${name},`,
    title: "Votre message a bien été reçu",
    confirmation: "Nous avons bien reçu votre message et nous vous remercions de nous avoir contactés.",
    response: "Nous vous répondrons dans les plus brefs délais, généralement sous 24 heures.",
    nextSteps: "Prochaines étapes",
    step1: "Nous examinerons votre demande avec attention",
    step2: "Nous vous contacterons pour convenir d'un rendez-vous",
    step3: "Nous répondrons à toutes vos questions sur le Shiatsu",
    benefits: "En attendant, découvrez",
    benefit1: "Les bienfaits du Shiatsu thérapeutique",
    benefit2: "Nos approches personnalisées",
    benefit3: "L'expérience de nos clients",
    contact: "Contact direct",
    phone: "+594 XX XX XX XX",
    email: "contact@shiatsu-guyane.com",
    signature: "Avec bienveillance,",
    practitioner: "Nathalie JEAN",
    title2: "Praticienne Shiatsu Certifiée",
    footer: "Shiatsu Guyane • Thérapie manuelle et bien-être"
  },
  en: {
    preview: "Message confirmation - Shiatsu Guyane",
    badge: "Message received",
    greeting: (name: string) => `Hello ${name},`,
    title: "Your message has been received",
    confirmation: "We have received your message and thank you for contacting us.",
    response: "We will respond as soon as possible, usually within 24 hours.",
    nextSteps: "Next steps",
    step1: "We will carefully review your request",
    step2: "We will contact you to arrange an appointment",
    step3: "We will answer all your questions about Shiatsu",
    benefits: "Meanwhile, discover",
    benefit1: "The benefits of therapeutic Shiatsu",
    benefit2: "Our personalized approaches",
    benefit3: "Our clients' experiences",
    contact: "Direct contact",
    phone: "+594 XX XX XX XX",
    email: "contact@shiatsu-guyane.com",
    signature: "With care,",
    practitioner: "Nathalie JEAN",
    title2: "Certified Shiatsu Practitioner",
    footer: "Shiatsu Guyane • Manual therapy and wellness"
  },
  es: {
    preview: "Confirmación de mensaje - Shiatsu Guyane",
    badge: "Mensaje recibido",
    greeting: (name: string) => `Hola ${name},`,
    title: "Hemos recibido tu mensaje",
    confirmation: "Hemos recibido tu mensaje y te agradecemos por contactarnos.",
    response: "Te responderemos lo antes posible, generalmente en 24 horas.",
    nextSteps: "Próximos pasos",
    step1: "Revisaremos tu solicitud con atención",
    step2: "Te contactaremos para coordinar una cita",
    step3: "Responderemos todas tus preguntas sobre Shiatsu",
    benefits: "Mientras tanto, descubre",
    benefit1: "Los beneficios del Shiatsu terapéutico",
    benefit2: "Nuestros enfoques personalizados",
    benefit3: "La experiencia de nuestros clientes",
    contact: "Contacto directo",
    phone: "+594 XX XX XX XX",
    email: "contact@shiatsu-guyane.com",
    signature: "Con cuidado,",
    practitioner: "Nathalie JEAN",
    title2: "Practicante Shiatsu Certificada",
    footer: "Shiatsu Guyane • Terapia manual y bienestar"
  },
  "pt-BR": {
    preview: "Confirmação de mensagem - Shiatsu Guyane",
    badge: "Mensagem recebida",
    greeting: (name: string) => `Olá ${name},`,
    title: "Sua mensagem foi recebida",
    confirmation: "Recebemos sua mensagem e agradecemos por entrar em contato conosco.",
    response: "Responderemos o mais breve possível, geralmente em 24 horas.",
    nextSteps: "Próximos passos",
    step1: "Analisaremos sua solicitação com atenção",
    step2: "Entraremos em contato para marcar uma consulta",
    step3: "Responderemos todas suas perguntas sobre Shiatsu",
    benefits: "Enquanto isso, descubra",
    benefit1: "Os benefícios do Shiatsu terapêutico",
    benefit2: "Nossas abordagens personalizadas",
    benefit3: "A experiência de nossos clientes",
    contact: "Contato direto",
    phone: "+594 XX XX XX XX",
    email: "contact@shiatsu-guyane.com",
    signature: "Com cuidado,",
    practitioner: "Nathalie JEAN",
    title2: "Praticante Shiatsu Certificada",
    footer: "Shiatsu Guyane • Terapia manual e bem-estar"
  },
  "zh-cn": {
    preview: "信息确认 - Shiatsu Guyane",
    badge: "信息已收到",
    greeting: (name: string) => `您好 ${name}，`,
    title: "我们已收到您的信息",
    confirmation: "我们已收到您的信息，感谢您与我们联系。",
    response: "我们将尽快回复，通常在24小时内。",
    nextSteps: "下一步",
    step1: "我们将仔细审查您的请求",
    step2: "我们将联系您安排预约",
    step3: "我们将回答您关于指压的所有问题",
    benefits: "与此同时，了解",
    benefit1: "治疗性指压的好处",
    benefit2: "我们的个性化方法",
    benefit3: "我们客户的体验",
    contact: "直接联系",
    phone: "+594 XX XX XX XX",
    email: "contact@shiatsu-guyane.com",
    signature: "关怀地，",
    practitioner: "Nathalie JEAN",
    title2: "认证指压治疗师",
    footer: "Shiatsu Guyane • 手法治疗与健康"
  },
  hmn: {
    preview: "Xov xwm paub meej - Shiatsu Guyane",
    badge: "Xov xwm tau txais",
    greeting: (name: string) => `Nyob zoo ${name},`,
    title: "Peb tau txais koj cov lus",
    confirmation: "Peb tau txais koj cov lus thiab ua tsaug rau koj tias tau tiv tauj peb.",
    response: "Peb yuav teb sai li sai tau, feem ntau hauv 24 teev.",
    nextSteps: "Cov kauj ruam tom ntej",
    step1: "Peb yuav saib xyuas koj qhov kev thov kom zoo",
    step2: "Peb yuav tiv tauj koj los teem caij",
    step3: "Peb yuav teb tag nrho koj cov lus nug txog Shiatsu",
    benefits: "Lub sijhawm no, kawm",
    benefit1: "Cov txiaj ntsig ntawm kev kho Shiatsu",
    benefit2: "Peb cov txheej txheem ntawm tus kheej",
    benefit3: "Peb cov neeg siv khoom txoj kev paub",
    contact: "Kev sib cuag ncaj qha",
    phone: "+594 XX XX XX XX",
    email: "contact@shiatsu-guyane.com",
    signature: "Nrog kev saib xyuas,",
    practitioner: "Nathalie JEAN",
    title2: "Tus Kws Kho Shiatsu Muaj Ntawv Pov Thawj",
    footer: "Shiatsu Guyane • Kev kho tes thiab kev noj qab haus huv"
  }
};

export const ClientConfirmationEmail = ({
  firstname,
  language = 'fr'
}: ClientConfirmationEmailProps) => {
  const t = translations[language as keyof typeof translations] || translations.fr;

  return (
    <Html>
      <Head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        `}</style>
      </Head>
      <Preview>{t.preview}</Preview>
      <Body style={main}>
        {/* Zen floating background elements */}
        <div style={floatingBackground}>
          <div style={{...floatingCircle, top: '15%', left: '8%', backgroundColor: 'rgba(244, 196, 48, 0.06)'}}></div>
          <div style={{...floatingCircle, top: '45%', right: '12%', backgroundColor: 'rgba(226, 114, 91, 0.04)', width: '300px', height: '300px'}}></div>
          <div style={{...floatingCircle, bottom: '20%', left: '15%', backgroundColor: 'rgba(122, 132, 113, 0.05)', width: '180px', height: '180px'}}></div>
        </div>

        <Container style={container}>
          {/* Zen Badge Header */}
          <Section style={badgeSection}>
            <div style={badge}>
              <div style={badgeIcon}>✓</div>
              <Text style={badgeText}>{t.badge}</Text>
            </div>
          </Section>

          {/* Main Content Card */}
          <Section style={mainCard}>
            {/* Practitioner Header */}
            <Section style={practitionerHeader}>
              <div style={practitionerIconContainer}>
                <span style={practitionerIcon}>🌸</span>
              </div>
              <div>
                <Heading style={practitionerName}>Shiatsu Guyane</Heading>
                <Text style={practitionerTitle}>Nathalie JEAN • {t.title2}</Text>
              </div>
            </Section>

            <Hr style={gradientSeparator} />

            {/* Greeting */}
            <Text style={greeting}>{t.greeting(firstname)}</Text>
            
            {/* Main Message */}
            <Heading style={h2}>{t.title}</Heading>
            <Text style={bodyText}>{t.confirmation}</Text>
            <Text style={bodyText}>{t.response}</Text>

            {/* Next Steps Card */}
            <Section style={stepsCard}>
              <Heading style={cardHeading}>{t.nextSteps}</Heading>
              <div style={stepsList}>
                <div style={stepItem}>
                  <div style={stepIcon}>1</div>
                  <Text style={stepText}>{t.step1}</Text>
                </div>
                <div style={stepItem}>
                  <div style={stepIcon}>2</div>
                  <Text style={stepText}>{t.step2}</Text>
                </div>
                <div style={stepItem}>
                  <div style={stepIcon}>3</div>
                  <Text style={stepText}>{t.step3}</Text>
                </div>
              </div>
            </Section>

            {/* Benefits Card */}
            <Section style={benefitsCard}>
              <Heading style={cardHeading}>{t.benefits}</Heading>
              <div style={benefitsList}>
                <Text style={benefitItem}>• {t.benefit1}</Text>
                <Text style={benefitItem}>• {t.benefit2}</Text>
                <Text style={benefitItem}>• {t.benefit3}</Text>
              </div>
            </Section>

            {/* Contact Card */}
            <Section style={contactCard}>
              <Heading style={cardHeading}>{t.contact}</Heading>
              <div style={contactGrid}>
                <div style={contactItem}>
                  <div style={contactIconContainer}>📞</div>
                  <Text style={contactText}>{t.phone}</Text>
                </div>
                <div style={contactItem}>
                  <div style={contactIconContainer}>✉️</div>
                  <Text style={contactText}>{t.email}</Text>
                </div>
              </div>
            </Section>

            {/* Signature */}
            <Section style={signatureSection}>
              <Text style={signatureText}>{t.signature}</Text>
              <Text style={signatureName}>{t.practitioner}</Text>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <div style={footerBadge}>
              <Text style={footerText}>{t.footer}</Text>
            </div>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Zen Aesthetic Styles - Matching Website Design
const main = {
  backgroundColor: '#F8F5F0', // --background: 39 32% 96%
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  position: 'relative' as const,
  minHeight: '100vh',
  padding: '0',
  margin: '0',
};

const floatingBackground = {
  position: 'fixed' as const,
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  pointerEvents: 'none' as const,
  zIndex: '-1',
};

const floatingCircle = {
  position: 'absolute' as const,
  width: '240px',
  height: '240px',
  borderRadius: '50%',
  filter: 'blur(40px)',
  opacity: '0.6',
};

const container = {
  maxWidth: '680px',
  margin: '0 auto',
  padding: '40px 20px',
  position: 'relative' as const,
};

const badgeSection = {
  textAlign: 'center' as const,
  marginBottom: '32px',
};

const badge = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  background: 'linear-gradient(90deg, rgba(244, 196, 48, 0.1) 0%, rgba(226, 114, 91, 0.08) 100%)',
  padding: '12px 24px',
  borderRadius: '9999px',
  border: '1px solid rgba(244, 196, 48, 0.2)',
  backdropFilter: 'blur(8px)',
};

const badgeIcon = {
  width: '20px',
  height: '20px',
  background: 'linear-gradient(135deg, rgb(244, 196, 48) 0%, rgb(226, 114, 91) 100%)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '12px',
  fontWeight: 'bold',
  color: 'white',
};

const badgeText = {
  fontSize: '14px',
  fontWeight: '600',
  color: 'rgb(44, 44, 44)', // --color-text
  margin: '0',
};

const mainCard = {
  background: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(12px)',
  borderRadius: '24px',
  padding: '40px',
  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  border: '1px solid rgba(244, 196, 48, 0.1)',
};

const practitionerHeader = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  marginBottom: '32px',
};

const practitionerIconContainer = {
  width: '56px',
  height: '56px',
  background: 'linear-gradient(135deg, rgb(244, 196, 48) 0%, rgb(226, 114, 91) 100%)',
  borderRadius: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
};

const practitionerIcon = {
  fontSize: '24px',
};

const practitionerName = {
  fontSize: '24px',
  fontWeight: '700',
  color: 'rgb(44, 44, 44)',
  margin: '0 0 4px 0',
  letterSpacing: '-0.01em',
};

const practitionerTitle = {
  fontSize: '14px',
  color: 'rgb(107, 114, 128)', // --color-text-secondary
  margin: '0',
  fontWeight: '500',
};

const gradientSeparator = {
  height: '4px',
  background: 'linear-gradient(90deg, rgb(244, 196, 48) 0%, rgb(226, 114, 91) 50%, rgb(122, 132, 113) 100%)',
  border: 'none',
  borderRadius: '2px',
  margin: '32px 0',
  opacity: '0.3',
};

const greeting = {
  fontSize: '18px',
  color: 'rgb(44, 44, 44)',
  margin: '0 0 24px 0',
  fontWeight: '400',
  lineHeight: '1.6',
};

const h2 = {
  fontSize: '28px',
  fontWeight: '700',
  color: 'rgb(44, 44, 44)',
  margin: '0 0 20px 0',
  letterSpacing: '-0.02em',
  lineHeight: '1.2',
};

const bodyText = {
  fontSize: '16px',
  color: 'rgb(107, 114, 128)',
  lineHeight: '1.6',
  margin: '0 0 16px 0',
};

const stepsCard = {
  background: 'rgba(244, 196, 48, 0.05)',
  borderRadius: '16px',
  padding: '24px',
  margin: '32px 0',
  border: '1px solid rgba(244, 196, 48, 0.15)',
};

const benefitsCard = {
  background: 'rgba(122, 132, 113, 0.05)',
  borderRadius: '16px',
  padding: '24px',
  margin: '32px 0',
  border: '1px solid rgba(122, 132, 113, 0.15)',
};

const contactCard = {
  background: 'rgba(226, 114, 91, 0.05)',
  borderRadius: '16px',
  padding: '24px',
  margin: '32px 0',
  border: '1px solid rgba(226, 114, 91, 0.15)',
};

const cardHeading = {
  fontSize: '18px',
  fontWeight: '600',
  color: 'rgb(44, 44, 44)',
  margin: '0 0 16px 0',
};

const stepsList = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '16px',
};

const stepItem = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '12px',
};

const stepIcon = {
  width: '24px',
  height: '24px',
  background: 'linear-gradient(135deg, rgb(244, 196, 48) 0%, rgb(226, 114, 91) 100%)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '12px',
  fontWeight: 'bold',
  color: 'white',
  flexShrink: '0',
};

const stepText = {
  fontSize: '15px',
  color: 'rgb(107, 114, 128)',
  margin: '0',
  lineHeight: '1.5',
};

const benefitsList = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '8px',
};

const benefitItem = {
  fontSize: '15px',
  color: 'rgb(107, 114, 128)',
  margin: '0',
  lineHeight: '1.5',
  paddingLeft: '8px',
};

const contactGrid = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '16px',
};

const contactItem = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
};

const contactIconContainer = {
  width: '32px',
  height: '32px',
  background: 'linear-gradient(135deg, rgb(226, 114, 91) 0%, rgb(122, 132, 113) 100%)',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '16px',
};

const contactText = {
  fontSize: '15px',
  color: 'rgb(107, 114, 128)',
  margin: '0',
  fontWeight: '500',
};

const signatureSection = {
  marginTop: '40px',
  paddingTop: '32px',
  borderTop: '1px solid rgba(107, 114, 128, 0.2)',
};

const signatureText = {
  fontSize: '16px',
  color: 'rgb(107, 114, 128)',
  margin: '0 0 8px 0',
  fontStyle: 'italic',
};

const signatureName = {
  fontSize: '20px',
  fontWeight: '700',
  color: 'rgb(44, 44, 44)',
  margin: '0',
};

const footer = {
  textAlign: 'center' as const,
  marginTop: '40px',
};

const footerBadge = {
  display: 'inline-block',
  background: 'linear-gradient(90deg, rgba(122, 132, 113, 0.1) 0%, rgba(244, 196, 48, 0.1) 100%)',
  padding: '12px 24px',
  borderRadius: '9999px',
  border: '1px solid rgba(122, 132, 113, 0.2)',
};

const footerText = {
  fontSize: '13px',
  color: 'rgb(107, 114, 128)',
  margin: '0',
  fontWeight: '500',
};

export default ClientConfirmationEmail;